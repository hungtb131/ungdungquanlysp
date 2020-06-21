let productList = ["SamSung", "Apple", "LG", "Sharp", "Pansonic", "Xiaomi"];
function displayProductFromArray() {
    let str = "<table>"
        + "<caption>Display All Product</caption>"
        + "<tr>"
        + "<th width='50%'>Product Name</th>"
        + "<th width='25%'>&nbsp;</th>"
        + "<th width='25%'>&nbsp;</th>"
        + "</tr>"
        + "<hr>"
    for (let i = 0; i < productList.length; i++) {
        str += `<tr>
                <td>${productList[i]}</td>
                <td><button id="edit" onclick="editProduct(${i})">Edit</button></td>
                <td><button id="delete" onclick="deleteProduct(${i})">Delete</button></td>
                </tr>`;
    }
    str += "</table>"
    document.getElementById("Product").innerHTML = str;
}

function addProduct() {
    let product = document.getElementById("newproduct").value;
    if (product !== '') {
        productList.push(product);
    }
    displayProductFromArray(productList);
}

function editProduct(index) {
    productList[index] = prompt("Content edited");
    displayProductFromArray(productList);
}

function deleteProduct(index) {
    productList.splice(index,1);
    displayProductFromArray(productList);
}

displayProductFromArray(productList);