const { MongoClient } = require("mongodb");

const Db = process.env.ATLAS_URI;

const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let _db;

module.exports = {
  connectToServer: async function(callback) {
    try {
      await client.connect().then(() => {
        console.log("Successfully connected to MongoDB.")
      });
    } catch (error) {
      console.error(error)
    }
    _db = client.db("employees");
  },

  getDb: function() {
    return _db;
  },
};
