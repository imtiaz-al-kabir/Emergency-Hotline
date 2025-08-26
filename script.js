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

const cardCallButtons = document.getElementsByClassName("card-call");
for (const cardCallButton of cardCallButtons) {
  cardCallButton.addEventListener("click", () => {
    const subTitle = cardCallButton.parentNode.parentNode.children[2].innerText;
    const phnNumber =
      cardCallButton.parentNode.parentNode.children[3].innerText;

    let pointCount = document.getElementById("points-count").innerText;
    let newPoints = Number(pointCount) - 20;
    if (pointCount >= 20) {
      alert(`Calling ${subTitle} ${phnNumber}....`);
      document.getElementById("points-count").innerText = newPoints;
      let date = new Date().toLocaleTimeString();
      const history = document.getElementById("history-container");
      const newDiv = document.createElement("div");
      newDiv.innerHTML = `
     <div
                class="flex justify-between items-center bg-[#fafafa] rounded-lg p-4 mt-4"
              >
                <div>
                  <h1 class="font-bold">${subTitle}</h1>
                  <p class="font-semibold">${phnNumber}</p>
                </div>
                <div>${date}</div>
              </div>
    
    `;

      history.append(newDiv);
    } else {
      alert(` You Dont Have Enought points to Call`);
    }
  });
}

const clear = document
  .getElementById("clear-btn")
  .addEventListener("click", () => {
    let history = document.getElementById("history-container");
    history.innerHTML = "";
  });

  