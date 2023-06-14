const product =JSON.parse(localStorage.getItem('product'));
const cartBox = document.querySelector(".cartContainer");

function displayData(data) {

  console.log(data);
  data.forEach((item,i) => {
    let finalcard = document.createElement("div");
    let finalimage = document.createElement("img");
    let finalprice = document.createElement("p");
    let finaltitle = document.createElement("p");
    finalcard.classList.add("card");
    finalimage.src = item.image;
    finalimage.classList.add("productImage");
    finalprice.textContent = `${item.price}$`;
    finaltitle.textContent = item.title;
    finalprice.classList.add("price");
    finaltitle.classList.add("title");
    let buyCart = document.createElement("button");
    buyCart.classList.add("cartAddBtn");
    buyCart.textContent = "Buy Now";
    let div = document.createElement("div");
    div.classList.add("flex");
    div.append(finalprice, buyCart);
    finalcard.append(finalimage, finaltitle, div);

    cartBox.append(finalcard);

   
  });
}
displayData(product)
