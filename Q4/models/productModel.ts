class ProductModel {
    id: number;
    name: string;
    brand: string;
    price: number;
    currentStock: number;
    reviews: number;
    description: string;

    constructor(id: number, name: string, brand: string, price: number, currentStock: number, reviews: number, description: string) {
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