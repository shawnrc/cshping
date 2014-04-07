/**
 * config for events collection
 *
 * author: shawn chowdhury
 * date: 2014-04-04
 */

Events = new Meteor.Collection('events');

Events.allow({
    remove: ownsDocument
});

Meteor.methods({
    post: function(eventAttributes) {
        var user = Meteor.user();

        // check if user is logged in
        if (!user) {
            throw new Meteor.Error(401, "You need to be logged in to post" +
                " new events");
        }

        // ensure the event has an action
        if (!eventAttributes.action){
            throw new Meteor.Error(422, 'Please specify an action!');
        }

        // pick out the keys to add
        var post = _.extend(_.pick(eventAttributes, 'author', 'action', 'date'), {
            author: user.username,
            action: eventAttributes.action,
            submitted: new Date.getTime()
        });
    }
});