var hbs = require('./node_modules/ghost/node_modules/express-hbs');
var moment = require('./node_modules/ghost/node_modules/moment');

module.exports = function(){
    hbs.registerHelper('cond', function (v1, operator, v2, options) {
        switch (operator) {
            case '==':
                return (v1 == v2) ? options.fn(this) : options.inverse(this);
            case '===':
                return (v1 === v2) ? options.fn(this) : options.inverse(this);
            case '<':
                return (v1 < v2) ? options.fn(this) : options.inverse(this);
            case '<=':
                return (v1 <= v2) ? options.fn(this) : options.inverse(this);
               case '>':
                return (v1 > v2) ? options.fn(this) : options.inverse(this);
               case '>=':
                return (v1 >= v2) ? options.fn(this) : options.inverse(this);
            case '&&':
                return (v1 && v2) ? options.fn(this) : options.inverse(this);
            case '||':
                return (v1 || v2) ? options.fn(this) : options.inverse(this);
            default:
                return options.inverse(this);
        }
    });

    hbs.registerHelper('thissaturday', function() {
        return moment().day(6).format('MM/DD/YYYY');
    });

    hbs.registerHelper('thissunday', function() {
        return moment().day(7).format('MM/DD/YYYY');
    })
};