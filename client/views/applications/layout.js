
/**
 * layout.js
 *
 * Manager for the layout template
 *
 * author: Shawn Chowdhury
 * date: 2014-04-04
 *
 */

Template.layout.helpers({
    pageTitle: function() { return Session.get('pageTitle'); }
});