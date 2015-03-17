Router.configure({
  layoutTemplate: 'main'
});

Router.route("/", function() {
	this.render('mission');
});

Router.route('/team', function () {
  this.render('team');
});

Router.route('/labs', function () {
  this.render('labs');
});

Router.route('/about', function () {
  this.render('about');
});

Router.route('/contact', function () {
  this.render('contact');
});

Router.route('/portfolio', function () {
  this.render('portfolio');
});