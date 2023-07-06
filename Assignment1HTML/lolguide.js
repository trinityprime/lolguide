window.addEventListener('scroll', function () {
  let scrollPosition = document.documentElement.scrollTop;
  let documentHeight = document.documentElement.scrollHeight;
  let windowHeight = document.documentElement.clientHeight;
  let scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
  document.querySelector('#scroll-indicator-progress').style.width = scrollPercentage + '%';
});

var lastScrollTop; // This Varibale will store the top position

navbar = document.getElementById('sidebar'); // Get The NavBar

window.addEventListener('scroll',function(){
 //on every scroll this funtion will be called
  
  var scrollTop = document.documentElement.scrollTop;
  //This line will get the location on scroll
  
  if(scrollTop > lastScrollTop){ //if it will be greater than the previous
    navbar.style.top='-80px';
    //set the value to the negetive of height of navbar 
  }
  
  else{
    navbar.style.top='0';
  }
  
  lastScrollTop = scrollTop; //New Position Stored
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

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}