/**
 * Errors manager
 *
 * author: Shawn
 * date: 2014-04-05
 */

Template.errors.helpers({
    errors: function() {
        return Errors.find();
    }
});
