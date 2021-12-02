source: https://codepen.io/mondal10/pen/WNNEvjV

// var cards = document.querySelectorAll('.card');

// cards.forEach((card)=>{
//   card.addEventListener( 'click', function() {
//     card.classList.toggle('is-flipped');
//   });
// });


var cards = document.querySelectorAll('.card');
var viewMore = document.querySelectorAll('.view-more');


cards.forEach((card) =>

  card.addEventListener('click', e => {
    if (e.target.classList == "view-more") {
      console.log("card flipped");
      card.classList.toggle('is-flipped');
    }
  })
);

// cards.forEach((card) => {
//   const viewMore = card.querySelector('.view-more');
//   const viewProject = card.querySelector('.view-project');

//   viewMore.addEventListener('click', e => {
//     card.classList.toggle('is-flipped');
//   });
//   viewProject.addEventListener('click', e => {
//     console.log("view project");
//   });
// });




