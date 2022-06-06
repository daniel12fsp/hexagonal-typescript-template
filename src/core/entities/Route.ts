
export default class Route {
  name: string;
  address: string;

  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
    this.validate();
  }
  
  private validate() {
    if (!this.name) {
      throw new Error("Route name is required");
    }
    if (!this.address) {
      throw new Error("Route address is required");
    }
  }
}