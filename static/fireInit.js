window.addEventListener('load', function() {
  console.log('%c Firebase loaded...', 'background: #ffcb2c; color: #f5820b');
  window.dispatchEvent(new Event('firebase-loaded'));
})