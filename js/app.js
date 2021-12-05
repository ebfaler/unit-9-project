// Event listener inspired by: https://codepen.io/mondal10/pen/WNNEvjV


let cards = document.querySelectorAll('.card');
let viewMore = document.querySelectorAll('.view-more');
let cardFace = document.querySelectorAll('.card__face');



cards.forEach((card) => {
  card.addEventListener('click', e => {
    if (e.target.classList == "view-more") {
      console.log("card flipped");
      if (card.classList.contains('is-flipped')) {
        card.classList.remove('is-flipped');
      } else {
        card.classList.add('is-flipped');
      }

    }
  });

  card.addEventListener('click', e => {
    if (e.target.classList.contains("card__face")) {
      console.log("card clicked");
      card.classList.remove('is-flipped');
    }
  })

}
);



