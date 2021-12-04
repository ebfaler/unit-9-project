source: https://codepen.io/mondal10/pen/WNNEvjV

// var cards = document.querySelectorAll('.card');

// cards.forEach((card)=>{
//   card.addEventListener( 'click', function() {
//     card.classList.toggle('is-flipped');
//   });
// });


var cards = document.querySelectorAll('.card');
var viewMore = document.querySelectorAll('.view-more');
var cardFace = document.querySelectorAll('.card__face');


Wille:
	cards.forEach((card) =>
{
  card.addEventListener('click', e => {
    if (e.target.classList == "view-more") {
      console.log("card flipped");
      if(card.classList.contains('is-flipped')){
        card.classList.remove('is-flipped');
      }else{
        card.classList.add('is-flipped');
      }
      
    }
  });

  card.addEventListener('click', e => {
   if(e.target.classList.contains("card__face"))    {
      console.log("card clicked");
      card.classList.remove('is-flipped');
    } 
  })

}
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




