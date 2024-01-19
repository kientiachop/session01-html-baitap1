document.addEventListener('DOMContentLoaded', function () {
  const cartButton = document.getElementById('cart');
  const closeButton = document.querySelector('.close');
  const closeFooterButton = document.querySelector('.close-footer');
  const orderButton = document.querySelector('.order');
  const modal = document.getElementById('myModel');

  cartButton.addEventListener('click', function () {
    modal.style.display = 'block';
  });

  closeButton.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  closeFooterButton.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
  

  
  const addToCartButtons = document.querySelectorAll('.btn-cart');
  addToCartButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const product = this.parentElement.parentElement.parentElement;
      const productName = product.querySelector('.content-product-h3').innerText;
      const productPrice = product.querySelector('.money').innerText;

      addItemToCart(productName, productPrice);
      updateCartTotal();
    });
  });

  
  const cartItems = document.querySelector('.cart-items');
  cartItems.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-remove')) {
      const button = event.target;
      const row = button.parentElement.parentElement;
      const name = row.querySelector('.cart-item').innerText;
      removeItemFromCart(name);
      updateCartTotal();
    }

    if (event.target.classList.contains('btn-increase')) {
      const button = event.target;
      const row = button.parentElement.parentElement;
      const name = row.querySelector('.cart-item').innerText;
      increaseItemQuantity(name);
      updateCartTotal();
    }

    if (event.target.classList.contains('btn-decrease')) {
      const button = event.target;
      const row = button.parentElement.parentElement;
      const name = row.querySelector('.cart-item').innerText;
      decreaseItemQuantity(name);
      updateCartTotal();
    }
  });

  function addItemToCart(name, price) {
    const cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    const cartRowContents = `
      <span class="cart-item cart-column">${name}</span>
      <span class="cart-price cart-column">${price}</span>
      <span class="cart-quantity cart-column">1</span>
      <button class="btn btn-increase">+</button>
      <button class="btn btn-decrease">-</button>
      <button class="btn btn-remove">X</button>
    `;
    cartRow.innerHTML = cartRowContents;
    cartItems.appendChild(cartRow);
  }

  function removeItemFromCart(name) {
const cartRows = document.querySelectorAll('.cart-row');
    cartRows.forEach(function (row) {
      if (row.querySelector('.cart-item').innerText === name) {
        row.remove();
      }
    });
  }

  function increaseItemQuantity(name) {
    const cartRows = document.querySelectorAll('.cart-row');
    cartRows.forEach(function (row) {
      if (row.querySelector('.cart-item').innerText === name) {
        const quantityElement = row.querySelector('.cart-quantity');
        let quantity = parseInt(quantityElement.innerText);
        quantity++;
        quantityElement.innerText = quantity;
      }
    });
  }

  function decreaseItemQuantity(name) {
    const cartRows = document.querySelectorAll('.cart-row');
    cartRows.forEach(function (row) {
      if (row.querySelector('.cart-item').innerText === name) {
        const quantityElement = row.querySelector('.cart-quantity');
        let quantity = parseInt(quantityElement.innerText);
        if (quantity > 1) {
          quantity--;
          quantityElement.innerText = quantity;
        }
      }
    });
  }

  function updateCartTotal() {
    const cartRows = document.querySelectorAll('.cart-row');
    let total = 0;

    cartRows.forEach(function (row) {
      const priceElement = row.querySelector('.cart-price');
      const quantityElement = row.querySelector('.cart-quantity');
      const price = parseFloat(priceElement.innerText.replace('đ', ''));
      const quantity = parseInt(quantityElement.innerText);
      total += price * quantity;
    });

    document.querySelector('.cart-total-price').innerText = total + 'VNĐ';
  }
});











// //hiển thị giỏ hàng (model)
// var model = document.getElementById("myModel");
// var btn = document.getElementById("cart");
// var close = document.getElementsByClassName("close")[0];
// //mỗi close là một html collection nên khi muốn lấy giá trị html thì phải thêm [0]
// //nếu có 2 component cùng class thì khi [0] sẽ hiển thị component 1 còn [1] sẽ hiển thị là 2
// var close_footer = document.getElementsByClassName("close-footer")[0];
// var order = document.getElementsByClassName("order")[0];
// btn.onclick = function() {
//   model.style.display = "block";
// }
// close.onclick = function() {
//   model.style.display = "none";
// }
// close_footer.onclick = function() {
//   model.style.display = "none";
// }
// order.onclick = function() {
//   alert("Cảm ơn bạn đã thanh toán đơn hàng");
// }
// windows.onclick = function(event) {
//   if (event.targer == model) {
//     model.style.display = "none";
//   }
// }

// //xóa cart
// var remove_cart = document.getElementsByClassName("btn-danger")
// for (var i = 0; i < remove_cart.length; i++) {
//   var button = remove_cart[i]
//   button.addEventListener("click",function() {
//     var button_remove = event.target
//     button_remove.parentElement.parentElement.remove()
//   })
// }

// //update card
// function updateCart() {
//   var cart_item = document.getElementsByClassName("cart-items")[0];
//   var cart_rows = cart_item.getElementsByClassName("cart-row");
//   var total = 0;
//   for (let i = 0; i < cart_rows.length; i++) {
//     var cart_row = cart_rows[i];
//     var price_item = cart_row.getElementsByClassName("cart-price")[0]
//     var quantity_item = cart_row.getElementsByClassName("card-quantity-input")[0]
//     var price = parseFloat(price_item.innerText)//chuyển một chuổi string sang number để tính tổng tiền
//     var quantity = quantity_item.value //lấy giá trị trong thẻ input
//     total = total + (price * quantity) 
//   }
//   document.getElementsByClassName("cart-total-price")[0].innerText = total + 'VNĐ'
//   // thay text = total trong .cart-total-price. chỉ có một .cart-total-price nên sử dụng [0].
// }


// // thay đổi số lượng sản phẩm
// var quantity_input = document.getElementsByClassName("cart-quantity-input");
// for (var i = 0; i < quantity_input.length; i++) {
//   var input = quantity_input[i];
//   input.addEventListener("change", function (event) {
//     var input = event.target
//     if (isNaN(input.value) || input.value <= 0) {
//       input.value = 1;
//     }
//     updateCart()
//   })
// }
// // Thêm vào giỏ
// var add_cart = document.getElementsByClassName("btn-cart");
// for (var i = 0; i < add_cart.length; i++) {
//   var add = add_cart[i];
//   add.addEventListener("click", function (event) {

//     var button = event.target;
//     var product = button.parentElement.parentElement;
//     var img = product.parentElement.getElementsByClassName("img-prd")[0].src
//     var title = product.getElementsByClassName("content-product-h3")[0].innerText
//     var price = product.getElementsByClassName("price")[0].innerText
//     addItemToCart(title, price, img)
//     // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
//     modal.style.display = "block";
    
//     updatecart()
//   })
// }


// //thêm sản phẩm vào giỏ
// function addItemToCart(title, price, img) {
//   var cartRow = document.createElement('div')
//   cartRow.classList.add('cart-row')
//   var cartItems = document.getElementsByClassName('cart-items')[0]
//   var cart_title = cartItems.getElementsByClassName('cart-item-title')
//   //Nếu title của sản phẩm bằng với title mà thêm vao giỏ hàng thì sẽ thông cho user.
//   for (var i = 0; i < cart_title.length; i++) {
//     if (cart_title[i].innerText == title) {
//       alert('Sản Phẩm Đã Có Trong Giỏ Hàng')
//       return
//     }
//   }

//   var cartRowContents = `
//   <div class="cart-item cart-column">
//       <img class="cart-item-image" src="${img}" width="100" height="100">
//       <span class="cart-item-title">${title}</span>
//   </div>
//   <span class="cart-price cart-column">${price}</span>
//   <div class="cart-quantity cart-column">
//       <input class="cart-quantity-input" type="number" value="1">
//       <button class="btn btn-danger" type="button">Xóa</button>
//   </div>`
//   cartRow.innerHTML = cartRowContents
//   cartItems.append(cartRow)
//   cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
//     var button_remove = event.target
//     button_remove.parentElement.parentElement.remove()
//     updatecart()
//   })
//   cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
//     var input = event.target
//     if (isNaN(input.value) || input.value <= 0) {
//       input.value = 1;
//     }
//     updatecart()
//   })
// }