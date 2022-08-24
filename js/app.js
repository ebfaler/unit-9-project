// Event listener to flip cards. Click view more button to flip to inside card, click anywhere on the card to flip back

let cards = document.querySelectorAll('.card');
// let viewMore = document.querySelectorAll('.view-more');
// let cardFace = document.querySelectorAll('.card__face');

cards.forEach((card) => {

  card.addEventListener('click', e => {
    if (card.classList.contains('is-flipped') && e.target.tagName.toLowerCase() !== 'a') {
      card.classList.remove('is-flipped');
    } else if (e.target.classList == "view-more") {
      card.classList.add('is-flipped');
    }
  });

}
);


// Event listener for form submit button

const submit = document.querySelector('.btn-primary');
const email = document.getElementById('exampleFormControlInput1');
const message = document.getElementById('exampleFormControlTextarea1');


// submit.addEventListener('click', () => {
// // ensure email and message fields are filled out
// if (email.value === "" && message.value === "") {
//   alert("Please fill out email and message fields before sending");
// } else if (email.value === "") {
//   alert("Please fill out email field before sending");
// } else if (message.value === "") {
//   alert("Please fill out message field before sending");
// } else {
//   alert("Message successfully sent!");
// }


// })

// Bootstrap JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

