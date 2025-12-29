# AI_MODEL_VERSIONING_AND_ROLLBACK_POLICY.md

## 1. Purpose
This policy defines mandatory requirements for versioning, traceability, and rollback of AI/ML models to ensure safety, auditability, regulatory compliance, and rapid recovery from errors, regressions, or adverse impacts.

## 2. Scope
This policy applies to:
- All AI/ML models, pipelines, prompts, and configurations used in research, clinical decision support, governance, and production systems.
- All stages of the model lifecycle: development, training, validation, deployment, monitoring, update, and retirement.
- All personnel, DAO committees, contractors, and external collaborators managing or interacting with models.

## 3. Versioning Principles
Model versioning shall be:
- **Deterministic**: Every deployed artifact must map to a unique, immutable version.
- **Traceable**: Each version must be linked to data, code, parameters, and approvals.
- **Auditable**: Historical versions must be preserved and reviewable.
- **Reversible**: Safe rollback must be possible at any time.
- **Controlled**: Version changes require authorization proportional to risk.

## 4. Versioning Requirements

### 4.1 Version Identification
Each model version must include:
- Unique version ID (semantic or hash-based).
- Model name and architecture identifier.
- Training data snapshot ID(s).
- Feature schema and preprocessing version.
- Hyperparameters and configuration checksum.
- Dependency and runtime environment versions.
- Date, author, and approving authority.

### 4.2 Artifact Coverage
Versioning must apply to:
- Model weights and binaries.
- Training and inference code.
- Prompts, templates, and system instructions (where applicable).
- Preprocessing and postprocessing logic.
- Evaluation metrics and benchmark results.

### 4.3 Immutability
- Deployed versions must be immutable.
- Any modification requires creation of a new version.
- Hotfixes are prohibited without version increment and approval.

## 5. Approval and Promotion

### 5.1 Risk-Based Approval
| Risk Level | Approval Requirement |
|-----------|----------------------|
| Low | Technical lead sign-off |
| Medium | Responsible AI Officer (RAIO) |
| High | RAIO + Domain Lead |
| Critical | RAIO + Domain Lead + DAO Oversight Committee |

### 5.2 Promotion Stages
- Development → Validation → Staging → Production
- Promotion requires documented test results and sign-off at each stage.

## 6. Rollback Policy

### 6.1 Rollback Triggers
Rollback must be initiated upon:
- Safety, clinical, or governance risk detection.
- Performance regression beyond accepted thresholds.
- Data drift or integrity failure.
- Regulatory, audit, or oversight directive.
- Incident response escalation.

### 6.2 Rollback Execution
- Rollback must restore a previously approved, stable version.
- Execution must be automated where possible and human-authorized for high/critical risk systems.
- Rollback actions must not cause data loss or audit trail corruption.

### 6.3 Rollback Authority
- System Operators: initiate rollback for low/medium risk.
- RAIO: authorize rollback for high risk.
- DAO Emergency Committee: mandate rollback for critical systems.

## 7. Logging and Auditability
- All version changes, promotions, and rollbacks must be logged.
- Logs must include rationale, authorizing party, timestamps, and impacted systems.
- Logs must be immutable and retained per governance record retention policies.

## 8. Compatibility and Data Integrity
- Version compatibility with downstream systems must be validated prior to deployment.
- Rollbacks must ensure schema and interface compatibility or trigger controlled service degradation.

## 9. Prohibited Practices
- Overwriting deployed model artifacts.
- Deploying unversioned or partially versioned models.
- Silent rollbacks without logging or authorization.
- Deleting historical versions without retention approval.

## 10. Training and Access Control
- Only authorized personnel may create, promote, or rollback versions.
- Training on versioning, rollback procedures, and incident handling is mandatory.

## 11. Enforcement
- Non-compliance may result in system suspension, access revocation, DAO sanctions, or contractual penalties.
- Repeated violations require external audit review.

## 12. Review and Updates
This policy shall be reviewed annually or upon:
- Introduction of new high-risk models
- Significant incidents or rollbacks
- Regulatory or governance changes

**Status:** Binding  
**Owner:** Responsible AI Officer / DAO Oversight Committee  
**Version:** 1.0

