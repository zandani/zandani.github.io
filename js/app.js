// Give message when click on sent button
const button = document.querySelector('button');
button.addEventListener('click', event => {
  event.preventDefault();
  alert('Thank you for your information!');
});

// When click on nav bar move smooth to the section

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[href^='#");
  links.forEach(function (link) {
    link.addEventListener('click',  () => {
      event.preventDefault();
      let ref = link.getAttribute('href');
        window.scroll({
          behavior: 'smooth',
          left: 0,
          top: document.querySelector(ref).offsetTop
        });
    });
  });
});
