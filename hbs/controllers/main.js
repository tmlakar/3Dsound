const main = (req, res) => {
    res.render("index", { title: "Welcome to Web Programming!" });
  };
  module.exports = {
    main,
  };