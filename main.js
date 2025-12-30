document.querySelectorAll('[data-accordion-group]').forEach(group => {
  const panels = group.querySelectorAll('details');
  panels.forEach(panel => {
    panel.addEventListener('toggle', () => {
      if (!panel.open) return;
      panels.forEach(other => {
        if (other !== panel) {
          other.open = false;
        }
      });
    });
  });
});
