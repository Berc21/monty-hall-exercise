const button = document.querySelector('button');
const content = document.getElementById('content');

button.addEventListener('mousedown', toggleDisclosureWithClick);
button.addEventListener('keyup', toggleDisclosureWithKeydown);


function toggleDisclosureWithClick(e) {
  e.preventDefault();

  if (e.which === 1) {

    if (content.getAttribute('aria-hidden') === 'true') {

      content.setAttribute('aria-hidden', 'false');
      content.classList.remove('hidden');

      button.setAttribute('aria-expanded', 'true');
      button.classList.add('expanded');

    } else {

      content.setAttribute('aria-hidden', 'true');
      content.classList.add('hidden');

      button.setAttribute('aria-expanded', 'false');
      button.classList.remove('expanded');

    }
  }

}


function toggleDisclosureWithKeydown(e) {

  let key = e.keyCode;

  // If the key pressed was Space or Enter
  if (key === 13 || key === 32) {

    console.log("Hey it works");

    e.preventDefault();

    if (content.getAttribute('aria-hidden') === 'true') {

      content.setAttribute('aria-hidden', 'false');
      content.classList.remove('hidden');

      button.setAttribute('aria-expanded', 'true');
      button.classList.add('expanded');

    } else {

      content.setAttribute('aria-hidden', 'true');
      content.classList.add('hidden');

      button.setAttribute('aria-expanded', 'false');
      button.classList.remove('expanded');

    }
  }
}