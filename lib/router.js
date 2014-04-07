/**
 * Ping's Router, implemented with Iron Router
 *
 * author: Shawn Chowdhury
 * date: 2014-04-03
 *
 */

// set the layout template to 'layout'
// client/views/applications/layout.html
Router.configure({
    layoutTemplate: 'layout',
    //loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('events'); }
});

// the actual routing
Router.map(function () {
    this.route('eventsList', {path: '/'});
});

// the requireLogin function, explained below
var requireLogin = function() {
    if (!Meteor.user()) {
        if (Meteor.loggingIn()) {
            //this.render(this.loadingTemplate);
            this.render('loading');
        } else {
            this.render('accessDenied');
        }

        pause();
    }
};

/**
 * a hook! The router will hook into requests for the eventSubmit template and
 * call the requireLogin function to check if you are logged in or not.
 *
 * What it is literally doing is interrupting the call for the template and then
 * rendering the accessDenied template if the Meteor.user() call doesn't return
 * true or an ID I guess. Also stops the routing.
 */

// 'before' is deprecated. Please use 'onBeforeAction' instead.
Router.onBeforeAction(requireLogin, {only: 'eventSubmit'});
