var Product = require("../models/product");

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/shopping")

var products = [
  new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "Gothic",
    description: "Awesome Game!!!",
    price: 10
  }),
  new Product({
    imagePath: "https://images-na.ssl-images-amazon.com/images/I/61VrfFw90bL._SY550_.jpg",
    title: "Your Man",
    description: "Baby lock the doors and turn the lights down low",
    price: 10
  }),
  new Product({
    imagePath: "https://i.pinimg.com/736x/6e/e8/a3/6ee8a3fcefd0da1a048a2937ae0b206c--xbox-one-games-pc-games.jpg",
    title: "Raiders",
    description: "Aliaba suod widunk sko lorempixel",
    price: 10
  }),
  new Product({
    imagePath: "https://i.pinimg.com/736x/05/7c/23/057c23e5352180744de4c42246fdc01d--asylum-game-the-asylum.jpg",
    title: "Batman",
    description: "Gotham bew joirk ja jrang Aliaba suod widunk sko lorempixel",
    price: 10
  }),
]

var done = 0;
for (var i=0; i<products.length;i++) {
  products[i].save( function(err, result) {
    done++;
    if (done===products.length){
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
