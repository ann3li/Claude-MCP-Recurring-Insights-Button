/**
 * Period-aware time logic for Recurring Insights.
 *
 * Given a saved insight's time logic descriptor and the date it's being
 * executed, computes the concrete date range to query in NetSuite so that
 * "6-month rolling" always means "the 6 months ending now", not the range
 * from when the insight was first saved.
 *
 * TODO: fiscal-year-end boundary tests; currently assumes calendar year.
 */

function resolveDateRange(timeLogic, executionDate = new Date()) {
  const { type, windowMonths } = timeLogic;

  if (type === "rolling") {
    const end = new Date(executionDate);
    const start = new Date(executionDate);
    start.setMonth(start.getMonth() - windowMonths);
    return { start, end };
  }

  if (type === "current-month") {
    const start = new Date(executionDate.getFullYear(), executionDate.getMonth(), 1);
    const end = new Date(executionDate.getFullYear(), executionDate.getMonth() + 1, 0);
    return { start, end };
  }

  throw new Error(`Unsupported time logic type: ${type}`);
}

module.exports = { resolveDateRange };
