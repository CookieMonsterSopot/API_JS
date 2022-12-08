const nav = document.querySelector("nav");
const navTitle = document.getElementById("nav-h1");
const navHome = document.getElementsByClassName("nav-span")[0];
const navP1 = document.getElementsByClassName("nav-span")[1];
const navP2 = document.getElementsByClassName("nav-span")[2];
const navP3 = document.getElementsByClassName("nav-span")[3];

const articles = document.getElementById("content");
const article1 = articles.children[0];
const article2 = articles.children[1];
const article3 = articles.children[2];
const article4 = articles.children[3];
const list = document.querySelector("ul");
const listItems = list.children;

function clearAll() {
  navTitle.innerHTML = "";
  navHome.innerHTML = "";
  navP1.innerHTML = "";
  navP2.innerHTML = "";
  navP3.innerHTML = "";

  article1.children[0].innerHTML = "";
  article1.children[1].innerHTML = "";

  article2.children[0].innerHTML = "";
  article2.children[1].innerHTML = "";

  article3.children[0].innerHTML = "";
  article3.children[1].innerHTML = "";

  article4.children[0].innerHTML = "";
  article4.children[1].innerHTML = "";

  list.children[0].innerHTML = "";
  list.children[1].innerHTML = "";
  list.children[2].innerHTML = "";
}

function showAll() {
  navTitle.innerHTML = "DOM";
  navHome.innerHTML = "HOME";
  navP1.innerHTML = "Page 1";
  navP2.innerHTML = "Page 2";
  navP3.innerHTML = "Page 3";

  article1.children[0].innerHTML =
    "Introduction to JavaScript's Document Object Model.";
  article1.children[1].innerHTML =
    "The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web. This guide will introduce the DOM, look at how the DOM represents an HTML document in memory and how to use APIs to create web content and applications.";

  article2.children[0].innerHTML = "What's DOM?";
  article2.children[1].innerHTML =
    "The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page. A web page is a document that can be either displayed in the browser window or as the HTML source. In both cases, it is the same document but the Document Object Model (DOM) representation allows it to be manipulated. As an object-oriented representation of the web page, it can be modified with a scripting language such as JavaScript.";

  article3.children[0].innerHTML = "DOM and JavaScript.";
  article3.children[1].innerHTML =
    "The DOM is not a programming language, but without it, the JavaScript language wouldn't have any model or notion of web pages, HTML documents, SVG documents, and their component parts. The document as a whole, the head, tables within the document, table headers, text within the table cells, and all other elements in a document are parts of the document object model for that document. They can all be accessed and manipulated using the DOM and a scripting language like JavaScript. The DOM is not part of the JavaScript language, but is instead a Web API used to build websites. JavaScript can also be used in other contexts. For example, Node.js runs JavaScript programs on a computer, but provides a different set of APIs, and the DOM API is not a core part of the Node.js runtime. The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API. Even if most web developers will only use the DOM through JavaScript, implementations of the DOM can be built for any language.";

  article4.children[0].innerHTML = "How to access the DOM?";
  article4.children[1].innerHTML =
    "You don't have to install anything additional, just JavaScript will do. We have a few methods called 'selectors', these methods are used to access DOM elements and are found on the global 'document' object, which is an object representation of the whole HTML document. Here are <strong>some</strong> of them:";
  list.children[0].innerHTML = "document.querySelector('cssSelectorHere')";
  list.children[1].innerHTML = "document.getElementById('elementsIdHere')";
  list.children[2].innerHTML =
    "document.getElementsByClassName('classNameHere')";
}

setTimeout(function () {
  clearAll();
}, 3000);

setTimeout(function () {
  let choose = prompt("Do you want to recover site? Write yes or no");
  if (choose == "yes") {
    showAll();
  } else {
    clearAll();
  }
}, 5000);
