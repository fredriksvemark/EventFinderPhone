System.register(['angular2/testing', './my-users.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, my_users_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (my_users_service_1_1) {
                my_users_service_1 = my_users_service_1_1;
            }],
        execute: function() {
            testing_1.describe('MyUsers Service', function () {
                testing_1.beforeEachProviders(function () { return [my_users_service_1.MyUsersService]; });
                testing_1.it('should ...', testing_1.inject([my_users_service_1.MyUsersService], function (service) {
                }));
            });
        }
    }
});
//# sourceMappingURL=my-users.service.spec.js.map