# RPM_COMPLIANCE_ADDENDUM.md  
**Remote Patient Monitoring (RPM) – Regulatory & Clinical Alignment Addendum**

---

## 1. Purpose

This addendum defines the **regulatory, clinical, and ethical compliance framework** for all **Remote Patient Monitoring (RPM)** activities conducted within the NeuroGrid ecosystem.

RPM is treated as a **high-impact medical function** due to its influence on post-operative outcomes, patient safety, and clinical decision-making.

---

## 2. Scope of RPM Activities

NeuroGrid RPM includes:

- Post-operative physiological monitoring
- Wearable sensor data ingestion
- Implant-adjacent signal interpretation
- AI-assisted anomaly detection
- Clinical alert generation
- Physician-reviewed escalation pathways

RPM **does not** perform autonomous medical diagnosis or treatment.

---

## 3. Regulatory Classification

| Dimension | Classification |
|---------|---------------|
| Medical Function | Clinical Decision Support |
| AI Risk Level | High-Risk (EU AI Act) |
| Device Class | FDA Class II (software + wearable) |
| Data Sensitivity | Special Category Health Data |
| Oversight Level | Human-in-the-Loop Mandatory |

---

## 4. United States Compliance (FDA / HHS)

### 4.1 FDA – Software as a Medical Device (SaMD)

NeuroGrid RPM complies with:

- FDA SaMD Framework
- FDA Good Machine Learning Practice (GMLP)
- Clinical performance validation requirements

Key Controls:
- Predefined performance boundaries
- Version-locked model releases
- Post-deployment monitoring
- Adverse event reporting

---

### 4.2 HIPAA

RPM systems must ensure:

- Encryption at rest and in transit
- Role-based access control
- Audit logging
- Breach notification procedures

No raw patient identifiers are stored on-chain.

---

## 5. European Union Compliance (EU MDR / AI Act / GDPR)

### 5.1 EU Medical Device Regulation (MDR)

RPM components qualify as:
- Medical device software
- Subject to clinical evaluation
- Post-market surveillance obligations

---

### 5.2 EU AI Act (High-Risk AI)

Mandatory controls include:

- Risk management system
- Bias detection and mitigation
- Model explainability
- Human oversight mechanisms
- Continuous performance evaluation

---

### 5.3 GDPR

Data handling principles:

- Lawful basis: Explicit consent
- Purpose limitation
- Data minimization
- Right to erasure
- Cross-border transfer safeguards (SCCs)

---

## 6. Brazil Compliance (ANVISA / LGPD)

RPM compliance aligns with:

- ANVISA medical device software guidance
- LGPD health data protections

Key Requirements:
- Data localization controls
- Explicit patient consent
- DPIA for RPM deployments

---

## 7. Clinical Governance Requirements

RPM deployment requires:

- Physician of record
- Defined escalation thresholds
- Clear alert severity taxonomy
- Fallback manual review pathways
- Clinical responsibility assignment

RPM output **cannot override** clinical judgment.

---

## 8. AI Model Governance for RPM

RPM AI models must:

- Be registry-approved
- Undergo ethics review
- Declare training data provenance
- Include performance confidence intervals
- Support clinician interpretability

Self-learning models require additional review.

---

## 9. Data Flow & Architecture Controls

- Edge processing preferred
- Federated learning supported
- On-chain storage limited to:
  - Consent proofs
  - Event hashes
  - Integrity markers

No biometric raw data is stored on blockchain.

---

## 10. Risk Management & Incident Response

RPM systems must support:

- Continuous risk scoring
- Automated anomaly logging
- Clinical incident reporting
- Regulatory notification timelines
- Model rollback capability

---

## 11. Ethics & Patient Rights

RPM must uphold:

- Informed consent
- Right to opt-out
- Transparency of AI involvement
- Human review on request
- Non-discrimination guarantees

---

## 12. Prohibited Practices

The following are forbidden:

- Fully autonomous RPM decision-making
- Hidden AI inference
- Data resale or secondary use without consent
- Clinical deployment without regulatory alignment

---

## 13. Compliance Enforcement

Non-compliance may result in:

- RPM suspension
- Registry delisting
- Funding revocation
- DAO enforcement actions
- Regulatory escalation

---

## 14. Living Addendum

This addendum is reviewed:
- Annually
- Upon regulatory change
- After major clinical incidents

---

## 15. Foundational Statement

> **Remote monitoring extends clinical reach —  
> it must never extend beyond clinical responsibility.**

---

### Status
**RPM Compliance Addendum – Active Draft**  
Aligned with NeuroGrid Ethics Charter and Regulatory Mapping Table.

