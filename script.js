const seats = document.querySelectorAll(".busSeat");
let count = 0;

for (const seat of seats) {
  seat.addEventListener("click", function (e) {
    count = count + 1;

    if (count == 4) {
      for (const s of seats) {
        s.setAttribute("disabled", true);
      }
    }

    const test = (seat.style.backgroundColor = "green");
    seat.style.color = "white";

    const totalSeats = document.getElementById("seatLeft").innerText;
    const totalSeatInt = parseInt(totalSeats);
    document.getElementById("seatLeft").innerText = totalSeatInt - 1;

    const price = document.getElementById("totalPrice").innerText;
    const totalPriceInt = parseInt(price);
    const totalPrice = totalPriceInt + 550;

    const seatNo = e.target.innerText;
    const p = document.createElement("p");
    p.innerText = seatNo;
    const p2 = document.createElement("p");
    p2.innerText = "Economy";
    const p3 = document.createElement("p");
    p3.innerText = "550";

    appendChild("seatName", p);
    appendChild("class", p2);
    appendChild("price", p3);

    setTextElementValueById("grandTotal", totalPrice);
    setTextElementValueById("totalPrice", totalPrice);
    setTextElementValueById("seatNo", count);
  });
}

// ------------------------------------------------------------------

document.getElementById("coupon").addEventListener("keyup", function (e) {
  const text = e.target.value;
  const token = document.getElementById("couponApply");
  if (text === "NEW15") {
    token.removeAttribute("disabled");
    const takeTotalPrice = document.getElementById("grandTotal").innerText;
    const grandTotalInt = parseInt(takeTotalPrice);
    newDiscountTotal = grandTotalInt - grandTotalInt * 0.15;
  } else if (text === "Couple 20") {
    token.removeAttribute("disabled");
    const takeTotalPrice = document.getElementById("grandTotal").innerText;
    const grandTotalInt = parseInt(takeTotalPrice);
    newDiscountTotal = grandTotalInt - grandTotalInt * 0.2;
  } else {
    token.setAttribute("disabled", true);
  }
});
function discountedGrandTotal() {
  setTextElementValueById("grandTotal", newDiscountTotal);
  document.getElementById("couponApply").classList.add("hidden");
  document.getElementById("couponHolder").classList.add("hidden");
}
// --------------------------------------------------------------------------------
document.getElementById("PhoneNo").addEventListener("keyup", function (e) {
  const text = e.target.value;
  const input = document.getElementById("modal");
  if (!isNaN(text) && text.length === 11) {
    input.removeAttribute("disabled");
  } else {
    input.setAttribute("disabled", true);
  }
});

// utility----------------------------------------------------------------------------
function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
function appendChild(elementId, value) {
  const element = document.getElementById(elementId);
  element.appendChild(value);
}
