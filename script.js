const filterButtons = document.querySelectorAll('.filter-buttons button');
const filterableCards = document.querySelectorAll('.filterable-cards .card');
console.log(filterableCards);
console.log(filterButtons);

function filterCards(e){
    document.querySelector('.active').classList.remove("active");
    e.target.classList.add("active");

    
    filterableCards.forEach(card => {
        card.classList.add("hide");
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all" ){
            card.classList.remove("hide");
        }
    })
   
   
}

filterButtons.forEach(button => button.addEventListener('click' , filterCards));
