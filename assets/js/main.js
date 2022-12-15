// Check JS is loaded correctly
window.addEventListener('load', (event) => {
  console.log("Page loaded.");
});

const container = document.getElementById('identityContainer');
const button = document.getElementById('identityButton');
const urlIdentity = 'https://randomuser.me/api/';
const urlQuote = 'https://api.adviceslip.com/advice/';

function createNode(element) {
  return document.createElement(element);
}

function appendNode(parent, element) {
  return parent.appendChild(element);
}

function removeNode(parent, element) {
  return parent.removeChild(element);
}