function handleCardClick(cardId) {
  let itemName = "";
  let itemPrice = 0;

  switch (cardId) {
    case "qiyqiriq":
      itemName = "Qiyqiriq сет";
      itemPrice = 45000;
      break;
    case "klassik":
      itemName = "Классик сет";
      itemPrice = 45000;
      break;
    case "longer_rings":
      itemName = "Лонгер рингс сет";
      itemPrice = 45000;
      break;
    default:
      alert("Nomalum product!");
      return;
  }

  let quantity = prompt(`Nechta zakaz qimoqchisiz ${itemName}?`);

  if (quantity > 0 && !isNaN(quantity)) {
    let totalPrice = itemPrice * quantity;
    alert(`Sizi zakaziz ${quantity} ${itemName} nech pulligi ${totalPrice} .`);

    if (confirm("Zakazi yopishga tayyormisiz?")) {
      alert("Zakaz qabul qilindi!");
    } else {
      alert("Zakaz otmena qilindi.");
    }
  } else {
    alert("Yaroqli miqdorni kiriting.");
  }
}
