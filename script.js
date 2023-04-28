// function to get all elements with class "tabcontent" and hide them
function hideAllTabContents() {
  var tabContents = document.querySelectorAll(".tabcontent");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }
}

// function to show the first element with class "tabcontent"
function showFirstTabContent() {
  var tabContents = document.querySelectorAll(".tabcontent");
  tabContents[0].style.display = "block";
  tabContents[0].previousElementSibling.classList.add("d_active");
}

// function for tab mode
function handleTabClick() {
  var tabLinks = document.querySelectorAll("div.tabs button");
  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener("click", function () {
      var activeTab = this.getAttribute("rel");
      hideAllTabContents();
      document.querySelector("#" + activeTab).style.display = "block";
      for (var j = 0; j < tabLinks.length; j++) {
        tabLinks[j].classList.remove("active");
      }
      this.classList.add("active");
      var tabDrawerHeadings = document.querySelectorAll(".accordion-btn");
      for (var j = 0; j < tabDrawerHeadings.length; j++) {
        tabDrawerHeadings[j].classList.remove("d_active");
      }
      document
        .querySelector(".accordion-btn[rel^='" + activeTab + "']")
        .classList.add("d_active");
    });
  }
}

// function for accordion mode
function handleAccordionClick() {
  var tabDrawerHeadings = document.querySelectorAll(".accordion-btn");
  for (var i = 0; i < tabDrawerHeadings.length; i++) {
    tabDrawerHeadings[i].addEventListener("click", function () {
      var d_activeTab = this.getAttribute("rel");
      hideAllTabContents();
      document.querySelector("#" + d_activeTab).style.display = "block";
      for (var j = 0; j < tabDrawerHeadings.length; j++) {
        tabDrawerHeadings[j].classList.remove("d_active");
      }
      this.classList.add("d_active");
      var tabLinks = document.querySelectorAll("div.tabs button");
      for (var j = 0; j < tabLinks.length; j++) {
        tabLinks[j].classList.remove("active");
      }
      document
        .querySelector("div.tabs button[rel^='" + d_activeTab + "']")
        .classList.add("active");
    });
  }
}

// initialize the functions
hideAllTabContents();
showFirstTabContent();
handleTabClick();
handleAccordionClick();
