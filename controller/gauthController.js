const passport = require("passport");

exports.googleAuth = passport.authenticate("google", { scope: ["profile", "email"] });

exports.googleAuthCallback = passport.authenticate("google", { failureRedirect: "/" });

exports.dashboard = (req, res) => {
  if (!req.user) {
    return res.redirect("/");
  }
  res.render("dashboard", { user: req.user });
};

exports.logout = (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
};
