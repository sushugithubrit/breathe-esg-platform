# SOURCES.md

## Source Research and Ingestion Strategy

The platform is designed around three common enterprise ESG data sources.

---

# 1. SAP Procurement / Fuel Data

Typical Enterprise Formats:

- Flat File Export (CSV)
- IDoc
- OData Service
- BAPI

Chosen Format:

CSV / Flat File Export

Reason:

SAP exports are frequently delivered as flat files for reporting and analytics purposes. CSV ingestion provides a practical and realistic approach for prototype development.

Expected Challenges:

- Inconsistent units
- Internal plant codes
- Different date formats
- Language-specific column names

Current Handling:

- Dynamic column detection
- Flexible schema support
- Automatic numeric field identification

---

# 2. Utility Consumption Data

Typical Enterprise Formats:

- Utility Portal CSV Export
- PDF Bills
- Utility APIs

Chosen Format:

Portal CSV Export

Reason:

CSV exports provide structured and reliable data without requiring PDF parsing or vendor-specific API integrations.

Expected Challenges:

- Different billing periods
- Unit inconsistencies
- Tariff variations
- Missing data

Current Handling:

- CSV upload workflow
- Dynamic analytics generation
- Suspicious usage detection

---

# 3. Corporate Travel Data

Typical Enterprise Platforms:

- Concur
- Navan
- TravelPerk

Chosen Format:

CSV Export

Reason:

Travel management systems commonly allow export of travel records into spreadsheet formats suitable for ESG reporting.

Expected Challenges:

- Missing distance values
- Airport code interpretation
- Mixed transport categories
- Inconsistent emission calculations

Current Handling:

- Flexible CSV ingestion
- Dynamic categorization
- Analytics and anomaly detection

---

# Summary

The platform prioritizes:

- Practical enterprise workflows
- Structured CSV ingestion
- Flexible schema handling
- Analyst visibility
- Future extensibility

Future integrations may include:

- SAP OData APIs
- Utility APIs
- Travel platform APIs
- PDF bill processing
