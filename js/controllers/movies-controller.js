Movies.MoviesController = Ember.ObjectController.extend({
	searchTitle: '',
	
	actions: {
		search: function() {
			var query = this.get('searchTitle');
			if (!query || query.length === 0) {
                return;
            }
           
            var searchResults = this.store.findQuery('movie', {
				q: query, 
				limit: Movies.MOVIES_PER_PAGE,
				offset: 1
            });	
			this.transitionToRoute('movies.search', {
				query: query,
				searchResults: searchResults
			});
		}
	}
});
