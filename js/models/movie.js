Movies.Movie = DS.Model.extend({
	title: DS.attr('string'),
	synopsis: DS.attr('string'),
	image: DS.attr('string'),
	releaseDate: DS.attr('date'),
	director: DS.attr('string')
});

Movies.Movie.FIXTURES = [
 {
   id: 1,
   title: 'The Hobbit: An Unexpected Journey',
   synopsis: 'A younger and more reluctant Hobbit, Bilbo Baggins, sets out on an "unexpected journey" to the Lonely Mountain with a spirited group of Dwarves to reclaim their stolen mountain home from a dragon named Smaug.',
   image: 'cover.jpg',
   releaseDate: '2012-12-14',
   director: 'Peter Jackson'
 },
 {
   id: 2,
   title: 'The Hobbit: The Desolation of Smaug',
   synopsis: 'The Dwarves, Bilbo and Gandalf have successfully escaped the Misty Mountains, and Bilbo has gained the One Ring. They all continue their journey to get their gold back from the Dragon, Smaug.',
   image: 'cover.jpg',
   releaseDate: '2012-12-14',
   director: 'Peter Jackson'
 },
 {
   id: 3,
   title: 'The Hobbit: There and Back Again',
   synopsis: 'Bilbo, Gandalf and the Dwarves are in Smaug\'s lair, but will they get their gold and return home safely?',
   image: 'cover.jpg',
   releaseDate: '2012-12-14',
   director: 'Peter Jackson'
 }
];
