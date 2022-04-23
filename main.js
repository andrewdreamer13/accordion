"use strict";
// accordion
accordion()

function accordion() {
  document.querySelectorAll('.accordion__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      let content = btn.nextElementSibling;
      let triangle = btn.children[1];
      if (content.style.maxHeight) {
        document.querySelectorAll('.accordion__content').forEach((element) => {
          element.style.maxHeight = null;
        })
        triangle.classList.remove('accordion__triangle-transform');
      } else {
        document.querySelectorAll('.accordion__content').forEach((element) => {
          element.style.maxHeight = null;
          content.style.maxHeight = content.scrollHeight + 'px';
        })
        document.querySelectorAll('.accordion__triangle').forEach((element) => {
          element.classList.remove('accordion__triangle-transform');
        })
        triangle.classList.add('accordion__triangle-transform');
      }

    })
  })
} //end of accordion function