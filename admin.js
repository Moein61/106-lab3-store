function item(code, title, price, description, category, rating, image){

    this.code=code;
    this.title=title;
    this.price=price;
    this.description=description;
    this.category=category;
    this.rating=rating;
    this.image=image;

}

function saveItem(){
    var code= $("#txtCode").val();
    var title= $("#txtTitle").val();
    var price= $("#txtPrice").val();
    var description= $("#txtDescription").val();
    var category= $("#txtCategory").val();
    var rating= $("#txtRating").val();
    var image= $("#txtImage").val();

    var test= new item(code, title, price, description, category, rating, image);
    console.log(test);    

}

function solveHomework(){
    var data=[
        {age:99,
           name: "Sergio",
           color: 'gray'
           },
        {age:23,
           name: "John",
           color: 'blue'
           },
        {age:27,
            name: "Alice",
            color: 'Pink'
           },
        {age:87,
            name: "Robert",
            color: 'gray'
           },
        {age:23,
            name: "Sheldon",
            color: 'black'
           },  
        {age:45,
            name: "Will",
            color: 'green'
           }, 
        {age:16,
            name: "Kevin",
            color: 'yellow'
           }, 
        {age:37,
            name: "Liz",
            color: 'Pink'
           },   
        {age:99,
            name: "Noah",
            color: 'white'
           },  
        {age:31,
            name: "Alfredo",
            color: 'white'
           },
        {age:74,
            name: "Rhenard",
            color: 'green'
           },
        {age:39,
            name: "Myk",
            color: 'blue'
           }   
    ];

    var maxName=[];

    var maxAge=data[0].age;
    var totalAge=0;
    for (var i=0; i<data.length; ++i){ 
        if (data[i].age >= maxAge){
            maxAge=data[i].age;

            maxName.push(data[i].name);
            
        }


        totalAge += data[i].age;

    } 
    console.log("oldest person/s is/are " + maxName + " with age of " + maxAge + " and sum of all ages is: " + totalAge);
}

function init(){

    $('#btnSave').click(saveItem);
    solveHomework();
}

window.onload = init;