const products = [
  { id: 1, name: "T-Shirt", price: 19.99, image: "assets/product1.jpg" },
  { id: 2, name: "Mug", price: 9.99, image: "assets/product2.jpg" },
];

const container = document.getElementById("products");
products.forEach(p => {
  container.innerHTML += `
    <div class="product">
      <img src="${p.image}" width="150"><br>
      <strong>${p.name}</strong><br>
      $${p.price}<br>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `;
});

function addToCart(id) {
  alert("Product " + id + " added to cart.");
}
