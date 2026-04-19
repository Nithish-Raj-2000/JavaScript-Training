let allProducts = [];
let filteredProducts = [];

// Fetch API
async function fetchProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();

    allProducts = data;
    filteredProducts = data;

    document.getElementById("loader").style.display = "none";
    displayProducts(data);

  } catch (err) {
    document.getElementById("loader").style.display = "none";
    document.getElementById("error").innerText = "Error loading data";
  }
}

// Display Products
function displayProducts(products) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h4>${p.title.slice(0,20)}</h4>
        <p>${p.description.slice(0,60)}...</p>
        <button class="price-btn">$${p.price}</button>
        <button class ="view-btn" onclick="viewMore(${p.id})">View More</button>
      </div>
    `;
  });
}

// Search Filter
document.getElementById("search").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();

  filteredProducts = allProducts.filter(p =>
    p.title.toLowerCase().includes(value)
  );

  displayProducts(filteredProducts);
});

// Category Filter
document.getElementById("category").addEventListener("change", e => {
  const cat = e.target.value;

  if (cat === "all") {
    filteredProducts = allProducts;
  } else {
    filteredProducts = allProducts.filter(p => p.category === cat);
  }

  displayProducts(filteredProducts);
});

// Sorting
function sortProducts(type) {
  let sorted = [...filteredProducts];

  if (type === "low") {
    sorted.sort((a,b) => a.price - b.price);
  } else {
    sorted.sort((a,b) => b.price - a.price);
  }

  displayProducts(sorted);
}

// View More Modal
function viewMore(id) {
  const product = allProducts.find(p => p.id === id);

//   const modal = document.getElementById("modal");
  const content = document.getElementById("modalContent");

  content.innerHTML = `
    <h3>${product.title}</h3>
    <img src="${product.image}" style="width:100px">
    <p>${product.description}</p>
    <p><b>Price:</b> $${product.price}</p>
    <button onclick="closeModal()">Close</button>
  `;

  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Init
fetchProducts();