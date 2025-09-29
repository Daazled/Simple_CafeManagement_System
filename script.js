const menuItems = [
  { id: 1, name: "Cappuccino", price: 3.5 },
  { id: 2, name: "Latte", price: 4.0 },
  { id: 3, name: "Espresso", price: 2.5 },
  { id: 4, name: "Sandwich", price: 5.0 },
  { id: 5, name: "Cake Slice", price: 3.0 },
  { id: 6, name: "Muffin", price: 2.0 }
];

const menuContainer = document.getElementById('menu-items');
const orderList = document.getElementById('order-list');
const totalSpan = document.getElementById('total');
let order = [];

// Display menu items as cards
menuItems.forEach(item => {
  const card = document.createElement('div');
  card.className = 'menu-card';
  card.innerHTML = `
    <h3>${item.name}</h3>
    <p>$${item.price.toFixed(2)}</p>
    <button onclick="addToOrder(${item.id})">Add</button>
  `;
  menuContainer.appendChild(card);
});

// Add to order
function addToOrder(id) {
  const item = menuItems.find(i => i.id === id);
  order.push(item);
  updateOrder();
}

// Update order display
function updateOrder() {
  orderList.innerHTML = '';
  let total = 0;
  order.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} - $${item.price.toFixed(2)}
      <button onclick="removeItem(${index})">❌</button>
    `;
    orderList.appendChild(li);
    total += item.price;
  });
  totalSpan.textContent = total.toFixed(2);
}

// Remove item
function removeItem(index) {
  order.splice(index, 1);
  updateOrder();
}

// Checkout
document.getElementById('checkout').addEventListener('click', () => {
  if(order.length === 0){
    alert("Your order is empty!");
  } else {
    alert(`Thank you for your order!\nTotal: $${totalSpan.textContent}`);
    order = [];
    updateOrder();
  }
});
