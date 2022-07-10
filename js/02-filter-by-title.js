
// const allProducts = document.querySelectorAll(".new__products > .product-card");
const allProducts = document.querySelectorAll(".products-card-container > .product-card");

const showAllProducts = document.querySelector(".new-showAllProducts");
const allFilterButtons = document.querySelectorAll(".new-basic-filter-button");


function filterByClass(e) {
    allProducts.forEach((eachone) => {
        eachone.classList.remove("hideProductFromSearch");
        if(eachone.classList.contains(e.target.innerHTML) !== true) {
            eachone.classList.add("hideProductFromSearch");
            console.log("this works!");
            console.log(e.target.innerHTML);
        } 
    })
}

allFilterButtons.forEach((eachone) => {
    eachone.addEventListener("click", filterByClass);
});

showAllProducts.addEventListener("click", () => {
    allProducts.forEach((eachone) => {
        eachone.classList.remove("hideProductFromSearch");
    });
});