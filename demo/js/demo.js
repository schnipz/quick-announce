requirejs.config({
  baseUrl: '../dist/',
  paths: {
    lockFocus: 'quick-announce.min'
  }
});

requirejs(['quickAnnounce'], function(quickAnnounce) {
  // Run 'init' method on page load (or whenever required)
  quickAnnounce.init();
});
