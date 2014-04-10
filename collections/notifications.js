/**
 * Handles e-mail notifications for users.
 * 
 * author: Shawn Chowdhury [shawnrc@csh.rit.edu] 
 */

// db cursor
var cursor = Events.find();

var handle = cursor.observe({
	_suppress_initial: true,
	added: function (post) {
		var time = new Date().getTime();
		var date = new Date(time);		
		
		Email.send({
			from: "32045",
			to: "2033004644@txt.att.net",
			text: post.author + " is " + post.action + ". -" + date.toString()
		});
	}
});
