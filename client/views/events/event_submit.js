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

Template.eventSubmit.events({

    'submit form': function(event) {
        event.preventDefault();

        var event = {
            author: Meteor.user().username,
            action: $(event.target).find('[name=action]').val(),
            date: new Date().getTime()
        };

        Meteor.call('push', event, function(error) {
            if (error) {
                throwError(error.reason);

            } else {
                Router.go('eventsList');
            }
        });
    }
});