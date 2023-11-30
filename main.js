let menuOrders = document.getElementById('menu-list')
let itemsCoount = document.getElementById('items-count')
let sum = document.getElementById('sum')
let ordersList = document.getElementById('orders-list')

const renderMenuItem = (product) => {           // verskaSYN JASAP BERET
    return`
    <div class="food-card" onClick="clickCard(event)" data-product='${JSON.stringify(product)}'>
    <img src="${product.img}" class="food-img"> 
    <div>
        <div> ${product.title} </div>
        <div> ${product.price} </div>
    </div>
  </div>
    `
}

const renderLishka = (li) => {
    return `
              <li class="order-item"> 
                       <div> ${li.title} </div>
                       <span> ${li.count} </span>
                       <span> ${li.price} </span>
                       <span> x </span>
              </li>
    `
}

const lishka = (el) => {
   let items = []
   el.map((elem) => {
    items.push(renderLishka(elem))
   })
   ordersList.innerHTML = items.join('')
}

const renderOrdersList = (list) => {       // //brauzerge verskany chygaruuchu funksia
    let items = []
    list.map((el) => {                      // listte 6 dannyi
        items.push(renderMenuItem(el))
    })
    menuOrders.innerHTML = items.join('')
    }
    renderOrdersList(menuItem)

    const clickCard = (event) => {
        let card = JSON.parse(event.currentTarget.dataset.product)
        let currentIndex = ordersBasket.findIndex((el) => el.id == card.id)  //barabar bolot // findIndex- idlerdi salyshtyrat

        if(currentIndex == -1){
            ordersBasket.push({...card, count: 1})          // count kolichestvo uchun kk (can)
        } else{
            ordersBasket[currentIndex].count++
            ordersBasket[currentIndex].price += card.price
        }
        summa()
        itemCount()
        lishka(ordersBasket)
    }

    const summa = () => {
        sum.innerHTML = ordersBasket.reduce((el, {price}) => el + price, 0)
    } 
    const itemCount = () => {
        itemsCoount.innerHTML = ordersBasket.reduce((el, {count}) => el + count, 0)
    }

