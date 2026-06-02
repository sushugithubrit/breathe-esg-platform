# DECISIONS.md

## Key Design Decisions

### 1. CSV-Based Ingestion

Decision:
Use CSV upload as the primary ingestion mechanism.

Reasoning:
Enterprise data is frequently exported into CSV format from ERP systems, utility portals, and travel management platforms.

Benefits:
- Simple user workflow
- Easy validation
- Fast processing
- Flexible schema support

### 2. Dynamic Schema Detection

Decision:
Automatically detect text and numeric columns rather than requiring fixed column names.

Reasoning:
Real-world datasets often have different structures.

Examples:

Dataset A:
category,value

Dataset B:
department,emissions

Dataset C:
region,revenue

The platform dynamically adapts to all of them.

### 3. Suspicious Record Detection

Decision:
Flag unusually large values for analyst review.

Reasoning:
Data quality issues are common in ESG reporting and manual review helps identify anomalies.

### 4. Dashboard-Based Review

Decision:
Provide analytics and suspicious record visibility through a dashboard.

Reasoning:
Analysts need a quick overview of uploaded data and potential issues.

### 5. REST API Architecture

Decision:
Separate frontend and backend using REST APIs.

Reasoning:
Improves maintainability, scalability, and future integration options.

## Future Decisions

Future enhancements may include:

- PDF bill ingestion
- SAP OData integration
- Authentication
- Approval workflow
- Audit logging
- Multi-tenant support
