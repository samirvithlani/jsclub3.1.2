const products = ["iphone", "ipad", "tshirt"];

var pname = prompt("Enter the product name");
if (products.includes(pname)) {
  alert("Product exists");
} else {
  alert("Product does not exist");
}
