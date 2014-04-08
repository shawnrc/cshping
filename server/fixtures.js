/**
 * fixtures.js
 *
 * This file just adds some default-ass posts to test functionality. *
 *
 */

var pop = function() {

    Events.insert({
        author: 'Shawn',
        action: 'going to the corner store',
        date: new Date().getTime()
    });

    Events.insert({
        author: 'Shawn',
        action: 'starting his Meteor seminar',
        date: new Date().getTime()
    });

    Events.insert({
        author: 'Shawn',
        action: 'watching Kill La Kill in the lounge',
        date: new Date().getTime()
    });
}
