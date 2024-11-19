import axios from 'axios';

class ProductService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = "http://localhost:3000/product";
  }

  async getAllProducts(): Promise<any[]> {
    try {
      const response = await axios.get(this.baseUrl);
      return response.data;
    } catch (error) {
      console.error("Error fetching all products:", error);
      throw error;
    }
  }
}

export default new ProductService();