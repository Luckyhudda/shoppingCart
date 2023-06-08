const url = 'https://fakestoreapi.com/products';
const cardBox = document.querySelector('.containerCards')


function displayData(data){
    data.forEach((item)=>{
        console.log(item);
        let card = document.createElement('div');
        card.classList.add('card')
        let image = document.createElement('img');
        image.src = item.image;
        image.classList.add('productImage');
        let price = document.createElement('p')
        price.textContent = `${item.price}$`
        let title = document.createElement('p');
        title.textContent = item.title;
        price.classList.add('price');
        title.classList.add('title');
        let addCart = document.createElement('button')
        addCart.classList.add('cardAddBtn')
        addCart.textContent = 'ADD TO CART'
        let div = document.createElement('div');
        div.classList.add('flex')
        div.append(price,addCart)
        card.append(image,title,div);
      
        cardBox.append(card)
    })
}



async function getData(){
    try{
        let data = await fetch(url);
        let finalData = await data.json()
        displayData(finalData)
    }catch{
        return `Something Wrong`
    }
}
getData()