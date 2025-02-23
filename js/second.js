console.log('second file')

const secondList = document.getElementById('second-list');

// 
const li = document.createElement('li');
li.innerText = 'My Dynamic Text';

secondList.appendChild(li);