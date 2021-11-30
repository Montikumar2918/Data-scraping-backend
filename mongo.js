const { MongoClient } = require("mongodb");

let MONGODB_URL =
  "mongodb+srv://Monti:Monti123@cluster0.s8bd8.mongodb.net/Mobiledetails?retryWrites=true&w=majority";
let MONGODB_NAME = "Mobiledetails";

let client = new MongoClient(MONGODB_URL);
let mongo = {
  db: null,
  products: null,
  async connect() {
    try {
      await client.connect();
      this.db = client.db(MONGODB_NAME);
      this.products = this.db.collection("products");
      console.log("Selected Database:-", MONGODB_NAME);
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = mongo;
