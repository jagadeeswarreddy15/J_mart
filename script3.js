
const products = [
  // First 8 products
  {name:"Cadbury Dairy Milk Silk Chocolate Bar",category:"Chocolates",weight:"150 g",price:180,display:"₹175–₹180",image:"silk-150g.webp"},
  {name:"Britannia Good Day Butter Cookies",category:"Biscuits",weight:"150 g + 12% extra",price:30,image:"good-day.webp"},
  {name:"Cadbury Oreo Mega Family Pack",category:"Biscuits",weight:"876.75 g",price:300,image:"oreo-mega.webp"},
  {name:"Parle Hide & Seek With Almonds",category:"Biscuits",weight:"100 g",price:30,image:"hide-seek-almonds.webp"},
  {name:"Parle Hide & Seek Choco Chip",category:"Biscuits",weight:"100 g",price:30,image:"hide-seek-choco-chip.webp"},
  {name:"Garlic Bulbs",category:"Groceries",weight:"1 kg",price:180,image:"garlic.webp"},
  {name:"Red Shallots",category:"Groceries",weight:"1 kg",price:60,image:"shallots.webp"},
  {name:"Raw Shelled Peanuts",category:"Groceries",weight:"1 kg",price:120,image:"peanuts.webp"},

  // Lotte, Dark Fantasy and UNIBIC
  {name:"Lotte Original Choco Pie",category:"Biscuits",weight:"504 g / 18 pack",price:199,image:"download (45).webp"},
  {name:"Dark Fantasy Sandwich Creme Vanilla",category:"Biscuits",weight:"83 g",price:15,image:"download (44).webp"},
  {name:"Dark Fantasy Sandwich Creme Dark Crunch",category:"Biscuits",weight:"83 g",price:14,image:"images (15).jpeg"},
  {name:"Dark Fantasy Desserts Choco Nut Dipped",category:"Chocolates",weight:"100 g",price:49,image:"images (14).jpeg"},
  {name:"Dark Fantasy Desserts Choco Chunks",category:"Chocolates",weight:"75 g",price:57,image:"images (13).jpeg"},
  {name:"Dark Fantasy Yumfills Pie",category:"Biscuits",weight:"242 g",price:85,image:"download (43).webp"},
  {name:"Dark Fantasy Choco Fills",category:"Biscuits",weight:"75 g",price:32,image:"download (42).webp"},
  {name:"UNIBIC Fruit & Nut Cookies",category:"Biscuits",weight:"150 g",price:30,image:"images (12).jpeg"},
  {name:"UNIBIC Butter Cookies",category:"Biscuits",weight:"150 g",price:52,image:"images (11).jpeg"},
  {name:"UNIBIC Choco Chip Cookies",category:"Biscuits",weight:"150 g",price:30,image:"images (10).jpeg"},

  // Other products
  {name:"Godrej Cinthol Lime Soap",category:"Personal Care",weight:"100 g",price:42,image:"download (17).webp"},
  {name:"Bounty Coconut Milk Chocolate Bar",category:"Chocolates",weight:"57 g",price:80,image:"download (16).webp"},
  {name:"Hauser XO Ball Pens",category:"Stationery",weight:"10 pens",price:100,image:"hauser-pens.webp"},
  {name:"Ariel Complete Detergent Powder",category:"Household",weight:"500 g",price:82,image:"images (3).jpeg"},
  {name:"Fogg Paradise Body Spray",category:"Personal Care",weight:"120 ml",price:250,image:"fogg-paradise.webp"},
  {name:"KitKat 4-Finger",category:"Chocolates",weight:"38.5 g",price:30,image:"shopping (4).webp"},
  {name:"KitKat 2-Finger",category:"Chocolates",weight:"18.5 g",price:20,image:"images (2).jpeg"},
  {name:"Cadbury Dairy Milk",category:"Chocolates",weight:"25 g",price:25,image:"download (13).webp"},
  {name:"Snickers Chocolate Bar",category:"Chocolates",weight:"42 g",price:50,image:"download (11).webp"},
  {name:"Cadbury Dairy Milk Silk",category:"Chocolates",weight:"60 g",price:80,image:"download (12).webp"},

  // Oral care and soaps
  {name:"Dabur Red Paste",category:"Personal Care",weight:"300 g",price:150,display:"₹140–₹160",image:"download (23).webp"},
  {name:"Sensodyne Fresh Gel",category:"Personal Care",weight:"75 g",price:128,image:"download (22).webp"},
  {name:"Colgate ZigZag Charcoal Toothbrush",category:"Personal Care",weight:"1 piece",price:33,image:"download (21).webp"},
  {name:"Colgate ZigZag Medium Toothbrush",category:"Personal Care",weight:"1 piece",price:25,display:"₹19–₹35",image:"download (20).webp"},
  {name:"Ajay Quest Hard Toothbrush",category:"Personal Care",weight:"1 piece",price:18,image:"download (18).webp"},
  {name:"Sensodyne Sensitive Soft Toothbrush",category:"Personal Care",weight:"1 piece",price:50,display:"₹40–₹61",image:"images (4).jpeg"},
  {name:"Dove Cream Beauty Bathing Bar",category:"Personal Care",weight:"100 g",price:62,image:"shopping (7).webp"},
  {name:"Santoor Sandal & Turmeric Soap",category:"Personal Care",weight:"500 g / 4 pack",price:152,image:"shopping (6).webp"},
  {name:"Nature Power Papaya Aura Soap",category:"Personal Care",weight:"125 g",price:28,image:"nature-power-soap.webp"},
  {name:"Pears Soft & Fresh Glycerin Soap",category:"Personal Care",weight:"500 g / 4 pack",price:347,image:"pears-soap.webp"},

  // Tea, drinks and toothpaste
  {name:"Brooke Bond Taj Mahal Tea",category:"Beverages",weight:"250 g",price:185,image:"shopping (11).webp"},
  {name:"Brooke Bond 3 Roses Natural Care Tea",category:"Beverages",weight:"500 g",price:470,image:"download (27).webp"},
  {name:"Minute Maid Pulpy Orange",category:"Beverages",weight:"400 ml",price:35,image:"download (26).webp"},
  {name:"Coca-Cola Original",category:"Beverages",weight:"1.25 L",price:65,image:"shopping (10).webp"},
  {name:"Thums Up Party Pack",category:"Beverages",weight:"2 L",price:95,image:"shopping (9).webp"},
  {name:"Campa Cola",category:"Beverages",weight:"2 L",price:60,image:"shopping (8).webp"},
  {name:"Thums Up Soft Drink",category:"Beverages",weight:"750 ml",price:40,image:"download (25).webp"},
  {name:"Colgate MaxFresh Spicy Fresh",category:"Personal Care",weight:"150 g",price:144,image:"download (24).webp"},
  {name:"Closeup Everfresh+ Toothpaste",category:"Personal Care",weight:"300 g",price:230,image:"images (6).jpeg"},
  {name:"Colgate Strong Teeth Toothpaste",category:"Personal Care",weight:"200 g",price:130,image:"images (5).jpeg"},

  // Shampoo, salt and tea
  {name:"Santoor Fresh Skin Soap",category:"Personal Care",weight:"125 g",price:35,image:"download (34).webp"},
  {name:"Dove Intense Repair Shampoo",category:"Personal Care",weight:"180 ml",price:160,image:"download (33).webp"},
  {name:"Sunsilk Black Shine Shampoo",category:"Personal Care",weight:"180 ml",price:160,image:"download (32).webp"},
  {name:"Pantene Lively Clean Shampoo",category:"Personal Care",weight:"180 ml",price:192,image:"images (9).jpeg"},
  {name:"Head & Shoulders Classic Clean",category:"Personal Care",weight:"250 ml",price:180,image:"images (8).jpeg"},
  {name:"Head & Shoulders Cool Menthol",category:"Personal Care",weight:"180 ml",price:157,image:"download (31).webp"},
  {name:"Tata Vacuum Iodised Salt",category:"Groceries",weight:"1 kg",price:28,image:"download (30).webp"},
  {name:"Aashirvaad Iodized Salt",category:"Groceries",weight:"1 kg",price:24,image:"download (29).webp"},
  {name:"Tata Tea Chakra Gold Elaichi",category:"Beverages",weight:"100 g",price:80,image:"images (7).jpeg"},
  {name:"Tata Tea Chakra Gold Gemini",category:"Beverages",weight:"250 g",price:145,image:"download (28).webp"},

  // Snacks and oats
  {name:"UNIBIC Butter Cookies",category:"Biscuits",weight:"75 g",price:30,image:"download (41).webp"},
  {name:"UNIBIC Snackers Assorted Cookies",category:"Biscuits",weight:"675 g / 10 pack",price:228,image:"download (40).webp"},
  {name:"Bingo Korean Style Hot & Spicy Chips",category:"Snacks",weight:"90 g",price:50,image:"download (39).webp"},
  {name:"Bingo Tedhe Medhe Masala Tadka",category:"Snacks",weight:"75 g",price:20,image:"download (38).webp"},
  {name:"Bingo Cheese Nachos With Free Dip",category:"Snacks",weight:"82.5 g",price:40,image:"shopping (13).webp"},
  {name:"Bingo Hashtags Spicy Masala Chips",category:"Snacks",weight:"58 g",price:20,image:"shopping (12).webp"},
  {name:"Bingo Tedhe Medhe Mast Masala Tadka",category:"Snacks",weight:"20 g",price:5,image:"download (37).webp"},
  {name:"Bingo Mad Angles Mmmm Masala",category:"Snacks",weight:"66 g",price:18,image:"download (36).webp"},
  {name:"Bingo Chilli Sprinkled Potato Chips",category:"Snacks",weight:"90 g",price:30,image:"download (35).webp"},
  {name:"Quaker Rolled Oats Cereal",category:"Groceries",weight:"1 kg",price:175,display:"₹160–₹190",image:"images.webp"},

  // Additional 10 products
  {name:"Brooke Bond Red Label Tea",category:"Beverages",weight:"500 g",price:250,image:"red-label-tea.webp"},
  {name:"Lay's American Style Cream & Onion Chips",category:"Snacks",weight:"50 g",price:20,image:"lays-chips.webp"},
  {name:"Parry's White Label Sugar",category:"Groceries",weight:"1 kg",price:60,image:"white-label-sugar.webp"},
  {name:"Mysore Sandal Soap",category:"Personal Care",weight:"150 g",price:75,image:"mysore-sandal-soap.webp"},
  {name:"Rajdhani Chana Dal",category:"Groceries",weight:"1 kg",price:139,image:"chana-dal.webp"},
  {name:"Tide Plus Double Power Detergent",category:"Household",weight:"500 g",price:69,image:"tide-detergent.webp"},
  {name:"Sprite Sparkling Drink",category:"Beverages",weight:"2 L",price:85,image:"sprite.webp"},
  {name:"Fresh Tomato",category:"Groceries",weight:"1 kg",price:40,image:"tomato.jpg"},
  {name:"Freedom Refined Sunflower Oil",category:"Groceries",weight:"1 L",price:170,image:"freedom-sunflower-oil.webp"},
  {name:"India Gate Dubar Basmati Rice",category:"Groceries",weight:"1 kg",price:139,image:"india-gate-rice.webp"}
];

const productsArea = document.getElementById("products");
const search = document.getElementById("search");
const categoriesArea = document.getElementById("categories");
const cartItemsArea = document.getElementById("cartItems");

let activeCategory = "All";
let cart = {};

function money(amount) {
  return "₹" + amount.toLocaleString("en-IN");
}

function renderCategories() {
  const categories = ["All", ...new Set(products.map(p => p.category))];

  categoriesArea.innerHTML = categories.map(category => `
    <button class="category-btn ${activeCategory === category ? "active" : ""}"
      data-category="${category}">
      ${category}
    </button>
  `).join("");
}

function renderProducts() {
  const query = search.value.toLowerCase();

  let list = products.filter(product => {
    const matchesSearch =
      (product.name + " " + product.category + " " + product.weight)
      .toLowerCase().includes(query);

    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const sort = document.getElementById("sort").value;
  if (sort === "low") list.sort((a, b) => a.price - b.price);
  if (sort === "high") list.sort((a, b) => b.price - a.price);
  if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));

  document.getElementById("count").textContent =
    `${list.length} products found out of ${products.length}`;

  productsArea.innerHTML = list.map(product => {
    const index = products.indexOf(product);

    return `
      <article class="product">
        <img
          src="images/${product.image.split("/").map(encodeURIComponent).join("/")}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.style.display='none'">

        <h3>${product.name}</h3>
        <p class="weight">${product.weight}</p>
        <p class="price">${product.display || money(product.price)}</p>

        <button class="add-btn" data-add="${index}">
          Add to Cart
        </button>
      </article>
    `;
  }).join("");
}

function renderCart() {
  const entries = Object.entries(cart);

  document.getElementById("cartCount").textContent =
    entries.reduce((sum, [, qty]) => sum + qty, 0);

  cartItemsArea.innerHTML = entries.length ? entries.map(([index, qty]) => {
    const p = products[Number(index)];

    return `
      <div class="cart-item">
        <div>
          <strong>${p.name}</strong>
          <p>${money(p.price)} × ${qty}</p>
        </div>
        <div>
          <button data-change="${index}" data-delta="-1">−</button>
          ${qty}
          <button data-change="${index}" data-delta="1">+</button>
        </div>
      </div>
    `;
  }).join("") : "Your cart is empty.";

  const total = entries.reduce((sum, [index, qty]) =>
    sum + products[Number(index)].price * qty, 0);

  document.getElementById("total").textContent = money(total);
}

categoriesArea.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;
  renderCategories();
  renderProducts();
});

productsArea.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (!button) return;

  const index = button.dataset.add;
  cart[index] = (cart[index] || 0) + 1;
  renderCart();
});

cartItemsArea.addEventListener("click", event => {
  const button = event.target.closest("[data-change]");
  if (!button) return;

  const index = button.dataset.change;
  cart[index] = (cart[index] || 0) + Number(button.dataset.delta);

  if (cart[index] <= 0) delete cart[index];
  renderCart();
});

search.addEventListener("input", renderProducts);
document.getElementById("sort").addEventListener("change", renderProducts);

document.getElementById("cartButton").addEventListener("click", () => {
  document.getElementById("cartSection").scrollIntoView({behavior: "smooth"});
});

document.getElementById("clearCart").addEventListener("click", () => {
  cart = {};
  renderCart();
});

renderCategories();
renderProducts();
renderCart();
                                            
