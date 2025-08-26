const cardsHeart = document.getElementsByClassName("card-heart");
console.log(cardsHeart);
for (const cardHeart of cardsHeart) {
  cardHeart.addEventListener("click", () => {
    const navHeart = document.getElementById("nav-heart").innerText;
    let heartCount = Number(navHeart) + 1;
    console.log(heartCount);
    document.getElementById("nav-heart").innerText = heartCount;
  });
}
