/**
 * Created by shawn on 4/6/14.
 */

Meteor.publish('events', function() {
    return Events.find();
});
