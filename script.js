
const products = [
  {id:1, name:"Freedom Sunflower Oil", size:"1 Litre", price:150, category:"Cooking Oil", image:"images/freedom-sunflower-oil.webp"},
  {id:2, name:"India Gate Basmati Rice", size:"5 kg", price:450, category:"Rice & Grains", image:"images/india-gate-rice.webp"},
  {id:3, name:"White Label Sugar", size:"1 kg", price:45, category:"Sugar & Salt", image:"images/white-label-sugar.webp"},
  {id:4, name:"Tide Detergent Powder", size:"1 kg", price:110, category:"Household Care", image:"images/tide-detergent.webp"},
  {id:5, name:"Lay's Chips", size:"52 g", price:20, category:"Biscuits & Snacks", image:"images/lays-chips.webp"},
  {id:6, name:"Chana Dal", size:"500 g", price:65, category:"Rice & Grains", image:"images/chana-dal.webp"},
  {id:7, name:"Sprite Soft Drink", size:"750 ml", price:40, category:"Beverages", image:"images/sprite.webp"},
  {id:8, name:"Red Label Tea", size:"250 g", price:120, category:"Tea & Coffee", image:"images/red-label-tea.webp"},
  {id:9, name:"Mysore Sandal Soap", size:"150 g", price:85, category:"Personal Care", image:"images/mysore-sandal-soap.webp"},
  {id:10, name:"Fresh Tomato", size:"500 g", price:30, category:"Fresh Produce", image:"images/tomato.jpg"}
];

let cart = {};

const grid = document.getElementById("productGrid");
const search = document.getElementById("searchInput");
const sort = document.getElementById("sortSelect");
const cartCount = document.getElementById("cartCount");

let selectedCategory = "All Products";

function renderProducts() {
  const query = search.value.toLowerCase().trim();

  let list = products.filter(p => {
    const categoryMatch =
      selectedCategory === "All Products" ||
      p.category === selectedCategory;

    const searchMatch =
      (p.name + " " + p.category).toLowerCase().includes(query);

    return categoryMatch && searchMatch;
  });

  if (sort.value === "low") {
    list.sort((a, b) => a.price - b.price);
  } else if (sort.value === "high") {
    list.sort((a, b) => b.price - a.price);
  } else if (sort.value === "name") {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }

  grid.innerHTML = list.map(p => `
    <article class="product-card">
      <img class="product-image"
           src="${p.image}"
           alt="${p.name}"
           onerror="this.onerror=null;this.src='https://placehold.co/200x150?text=Product'">

      <h3 class="product-name">${p.name}</h3>
      <p class="product-size">${p.size}</p>
      <p class="product-price">₹${p.price}</p>

      <button class="add-btn" data-add="${p.id}">
        Add to Cart
      </button>
    </article>
  `).join("");

  document.getElementById("catalogTitle").textContent =
    selectedCategory;

  document.getElementById("itemCount").textContent =
    `(${list.length} items)`;

  document.getElementById("noResults").hidden = list.length > 0;
}

function updateCartCount() {
  const count = Object.values(cart).reduce(
    (total, quantity) => total + quantity, 0
  );

  cartCount.textContent = count;
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  let total = 0;

  const entries = Object.entries(cart).filter(
    ([id, quantity]) => quantity > 0
  );

  if (entries.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cartItems.innerHTML = entries.map(([id, quantity]) => {
      const p = products.find(item => item.id === Number(id));
      total += p.price * quantity;

      return `
        <div class="cart-row">
          <div>
            <strong>${p.name}</strong>
            <small>₹${p.price} × ${quantity}</small>

            <div class="quantity-controls">
              <button data-change="${id}" data-delta="-1">−</button>
              <span>${quantity}</span>
              <button data-change="${id}" data-delta="1">+</button>
              <button data-remove="${id}">Remove</button>
            </div>
          </div>
          <strong>₹${p.price * quantity}</strong>
        </div>
      `;
    }).join("");
  }

  document.getElementById("cartTotal").textContent = `₹${total}`;
  updateCartCount();
}

grid.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (!button) return;

  const id = Number(button.dataset.add);
  cart[id] = (cart[id] || 0) + 1;

  renderCart();

  button.textContent = "Added ✓";
  setTimeout(() => {
    if (button.isConnected) button.textContent = "Add to Cart";
  }, 800);
});

document.getElementById("cartItems").addEventListener("click", event => {
  const change = event.target.closest("[data-change]");
  const remove = event.target.closest("[data-remove]");

  if (change) {
    const id = Number(change.dataset.change);
    cart[id] = (cart[id] || 0) + Number(change.dataset.delta);

    if (cart[id] <= 0) delete cart[id];
  }

  if (remove) {
    delete cart[Number(remove.dataset.remove)];
  }

  renderCart();
});

document.querySelectorAll(".category").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".category").forEach(item =>
      item.classList.remove("active")
    );

    button.classList.add("active");
    selectedCategory = button.dataset.category;
    renderProducts();
  });
});

search.addEventListener("input", renderProducts);
sort.addEventListener("change", renderProducts);

document.getElementById("shopNow").addEventListener("click", () => {
  document.getElementById("productsSection").scrollIntoView({
    behavior: "smooth"
  });
});

document.getElementById("openCart").addEventListener("click", () => {
  renderCart();
  document.getElementById("cartDialog").showModal();
});

document.getElementById("openLogin").addEventListener("click", () => {
  document.getElementById("loginDialog").showModal();
});

document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById(button.dataset.close).close();
  });
});

document.getElementById("checkoutBtn").addEventListener("click", () => {
  alert(
    Object.keys(cart).length
      ? "Demo checkout: real payments are not connected."
      : "Your cart is empty."
  );
});

document.getElementById("loginForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("userName").value.trim();

  document.getElementById("loginMessage").textContent =
    `Welcome, ${name}! This is a demo login.`;
});

renderProducts();
renderCart();
    
