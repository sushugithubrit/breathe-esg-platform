# TRADEOFFS.md

## Tradeoffs and Scope Decisions

### Dynamic CSV Ingestion vs Fixed Schema

Chosen:
Dynamic CSV ingestion.

Not Chosen:
Strict predefined schemas.

Reason:
Enterprise datasets vary significantly across organizations. Dynamic ingestion provides greater flexibility.

---

### CSV Upload vs Direct SAP Integration

Chosen:
CSV upload.

Not Chosen:
Direct SAP OData, BAPI, or IDoc integration.

Reason:
CSV exports are a common enterprise workflow and allow rapid prototyping without requiring access to SAP environments.

---

### Dashboard Analytics vs Advanced Workflow Engine

Chosen:
Analytics dashboard and suspicious record review.

Not Chosen:
Full approval workflow with multi-stage reviews.

Reason:
The primary objective was to demonstrate ingestion, normalization, and analytics capabilities within limited development time.

---

### Simplicity vs Enterprise Complexity

Chosen:
Lightweight architecture focused on usability.

Not Chosen:
Multi-tenant architecture, role-based access control, and audit trail locking.

Reason:
These features increase system complexity significantly and were considered future enhancements.

---

### Structured CSV Data vs PDF Parsing

Chosen:
Structured CSV ingestion.

Not Chosen:
PDF bill extraction and OCR processing.

Reason:
CSV provides reliable structured data while PDF extraction introduces additional parsing and accuracy challenges.

---

## Future Enhancements

- SAP API integration
- PDF bill ingestion
- Multi-tenancy
- User authentication
- Audit trail management
- Approval workflows
- Source lineage tracking
