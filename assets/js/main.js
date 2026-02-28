document.querySelector('form')?.addEventListener('submit', function() {
  if (typeof gtag === 'function') {
    gtag('event', 'registration_submitted', {
      event_category: 'engagement',
      event_label: 'golf_tournament'
    });
  }
});
