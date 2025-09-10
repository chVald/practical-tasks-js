
class Store {
    constructor() {
      this.products = new Map();
    }
  
    addProduct(name, price, stock) {
      this.products.set(name, { price, stock });
    }
  
    buyProduct(name, quantity) {
      if (!this.products.has(name)) {
        throw new Error(`Товар ${name} відсутній у магазині`);
      }
      
      const product = this.products.get(name);
      if (product.stock < quantity) {
        throw new Error(`Недостатньо товару в магазині`);
      }
      
      product.stock -= quantity;
      console.log(`Успішна покупка: ${name}, кількість: ${quantity}`);
    }
  }
  
const store = new Store();
store.addProduct("Яблуко", 10, 5);
store.addProduct("Банан", 15, 3);
  
try {
  store.buyProduct("Яблуко", 2);
  store.buyProduct("Банан", 5);
} catch (error) {
  console.error(error.message);
}
