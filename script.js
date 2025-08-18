// Base Class Creation
class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name
        this.price = price
        this.quantity = quantity
    }
    //Method to get value of product
    getTotalValue() {
        return this.price * this.quantity
    }
    // Method to return string representation of the products
    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`
    }
    //Static Method tp apply discount
    static applyDiscount(products, discount) {
        for (let product of products){
            product.price = (product.price * (1 - discount))
        }
    }

}

let product = new ProductProperties("Apple", 2.50, 4)

//Print the ProductProperties Output
console.log(product.getTotalValue());
console.log(product.toString());

//Subclass Creation
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expire) {
        super(name, price, quantity)
        this.expire = expire
    }
    // Subclass Methods
    expirationDate() {
        return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expire}`
    }

    toString() {
        return `${super.toString()}, Expiration Date: ${this.expire}`
    }
}

const perishable = new PerishableProductProperties("Orange", 1.99, 6, "2025-11-30")

//Two instances of PerishableProductProperties Class with sample
console.log(perishable.expirationDate());
console.log(perishable.toString());

//Input for Array of products
const apple = new ProductProperties("Apple", 2.50, 4)
const orange = new PerishableProductProperties("Orange", 1.99, 6, "2025-11-30")
const watermelon = new PerishableProductProperties("Watermelon", 4.99, 2, "2025-09-30")

const firstInventory = [apple, orange, watermelon]


ProductProperties.applyDiscount(firstInventory, 0.10);

// Output of discounted products
console.log("Discounted price:")
for (let p of firstInventory) {
    console.log(p.toString())
}

//Store Management
class Store {
    constructor(name) {
        this.name = name
        this.inventory = []
    }
    //Method to Add Product
    addProduct(product) {
        this.inventory.push(product);
    }
    //Method to return total value of products in inventory
    getInventoryValue() {
        let total = 0
        for (let product of this.inventory) {
            total += product.getTotalValue()
        }
        return total
    }
    //Method to find product by Name
    findProductByName(name) {
        for (let product of this.inventory) {
            if (product.name.toLowerCase() === name.toLowerCase()) {
                return product
            }
        }
        return null
    }

    applyDiscount(discount) {
        ProductProperties.applyDiscount(this.inventory, discount)
    }
}

const myStore = new Store("My fruit store")

// Non discount products
const apple2 = new ProductProperties("Apple", 2.50, 4)
const orange2 = new PerishableProductProperties("Orange", 1.99, 6, "2025-11-30")
const watermelon2 = new PerishableProductProperties("Watermelon", 4.99, 2, "2025-09-30")
const banana = new ProductProperties("Banana", .59, 8)
const pineapple = new ProductProperties("Pineapple", 3.99, 3)

//Testing the System
myStore.addProduct(apple2)
myStore.addProduct(orange2)
myStore.addProduct(watermelon2)
myStore.addProduct(banana)
myStore.addProduct(pineapple)

// console.log(inventory);

//Store value without discount
console.log(`Total inventory value: $${myStore.getInventoryValue().toFixed(2)}`);

//Add 15% Discount
myStore.applyDiscount(0.15)
console.log(`Total inventory value after discount: $${myStore.getInventoryValue().toFixed(2)}`);

//Verify product exists
const found = myStore.findProductByName("pineapple")
if (found) {
    console.log(`Found product: ${found.toString()}`);
} else {
    console.log("Product not found");
}
