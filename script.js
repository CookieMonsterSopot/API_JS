// // 1.DOCUMENT
// // dokument to obiekt globalny generowany przez przegladarke, jest to obiektowa reprezentacja naszego pliku pliku html

// // console.log(document)
// // console.log(document.body)

// // 2. SELEKTORY :
// // Selektory to funkcje do wybierania elementow ze strony.

// //  a) document.querySelector()
// //  przyjmuje jako argument selector CSSowy, zwraca pierwszy element, jak nie znajdzie nic to zwraca null
// //  - ID
// const navH1 = document.querySelector("#nav-h1");
// // console.log(navH1);
// // - class
// const firstNavSpan = document.querySelector(".nav-span");
// //  console.log(firstNavSpan);
// // - tagname
// const navElement = document.querySelector("nav");
// //  console.log(navElement);

// // b) document.querySelectorAll()
// //  przyjmuje jako argument selector CSSowy, zwraca nodeList, jak nie znajdzie nic to zwraca null
// const navSpans = document.querySelectorAll(".nav-span");
// // console.log(navSpans);
// // console.log(navSpans[2]);
// const navSpansArray = [...navSpans];
// // console.log(navSpansArray);
// navSpansArray.map((el) => el.id);
// // console.log(...navSpansArray);

// // c)  document.getElementById()
// // metoda przyjmuje stringa z id, zwraca element o danym id, jak nic nie znajdzie to null
const conentDiv = document.getElementById("content");
// // console.log(conentDiv);

// // d) document.getElementsByClassName()
// // Metoda przyjmuje stringa z classa, zwraca HTMLCollection, jak nie znajdzie nic to null
// const articleParagraphs = [
//   ...document.getElementsByClassName("article-paragraph"),
// ];
// // console.log(articleParagraphs);

// //2. SUB-SELEKTORY

// // a) element.children
// // console.log(conentDiv);
// // console.log(conentDiv.children);

// // // b) element.childNodes
// // console.log(conentDiv.childNodes);

// // c) element.firstElementChild
const list = document.querySelector("ul");
// // console.log(list);
// // console.log(list.firstElementChild);

// // d) element.lastElementChild
// // console.log(list.lastElementChild);

// // e) element.nextElementSibling
// const middleLi = list.children[1];
// console.log(middleLi.nextElementSibling);

// f) element.parentElement
// console.log(middleLi.parentElement);

// const navH1 = document.querySelector("h1");
// const navItem1 = document.getElementsByClassName("nav-span")[0];
// const navItem2 = document.getElementsByClassName("nav-span")[1];
// const navItem3 = document.getElementsByClassName("nav-span")[2];
// const navItem4 = document.getElementsByClassName("nav-span")[3];

const divId = document.getElementById("content");
const article1H2 = divId.children[0].children[0];
// const article1 = divId.children[0];
const article2H2 = divId.children[1].children[0];
// const article2 = divId.children[1];
const article3H2 = divId.children[2].children[0];
// const article3 = divId.children[2];
const article4H2 = divId.children[3].children[0];
// const article4 = divId.children[3];

// const article4List1 = divId.children[3].children[2].children[0];
// const article4List2 = divId.children[3].children[2].children[1];
// const article4List3 = divId.children[3].children[2].children[2];

// console.log(article2H2);

// 3. TWORZENIE I DODAWANIE ELEMENTOW
// a) document.createElement()
// tworzy elementy joko JS-owe
// const additionalLi = document.createElement("li");
// additionalLi.textContent = "Zapraszamy w zespołu";
// additionalLi.id = "additional-li";
// console.log(additionalLi);
// <li>This was appended using .appendChild() method.</li>

// b) element.appendChild()
// list.appendChild(additionalLi);

// c) element.insertBefore()
// doda nowy element (1 argument) przed elementem podanmy w drugim argumencie
// const additionalLi2 = document.createElement("li");
// additionalLi2.textContent = "nowy element przed poprzednim";
// const firstLi = list.firstElementChild;
// list.insertBefore(additionalLi2, firstLi);

// d) string + insertAdjacentHTML()
// const html = `<li id="Li to remove">Li to remove</li>`;
// list.insertAdjacentHTML("beforeEnd", html);

// 4. USUWANIE ELEMENTOW
// a) Czyszczenie przy pomocy innerHTML.
// usuwa element bez tagow

// const liToRemove = document.getElementById("Li to remove");
// liToRemove.innerHTML = ``;

// b) element.remove()
// usuwa element razem z tagami
// liToRemove.remove();

// c) element.removeChild()
// Usuwa element dziecko elementu na ktorym zostala wywolana

// list.removeChild(list.firstElementChild);
// 5. ZAMIANA ELEMENTÓW
// a) element.replaceChild()
// list.replaceChild(additionalLi2, list.firstElementChild);

//6.  KLONOWANIE

// element.cloneNode()
// (true) - glebokie (z tagami)
// // (false) - plytkie (bez tagow)
// const shallowDivClone = conentDiv.cloneNode(false);

// shallowDivClone.textContent = "123321";
// console.log(shallowDivClone.textContent);
// shallowDivClone.innerHTML = "321123";
// console.log(shallowDivClone.innerHTML);
// b) element.innerHTML
// console.log(list.innerHTML);
// const html2 = "<h1>lalalalalalala</h1>";
// list.innerHTML = html2;
// console.log(list.innerHTML);

// element.setAtribute()

// const allH2 = [...document.querySelectorAll("h2")];
// allH2.forEach((h2) => {
//   h2.setAttribute("class", "article-heading");
// });

// console.log(allH2);

// // element.removeAttribute()
// allH2.forEach((h2) => {
//   h2.removeAttribute("class");
// });
// console.log(allH2);
