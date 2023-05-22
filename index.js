const shoppingList = [
  { name: "Apple", quantity: 3, purchased: false, pricePerUnit: 0.5, total: 0 },
  { name: "Banana", quantity: 5, purchased: true, pricePerUnit: 0.3, total: 0 },
  { name: "Milk", quantity: 1, purchased: false, pricePerUnit: 1.5, total: 0 },
  { name: "Bread", quantity: 2, purchased: true, pricePerUnit: 1, total: 0 },
];

function displayShoppingList() {
  shoppingList.sort((a, b) =>
    a.purchased === b.purchased ? 0 : a.purchased ? 1 : -1
  );

  for (let item of shoppingList) {
    const status = item.purchased ? "Purchased" : "Not purchased";
    console.log(
      `${item.name} - ${
        item.quantity
      } - ${status} - $${item.pricePerUnit.toFixed(2)} - $${item.total.toFixed(
        2
      )}`
    );
  }
}

function purchaseProduct(productName) {
  for (let item of shoppingList) {
    if (item.name === productName) {
      item.purchased = true;
      calculateTotal(item);
      break;
    }
  }
}

function calculateTotal(item) {
  item.total = item.quantity * item.pricePerUnit;
}


displayShoppingList();


purchaseProduct("Apple");
displayShoppingList();

