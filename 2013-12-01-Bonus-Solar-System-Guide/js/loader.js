// merges window.ready()-functions
function addLoadEvent(func) {
  var oldReady = window.ready;
  if (typeof window.ready !== 'function') {
    window.ready = func;
  } else {
    window.ready = function() {
      if (oldReady) {
        oldReady();
      }
      func();
    };
  };
};
// add .ready()-function
addLoadEvent( starField() );
addLoadEvent( parallax() );
addLoadEvent( mousePixies() );
addLoadEvent( screenHandler() );
addLoadEvent( setOrigin(0, 10) );