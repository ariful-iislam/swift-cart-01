// console.log("50");

// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     data.forEach((product) => {});
//   });
// console.log("https://fakestoreapi.com/products");

const container = document.getElementById("product-container");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((product) => {
      const div = document.createElement("div");
      div.className = "bg-white p-4 px-4 py-4 rounded shadow";

      div.innerHTML = `
        <img src="${product.image}" class="h-40 mx-auto mb-4">
        <h2 class="font-bold">${product.title}</h2>
        <p class="text-blue-600 font-semibold">$${product.price}</p>
      `;

      container.appendChild(div);
    });
  });
