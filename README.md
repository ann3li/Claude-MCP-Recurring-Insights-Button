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
    <a href="#prototype">View Prototype</a>
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
    <li>
      <a href="#prototype">Prototype: How It Was Built</a>
      <ul>
        <li><a href="#design-goals">Design Goals</a></li>
        <li><a href="#tech-stack">Tech Stack</a></li>
        <li><a href="#file-architecture">File Architecture</a></li>
        <li><a href="#design-system">Design System</a></li>
        <li><a href="#component-the-button">Component: The Button</a></li>
        <li><a href="#component-the-dropdown">Component: The Dropdown</a></li>
        <li><a href="#component-the-dashboards">Component: The Dashboards</a></li>
        <li><a href="#interaction-flow">Interaction Flow</a></li>
        <li><a href="#design-decisions">Key Design Decisions</a></li>
      </ul>
    </li>
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

The **Recurring Insights Button** is a persistent prompt library feature built on top of Claude's NetSuite MCP connector. It appears as a dedicated button to the right of the `+` in the Claude chat interface — but only when the NetSuite MCP connector is active.

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
   - With the NetSuite MCP connector active, the **Recurring Insights Button** will appear to the right of the `+` in the chat input bar
   - Click it to open your saved prompt library or save a new recurring insight

4. **Save your first Recurring Insight**
   - Run a financial analysis as you normally would (e.g., *"Run a cash flow analysis for the last 6 months"*)
   - When satisfied with the output structure, click **Save as Recurring Insight**
   - Name the insight (e.g., `Monthly Cash Flow — 6-Month Rolling`) and confirm

---

## Usage

### Running a saved Recurring Insight

```
1. Click the Recurring Insights Button (right of +)
2. Select a saved insight from the library
3. Click "Run" — Claude retrieves live NetSuite data and generates the output
```

### Example saved insights

```
Monthly Cash Flow Analysis — 6-Month Rolling
Variance Analysis — Budget vs. Actual (Current Month)
Accounts Receivable Aging Summary
```

### Example output (cash flow analysis)

After running a saved cash flow insight, Claude generates:
- Total inflow / outflow / net cash position KPI cards
- Monthly cash flow bar chart with overlaid net cash flow trend line
- Top inflow and outflow sources tables
- Monthly net cash flow table with positive / negative status pills
- Narrative summary highlighting anomalies and key drivers
- Follow-up suggestion chips for deeper drill-downs

---

## Prototype

A clickable, interactive prototype of the Recurring Insights Button was built as a single-file HTML artifact (`recurring_insights_prototype.html`) to demonstrate the feature concept end-to-end — from the resting state in the Claude UI, through the dropdown menu, into all three fully-rendered saved insight outputs.

### Design Goals

The prototype was scoped to deliver four things:

1. **Pixel-credible Claude UI** — Match the existing Claude chat interface (sidebar, composer, typography, color palette, greeting screen) closely enough that the new button feels like a native addition rather than a mockup overlay.
2. **The button itself** — Place a visually distinct "Recurring Insights" button immediately to the right of the `+` button in the composer, with an icon, label, and a count badge indicating saved insights.
3. **Three complete saved insight outputs** — Render the full dashboard for each of the three saved prompts (monthly cash flow, budget vs. actual variance, AR aging summary) with real-looking data, KPI cards, charts, and tables.
4. **Laptop aspect ratio** — Frame the entire prototype in a 16:10 laptop viewport so the demo can be screen-recorded or screenshotted in context.

### Tech Stack

| Layer | Choice | Why |
|---|---|---|
| **Markup / Layout** | Single-file HTML | Portable; opens in any browser; no build step |
| **Styling** | Plain CSS with CSS variables | Full control over Claude's design tokens; no Tailwind dependency drift |
| **Typography** | Copernicus (serif) + Styrene A / Inter (sans) via Google Fonts | Mirrors Claude's actual font stack |
| **Charts** | Chart.js 4.4 via CDN | Lightweight, declarative, supports mixed bar + line charts |
| **Interactivity** | Vanilla JavaScript | No framework overhead; ~250 lines of logic |
| **Icons** | Inline SVG | No icon library; precise control over stroke weight |

### File Architecture

The entire prototype lives in one file. The structure is:

```
recurring_insights_prototype.html
├── <style>                       ← Design tokens + component styles
│   ├── CSS variables             ← Claude color palette, fonts, shadows
│   ├── Laptop frame              ← 16:10 aspect ratio container
│   ├── Sidebar                   ← Left nav with icons
│   ├── Composer                  ← Input bar with + and Recurring Insights buttons
│   ├── Dropdown menu             ← Saved insights list
│   ├── Chat view                 ← Scrollable conversation area
│   ├── Dashboard primitives      ← KPI cards, chart cards, table cards
│   └── Status pills              ← negative / positive / partial / critical
├── <body>
│   ├── Laptop frame              ← Outer container with shadow
│   ├── Sidebar                   ← Static nav icons
│   └── Main
│       ├── Topbar                ← Title + back button
│       ├── Home view             ← Greeting + composer (default state)
│       ├── Chat view             ← Hidden until an insight is run
│       └── Dropdown menu         ← Hidden until button is clicked
└── <script>                      ← ~250 lines
    ├── Menu toggle               ← Open/close dropdown, position relative to button
    ├── Navigation                ← Switch between home and chat views
    └── Insight runners           ← renderCashflow(), renderVariance(), renderAR()
```

### Design System

All visual decisions are encoded as CSS custom properties at the top of the stylesheet. This made it easy to keep the entire prototype in lockstep with Claude's actual UI:

```css
:root {
  --bg:        #F9F8F4;       /* Claude warm cream background */
  --surface:   #FFFFFF;
  --surface-2: #F5F4EE;
  --border:    #E8E6DC;
  --ink:       #1F1E1B;
  --muted:     #8C8A82;
  --accent:    #D97757;       /* Claude orange */
  --accent-2:  #C26544;
  --accent-bg: #FBEEE6;
  --blue:      #2C84DB;
  --green:     #2F9E6B;
  --red:       #D85C5C;
  --amber:     #D89744;
  --serif:    "Copernicus", "Tiempos Headline", "Georgia", serif;
  --sans:     "Styrene A", "Inter", -apple-system, sans-serif;
}
```

The 16:10 laptop frame is a single rule:

```css
.laptop {
  width: 100%;
  max-width: 1440px;
  aspect-ratio: 16 / 10;
  background: var(--bg);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0,0,0,0.18);
  display: grid;
  grid-template-columns: 56px 1fr;
}
```

### Component: The Button

The Recurring Insights button is the centerpiece. It sits inside the composer row, immediately to the right of the `+` button, and is given a warm gradient and an orange accent to make it visually distinct without breaking Claude's restrained palette.

**Markup:**

```html
<div class="composer-left">
  <!-- + button -->
  <button class="pill-btn" id="plusBtn" title="Attach">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2">
      <path d="M12 5v14M5 12h14"/>
    </svg>
  </button>

  <!-- NEW: Recurring Insights button -->
  <button class="pill-btn insights-btn" id="insightsBtn"
          title="Recurring Insights">
    <svg class="sparkle" width="14" height="14" viewBox="0 0 24 24"
         fill="currentColor">
      <path d="M12 2l1.6 5.2L19 9l-5.4 1.8L12 16l-1.6-5.2L5 9l5.4-1.8z"/>
      <path d="M19 14l.7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7z"
            opacity="0.7"/>
    </svg>
    <span>Recurring Insights</span>
    <span class="badge">3</span>
  </button>
</div>
```

**Styling:** the button uses Claude's orange (`--accent`) for the sparkle icon and a soft peach gradient background. On hover it lifts slightly with a shadow — a small touch that signals "this does something special":

```css
.insights-btn {
  position: relative;
  background: linear-gradient(135deg, #FFF8F2 0%, #FBEEE6 100%);
  border: 1px solid #F0D4C0;
  color: var(--accent-2);
  font-weight: 500;
}
.insights-btn:hover {
  background: linear-gradient(135deg, #FBEEE6 0%, #F5DDC9 100%);
  border-color: var(--accent);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(217, 119, 87, 0.18);
}
.insights-btn .badge {       /* small "3" pill in the corner */
  position: absolute;
  top: -4px; right: -4px;
  width: 14px; height: 14px;
  background: var(--accent);
  border-radius: 50%;
  border: 2px solid var(--bg);
}
```

### Component: The Dropdown

Clicking the button opens a dropdown menu listing the three saved insights, each with its own icon, name, time scope, and "last run" timestamp. Below the list is a divider and a "Save current prompt as insight" affordance that hints at the broader save flow.

The menu is positioned dynamically relative to the button (so it works on both the home composer and the chat composer):

```javascript
function positionMenu() {
  const btn = document.querySelector('.chat-view.active')
    ? document.querySelector('.chat-composer .insights-btn')
    : insightsBtn;
  const main = document.querySelector('.main');
  const r = btn.getBoundingClientRect();
  const mainR = main.getBoundingClientRect();
  menu.style.left = (r.left - mainR.left) + 'px';
  menu.style.bottom = (mainR.bottom - r.top + 8) + 'px';
}
```

Each menu item routes to one of the three insight renderers:

```html
<div class="menu-item" onclick="runInsight('cashflow')">
  <div class="icon cash">...</div>
  <div class="meta">
    <div class="name">Monthly cash flow</div>
    <div class="sub">Last 6 months · NetSuite</div>
  </div>
  <div class="last">2d ago</div>
</div>
```

### Component: The Dashboards

Each saved insight renders a full mock Claude response when run. The three dashboards share a common dashboard grammar:

| Element | Used For |
|---|---|
| **KPI row** (4 cards) | Headline numbers — total inflow, variance, total open AR, etc. |
| **Chart card** (Chart.js) | Bar / line / mixed visualizations |
| **Table card** | Detailed period-over-period or bucket-level data |
| **Status pills** | `negative` / `positive` / `above` / `partial` / `critical` |
| **Follow-up chips** | Suggested drill-down prompts beneath the dashboard |
| **Narrative summary** | Serif prose block explaining the findings |

For example, the cash flow chart uses a mixed bar + line dataset to show inflow, outflow, and net cash flow on the same axis:

```javascript
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Nov 25','Dec 25','Jan 26','Feb 26','Mar 26','Apr 26','May 26'],
    datasets: [
      { label: 'Inflow',  data: [666, 1640, 1920, 2170, 626, 1050, 612],
        backgroundColor: '#5BB890', borderRadius: 4 },
      { label: 'Outflow', data: [-948, -1930, -2070, -3510, -212, -188, -540],
        backgroundColor: '#E89090', borderRadius: 4 },
      { label: 'Net', type: 'line',
        data: [-283, -297, -154, -1333, 415, 862, 72],
        borderColor: '#3B82F6', borderDash: [4,3], pointRadius: 4 }
    ]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: {
      y: { ticks: { callback: v => '$' + v + 'K' } }
    }
  }
});
```

The variance dashboard reuses the same grammar but with budget / actual / variance datasets; the AR aging dashboard adds a custom horizontal stacked bar (the "aging distribution") built with flexbox rather than Chart.js because the visual is simpler than a charting library would make it.

### Interaction Flow

The prototype is fully clickable. The user journey is:

```
Home screen
  └── Click "Recurring Insights" button
        └── Dropdown opens, positioned above the button
              └── Click "Monthly cash flow"
                    └── Loading state: "Running saved insight…"
                          └── Full cash flow dashboard renders (KPIs, chart,
                              tables, narrative, follow-up chips)
                                └── Click "← Back" to return home
                                      └── Repeat with another saved insight
```

The state machine is intentionally minimal — three functions handle the rendering, and a single `showChat()` swaps the home view for the chat view:

```javascript
function runInsight(kind) {
  if (kind === 'cashflow') {
    showChat('Monthly cash flow');
    renderCashflow();
  } else if (kind === 'variance') {
    showChat('Budget vs. actual variance');
    renderVariance();
  } else if (kind === 'ar') {
    showChat('AR aging summary');
    renderAR();
  }
}
```

Each renderer first paints a loading state, then replaces it with the full dashboard after a short delay — mimicking the real Claude experience of seeing MCP commands run before the final output streams in:

```javascript
function renderCashflow() {
  chatScroll.innerHTML = userMsg('Using my NetSuite data, run a financial cash flow analysis on the last 6 months');
  chatScroll.innerHTML += running('Running saved insight · pulling NetSuite GL data…');
  setTimeout(() => {
    chatScroll.innerHTML = userMsg(...) + dashboardHTML;
    drawCashflowChart();
  }, 900);
}
```

### Design Decisions

A few choices worth flagging:

**1. Button placement: right of `+`, not left.**
The original concept doc placed the button to the left of `+`. In the prototype it sits to the right because that position groups it visually with the other composer actions (model selector, send button on the right side of the composer) rather than pushing it to the far edge where it could be mistaken for a sidebar element.

**2. The button is always visible in the prototype.**
In production, the button would only appear when the NetSuite MCP connector is active. The prototype renders it unconditionally so the demo can show the feature without first walking through the MCP setup flow.

**3. Loading states are deliberately slow (~900ms).**
Real MCP queries take 3–8 seconds. The prototype compresses this to under a second so the demo feels responsive, but keeps a visible loading pill so the audience understands that real execution involves a roundtrip to NetSuite.

**4. The data is hard-coded but matches the source screenshots.**
All numbers in the three dashboards are pulled directly from the reference screenshots in `/mnt/project/`. This keeps the prototype credible as a representation of real Claude + NetSuite output without requiring a live MCP connection.

**5. No build step.**
The entire prototype is one HTML file. Open it in a browser, it works. This was a deliberate choice to keep the prototype shareable, screen-recordable, and easy to iterate on without dependency management.

### Running the Prototype

```bash
# Just open the file in any modern browser
open recurring_insights_prototype.html
```

No installation, no npm, no build. The only network dependency is Chart.js and Google Fonts via CDN.

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
- [x] Clickable HTML prototype of the Recurring Insights Button
- [ ] Recurring Insights Button — save and execute prompts (production)
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
- [Chart.js](https://www.chartjs.org) — charting library used in the prototype
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
