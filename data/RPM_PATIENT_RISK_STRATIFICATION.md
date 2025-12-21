# RPM_PATIENT_RISK_STRATIFICATION.md
**Remote Patient Monitoring Risk Classification Framework**

---

## 1. Purpose

This document defines the **patient risk stratification framework** for Remote Patient Monitoring (RPM) within the NeuroGrid ecosystem.

Its purpose is to:
- Classify patients into risk tiers based on monitored signals
- Enable proportional clinical oversight
- Prevent alert fatigue and under-response
- Support regulatory-safe RPM deployment

Risk stratification is treated as a **clinical safety control**, not an optimization feature.

---

## 2. Scope

This framework applies to:
- All RPM-enabled patients
- All AI-assisted monitoring models
- All clinical alerting pipelines
- All NeuroGrid-supported RPM deployments

It operates across **MedIntel execution**, **DeSci policy governance**, and **Core auditability layers**.

---

## 3. Stratification Principles

Patient risk classification adheres to the following principles:

1. **Clinical Conservatism** – When uncertain, classify upward  
2. **Dynamic Adjustment** – Risk levels are continuously reassessed  
3. **Explainability** – Risk assignment must be interpretable  
4. **Non-Discrimination** – No demographic-only stratification  
5. **Human Override** – Clinicians may reclassify at any time  

---

## 4. Risk Stratification Tiers

### Tier 0 – Baseline Monitoring
Characteristics:
- Stable vitals within expected ranges
- No active clinical conditions requiring escalation
- No recent adverse events

Oversight:
- Passive monitoring
- Periodic review
- No automated escalation

---

### Tier 1 – Low Risk
Characteristics:
- Mild deviations from baseline
- Early indicators of potential change
- Non-critical chronic condition monitoring

Oversight:
- Automated alerts (low priority)
- Non-urgent clinical review
- No immediate intervention required

---

### Tier 2 – Moderate Risk
Characteristics:
- Repeated abnormal readings
- Worsening trend indicators
- Known clinical vulnerabilities

Oversight:
- Priority alerts enabled
- Scheduled clinician review
- Increased monitoring frequency

---

### Tier 3 – High Risk
Characteristics:
- Significant deviation from baseline
- Acute deterioration signals
- High likelihood of intervention need

Oversight:
- Immediate alert escalation
- Mandatory clinician acknowledgment
- Continuous monitoring enabled

---

### Tier 4 – Critical Risk
Characteristics:
- Life-threatening signal patterns
- Confirmed emergency indicators
- Rapid clinical destabilization

Oversight:
- Emergency escalation protocols
- Human intervention required
- Automated actions limited to notifications only

---

## 5. Risk Assignment Inputs

Risk stratification may incorporate:
- Physiological signal thresholds
- Trend analysis
- Signal volatility
- Known clinical diagnoses
- Recent adverse events
- Device reliability metrics

The following are **explicitly prohibited** as sole inputs:
- Demographic attributes
- Socioeconomic data
- Insurance or financial status
- Token holdings or governance participation

---

## 6. AI Model Constraints

AI models used for stratification must:
- Provide confidence scores
- Output interpretable risk factors
- Log decision inputs
- Support audit replay
- Allow clinician override

No model may:
- Automatically downgrade risk after escalation
- Suppress alerts without explanation
- Reclassify without traceable rationale

---

## 7. Human-in-the-Loop Controls

Clinicians may:
- Override risk tier assignments
- Lock risk tiers for defined durations
- Escalate irrespective of model output

All overrides must be:
- Logged
- Attributed
- Auditable
- Non-punitive to clinicians

---

## 8. Reassessment Frequency

| Risk Tier | Reassessment Interval |
|---------|----------------------|
| Tier 0 | Daily |
| Tier 1 | Every 6 hours |
| Tier 2 | Hourly |
| Tier 3 | Continuous |
| Tier 4 | Continuous + manual review |

---

## 9. Audit & Traceability

Each risk classification event must record:
- Patient pseudonymous ID
- Assigned tier
- Timestamp
- Contributing signals
- Model version
- Override status (if applicable)

Logs are immutable and subject to audit.

---

## 10. Safety Failure Handling

If stratification fails or becomes unavailable:
- Default classification shifts to **Tier 2**
- Alerts remain enabled
- Clinician notification is mandatory
- Incident report is generated

---

## 11. Regulatory Alignment

This framework aligns with:
- FDA RPM safety expectations
- EU MDR post-market monitoring
- ISO 14971 risk management
- IEC 62304 clinical software standards
- OECD AI risk governance principles

---

## 12. Ethical Position

> **Risk stratification exists to protect patients, not to optimize system load.**

Any design choice prioritizing efficiency over safety is invalid.

---

## 13. Binding Status

This document is:
- Mandatory across all RPM deployments
- Enforced through technical safeguards
- Subject to ethics and compliance review
- Amendable only via approved governance process

---

### Status
**Active – RPM Patient Risk Stratification Framework**

