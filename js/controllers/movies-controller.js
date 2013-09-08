Movies.MoviesController = Ember.ObjectController.extend({
	searchTitle: '',
	
	actions: {
		search: function() {
			var query = this.get('searchTitle');
			if (!query || query.length === 0) {
                return;
            }
            var searchResults = this.store.find('movie');
			this.transitionToRoute('movies.search', {query: query, searchResults: searchResults});
		}
	}
});
