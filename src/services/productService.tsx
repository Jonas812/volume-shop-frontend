import axios from 'axios';

class ProductService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'http://localhost:3000/product';
  }

  // Methode, um alle Produkte zu holen
  async getAllProducts() {
    try {
      const response = await axios.get('http://localhost:3000/product');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching all products:', error);
      throw error; // Wir werfen den Fehler, damit er im Component-Code behandelt wird
    }
  }
}

export default new ProductService();