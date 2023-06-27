window.addEventListener('scroll', function () {
  let scrollPosition = document.documentElement.scrollTop;
  let documentHeight = document.documentElement.scrollHeight;
  let windowHeight = document.documentElement.clientHeight;
  let scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
  document.querySelector('#scroll-indicator-progress').style.width = scrollPercentage + '%';
});

const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    // deactivate all tabs
    tabs.forEach((otherTab) => {
      otherTab.classList.remove('active');
    });

    // activate current tab
    tab.classList.add('active');

    // hide all tab contents
    tabContents.forEach((content) => {
      content.style.display = 'none';
    });

    // show current tab content
    const tabContent = document.querySelector(`#${tab.children[0].getAttribute('for')}`).nextElementSibling;
    tabContent.style.display = 'block';
  });
});

