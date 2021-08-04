const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.get("/", (req, res) => {
  res.send("XYZ");
});

app.listen(4000, () => {
  console.log("Listning at PORT 4000...");
});
const dburl1 = "mongodb://localhost:27017/graphql";
const dburl =
  "mongodb+srv://imsamad:imsamad@cluster0.ttj9v.mongodb.net/graphql?retryWrites=true&w=majority";
const conn = mongoose.connect(dburl1, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
console.log("##########################################");
console.log("connconnconnconn", conn, "connconnconnconn");
console.log("##########################################");
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});
