/**
 * Prompt library management UI logic for the Recurring Insights dropdown.
 *
 * Extends the read-only saved-insights list from the prototype with
 * rename, delete, and drag-to-reorder controls.
 *
 * Known gap: drag interaction is mouse-only right now; touch support
 * is tracked as a follow-up.
 */

function renderLibraryItem(insight, { onRename, onDelete, onReorder }) {
  return {
    id: insight.id,
    label: insight.name,
    handlers: {
      rename: (newName) => onRename(insight.id, newName),
      delete: () => onDelete(insight.id),
      dragEnd: (newIndex) => onReorder(insight.id, newIndex),
    },
  };
}

function reorderInsights(insights, insightId, newIndex) {
  const current = insights.findIndex((i) => i.id === insightId);
  if (current === -1) return insights;

  const next = [...insights];
  const [moved] = next.splice(current, 1);
  next.splice(newIndex, 0, moved);
  return next;
}

module.exports = { renderLibraryItem, reorderInsights };
