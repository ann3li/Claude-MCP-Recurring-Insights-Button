/**
 * Scheduling stub for auto-running Recurring Insights.
 *
 * Early WIP — registers a monthly job per insight that has scheduling
 * enabled. No retry/backoff or failure notification yet; that's blocked
 * on deciding the delivery channel (see Slack/email delivery roadmap item).
 */

function scheduleMonthlyRun(insight, runner) {
  if (!insight.schedule?.enabled) return null;

  // Placeholder: real implementation will register with the workspace's
  // job runner instead of an in-process interval.
  return {
    insightId: insight.id,
    cron: "0 6 1 * *", // 06:00 on the 1st of each month
    run: () => runner(insight),
  };
}

module.exports = { scheduleMonthlyRun };
