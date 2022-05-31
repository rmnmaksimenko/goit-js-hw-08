const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const PLAYED_TIME = 'playedTime';

import throttle from 'lodash.throttle';

const previousTime = parseFloat(localStorage.getItem(PLAYED_TIME));
if (previousTime) {
  console.log(previousTime);
  player.setCurrentTime(previousTime);
}

const timeThrottle = throttle(function (time) {
  localStorage.setItem(PLAYED_TIME, time);
}, 1000);

player.on('timeupdate', function (timeupdate) {
  timeThrottle(timeupdate.seconds);
});
