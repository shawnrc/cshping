/**
 * Created by shawn on 4/6/14.
 */

Template.eventSubmit.helpers({

    cuser: function() {
        if (Meteor.user()) {
            return Meteor.user().username;
        } else {
            return 'wot';
        }
    }
});