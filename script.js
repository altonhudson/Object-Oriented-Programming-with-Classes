
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
    constructor(expire) {
        super(name, price, quantity)
        this.expirationDate = expirationDate
    }
}