# MODEL.md

## Data Model Overview

The platform is designed to ingest ESG-related operational datasets from multiple enterprise sources and normalize them into a common analytics structure.

## Core Entity

### ESG Record

Each uploaded record contains:

- Category / Label
- Numeric Value
- Source Type
- Upload Timestamp

Example:

| Label | Value |
|---------|---------|
| Electricity | 15000 |
| Flights | 25000 |
| Procurement | 12000 |

## Normalized Structure

Different uploaded schemas are transformed into:

{
  "label": "Electricity",
  "value": 15000
}

This allows analytics generation regardless of original CSV structure.

## Source Types

The platform is designed to support:

1. SAP Procurement Data
2. Utility Consumption Data
3. Corporate Travel Data

## Suspicious Record Detection

Records with unusually high values are flagged for analyst review.

Purpose:

- Detect anomalies
- Highlight potential reporting errors
- Improve ESG reporting quality

## Future Data Model Enhancements

- Organization model
- User model
- Audit trail model
- Approval workflow model
- Source lineage tracking
- Scope 1 / Scope 2 / Scope 3 categorization
