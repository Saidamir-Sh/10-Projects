const burgers = [
    {
        title: "Chicken-Deluxe",
        img: "img/1.png",
        amount: "200 gr",
        price: 4.25 ,
    },
    {
        title: "Big John",
        img: "img/2.png",
        amount: "350 gr",
        price: 4.35,
    },
    {
        title: "Spicy Chicken",
        img: "img/3.png",
        amount: "250 gr",
        price: 3.59,
    },
    {
        title: "Spicy Bacon",
        img: "img/4.png",
        amount: "400 gr",
        price: 4.99,
    },
    {
        title: "Superstars",
        img: "img/5.png",
        amount: "300 gr",
        price: 4.59,
    },
    {
        title: "Double Burger",
        img: "img/6.png",
        amount: "450 gr",
        price: 5.29,
    },
]
/*=-=-=- Burgers section =-=-=-=*/
const burgerBoard = document.querySelector(".foods__burger");
/*=-=-=-=- CONTENT =-=-=-==-=-*/
window.addEventListener('DOMContentLoaded', function () {
    displayBurgers(burgers);
});

/* DISPLAYING CARDS */
function displayBurgers(menuBurgers) {
    let displayCards = menuBurgers.map(function (item) {
        return `
        <div class="burger">
                        <div class="burger__img">
                            <img src=${item.img} alt="Burger Image" class="burgers">
                        </div>
                        <div class="burger__title">
                            <h3>${item.title}</h3>
                        </div>
                        <div class="burger__amount">
                            <p class="grey-font">${item.amount}</p>
                        </div>
                        <div class="burger__cost">
                            <p>${item.price}$</p>
                        </div>
                    </div>
        `
    });
    
displayCards = displayCards.join("");
burgerBoard.innerHTML = displayCards;
}