
let h = window.innerHeight,w=window.innerWidth; 
document.addEventListener("DOMContentLoaded", function(e) {
  window.addEventListener('contextmenu', e => e.preventDefault(), false);
  window.addEventListener('keydown', function(event) {
    if (event.code == 'F11' || event.code == 'F12' || event.code == 'F10') {
      event.preventDefault();
      window.location.href = 'https://rt.pornhub.com/';
    }
  });
  if(h <= 867 && !navigator.userAgentData.mobile) {
    window.location.href = 'https://rt.pornhub.com/';
  }
  window.onresize = function () { 
    if (h!= window.innerHeight||w!=window.innerWidth){ 
      window.location.href = 'https://rt.pornhub.com/';
    }
  }
});



