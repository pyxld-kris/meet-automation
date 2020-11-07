// ==UserScript==
// @name     Google Meet Auto Joiner
// @version  1
// @grant    none
// @include  https://meet.google.com/*
// ==/UserScript==

(function() {
  const BUTTON_TEXT = "Join now";

  const tryToJoinInterval = (() => {
      console.log('trying to join');
      const tryToJoin = () => {
        let buttons = document.querySelectorAll("div[role='button']");
        console.log('buttons')
        console.log(buttons)
        for (let i = 0; i < buttons.length; i++)
          if (buttons[i].innerText == BUTTON_TEXT) { //it's "Allow" button!
            buttons[i].click(); //Click it.
            removeInterval(checkForButtonInterval); // Stop checking
          }
      }

      let tryToJoinInterval = setInterval(tryToJoin, 1000*5); // Recheck every 5 seconds, just in case of errors in the initial join operation
      return tryToJoinInterval;
  })();
})();
