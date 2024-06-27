

function components() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello, webpack!';
  element.classList.add('hello');
  

  return element;
}

document.getElementById('root').appendChild(components());
