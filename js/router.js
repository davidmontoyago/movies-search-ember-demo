Movies.Router.map(function () {
	this.resource('movies', { path: '/' }, function() {
		this.route("search", { path: "/search/:query" });
	});
});

Movies.MoviesRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('movie');
	}
});

Movies.MoviesIndexRoute = Ember.Route.extend({
  model: function () {
    return this.modelFor('movies');
  }
});

Movies.MoviesSearchRoute = Ember.Route.extend({
	model: function(params) {
		var searchResults = this.store.find('movie');
		return {query: params.query, searchResults: searchResults}
	},

	serialize: function(model) {
		return model;
	},
	
	setupController: function(controller, model) {
		controller.set('model', model);
	}
});
