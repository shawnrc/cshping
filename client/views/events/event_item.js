/**
 * eventItem manager
 *
 * author: Shawn Chowdhury
 * date: 2014-04-03
 */

Template.eventItem.helpers({

    ownPost: function () {
        if (Meteor.user()) {
            return this.author === Meteor.user().username;
        } else {
            return false;
        }
    },

    diff: function () {
        var delta = new Date().getTime() - this.date;
        if (delta < 100000) {
            return Math.round(delta / 1000) + ' seconds';

        } else if (delta >= 100000 && delta < 3600000) {
            return Math.round(delta / 1000 / 60) + ' minutes';

        } else if (delta >= 3600000 && delta < 86400000) {
            return Math.round(delta / 1000 / 60 / 60) + ' hours';

        } else {
            return 'a long time';
        }
    }

});

Template.eventItem.events({

    'click .delete': function (e) {

        e.preventDefault();

        if (confirm("Delete this event?")) {

            var currentEventId = this._id;
            Events.remove(currentEventId, function (error) {
                if (error) {
                    alert(error.reason);
                } else {
                    Router.go('eventsList');
                }
            });


        }

    }

});

Template.eventItem.rendered = function() {
    var $item = $(this.find('.eventItem'));
    Meteor.defer(function() {
        $item.removeClass('loading');
    });
}
