/**
 * Persistence layer for saved Recurring Insights.
 * Backs the "save prompt" flow with a durable store keyed by workspace + user.
 *
 * Status: WIP — CRUD operations implemented, still needs migration script
 * for existing prototype-only saved insights before this can ship.
 */

const STORE_VERSION = 1;

async function saveInsight(workspaceId, insight) {
  // insight: { id, name, prompt, dataScope, timeLogic, createdAt }
  if (!insight.name || !insight.prompt) {
    throw new Error("Insight requires a name and prompt");
  }
  return db.insights.upsert({ workspaceId, ...insight, version: STORE_VERSION });
}

async function listInsights(workspaceId) {
  return db.insights.findAll({ where: { workspaceId } });
}

async function deleteInsight(workspaceId, insightId) {
  return db.insights.delete({ where: { workspaceId, id: insightId } });
}

module.exports = { saveInsight, listInsights, deleteInsight };
