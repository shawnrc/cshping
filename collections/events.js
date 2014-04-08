/**
 * config for events collection
 *
 * author: shawn chowdhury
 * date: 2014-04-04
 */

Events = new Meteor.Collection('events');

//Events.allow({
//    remove: ownsDocument
//});

Meteor.methods({
    push: function(eventAttributes) {
        var user = Meteor.user();

        // check if user is logged in
        if (!user) {
            throw new Meteor.Error(401, "You need to be logged in to post" +
                " new events");
        }

        // ensure the event has an action
        if (eventAttributes.action === ""){
            throw new Meteor.Error(422, 'You didn\'t enter anything!');
        }

        // pick out the keys to add
        var event = _.extend(_.pick(eventAttributes, 'author', 'action', 'date'), {
            author: user.username,
            action: eventAttributes.action,
            submitted: new Date().getTime(),
            owner: Meteor.userId()
        });         

        // check if the user has posted recently
        if (Events.find({owner: Meteor.userId()}).count() > 0) {
            if (event.submitted <= Events.findOne({owner: Meteor.userId()}).submitted + 600000) {
                throw new Meteor.Error(429, 'You just created an event! Try again in a bit.');
            }
        }

        var postId = Events.insert(event);

        return postId;
    }
});
