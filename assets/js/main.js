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

        let flag = createNode('img');
        flag.src = `https://www.countryflagicons.com/FLAT/32/` + `${identity.nat}` + `.png`;
        flag.classList.add('px-2');


        // Age
        let ageDiv = createNode('div');
        ageDiv.classList.add('fs-5');
        let ageIcon = createNode('i');
        ageIcon.classList.add('bi', 'bi-calendar2-week', 'pe-2');
        let age = createNode('span');
        age.innerHTML = `Age: ${identity.dob.age}`;
        appendNode(ageDiv, ageIcon);
        appendNode(ageDiv, age);

        // Birthday
        let birthdayDiv = createNode('div');
        birthdayDiv.classList.add('fs-5');
        let birthdayIcon = createNode('i');
        birthdayIcon.classList.add('bi', 'bi-balloon', 'pe-2');
        let birthday = createNode('span');
        birthday.innerHTML = 'Birthday: ' + identity.dob.date.split("T")[0];
        appendNode(birthdayDiv, birthdayIcon);
        appendNode(birthdayDiv, birthday);

        // Gender
        let genderDiv = createNode('div');
        genderDiv.classList.add('fs-5');
        let genderIcon = createNode('i');
        let gender = createNode('span');
        if (identity.gender == 'female') {
          gender.innerHTML = 'Gender: Female';
          genderIcon.classList.add('bi', 'bi-gender-female', 'pe-2');
        }
        else {
          gender.innerHTML = 'Gender: Male';
          genderIcon.classList.add('bi', 'bi-gender-male', 'pe-2');
        }
        appendNode(genderDiv, genderIcon);
        appendNode(genderDiv, gender);

        // Address1
        let address1Div = createNode('div');
        address1Div.classList.add('fs-5');
        let address1Icon = createNode('i');
        address1Icon.classList.add('bi', 'bi-house', 'pe-2');
        let address1 = createNode('span');
        address1.innerHTML = `Street: ${identity.location.street.number} ${identity.location.street.name}`;
        appendNode(address1Div, address1Icon);
        appendNode(address1Div, address1);

        // Address2
        let address2Div = createNode('div');
        address2Div.classList.add('fs-5');
        let address2Icon = createNode('i');
        address2Icon.classList.add('bi', 'bi-building', 'pe-2');
        let address2 = createNode('span');
        address2.innerHTML = `City: ${identity.location.city}, ${identity.location.state}, ${identity.location.country}`;
        appendNode(address2Div, address2Icon);
        appendNode(address2Div, address2);

        // Email
        let emailDiv = createNode('div');
        emailDiv.classList.add('fs-5');
        let emailIcon = createNode('i');
        emailIcon.classList.add('bi', 'bi-envelope-at', 'pe-2');
        let email = createNode('span');
        email.innerHTML = `Email: ${identity.email}`;
        appendNode(emailDiv, emailIcon);
        appendNode(emailDiv, email);

        // Phone
        let phoneDiv = createNode('div');
        phoneDiv.classList.add('fs-5');
        let phoneIcon = createNode('i');
        phoneIcon.classList.add('bi', 'bi-telephone', 'pe-2');
        let phone = createNode('span');
        phone.innerHTML = `Phone number: ${identity.phone}`;
        appendNode(phoneDiv, phoneIcon);
        appendNode(phoneDiv, phone);

        // Username
        let usernameDiv = createNode('div');
        usernameDiv.classList.add('fs-5');
        let usernameIcon = createNode('i');
        usernameIcon.classList.add('bi', 'bi-person', 'pe-2');
        let username = createNode('span');
        username.innerHTML = `Username: ${identity.login.username}`;
        appendNode(usernameDiv, usernameIcon);
        appendNode(usernameDiv, username);

        // Password
        let passwordDiv = createNode('div');
        passwordDiv.classList.add('fs-5');
        let passwordIcon = createNode('i');
        passwordIcon.classList.add('bi', 'bi-key', 'pe-2');
        let password = createNode('span');
        password.innerHTML = `Password: ${identity.login.password}`;
        appendNode(passwordDiv, passwordIcon);
        appendNode(passwordDiv, password);

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

        let divRowData = createNode('div');
        divRowData.classList.add('row', 'row-cols-1', 'row-cols-sm-2', 'my-3');
        let divColDataLeft = createNode('div');
        divColDataLeft.classList.add('col');
        let divColDataRight = createNode('div');
        divColDataRight.classList.add('col');
        divColDataRight.setAttribute("id", "divColDataRight");

        // Add profile data
        appendNode(divColDataLeft, ageDiv);
        appendNode(divColDataLeft, birthdayDiv);
        appendNode(divColDataLeft, genderDiv);
        appendNode(divColDataLeft, address1Div);
        appendNode(divColDataLeft, address2Div);

        appendNode(divColDataRight, emailDiv);
        appendNode(divColDataRight, phoneDiv);
        appendNode(divColDataRight, usernameDiv);
        appendNode(divColDataRight, passwordDiv);

        appendNode(divRowData, divColDataLeft);
        appendNode(divRowData, divColDataRight);
        appendNode(container, divRowData);
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
          // Quote
          let quoteDiv = createNode('div');
          quoteDiv.classList.add('fs-5');
          let quoteIcon = createNode('i');
          quoteIcon.classList.add('bi', 'bi-chat-right-quote', 'pe-2');
          let quote = createNode('span');
          quote.innerHTML = `Quote: "${object.slip.advice}"`;
          appendNode(quoteDiv, quoteIcon);
          appendNode(quoteDiv, quote);
          appendNode(document.getElementById('divColDataRight'), quoteDiv);
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