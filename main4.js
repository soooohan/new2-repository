const orderMethod = document.getElementById("orderMethod");
const orderMethodPic = document.getElementById("orderMethodPic");
const totalOrder = document.getElementById("totalOrder");
const totalPrice = document.getElementById("totalPrice");
const food1 = document.querySelector(".food1");
const food2 = document.querySelector(".food2");
const food3 = document.querySelector(".food3");
const food4 = document.querySelector(".food4");
const food5 = document.querySelector(".food5");

let price = 0;

function totalPriceCal() {
  let currentPrice = 0;
  if (orderMethodPic.value == 0) {
    currentPrice = price + 5000;
    totalPrice.innerText = `최종 금액 : ${currentPrice}원`;
  } else if (orderMethodPic.value == 1) {
    currentPrice = price * 0.8;
    totalPrice.innerText = `최종 금액 : ${currentPrice}원`;
  } else {
    totalPrice.innerText = `주문방식을 선택해주세요.`;
  }
}

function orderMP() {
  let OP = orderMethod.selectedIndex;
  if (OP == 0) {
    orderMethodPic.innerText = `배달 주문! (추가비용 5000원)`;
    orderMethodPic.value = 0;
  } else {
    orderMethodPic.innerText = `방문포장! (20퍼센트 할인!)`;
    orderMethodPic.value = 1;
  }
  totalPriceCal();
}

function food1F() {
  if (food1.checked) {
    price += parseInt(food1.value);
  } else {
    price -= parseInt(food1.value);
  }
  totalOrder.innerText = `선택 음식 금액 : ${price}원`;
  totalPriceCal();
}
function food2F() {
  if (food2.checked) {
    price += parseInt(food2.value);
  } else {
    price -= parseInt(food2.value);
  }
  totalOrder.innerText = `선택 음식 금액 : ${price}원`;
  totalPriceCal();
}
function food3F() {
  if (food3.checked) {
    price += parseInt(food3.value);
  } else {
    price -= parseInt(food3.value);
  }
  totalOrder.innerText = `선택 음식 금액 : ${price}원`;
  totalPriceCal();
}
function food4F() {
  if (food4.checked) {
    price += parseInt(food4.value);
  } else {
    price -= parseInt(food4.value);
  }
  totalOrder.innerText = `선택 음식 금액 : ${price}원`;
  totalPriceCal();
}
function food5F() {
  if (food5.checked) {
    price += parseInt(food5.value);
  } else {
    price -= parseInt(food5.value);
  }
  totalOrder.innerText = `선택 음식 금액 : ${price}원`;
  totalPriceCal();
}

totalPriceCal();
orderMethod.addEventListener("click", orderMP);
food1.addEventListener("change", food1F);
food2.addEventListener("change", food2F);
food3.addEventListener("change", food3F);
food4.addEventListener("change", food4F);
food5.addEventListener("change", food5F);