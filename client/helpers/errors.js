/**
 * Created by shawn on 4/6/14.
 */

// Local (client-only) collection
Errors = new Meteor.Collection(null);

throwError = function(message) {
    Errors.insert({message: message})
}