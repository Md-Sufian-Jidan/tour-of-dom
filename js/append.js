// console.log('append js');
// 1 where to add
const placesList = document.getElementById('places-id');
// console.log(placesList);
// 2. what to be added
const li = document.createElement('li');
li.innerText = 'pahartoli bon'

// 3. add the child
placesList.appendChild(li);

// 1. where to add
const mainContainer = document.getElementById('main-container');

// 2. what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.append(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biryani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'salad';
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'chiken';
ul.appendChild(li4);

section.appendChild(ul);

mainContainer.appendChild(section);

// set innerHTML directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress section</h2>
<ul>
<li>T-shirt</li>
<li>Lungi</li>
<li>sando gunji</li>
<li>T-shirt</li>
</ul>
`

mainContainer.appendChild(sectionDress);