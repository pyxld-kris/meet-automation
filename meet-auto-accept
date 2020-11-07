// ==UserScript==
// @name     Google Meet Auto-Accepter
// @version  1
// @grant    none
// @include  https://meet.google.com/*
// ==/UserScript==

(function() {
  const ALLOW_TEXT = "Admit";
  function onMutation(mutationList, observer)
  {
    for (const mutation of mutationList)
      if (mutation.type === 'childList')
        for (const node of mutation.addedNodes)
          if (node.nodeType === 1)
          { //if an element is added, find if there are any dialog buttons inside it
            let buttons = node.querySelectorAll("div[role='dialog'] div[role='button']");
            for (let i = 0; i < buttons.length; i++)
              if (buttons[i].innerText == ALLOW_TEXT) //it's "Allow" button!
                buttons[i].click(); //Click it.
          }
  }

  const config = {
    childList: true,
    subtree: true
    };

  const observer = new MutationObserver(onMutation);
  observer.observe(document.body, config);
})();
