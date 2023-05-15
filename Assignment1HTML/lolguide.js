window.addEventListener('scroll', function() {
  let scrollPosition = document.documentElement.scrollTop;
  let documentHeight = document.documentElement.scrollHeight;
  let windowHeight = document.documentElement.clientHeight;
  let scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
  document.querySelector('#scroll-indicator-progress').style.width = scrollPercentage + '%';
});
