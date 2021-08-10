const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://lama:lamagharib@cluster0.sepjb.mongodb.net/hyf?retryWrites=true&w=majority";

const client = new MongoClient(uri);

const result = async () => {
  try {
    await client.connect();
    const newCity = {
      name: "lamaLand",
      population: 3000,
    };
    await client.db("hyf").collection("city").insertOne(newCity);

    console.log(newCity);

    const updatedCity = await client
      .db("hyf")
      .collection("city")
      .updateOne({ name: "lamaLand" }, { $set: { population: 3 } });
    console.log(updatedCity);
    const findCity1 = await client
      .db("hyf")
      .collection("city")
      .findOne({ name: "lamaLand" });
    console.log(findCity1);
    const findCity2 = await client
      .db("hyf")
      .collection("city")
      .findOne({ population: 3 });
    console.log(findCity2);
    const deleteCity = await client
      .db("hyf")
      .collection("city")
      .deleteOne({ name: "lamaLand" });
    console.log(deleteCity);
  } catch (err) {
    console.log(err.message);
  } finally {
    await client.close();
  }
};
result();
