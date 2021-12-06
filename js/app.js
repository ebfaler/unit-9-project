// Event listener to flip cards. Click view more button to flip to inside card, click anywhere on the card to flip back
//Inspired by: https://codepen.io/mondal10/pen/WNNEvjV


let cards = document.querySelectorAll('.card');
let viewMore = document.querySelectorAll('.view-more');
let cardFace = document.querySelectorAll('.card__face');

cards.forEach((card) => {
  card.addEventListener('click', e => {
    if (e.target.classList == "view-more") {
      console.log("card flipped");

      card.classList.add('is-flipped');
      }
  });

  card.addEventListener('click', e => {
    if (e.target.classList.contains("card__face")) {
      console.log("card flipped back ");
      card.classList.remove('is-flipped');
    }
  })

}
);


// cards.forEach((card) => {
//   card.addEventListener('click', e => {
//     if (e.target.classList == "view-more") {
//       console.log("card flipped");
//       if (card.classList.contains('is-flipped')) {
//         card.classList.remove('is-flipped');
//       } else {
//         card.classList.add('is-flipped');
//       }

//     }
//   });

//   card.addEventListener('click', e => {
//     if (e.target.classList.contains("card__face")) {
//       console.log("card clicked");
//       card.classList.remove('is-flipped');
//     }
//   })

// }
// );



