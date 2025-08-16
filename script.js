
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
        return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`;
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

console.log(perishable.expirationDate());
console.log(perishable.toString());