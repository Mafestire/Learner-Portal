// require modules
const express = require("express");
const route = require("./controller/control");
const cors = require("cors");
//port
const port = parseInt(process.env.PORT) || 6060;
//express app
const app = express();
//middleware
const { ErrHandling } = require("./middleware/ErrHandling");
//cookies
const cookieParser = require("cookie-parser");
//setting content-type
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://sneakerstation-63e89.web.app/"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(route);
app.use(
  cors(),
  cookieParser(),
  express.json,
  express.urlencoded({ extended: false })
);

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
  });
  //error handling
  //app.use(ErrHandling);