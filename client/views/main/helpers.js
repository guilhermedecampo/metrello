var Helpers = {
    error: function() {
        return Session.get('error');
    },
    toLowerCase: function(text) {
        return text && text.toLowerCase();
    },
    toUpperCase: function(text) {
        return text && text.toUpperCase();
    },
    firstChar: function(text) {
        return text && text[0].toUpperCase();
    },
    session: function(prop) {
        return Session.get(prop);
    },
    isThen: function(a, then) {
        return a ? then : '';
    },
    isNotThen: function(a, then) {
        return a ? '' : then;
    },
    isTrue: function(a, b, consl) {
        // Template tag {{# if isTrue a b consl }}
        if (_.isBoolean(consl)) console.log(a, b, a==b);
        return a == b;
    },
    isTrueThen: function(a, b, then) {
        return a == b ? then : false;
    },
    isUserThen: function(a, b) {
        return this.userId == Meteor.userId() ? a : b;            
    },
    isMemberAdmin: function(yes, no) {
        return Utils.isMemberAdmin(yes, no);
    },
    isMemberNormal: function(yes, no) {
        return Utils.isMemberNormal(yes, no);
    },
    isMemberAll: function(yes, no) {
        return Utils.isMemberAll(yes, no);
    },
    openWidgets: function() {
        return Session.get('widgets');
    }
};

Template.warning.helpers({
    warning: function() {
        return Utils.Warning.get();          
    }
});

Template.pop.helpers({
    pop: function() {
        return Session.get('pop');
    }        
});

Template.windowOverlay.helpers({
    overlay: function() {
        return Utils.Overlay.get();         
    }    
});

// Register all Helpers
_.each(Helpers, function(fn, name) { Blaze.registerHelper(name, fn); });
