const title = document.getElementById("title");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
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
  title.innerText = content?.title;
  p1.innerText = content?.p1;
  p2.innerText = content?.p2;
  p3.innerText = content?.p3;
}
