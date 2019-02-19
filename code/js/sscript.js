var animateHTML = function() {
  var elems;
  var windowHeight;
  function init() {
    elems = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          'hidden',
          'fade-in-element'
        );
      }
    }
  }
  return {
    init: init
  };
};
animateHTML().init();

var animateHTML = function() {
  var elems;
  var windowHeight;
  function init() {
    elems = document.querySelectorAll('.hidden2');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          'hidden2',
          'fade-in-element2'
        );
      }
    }
  }
  return {
    init: init
  };
};
animateHTML().init();



window.onload = function() { //executes this code after the DOM loads
   //--- this is the selector element. Feel free to change this if you don't want all video objects targeted.
  const vids = document.querySelectorAll(`.hover`)

   //--- Now we loop over all of the selected elements and add event listeners
  for (let i = 0; i < vids.length; i++) {
    vids[i].addEventListener( `mouseover`, function(e) {
      vids[i].play()
    })
    vids[i].addEventListener( `mouseout`, function(e) {
      vids[i].pause()
    })
  }
}

var v = document.getElementByTagName('video');
v.addEventListener(
    'play',
    function() {
        v.play();
    },
    false);

v.onclick = function() {
    if (v.paused) {
        v.play();
    } else {
        v.pause();
    }

    return false;
};
