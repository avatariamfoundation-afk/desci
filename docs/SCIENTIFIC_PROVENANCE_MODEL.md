## SCIENTIFIC_PROVENANCE_MODEL.md

Deterministic Provenance & Reproducibility Framework
Project: NeuroGrid / Aethera BioSync
Layer: DeSci (Decentralized Science)
Network: BNB Chain (Hackathon) → Multi-Chain (Post-Hackathon)

---

## 1. Purpose

This document defines the Scientific Provenance Model used by NeuroGrid to ensure that every scientific artifact, inference result, and research output is:

Verifiable

Reproducible

Deterministic

Attribution-safe

Tamper-resistant

The provenance model provides the trust backbone for decentralized science within the NeuroGrid ecosystem.

---

## 2. Definition of Scientific Provenance

Scientific provenance is defined as the complete, immutable lineage of a research artifact from:

Input data

Through computation and inference

To publication, review, and incentive allocation

In NeuroGrid, provenance is cryptographically enforced, not socially assumed.

---

## 3. Core Provenance Guarantees

The system guarantees:

Origin Authenticity
Every artifact has a cryptographically verifiable creator.

Execution Integrity
All computational steps are reproducible under identical conditions.

Temporal Ordering
Artifact lineage is strictly ordered and timestamped.

Immutability
Provenance records cannot be altered after emission.

Auditability
Any third party can independently verify the full chain of custody.

---

## 4. Provenance Object Model

Each scientific artifact is associated with a Provenance Record composed of the following immutable fields:

### 4.1 Required Fields

artifact_id – Unique deterministic identifier

artifact_hash – Content hash of the artifact

creator_address – Wallet address of the originator

creation_timestamp – Block timestamp at registration

model_id – Deterministic identifier of the AI model used

model_version – Exact model version hash

input_dataset_hash – Hash of all input data references

execution_environment_hash – Runtime + dependency fingerprint

telemetry_root – Root hash of deterministic telemetry events

### 4.2 Optional (But Supported) Fields

review_set_hash – Aggregated peer review attestations

reproducibility_receipt – Replay verification reference

funding_signal_id – Reference to incentive routing

cross_chain_anchor – External chain verification pointer

---

## 5. Provenance Lifecycle
# Step 1: Artifact Emission

Artifacts are emitted by MedIntel after deterministic inference.

# Step 2: Core Registration

Artifacts are registered in NeuroGrid-Core with provenance anchors.

# Step 3: DeSci Indexing

DeSci indexes the artifact for collaboration and review.

# Step 4: Peer Review & Attestation

Reviewers submit signed attestations referencing the artifact hash.

# Step 5: Incentive Signaling

Validated artifacts emit incentive signals back to Core governance.

---

## 6. Deterministic Reproducibility

Reproducibility is enforced via deterministic replay guarantees.

To reproduce an artifact, the following must match exactly:

Model version hash

Input dataset hash

Execution environment hash

Deterministic inference configuration

Telemetry sequence root

If any value differs, the reproduction must fail deterministically.

---

## 7. Identity & Attribution

All provenance actions are bound to cryptographic identities.

Wallet-based identities are mandatory

All actions are signed

No anonymous provenance mutations are allowed

This ensures:

Proper credit assignment

Accountability

Non-repudiation

---

## 8. Fault Awareness & Provenance Integrity

The provenance model is fault-aware.

If a deterministic fault occurs:

The artifact remains immutable

A fault code is attached to provenance metadata

Downstream systems are alerted

Faults do not erase history; they annotate it.

---

## 9. Cross-Chain Provenance Compatibility

Provenance records are designed to be chain-agnostic.

Supported patterns:

Hash anchoring on secondary chains

Merkle root replication

External verification receipts

This allows:

BNB ↔ Ethereum validation

Long-term archival resilience

Public verifiability beyond a single network

---

## 10. Governance & Dispute Resolution

Provenance data feeds governance but is not governed.

Governance may act on provenance

Governance may not alter provenance

Disputes are handled via:

Competing attestations

Deterministic replay

Transparent review history

---

## 11. Security Assumptions

The provenance model assumes:

Cryptographic primitives are secure

Hash functions are collision-resistant

Wallet private keys are user-controlled

Execution environments are fingerprintable

No assumption is made about:

Reviewer honesty

Network benevolence

Centralized moderation

---

## 12. Hackathon Relevance

This model demonstrates:

Real decentralized science

Verifiable AI outputs

Transparent collaboration

Production-grade rigor

It moves DeSci beyond theory into auditable execution.

---

## 13. Post-Hackathon Extension

Future extensions (non-blocking):

Zero-knowledge provenance proofs

Encrypted dataset attestations

Institutional credential linking

Journal-grade publication exports

These are intentionally excluded from the hackathon scope.

---

## 14. Provenance Model Lock

This document defines the authoritative provenance model for the DeSci layer.

Any artifact without a valid provenance record is considered non-scientific within NeuroGrid.
