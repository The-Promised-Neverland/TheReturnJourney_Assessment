class ProductModel {
    constructor(id, name, brand, price, currentStock, reviews, description) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.currentStock = currentStock;
        this.reviews = reviews;
        this.description = description;
    }
}

export default ProductModel;