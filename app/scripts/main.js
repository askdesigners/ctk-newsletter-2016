/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
(function () {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
  );

  if ('serviceWorker' in navigator &&
    (window.location.protocol === 'https:' || isLocalhost)) {
    navigator.serviceWorker.register('service-worker.js')
      .then(function (registration) {
        // updatefound is fired if service-worker.js changes.
        registration.onupdatefound = function () {
          // updatefound is also fired the very first time the SW is installed,
          // and there's no need to prompt for a reload at that point.
          // So check here to see if the page is already controlled,
          // i.e. whether there's an existing service worker.
          if (navigator.serviceWorker.controller) {
            // The updatefound event implies that registration.installing is set:
            // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
            var installingWorker = registration.installing;

            installingWorker.onstatechange = function () {
              switch (installingWorker.state) {
                case 'installed':
                  // At this point, the old content will have been purged and the
                  // fresh content will have been added to the cache.
                  // It's the perfect time to display a "New content is
                  // available; please refresh." message in the page's interface.
                  break;

                case 'redundant':
                  throw new Error('The installing ' +
                    'service worker became redundant.');

                default:
                // Ignore
              }
            };
          }
        };
      }).catch(function (e) {
        console.error('Error during service worker registration:', e);
      });
  }
  $(function () {
    
    var controller = new ScrollMagic.Controller();

    var section3 = new ScrollMagic.Scene({triggerElement: "#section3", triggerHook: 0, loglevel: 3});
    section3.setPin("#section3Sticky") // pins the element for the the scene's duration
    section3.addTo(controller); // assign the scene to the controller
   
    var section4 = new ScrollMagic.Scene({triggerElement: "#section4", triggerHook: 0, loglevel: 3});
    section4.setPin("#section4Sticky") // pins the element for the the scene's duration
    section4.addTo(controller); // assign the scene to the controller
   
    var section6 = new ScrollMagic.Scene({triggerElement: "#section6", triggerHook: 0, loglevel: 3});
    section6.setPin("#section6Sticky") // pins the element for the the scene's duration
    section6.addTo(controller); // assign the scene to the controller
   
    var section7 = new ScrollMagic.Scene({triggerElement: "#section7", triggerHook: 0, loglevel: 3});
    section7.setPin("#section7Sticky") // pins the element for the the scene's duration
    section7.addTo(controller); // assign the scene to the controller
   
    var section8 = new ScrollMagic.Scene({triggerElement: "#section8", triggerHook: 0, loglevel: 3});
    section8.setPin("#section8Sticky") // pins the element for the the scene's duration
    section8.addTo(controller); // assign the scene to the controller
   
    var section9 = new ScrollMagic.Scene({triggerElement: "#section9", triggerHook: 0, loglevel: 3});
    section9.setPin("#section9Sticky") // pins the element for the the scene's duration
    section9.addTo(controller); // assign the scene to the controller


  });

})();
