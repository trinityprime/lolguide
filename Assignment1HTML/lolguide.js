window.addEventListener('scroll', function () {
  let scrollPosition = document.documentElement.scrollTop;
  let documentHeight = document.documentElement.scrollHeight;
  let windowHeight = document.documentElement.clientHeight;
  let scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
  document.querySelector('#scroll-indicator-progress').style.width = scrollPercentage + '%';
});

var lastScrollTop;
navbar = document.getElementById('sidebar');
window.addEventListener('scroll', function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    sidebar.style.top = '-80px';
  }
  else {
    sidebar.style.top = '0';
  }
  lastScrollTop = scrollTop;
});


const tabs = document.querySelectorAll('.sidebar');
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
