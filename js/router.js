Movies.Router.map(function () {
	this.resource('movies', { path: '/' }, function() {
		this.route("search", { path: "/search/:query" });
	});
});

Movies.MoviesRoute = Ember.Route.extend({
	model: function () {
		//TODO load recommended movies or something
	}
});

Movies.MoviesIndexRoute = Ember.Route.extend({
  model: function () {
    return this.modelFor('movies');
  }
});

Movies.MoviesSearchRoute = Ember.Route.extend({
	model: function(params) {
		var searchResults = this.store.findQuery('movie', {
			q: params.query, 
			limit: Movies.MOVIES_PER_PAGE,
			offset: 1
		});
		return {query: params.query, searchResults: searchResults}
	},

	serialize: function(model) {
		return model;
	},
	
	setupController: function(controller, model) {
		controller.set('query', model.query);
		model.searchResults.then(function(movies) {
			controller.set('movies', movies);
		});
	}
});
