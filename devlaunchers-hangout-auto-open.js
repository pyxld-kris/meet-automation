// ==UserScript==
// @name     Hangout Page Auto Opener
// @version  1
// @grant    none
// @include  https://devlaunchers.com/*
// ==/UserScript==

if ( ! /#\/hangout.*/.test(location.hash) )  return; // Only trigger on hangout page (fix because @include doesn't work with hashes)
alert("Executing Google Meet Auto Opener");

(function() {

  const MEETING_RESET_FREQUENCY = 1000*60*1; // 5 minutes

  const openMeeting = () => {
    const button = document.querySelector('div[style^="background-color: rgb(255, 255, 255);"]').closest('div'); // click parent of small white div under "Common Area" (click to open common area)
    button.click();
  };
  openMeeting();

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
        openMeeting();
        Ticker.setTickCount(0);
    }
  }
  setInterval(doTick, 1000);


})();
