// const button = document.querySelector('.see-more');



// button.addEventListener('click', e => {
//  console.log("button clicked");
//  button.classList.toggle("flipCard");
// });

var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});