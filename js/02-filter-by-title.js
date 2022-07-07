alert("hello world");

// const allProducts = document.querySelectorAll(".gallery > div");

// const showAllProducts = document.querySelector(".showAllProducts");
// const allFilterButtons = document.querySelectorAll(".filter-button");


// function filterByClass(e) {
//     allProducts.forEach((eachone) => {
//         eachone.classList.remove("hideProductFromSearch");
//         if(eachone.classList.contains(e.target.innerHTML) !== true) {
//             eachone.classList.add("hideProductFromSearch");
//         } 
//     })
// }

// allFilterButtons.forEach((eachone) => {
//     eachone.addEventListener("click", filterByClass);
// });

// showAllProducts.addEventListener("click", () => {
//     allProducts.forEach((eachone) => {
//         eachone.classList.remove("hideProductFromSearch");
//     });
// });
const allProducts = document.querySelectorAll(".new__products > .product-card");

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