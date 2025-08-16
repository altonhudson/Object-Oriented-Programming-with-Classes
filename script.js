
class productProperties {
    constructor(name, price, quantity) {
        this.name = name
        this.price = price
        this.quantity = quantity
    }

    getTotalValue() {
        return this.price * this.quantity
    }
    
    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`
    }

    static applyDiscount(products, discount) {
        for (let i = 0; i < products.length; i++) {
            let product = products[i]
            product.price = product.price * (1 - discount)
        }
    }
        
}

let product = new productProperties("Apple", 2.50, 4)

// console.log(product.getTotalValue());
// console.log(product.toString());

class perishableProductProperties extends productProperties {
    constructor(name, price, quantity, expire) {
        super(name, price, quantity)
        this.expire = expire
    }

    expirationDate() {
         return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expire}`
    }

    toString() {
        return `${super.toString()}, Expiration Date: ${this.expire}`
    }
}

const perishable = new perishableProductProperties("Orange", 1.99, 6, "2025-11-30")

// console.log(perishable.expirationDate());
// console.log(perishable.toString());


const apple = new productProperties("Apple", 2.50, 4)
const orange = new perishableProductProperties("Orange", 1.99, 6, "2025-11-30")
const watermelon = new perishableProductProperties("Watermelon", 4.99, 2, "2025-09-30")
const banana = new productProperties("Banana", .59, 8)
const pineapple = new productProperties("Pineapple", 3.99, 3)

const inventory = [apple, orange, watermelon]



// console.log("Discounted price:")
// for (let p of inventory) {
//     console.log(p.toString())
// }


class store {
    constructor(name) {
        this.name = name
        this.inventory = []
    }

    addProduct(product) {
        this.inventory.push(product);
    }
    
    getInventoryValue() {
        let total = 0
        for (let product of this.inventory) {
            total += product.getTotalValue()
        }
        return total
    }

    findProductByName(name) {
        for (let product of this.inventory) {
            if (product.name.toLowerCase() === name.toLowerCase()) {
                return product
            }
        }
        return null
    }
}

const myStore = new store("My fruit store")



myStore.addProduct(apple)
myStore.addProduct(orange)
myStore.addProduct(watermelon)

console.log(`Total inventory value: $${myStore.getInventoryValue().toFixed(2)}`);

productProperties.applyDiscount(inventory, 0.15)

console.log(`Total inventory value after discount: $${myStore.getInventoryValue().toFixed(2)}`);

const found = myStore.findProductByName("Orange")
if (found) {
    console.log(`Found product: ${found.toString()}`);
}else {
    console.log("Product not found");
}
