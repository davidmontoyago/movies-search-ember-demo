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
