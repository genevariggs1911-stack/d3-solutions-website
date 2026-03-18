# Sub-Agent Orchestration Performance Plan — 2026-03-13

## Objective
Increase sub-agent throughput without triggering API throttles by controlling:
- when work is started
- how much work is in flight at once
- how requests are batched
- how retries behave after 429 / throttling / transient failures
- how load is shifted across time windows and providers

This plan is implementation-ready. It is designed for an orchestrator that delegates work to multiple sub-agents and external APIs with different rate limits.

---

## 1) Operating model

### Core principle
Do not let sub-agents fire requests independently without a shared budget. All outbound work should pass through a central orchestration policy layer with:
1. **priority queueing**
2. **provider-specific rate budgets**
3. **concurrency caps**
4. **micro-batching**
5. **exponential backoff with jitter**
6. **adaptive load shedding**

### Result
Instead of “N sub-agents each trying as fast as possible,” the system becomes:
- one global queue
- multiple provider queues
- fixed launch windows
- feedback-driven retries
- bounded concurrency

---

## 2) Recommended orchestration architecture

```text
Task intake
  -> global priority queue
  -> task classifier
      -> provider/API bucket assignment
      -> cost estimate (tokens / requests / expected duration)
      -> batchability decision
  -> scheduler
      -> checks rate budget + concurrency budget
      -> dispatches task or parks it
  -> worker/sub-agent execution
      -> success => commit metrics, release capacity
      -> 429/transient failure => retry queue with backoff
      -> hard failure => dead-letter / escalation
