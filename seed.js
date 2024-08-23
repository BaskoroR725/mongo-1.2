const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() => {
        console.log("Mongo CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO Mongo ERROR!!!!")
        console.log(err)
    })

/*     const p = new Product({
        name:'Ruby Grapefruit',
        price:1.99,
        category:'fruit'
    })
    p.save()
        .then(p =>{
            console.log(p)
        })
        .catch(e =>{
            console.log(e)
        }) */

const seedProduct=[
    {
        name:'Fairy eggplant',
        price:1.00,
        category:'vegetable'
    },
    {
        name:'Organic Seed Melon',
        price:4.99,
        category:'fruit'
    },
    {
        name:'Organic Mini Seedless Watermelon',
        price:3.99,
        category:'vegetable'
    },
    {
        name:'Organic Selery',
        price:1.50,
        category:'vegetable'
    },
    {
        name:'Chocolate Whole Milk',
        price:2.69,
        category:'dairy'
    },
    {
        name:'Milk Full Cream',
        price:2.00,
        category:'dairy'
    }
]

Product.insertMany(seedProduct)
.then(res =>{
    console.log(res)
})
.catch(e =>{
    console.log(e)
}) 