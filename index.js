import './style.css';

// GET DATA FROM API
const menuValue = [
  {
    value: 'CSS Ninja',
  },
  {
    value: 'Master of JavaScript',
  },
  {
    value: 'React Professional',
  },
  {
    value: 'Angular Developer',
  },
  {
    value: 'C#/.NET Engineer',
  },
];

const ddMenu = document.querySelector('.selector');
const caret = document.querySelector('.caret');
let userSelection = document.getElementById('user-selection');

// MENU TOGGLE LISTENER
ddMenu.addEventListener('click', ddClickHandler);

// DROPDOWN MENU CLICK HANDLER
function ddClickHandler() {
  const children = Array.from(ddMenu.parentElement.children);
  if (children.length === 1) {
    const menu = document.createElement('div');
    menu.classList.add('menu-values');
    for (var i = 0; i < menuValue.length; i++) {
      const item = document.createElement('div');
      item.innerText = menuValue[i].value;
      item.classList.add('item');
      menu.appendChild(item);
      setMenuListeners(item);
    }
    ddMenu.parentElement.append(menu);
  } else {
    const items = Array.from(children[1].children);
    removeMenuListeners(items);
    closeMenu(children);
  }
  caret.classList.toggle('rotate-caret');
}

// SET MENU LISTENERS
function setMenuListeners(elem) {
  elem.addEventListener('click', menuItemHandler);
}

// REMOVE MENU LISTENERS
function removeMenuListeners(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i].removeEventListener('click', menuItemHandler);
  }
}

// DROPDOWN MENU HANDLER
function menuItemHandler(e) {
  userSelection.innerText = e.target.innerText;
  ddClickHandler();
}

// CLOSE MENU/ REMOVE FROM DOM
function closeMenu(arr) {
  arr[1].remove();
}
