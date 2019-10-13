

var items = [
    {
        code: "askk123",
        title: "laptop",
        price: 1123.45,
        description: "This is the long description of a product so the client learn about it and buy it",
        category: "Electronics",
        rating: 4,
        image: "img1.jpg"
    },
    {
        code: "askfdg",
        title: "shoes",
        price: 143.45,
        description: "kjefj;o joeipfj;wkjf",
        category: "cloth",
        rating: 4,
        image: "img2.jpg"
    } , 
    {
        code: "hjdhfy",
        title: "Tshirt",
        price: 23.45,
        description: "This isjhl;sdj;j jl;djfs;lk",
        category: "hllllkjsdfl;j",
        rating: 3,
        image: "img3.jpg"
    } ,  
    {
        code: "afhgk3",
        title: "book",
        price: 23.00,
        description: "This is the long descroijefpwoejfp ijpojfplk[pofk j[pweoj jpojokj ",
        category: "home aplyance",
        rating: 5,
        image: "img4.jpg"
    }
    ];
    

function displaycatalog(){

    for (var i=0; i<items.length; i++){
        var product=items[i];

        var playout = `<div class="item">
        <img src='${product.image}'>
        <h4>${product.title}</h4>
        <h5>${product.price}</h5>
        <h6>${product.description}</h6>
        <button class="btn btn-sm btn-info">Add to Card</button>

        </div>
        `

        
        $('#catalog').append(playout);


    }




}

function init(){


    displaycatalog();


}



window.onload= init;