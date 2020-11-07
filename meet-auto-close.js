// ==UserScript==
// @name     Google Meet Auto Closer
// @version  1
// @grant    none
// @include  https://meet.google.com/*
// ==/UserScript==


(function() {

  const MEETING_RESET_FREQUENCY = 1000*60*1; // 5 minutes

  const Ticker = (function(){
    let exported = {};

    let tickCount = 0;
    exported.getTickCount = function() {
      return tickCount;
    }
    exported.setTickCount = function(value) {
      tickCount = value;
    }
    exported.tickUp = function(amount) {
      tickCount += amount;
    }

     return exported;
  }());


  const doTick = () => {
    console.log('ticking');
    Ticker.tickUp(1000);
    if (Ticker.getTickCount() > MEETING_RESET_FREQUENCY) {
        closeMeeting();
        Ticker.setTickCount(0);
    }
  }
  setInterval(doTick, 1000);



  const closeMeeting = () => {
    window.close();
  };
})();
