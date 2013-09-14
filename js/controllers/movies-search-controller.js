Movies.MoviesSearchController = Ember.ArrayController.extend({
	page: 0,
	
	actions: {
		seeMore: function() {
			var page = this.get('page');
			this.set('page', ++page)
			console.log('next page: ' + page);
			
			var movies = this.get('movies');
			
			this.store.findQuery('movie', {
				q: this.get('query'), 
				limit: Movies.MOVIES_PER_PAGE,
				offset: Movies.MOVIES_PER_PAGE * page + 1
            }).then(function(nextPage) {
				console.log('nextPage length ' + nextPage.get('length'));
				movies.pushObjects(nextPage.get('content'));
				this.set('movies', movies);
			});
		}
	}
});
