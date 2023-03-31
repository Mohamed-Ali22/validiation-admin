
var productName = document.getElementById('name')
var productPrice = document.getElementById('price')
var productCategory = document.getElementById('cat')
var productDescription = document.getElementById('desc')
var btn = document.getElementById('addBtn')
var proudacts = []
var info = document.getElementById('info')
var errormsg = document.getElementById('error')
var searchInput = document.getElementById('searchInput')
let userLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn'))
let form = document.querySelector('.form');
let us =document.querySelector('.us');
let us3 =document.querySelector('.us3');

if(localStorage.getItem('products') != null){
    proudacts = JSON.parse(localStorage.getItem('products'))
    erorr()
}
btn.addEventListener('click' , function () {
    var product = {
        name : productName.value,
        price : productPrice.value,
        category : productCategory.value,
        description : productDescription.value
    }
    proudacts.push(product)
    erorr()
    localStorage.setItem('products' , JSON.stringify(proudacts))
})
function clearData() {
    productName.value = ''
    productPrice.value = ''
    productCategory.value = ''
    productDescription.value = ''
}
function erorr() {
    var contener =``
    if(userLoggedIn.email == 'Admin@gmail.com'){
        form.style.display='block';
        us.style.display='table-cell'
        us3.style.display='table-cell'
        for (let i = 0; i < proudacts.length; i++) {
            contener += `
            <tr>
                <th scope="row"> <p id='nameProduct'> ${proudacts[i].name} </p></th>
                <td> <p id='priceProduct'> ${proudacts[i].price}</p></td>
                <td> <p id='catProduct'> ${proudacts[i].category}</p></td>
                <td> <p id='descProduct'> ${proudacts[i].description}</p></td>
                <td><button class="btn btn-outline-danger" onclick ="deleteData(${i})">Delete</button></td> 
                <td><button class="btn btn-outline-warning" id='updatebttn'>Update</button>
                <button class="btn btn-outline-success px-3 d-none" id='savebtn'>Save</button></td>
            </tr>`
        }
        info.innerHTML = contener
    }else{
        form.style.display='none'
        us.style.display='none'
        us3.style.display='none'
        for (let i = 0; i < proudacts.length; i++) {
            contener += `
                <tr>
                    <th scope="row"> <p id='nameProduct'> ${proudacts[i].name} </p></th>
                    <td> <p id='priceProduct'> ${proudacts[i].price}</p></td>
                    <td> <p id='catProduct'> ${proudacts[i].category}</p></td>
                    <td> <p id='descProduct'> ${proudacts[i].description}</p></td>
                </tr>`
            }
            info.innerHTML = contener
    }
    clearData()
}
function deleteData(cle){
    proudacts.splice(cle , 1)
    localStorage.setItem('products' , JSON.stringify(proudacts))
    erorr();
}
function edite(ed){
    for (let index = 0; index < array.length; index++) {
        productName.value = ''
        productPrice.value = ''
        productCategory.value = ''
        productDescription.value = ''
        
    }
}

searchInput.addEventListener('input' , function(){
    var search = searchInput.value;
    var contener = ``
    
    if(userLoggedIn.email == 'Admin@gmail.com'){
        form.style.display='block'
        for (let i = 0; i < proudacts.length; i++) {
            if (proudacts[i].name[0].toLowerCase().includes(search.toLowerCase()) == true) {
                contener += `
                <tr>
                    <th scope="row"> <p id='nameProduct'> ${proudacts[i].name} </p></th>
                    <td> <p id='priceProduct'> ${proudacts[i].price}</p></td>
                    <td> <p id='catProduct'> ${proudacts[i].category}</p></td>
                    <td> <p id='descProduct'> ${proudacts[i].description}</p></td>
                    <td><button class="btn btn-outline-danger" onclick ="deleteData(${i})">Delete</button></td> 
                    <td><button class="btn btn-outline-warning" id='updatebttn'>Update</button>
                    <button class="btn btn-outline-success px-3 d-none" id='savebtn'>Save</button></td>
                </tr>`
            }
        info.innerHTML = contener
        }
    }else{
        form.style.display='none'
        for (let i = 0; i < proudacts.length; i++) {
            if (proudacts[i].name[0].toLowerCase().includes(search.toLowerCase()) == true) {
                    contener += `
                    <tr>
                        <th scope="row"> <p id='nameProduct'> ${proudacts[i].name} </p></th>
                        <td> <p id='priceProduct'> ${proudacts[i].price}</p></td>
                        <td> <p id='catProduct'> ${proudacts[i].category}</p></td>
                        <td> <p id='descProduct'> ${proudacts[i].description}</p></td>
                    </tr>`
                }
            info.innerHTML = contener
            }
    }
    })

