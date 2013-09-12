Movies.MoviesController = Ember.ObjectController.extend({
	searchTitle: '',
	
	actions: {
		search: function() {
			var query = this.get('searchTitle');
			if (!query || query.length === 0) {
                return;
            }
            var searchResults = this.store.findQuery('movie', {q: query, limit: 10});
			this.transitionToRoute('movies.search', {query: query, searchResults: searchResults});
		}
	}
});

Movies.MovieController = Ember.ObjectController.extend({
	directorInflection: function() {
		var model = this.get('model');
		var director = model.get('directors');
		if (director && director != null) {
			return director.indexOf(',') > 0 ? 'Directors' : 'Director';
		}
		return '';
	}.property('model.directorInflection')
});
