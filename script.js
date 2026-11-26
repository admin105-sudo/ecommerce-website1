let cart = 0;

function addToCart() {
    cart++;
    document.getElementById("cartCount").innerText = cart;
}

const search = document.getElementById("search");

search.addEventListener("keyup", function () {

    let searchValue = this.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let productName = card.querySelector("h3")
                              .textContent
                              .toLowerCase();

        if (productName.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
});