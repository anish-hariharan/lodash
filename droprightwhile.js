var _ = require('lodash');
var users = [
   { user: 'Sam', active: true },
   { user: 'Ted', active: false},
   { user: 'Julie', active: false}
];

var result = _.dropRightWhile(users, function(user) { return !user.active});
console.log(result);
