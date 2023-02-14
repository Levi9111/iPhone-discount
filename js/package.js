function percentCalculater(percent, num) {
  const value = Math.trunc((percent / 100) * num);

  // const val = `${percent}% of ${num} is  ${value}`;
  // return val;
  return value;
}

document.getElementById("btn").addEventListener("click", function () {
  const display = document.getElementById("input-display");
  display.classList.remove("promo-display");
  const applybtn = document.getElementById("apply-btn");

  applybtn.addEventListener("click", function () {
    const promo = document.getElementById("promo");

    if (promo.value == "DISC30") {
      document.getElementById("discount-control").classList.remove("discount");

      const innerPrice = document.getElementById("price-control");

      const priceControlString = innerPrice.innerText;

      const priceControl = parseFloat(priceControlString);

      const calculateDiscount = percentCalculater(30, priceControl);

      const discountPrice = priceControl - calculateDiscount;

      innerPrice.innerText = discountPrice;
    }
    promo.value = "";
  });
});

console.log(`promo code: DISC30`);
