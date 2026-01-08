# REPRODUCIBILITY_STANDARD.md  
**Phase:** DeSci Enhancement and Structural Hardening  
**Applies To:** All Scientific Artifacts, Pipelines, and Claims  
**Last Updated:** 2026-01-07  

---

## 1. Purpose

This document defines the **mandatory reproducibility standard** for all scientific outputs within the DeSci system.

Reproducibility is treated as a **first-class protocol invariant**, not a best-effort guideline.  
Any scientific claim that cannot be independently reproduced is explicitly marked as such and handled accordingly.

---

## 2. Core Principle

> **A scientific claim without reproducibility metadata is incomplete, not invalid — but it is never authoritative.**

The system preserves:
- Claims
- Failures
- Disagreements
- Partial reproductions

Nothing is hidden or deleted.

---

## 3. Definitions

### 3.1 Reproducibility

The ability for an independent actor to:
- Re-execute the original method
- Using the provided artifacts
- Under equivalent conditions
- And obtain results within defined tolerance bounds

---

### 3.2 Replication vs Reproducibility

| Term | Meaning |
|----|--------|
| Reproducibility | Same data + same method |
| Replication | New data + same hypothesis |

Both are supported, tracked, and scored independently.

---

## 4. Mandatory Reproducibility Artifacts

Every scientific submission **MUST** declare the presence or absence of the following artifacts:

### 4.1 Required Declarations (Even if Empty)

- Data availability statement
- Method specification
- Execution environment description
- Dependency list
- Randomness disclosure

Absence must be explicit.

---

### 4.2 Artifact Classes

| Artifact | Requirement |
|------|-------------|
| Dataset | Hash-addressed or declared unavailable |
| Code | Versioned, hash-locked |
| Parameters | Fully enumerated |
| Environment | Container spec or equivalent |
| Seeds | Explicit or declared non-deterministic |

---

## 5. Determinism Requirements

### 5.1 Deterministic Execution Class

A submission is **Deterministic** if:
- Fixed inputs
- Fixed seeds
- Fixed environment
- Bitwise-identical outputs possible

### 5.2 Bounded Non-Determinism

Allowed only if:
- Sources are declared
- Bounds are quantified
- Confidence intervals are provided

### 5.3 Unbounded Non-Determinism

Permitted, but:
- Must be labeled
- Cannot achieve high confidence scores
- Cannot be used as authoritative evidence

---

## 6. Reproducibility Levels

Each artifact is assigned a **Reproducibility Level (RL)**.

| Level | Description |
|----|------------|
| RL0 | No reproducibility information |
| RL1 | Method described, artifacts missing |
| RL2 | Partial artifacts, incomplete environment |
| RL3 | Full artifacts, bounded variance |
| RL4 | Fully deterministic, independently verified |

Levels are **computed**, not self-declared.

---

## 7. Independent Verification

### 7.1 Verifier Roles

- Replicators
- Reviewers
- Automated agents (non-authoritative)

### 7.2 Verification Outcomes

| Outcome | Effect |
|------|-------|
| Match | Confidence increase |
| Partial Match | Conditional confidence |
| Mismatch | Confidence decrease |
| Inconclusive | No penalty |

All outcomes are preserved.

---

## 8. Reproducibility Graph

Reproducibility is modeled as a **directed graph**:

- Nodes: Scientific artifacts
- Edges: Reproduction attempts
- Weights: Success, variance, trust

This graph is immutable and forkable.

---

## 9. Failure Is a Valid Result

### 9.1 Failed Reproduction

A failed attempt:
- Is not penalized
- Increases system knowledge
- May reduce original confidence score

### 9.2 Suppression Is Forbidden

No actor may:
- Hide failures
- Remove negative results
- Downrank conflicting reproductions

---

## 10. Economic Implications

### 10.1 Incentives

- Higher reproducibility → higher rewards
- Independent verifiers rewarded
- Repeated irreproducibility reduces future rewards

### 10.2 Slashing Conditions

Triggered only if:
- Fraudulent artifacts are proven
- Intentional misrepresentation is established

Irreproducibility alone is **not slashing-worthy**.

---

## 11. Interface Requirements

All UIs MUST display:
- Reproducibility Level
- Number of reproduction attempts
- Variance metrics
- Failure history

No claim may be viewed without its reproducibility context.

---

## 12. AI-Specific Reproducibility Rules

### 12.1 Model Provenance

Required:
- Model version hash
- Training data reference (or disclosure)
- Inference parameters

### 12.2 Stochastic Models

Must:
- Declare stochasticity
- Provide statistical reproducibility bounds
- Publish multiple-run summaries

---

## 13. Regulatory Compatibility

This standard is:
- Jurisdiction-neutral
- Audit-friendly
- Compatible with academic and industrial norms

Regulatory overlays may reference but not override it.

---

## 14. Minimum Demo Requirements

To be considered implemented:
- At least one RL4 artifact
- At least one failed reproduction
- UI visualization of reproducibility graph

---

## 15. Final Enforcement Rule

> **If it cannot be reproduced, it cannot be escalated.**  
> **If it can be reproduced, it can be challenged.**  
> **If it is challenged, the record remains.**

---

**End of Document**

