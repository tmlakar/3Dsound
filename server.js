const express = require("express");
const path = require("path");
const hbsRouter = require("./hbs/routes/hbs");
/**
 * Create server
 */
const port = process.env.PORT || 3000;
const app = express();
app.use(express.static(path.join(__dirname, "public")));
/**
 * View engine (HBS) setup
 */
app.set("views", path.join(__dirname, "hbs", "views"));
app.set("view engine", "hbs");
/**
 * HBS routing
 */
app.use("/", hbsRouter);
/**
 * Default response
 */

/**
 * Start server
 */
app.listen(port, () => {
  console.log(`Demo app listening on port ${port}!`);
});