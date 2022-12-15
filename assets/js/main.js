// Check JS is loaded correctly
window.addEventListener('load', (event) => {
  console.log("Page loaded.");
});

const container = document.getElementById('identityContainer');
const button = document.getElementById('identityButton');
const urlIdentity = 'https://randomuser.me/api/';
const urlQuote = 'https://api.adviceslip.com/advice/';

button.addEventListener("click", function () { generateIdentity() });

function createNode(element) {
  return document.createElement(element);
}

function appendNode(parent, element) {
  return parent.appendChild(element);
}

function removeNode(parent, element) {
  return parent.removeChild(element);
}

/* Function taken from https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range */
function getRandomInt() {
  min = Math.ceil(1);
  max = Math.floor(200);
  return Math.floor(Math.random() * (200 - 1 + 1)) + 1;
}

function fetchIdentity() {
  fetch(urlIdentity)
    .then((response) => response.json())
    .then(function (data) {
      let object = data.results;
      return object.map(function (identity) {
        let name = createNode('h2');
        name.classList.add('text-center');
        name.innerHTML = `${identity.name.first} ${identity.name.last}`;

        let img = createNode('img');
        img.classList.add('rounded-circle', 'img-thumbnail', 'mx-auto', 'd-block');
        img.src = identity.picture.large;

        let gender = createNode('p');
        gender.innerHTML = `${identity.gender}`;

        let address1 = createNode('p');
        address1.innerHTML = `${identity.location.street.number}, ${identity.location.street.name}`;

        let address2 = createNode('p');
        address2.innerHTML = `${identity.location.city}, ${identity.location.state}, ${identity.location.country}`;

        let email = createNode('p');
        email.innerHTML = `${identity.email}`;

        let login = createNode('p');
        login.innerHTML = `${identity.login.username} ${identity.login.password}`;

        let age = createNode('p');
        age.innerHTML = `${identity.dob.age} (${identity.dob.date})`;

        let phone = createNode('p');
        phone.innerHTML = `${identity.phone}`;

        let flag = createNode('img');
        flag.src = `https://www.countryflagicons.com/FLAT/32/` + `${identity.nat}` + `.png`;
        flag.classList.add('px-2');

        let divRowIntro = createNode('div');
        divRowIntro.classList.add('row-cols-1');
        let divColIntro = createNode('div');
        divColIntro.classList.add('col');

        // Add profile intro
        appendNode(divColIntro, img);
        appendNode(name, flag);
        appendNode(divColIntro, name);
        appendNode(divRowIntro, divColIntro);
        appendNode(container, divRowIntro);

        appendNode(container, gender);
        appendNode(container, address1);
        appendNode(container, address2);
        appendNode(container, email);
        appendNode(container, login);
        appendNode(container, age);
        appendNode(container, phone);
      })
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      fetch(urlQuote + getRandomInt())
        .then((response) => response.json())
        .then(function (data) {
          let object = data;
          let quote = createNode('p');
          quote.innerHTML = `${object.slip.advice}`;
          appendNode(container, quote);
        })
        .catch(function (error) {
          console.log(error);
        });
    });
}

function generateIdentity() {
  container.innerHTML = '';
  fetchIdentity();
}