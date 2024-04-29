const title = document.getElementById("title");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");

let pageContent;
fetch("thuiszorg.json")
  .then((res) => res.json())
  .then((text) => {
    pageContent = text;
  })
  .catch((e) => console.error(e));

function selectTypeOfCare(event) {
  document.querySelector(".active").classList.remove("active");
  event.target.parentElement.classList.add("active");
  changeContent(pageContent[event.target.id]);
}

function changeContent(content) {
  title.innerHTML = content?.title;
  p1.innerHTML = content?.p1 || "";
  p2.innerHTML = content?.p2 || "";
  p3.innerHTML = content?.p3 || "";
  p4.innerHTML = content?.p4 || "";
}
