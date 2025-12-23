# DATA_WITHDRAWAL_AND_ERASURE_POLICY.md
**Data Subject Rights, Withdrawal & Erasure Governance Framework**

---

## 1. Purpose

This document defines the **Data Withdrawal and Erasure Policy** for the NeuroGrid ecosystem.

Its purpose is to ensure that:

- Data subjects can exercise lawful rights of withdrawal and erasure
- Clinical safety, scientific integrity, and regulatory obligations are preserved
- Erasure actions are executed in a controlled, auditable manner
- Conflicts between deletion rights and clinical record obligations are properly resolved

Data erasure is a **regulated process**, not a blanket deletion.

---

## 2. Scope

This policy applies to:

- Patient-generated RPM data
- Clinical annotations and clinician-entered data
- AI training, validation, and inference datasets
- Derived features, embeddings, and aggregates
- Registry-linked metadata and provenance records

Both on-chain references and off-chain data assets are in scope.

---

## 3. Governing Principle

> **The right to erasure must coexist with the duty to protect patients and preserve clinical truth.**

Withdrawal does not equate to historical falsification.

---

## 4. Legal & Regulatory Basis

This policy is informed by:

- GDPR Article 17 (Right to Erasure)
- LGPD data subject rights
- HIPAA record retention requirements
- Medical record preservation laws
- EU AI Act data governance obligations

Jurisdiction-specific requirements take precedence where applicable.

---

## 5. Data Withdrawal vs. Data Erasure

### Data Withdrawal
- Revocation of consent for future data collection or use
- No new data is ingested post-withdrawal
- Existing data may be retained under lawful bases

### Data Erasure
- Removal or irreversible anonymization of data
- Subject to legal, clinical, and safety constraints
- May be partial, delayed, or substituted with anonymization

All requests must be classified correctly.

---

## 6. Eligible Erasure Categories

Data may be eligible for erasure when:

- Consent is withdrawn and no overriding legal basis exists
- Data is no longer necessary for its stated purpose
- Data was unlawfully collected or processed
- Retention exceeds declared limits

Eligibility is assessed on a case-by-case basis.

---

## 7. Non-Erasable Data Classes

The following may **not** be erased:

- Legally required clinical records
- Safety incident and adverse event records
- Audit, compliance, and inspection artifacts
- Model decision logs required for accountability
- Provenance and lineage metadata

Such data may be restricted or anonymized instead.

---

## 8. Erasure Methods

Approved erasure mechanisms include:

- Secure deletion of raw data
- Cryptographic erasure
- Irreversible anonymization
- Key destruction rendering data unreadable

Logical deletion without destruction is insufficient.

---

## 9. AI & Model Training Implications

When erasure affects AI datasets:

- Affected datasets are flagged
- Model retraining or impact assessment may be required
- Model outputs already generated are preserved for audit
- Future training excludes erased data

Retroactive model behavior alteration is not permitted.

---

## 10. On-Chain / Off-Chain Handling

- Raw data is erased or anonymized off-chain
- On-chain hashes and references remain immutable
- Registry entries are updated to reflect erasure status

On-chain records serve as historical attestations, not data containers.

---

## 11. Request Handling Workflow

1. Request receipt and identity verification
2. Legal and clinical eligibility assessment
3. Scope determination
4. Execution of erasure or restriction
5. Registry and audit log update
6. Confirmation to requester (where permitted)

All steps must be documented.

---

## 12. Timeframes

- Requests must be acknowledged promptly
- Execution timelines follow jurisdictional law
- Extensions must be justified and recorded

Delays without justification are non-compliant.

---

## 13. Audit & Recordkeeping

All withdrawal and erasure actions must be:

- Logged immutably
- Linked to request identifiers
- Retained for regulatory audit
- Reviewable by authorized parties

Erasure actions themselves are never erased.

---

## 14. Prohibited Practices

The following are forbidden:

- Silent or undocumented deletion
- Erasing safety or audit records
- Misrepresenting erasure completion
- Using erasure to conceal errors or harm
- Retroactively modifying historical outcomes

Violations constitute a compliance breach.

---

## 15. Regulatory Alignment

This policy aligns with:

- GDPR & LGPD erasure and accountability provisions
- HIPAA record retention rules
- EU AI Act data governance requirements
- ISO/IEC 27701 (privacy information management)
- Clinical data retention standards

---

## 16. Ethical Position

> **Forgetting must never become falsification.  
> Privacy must never erase responsibility.**

Erasure protects people, not narratives.

---

### Status
**Active – Mandatory Privacy & Compliance Policy**

