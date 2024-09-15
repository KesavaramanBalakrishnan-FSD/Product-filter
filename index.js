let products = {
  data: [
    {
      productName: "Regular White T- Shirt",
      category: "Topwear",
      price: "30",
      image: "white-tshirt.jpg",
    },
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "short-skirt.jpg",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "sporty-smartwatch.jpg",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "Knitted-top.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "black-leather-jacket.jpg",
    },
    {
      productName: "Stylish Pink",
      category: "Bottomwear",
      price: "89",
      image: "pink-trousers.jpg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "brown-jacket.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "comfy-gray-pants.jpg",
    },
  ],
};

for (let i of products.data) {
  //create Card
  let card = document.createElement("div");
  card.classList.add("card", i.category, "hide");

  //card should have category and should stay hidden initially

  //image-container div
  let imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  //img div
  let image = document.createElement("img");
  image.setAttribute("src", i.image);

  imageContainer.appendChild(image);
  card.appendChild(imageContainer);

  document.getElementById("products").appendChild(card);

  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //productname
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;

  container.appendChild(price);

  card.appendChild(container);
}

//paramters passed from button(parameters same as category)

function filterProduct(value) {
  //button class code
  let buttons = document.querySelectorAll(".button-value");

  buttons.forEach((button) => {
    //check if value is equals to innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");

  elements.forEach((element) => {
    //display all cards on 'all' button clicks
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //check if elements contains category class
      if (element.classList.contains(value)) {
        //display elemts based on category
        element.classList.remove("hide");
      } else {
        //hide other elemts
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initialization
  let searchInput = document.getElementById("search-input").value;

  let elements = document.querySelectorAll(".product-name");

  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Intially display all products
window.onload = () => {
  filterProduct("all");
};
