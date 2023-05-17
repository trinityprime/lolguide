window.addEventListener('scroll', function() {
  let scrollPosition = document.documentElement.scrollTop;
  let documentHeight = document.documentElement.scrollHeight;
  let windowHeight = document.documentElement.clientHeight;
  let scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
  document.querySelector('#scroll-indicator-progress').style.width = scrollPercentage + '%';
});

const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  const input = tab.querySelector('input[type="radio"]');
  const content = tab.querySelector('.tab-content');

  input.addEventListener('change', () => {
    tabs.forEach(otherTab => {
      const otherContent = otherTab.querySelector('.tab-content');
      if (otherTab !== tab && otherContent.style.display === 'block') {
        otherContent.style.display = 'none';
      }
    });

    content.style.display = 'block';
  });
});
