/**
 * Manager file for the 'eventsList' template
 *
 * path: client/views/events/eventsList.js
 * author: Shawn Chowdhury
 * date 2014-04-03
 *
 */

Template.eventsList.helpers({
    stuff: function() {
        return Events.find({}, {sort: {date: -1}});
    },

    logged: function() {
        if (Meteor.user()) { return true; }
        return false;
    }

});

