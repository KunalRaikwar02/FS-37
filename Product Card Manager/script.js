let createBtn = document.querySelector(".create");
let closeBtn = document.querySelector("#close");
let formBox = document.querySelector(".form-box");
let form = document.querySelector("form");
let container = document.querySelector(".container");

let productArr = [];

productArr.forEach((val) => {
  container.innerHTML += `<div class="card">
    
            <div class="img">
                <img src="${val.productImage}" alt="Product Image">
            </div>

            <div class="product-details">
                <h2>${val.productName}</h2>
                <p class="price">$${val.productPrice}</p>
            </div>

            <div class="actions">
                <button class="update">Update</button>
                <button class="delete">Delete</button>
            </div>

        </div>`;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let productName = form[0].value;
  let productPrice = form[1].value;
  let productImage = form[2].value;

  if (!productImage || !productName || !productPrice) {
    alert("all fields are required");
    return;
  }

  let productObj = {
    productName,
    productPrice,
    productImage,
  };

  productArr.push(productObj);

  console.log(productArr);

  container.innerHTML = "";

  productArr.forEach((val) => {
    container.innerHTML += `<div class="card">

            <div class="img">
                <img src="${val.productImage}" alt="Product Image">
            </div>

            <div class="product-details">
                <h2>${val.productName}</h2>
                <p class="price">$${val.productPrice}</p>
            </div>

            <div class="actions">
                <button class="update">Update</button>
                <button class="delete">Delete</button>
            </div>

        </div>`;
  });

  form.reset();
});

createBtn.addEventListener("click", () => {
  formBox.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  formBox.style.display = "none";
});