const headerNode = document.getElementById("header");
const footerNode = document.getElementById("footer");
const setActiveMenuItem = () => {
  const url = window.location.href;
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    const menuItemUrl = item.href;
    if (url === menuItemUrl) {
      item.parentElement.classList.add("current");
    } else {
      item.parentElement.classList.remove("current");
    }
  });
};

fetch("../index.html")
  .then(function (response) {
    // When the page is loaded convert it to text
    return response.text();
  })
  .then(function (html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const header = doc.getElementById("header");
    const footer = doc.getElementById("footer");

    headerNode.replaceWith(header);
    footerNode.replaceWith(footer);
    setActiveMenuItem();
  })
  .catch(function (err) {
    console.log("Failed to fetch page: ", err);
  });
