# Recurring Insights Button

<!-- PROJECT SHIELDS -->
[![Version][version-shield]][version-url]
[![Status][status-shield]][status-url]
[![License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Recurring Insights Button</h3>

  <p align="center">
    A persistent, one-click financial intelligence layer for Claude + NetSuite MCP
    <br />
    <a href="#about-the-project"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="#getting-started">Get Started</a>
    &middot;
    <a href="#usage">View Usage Examples</a>
    &middot;
    <a href="#roadmap">Roadmap</a>
  </p>
</div>

---

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About the Project</a></li>
    <li><a href="#how-it-works">How It Works</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#setup">Setup</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#key-metrics">Key Metrics</a></li>
    <li><a href="#guardrails">Guardrails & Safety</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

---

## About the Project

The **Recurring Insights Button** is a persistent prompt library feature built on top of Claude's NetSuite MCP connector. It appears as a dedicated button to the left of the `+` in the Claude chat interface — but only when the NetSuite MCP connector is active.

**The problem it solves:**

Finance teams using Claude for ERP analysis today face a recurring friction: every session starts from scratch. Prompts must be rewritten, context must be re-established, and outputs vary in structure from period to period. This creates inefficiencies, inconsistent reporting, and zero institutional memory across time.

**The solution:**

Recurring Insights lets users save structured prompts tied to key financial workflows — monthly cash flow analysis, variance tracking, budget-to-actual reporting — and execute them with a single click. Each saved prompt automatically retrieves the appropriate NetSuite data, applies consistent time logic, and generates standardized outputs that are directly comparable across periods.

> This transforms Claude from a one-off analytical tool into a persistent system of financial intelligence — embedding repeatability and memory directly into the workflow.

---

## How It Works

```
User saves a prompt → Prompt stored with time logic + NetSuite data scope
       ↓
User clicks Recurring Insights Button → One-click execution
       ↓
Claude pulls live NetSuite data via MCP → Applies saved prompt structure
       ↓
Standardized financial output with period-over-period comparison
       ↓
Output stored with full audit trail (prompt used, data retrieved, output generated)
```

**Three structural improvements over ad hoc sessions:**

| Benefit | Description |
|---|---|
| **Speed** | One-click execution eliminates time spent re-entering or re-contextualizing prompts each session |
| **Consistency** | Standardized prompt structures produce comparable outputs across periods, enabling longitudinal tracking |
| **Institutional Memory** | Saved prompts encode the analytical logic of finance teams, reducing knowledge loss and onboarding friction |

---

## Getting Started

### Prerequisites

Before using the Recurring Insights Button, ensure the following are in place:

1. **Active Claude subscription** (Team or Enterprise plan recommended for finance workflows)
2. **NetSuite MCP connector enabled** in Claude — the Recurring Insights Button will only appear in the UI when this connector is active
3. **NetSuite Web Services API enabled** — requires a NetSuite administrator to enable in Setup → Company → Enable Features → SuiteCloud
4. **OAuth 2.0 configured** in NetSuite — role-based permissions are mirrored into Claude at connection time
5. **Active NetSuite session** — you must be logged into NetSuite in a separate browser tab for MCP authentication to persist

> ⚠️ **Note:** Initial MCP setup takes approximately 30–60 minutes for a NetSuite administrator with the correct permissions. Teams without dedicated IT support may need additional lead time.

### Setup

1. **Connect NetSuite MCP in Claude**
   - Open Claude and click the `+` button in the chat interface
   - Navigate to **Connectors → Manage Connectors**
   - Enable the **NetSuite MCP** connector and complete OAuth 2.0 authentication

2. **Verify the connection**
   - Once connected, ask Claude: *"Are you connected to my NetSuite account?"*
   - Claude will confirm available tools: Customers, Sales Orders, Inventory, Financial Reports, and Custom Queries

3. **Access the Recurring Insights Button**
   - With the NetSuite MCP connector active, the **Recurring Insights Button** will appear to the left of the `+` in the chat input bar
   - Click it to open your saved prompt library or save a new recurring insight

4. **Save your first Recurring Insight**
   - Run a financial analysis as you normally would (e.g., *"Run a cash flow analysis for the last 6 months"*)
   - When satisfied with the output structure, click **Save as Recurring Insight**
   - Name the insight (e.g., `Monthly Cash Flow — 6-Month Rolling`) and confirm

---

## Usage

### Running a saved Recurring Insight

```
1. Click the Recurring Insights Button (left of +)
2. Select a saved insight from the library
3. Click "Run" — Claude retrieves live NetSuite data and generates the output
```

### Example saved insights

```
Monthly Cash Flow Analysis — 6-Month Rolling
Variance Analysis — Budget vs. Actual (Current Month)
Period-Over-Period Revenue Comparison — QTD
Accounts Receivable Aging Summary
```

### Example output (cash flow analysis)

After running a saved cash flow insight, Claude generates:
- Total revenue summary with trend direction
- Monthly revenue bar chart with rolling trend line
- Daily cash flow (last 30 days)
- Month-over-month change chart
- Key takeaways narrative with identified drivers

> For full usage examples, see [Usage Examples](docs/usage-examples.md)

---

## Key Metrics

The Recurring Insights Button is evaluated against the following success criteria:

| Metric | Target | Description |
|---|---|---|
| **Recurring Insight Usage Rate** | ≥ 25% of active users within 6 months | Primary adoption signal — measures shift from ad hoc to workflow-embedded usage |
| **Insight Accuracy** | ≥ 92% across eval dataset | Verified against NetSuite source data via MCP |
| **Hallucination Rate** | < 2% on verifiable outputs | Numerics and period references checked programmatically |
| **Latency (P50)** | < 3 seconds | Measured from prompt submission to first output token |
| **Latency (P95)** | < 8 seconds | Monitored against the 10-second PRD requirement |
| **Estimated Cost Per Query** | $0.008–$0.022 | Based on Claude Sonnet pricing at ~3,100 tokens per standard query |

---

## Guardrails & Safety

### Access Control

All NetSuite data access is governed by the user's existing OAuth 2.0 role and permission scope. Claude mirrors these permissions at connection time — a Controller cannot surface payroll data they cannot access in NetSuite directly, and a Finance Manager cannot query entities outside their assigned business unit.

> Access control is enforced upstream at the data source, not downstream at the output stage.

### Prompt Injection Detection

Saved prompts represent a persistent attack surface. All user-submitted prompt content is scanned at save time for patterns consistent with:
- Instruction override attempts
- Data exfiltration queries
- Unauthorized scope access

Flagged prompts are blocked and surfaced to the compliance team for review.

### OAuth Scope Re-validation

Saved prompts re-validate OAuth scopes at **execution time**, not only at creation time. If a user's NetSuite permissions change after a prompt is saved (e.g., role change, promotion, entity reassignment), the prompt will execute only within the user's current authorized scope.

### Auditability

All Recurring Insight executions are stored with full traceability:
- The prompt used
- The NetSuite data retrieved
- The output generated
- Timestamp and user identity

This audit trail supports financial compliance requirements and enables root cause analysis when outputs are flagged as incorrect.

### Output Grounding

All quantitative outputs are grounded in live ERP data retrieved via MCP at query time. Any output that cannot be grounded in a live NetSuite data pull is flagged as unverified and rendered with an explicit caveat to the user.

---

## Roadmap

- [x] NetSuite MCP connector (base)
- [x] Natural language financial queries
- [x] Interactive cash flow dashboard output
- [ ] Recurring Insights Button — save and execute prompts
- [ ] Period-aware time logic (auto-increments on monthly execution)
- [ ] Prompt library management UI (rename, delete, reorder)
- [ ] Insight scheduling (auto-run on the 1st of each month)
- [ ] NetSuite BI visualization upsell integration
- [ ] Multi-entity consolidation support for complex queries
- [ ] Slack / email delivery of recurring output

See the [open issues](issues-url) for a full list of proposed features and known issues.

---

## Contributing

Contributions are welcome. If you have a suggestion that would improve this feature, please fork the repo and open a pull request, or open an issue with the tag `enhancement`.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/RecurringInsightEnhancement`)
3. Commit your changes (`git commit -m 'Add scheduling support for recurring insights'`)
4. Push to the branch (`git push origin feature/RecurringInsightEnhancement`)
5. Open a Pull Request

---

## License

Distributed under the Anthropic Enterprise License. See `LICENSE.txt` for more information.

---

## Acknowledgments

- [Anthropic Claude](https://www.anthropic.com) — underlying LLM and constitutional AI framework
- [Model Context Protocol (MCP)](https://www.anthropic.com/news/model-context-protocol) — open standard enabling secure enterprise data integration
- [Oracle NetSuite](https://docs.oracle.com/en/cloud/saas/netsuite) — ERP data source and OAuth 2.0 authentication layer
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template) — README structure

---

<!-- MARKDOWN LINKS -->
[version-shield]: https://img.shields.io/badge/version-0.1.0--beta-blue?style=for-the-badge
[version-url]: #
[status-shield]: https://img.shields.io/badge/status-experiment-orange?style=for-the-badge
[status-url]: #
[license-shield]: https://img.shields.io/badge/license-Anthropic%20Enterprise-lightgrey?style=for-the-badge
[license-url]: #
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com
