// Base Class Creation
class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name
        this.price = price
        this.quantity = quantity
    }
    //Methods
    getTotalValue() {
        return this.price * this.quantity
    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`
    }
    //Static Method
    static applyDiscount(products, discount) {
        for (let i = 0; i < products.length; i++) {
            let product = products[i]
            product.price = product.price * (1 - discount)
        }
    }

}

let product = new ProductProperties("Apple", 2.50, 4)

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

console.log(perishable.expirationDate());
console.log(perishable.toString());

//Input for Array of products
const apple = new ProductProperties("Apple", 2.50, 4)
const orange = new PerishableProductProperties("Orange", 1.99, 6, "2025-11-30")
const watermelon = new PerishableProductProperties("Watermelon", 4.99, 2, "2025-09-30")
const banana = new ProductProperties("Banana", .59, 8)
const pineapple = new ProductProperties("Pineapple", 3.99, 3)

const inventory = [apple, orange, watermelon]


// Output of discounted products
console.log("Discounted price:")
for (let p of inventory) {
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
}

const myStore = new Store("My fruit store")



myStore.addProduct(apple)
myStore.addProduct(orange)
myStore.addProduct(watermelon)
myStore.addProduct(banana)
myStore.addProduct(pineapple)

console.log(`Total inventory value: $${myStore.getInventoryValue().toFixed(2)}`);

ProductProperties.applyDiscount(inventory, 0.15)

console.log(`Total inventory value after discount: $${myStore.getInventoryValue().toFixed(2)}`);

const found = myStore.findProductByName("pineapple")
if (found) {
    console.log(`Found product: ${found.toString()}`);
} else {
    console.log("Product not found");
}
