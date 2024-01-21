
//function to save Data
function showData() { 
  var cardNumber = document.getElementById("cardNumber").value;
  var expiryDate = document.getElementById("expiryDate").value;
  var cvc = document.getElementById("cvc").value; 
  var dataList;
  if (localStorage.getItem("dataList") == null ) {
    dataList = [];
  }
  else {
    dataList= JSON.parse(localStorage.getItem("dataList"))
  }
  var html = "";

  dataList.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.cardNumber + "</td>";
    html += "<td>" + element.expiryDate + "</td>";
    html += "<td>" + element.cvc+ "</td>";
    html += '<td><button onclick="viewData(' +
    index +
    ')">View</button><button onclick="deleteData"(' +
    index +
    ')">Delete</button><button onclick="updateData"(' +
    index + 
    ')">Update</button></td>';
    html +="</tr>";
  })

  document.querySelector("#crudTable tbody").innerHTML = html;
}
//save all data when document or page loaded
document.onload = showData();

//function to add data
function save() {
  var dataList;
  if (localStorage.getItem("dataList") == null ) {
    dataList = [];
  }
  else {
    dataList= JSON.parse(localStorage.getItem("dataList"))
  }

  dataList.push({
    cardNumber: cardNumber,
    expiryDate: expiryDate,
    cvc: cvc
  });

  localStorage.setItem("dataList", JSON.stringify(dataList));
  save();
  document.getElementById("cardNumber").value = "";
  document.getElementById("expiryData").value = "";
  document.getElementById("cvc").value = "";
}


/* let datum = JSON.parse(localStorage.getItem("dataCard")) || [];
function save() {
  var cardNumber = document.getElementById("cardNumber").value;
  var expiryDate = document.getElementById("expiryDate").value;
  var cvc = document.getElementById("cvc").value;

  let data = {
    cardNumber : cardNumber,
    expiryDate: expiryDate,
    cvc: cvc
  }
  datum.push(data);
  //sau khi push vào xong thì lưu trữ dữ liệu trên local
  localStorage.setItem("dataCard", JSON.stringify(datum));
  renderData();
}

// hiển thị Data
function renderData() {
  var html = "";
  
  for (let i = 0; i < datum.length; i++) {
  `
   <tr>
   <td>${datum[i].cardNumber}</td>
   <td>${datum[i].expiryDate}</td>
   <td>${datum[i].cvc}</td>
   <td>
   </td>
    <button onclick="viewData(${datum[i].id})" id="view" >View</button>
    <button onclick="editData(${datum[i].id})" id="edit">Edit</button>
    <button onclick="deleteDate(${datum[i].id})" id="delete" >Delete</button>
   </tr> 
    `
  }
  document.getElementById("crudTable").innerHTML = html;
}
renderData(); */


