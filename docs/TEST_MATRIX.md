## TEST_MATRIX.md    
**Phase:** DeSci Enhancement & Structural Hardening  
**Applies To:** NeuroGrid-Core · MedIntel · DeSci Layer  
**Last Updated:** 2026-01-07  

---

## 1. Purpose

This document defines the **formal test matrix** for the NeuroGrid ecosystem.  
It ensures deterministic validation of:

- Happy-path functionality  
- Permission and role enforcement  
- State guards and invariants  
- Failure handling  
- Misconduct and recovery behavior  

The goal is **predictable correctness**, not coverage theater.

---

## 2. Test Philosophy

All tests adhere to the following principles:

1. **Determinism** – Same input yields same output.
2. **Isolation** – Tests do not depend on execution order.
3. **Minimal Assumptions** – No reliance on off-chain trust.
4. **Failure Visibility** – All failures must emit signals.
5. **Reproducibility** – Tests can be replayed verbatim.

---

## 3. Test Categories

| Category | Description |
|--------|-------------|
| HP | Happy Path |
| PF | Permission Failure |
| SG | State Guard |
| FF | Failure Handling |
| MM | Misconduct & Slashing |
| RC | Recovery & Rehabilitation |
| GOV | Governance Safety |
| XCH | Cross-Module / Cross-Chain |

---

## 4. Happy Path Tests (HP)

### HP-01: Valid Artifact Submission
- **Component:** ArtifactRegistry
- **Precondition:** Authorized submitter
- **Action:** Submit valid artifact
- **Expected:** Artifact stored, event emitted
- **Pass Criteria:** Deterministic artifact hash

---

### HP-02: Compute Task Execution
- **Component:** ComputeRegistry
- **Precondition:** Registered compute node
- **Action:** Execute task
- **Expected:** Result accepted, telemetry logged
- **Pass Criteria:** Receipt emitted

---

### HP-03: Validator Attestation
- **Component:** ValidatorManager
- **Precondition:** Active validator
- **Action:** Submit attestation
- **Expected:** Attestation accepted
- **Pass Criteria:** Consensus receipt stored

---

### HP-04: Governance Proposal Execution
- **Component:** NeuroDAO / ProposalExecutor
- **Precondition:** Proposal passed quorum
- **Action:** Execute proposal
- **Expected:** State transition applied
- **Pass Criteria:** Execution event emitted

---

## 5. Permission Failure Tests (PF)

### PF-01: Unauthorized Artifact Submission
- **Actor:** Unregistered address
- **Expected:** Revert with permission error
- **Pass Criteria:** No state mutation

---

### PF-02: Unauthorized Slashing Attempt
- **Actor:** Non-governance address
- **Expected:** Revert
- **Pass Criteria:** No slashing recorded

---

### PF-03: Invalid Role Escalation
- **Actor:** Validator attempts admin action
- **Expected:** Revert
- **Pass Criteria:** Role unchanged

---

## 6. State Guard Tests (SG)

### SG-01: Invalid State Transition
- **Scenario:** Execute proposal twice
- **Expected:** Second execution fails
- **Pass Criteria:** Idempotency enforced

---

### SG-02: Artifact Re-registration
- **Scenario:** Submit duplicate artifact
- **Expected:** Reject duplicate
- **Pass Criteria:** Single canonical entry

---

### SG-03: Slashing Without Fault Code
- **Scenario:** Slashing invoked without fault code
- **Expected:** Revert
- **Pass Criteria:** Slashing requires determinism

---

## 7. Failure Handling Tests (FF)

### FF-01: Compute Timeout
- **Component:** ComputeRegistry
- **Expected:** Failure event emitted
- **Pass Criteria:** No slashing, telemetry logged

---

### FF-02: Invalid Data Payload
- **Component:** ArtifactRegistry
- **Expected:** Reject artifact
- **Pass Criteria:** Failure code emitted

---

### FF-03: Network Partition Simulation
- **Component:** ValidatorManager
- **Expected:** Temporary isolation
- **Pass Criteria:** Recovery path enabled

---

## 8. Misconduct & Slashing Tests (MM)

### MM-01: Deterministic Fraud Proof
- **Actor:** Validator
- **Action:** Submit conflicting attestations
- **Expected:** Slashing executed
- **Pass Criteria:** Slashing event + record

---

### MM-02: Repeated Negligence
- **Actor:** Compute node
- **Action:** Repeated F2 failures
- **Expected:** Reputation penalty
- **Pass Criteria:** Node downgraded

---

### MM-03: Governance Abuse Attempt
- **Actor:** Governance role
- **Action:** Unauthorized emergency call
- **Expected:** Proposal freeze
- **Pass Criteria:** Abuse recorded

---

## 9. Recovery & Rehabilitation Tests (RC)

### RC-01: Failure Recovery
- **Scenario:** Node recovers from F2 failure
- **Expected:** Node reinstated
- **Pass Criteria:** Status restored

---

### RC-02: Misconduct Rehabilitation (M1)
- **Scenario:** Minor misconduct resolved
- **Expected:** Reputation restored
- **Pass Criteria:** Governance approval logged

---

## 10. Governance Safety Tests (GOV)

### GOV-01: Quorum Enforcement
- **Scenario:** Proposal below quorum
- **Expected:** Execution blocked
- **Pass Criteria:** No state change

---

### GOV-02: Emergency Powers Constraint
- **Scenario:** Emergency call outside scope
- **Expected:** Revert
- **Pass Criteria:** Scope enforced

---

## 11. Cross-Module / Cross-Chain Tests (XCH)

### XCH-01: Telemetry Forwarding
- **Scenario:** Emit telemetry event
- **Expected:** Forward-compatible format
- **Pass Criteria:** Event consumable cross-chain

---

### XCH-02: Artifact Hash Consistency
- **Scenario:** Artifact referenced across modules
- **Expected:** Hash match
- **Pass Criteria:** No divergence

---

## 12. Automation Guidance

Recommended tooling:
- Hardhat test suites
- Deterministic fixtures
- Snapshot-based state resets
- Gas-bound assertions

Manual testing is insufficient for security-critical paths.

---

## 13. Exit Criteria

The system is considered **test-complete** when:
- All HP tests pass
- All PF and SG tests revert as expected
- All MM tests produce deterministic outcomes
- No silent failures exist

---

> **If a behavior cannot be tested deterministically, it is not production-ready.**

**End of Document**

