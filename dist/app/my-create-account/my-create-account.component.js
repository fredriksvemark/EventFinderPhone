System.register(['angular2/core', 'angular2/router', '../my-users.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, my_users_service_1;
    var MyCreateAccountComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (my_users_service_1_1) {
                my_users_service_1 = my_users_service_1_1;
            }],
        execute: function() {
            MyCreateAccountComponent = (function () {
                function MyCreateAccountComponent(router, userService) {
                    this.router = router;
                    this.userService = userService;
                    this.email = '';
                    this.password = '';
                    this.username = '';
                    this.createAnnotation = '';
                }
                MyCreateAccountComponent.prototype.ngOnInit = function () {
                };
                MyCreateAccountComponent.prototype.createAccount = function () {
                    var _this = this;
                    var self;
                    if (this.email !== '' && this.password !== '' && this.username !== '') {
                        var createAccountResult = this.userService.createAccount(this.email, this.password);
                        createAccountResult.then(function (result) {
                            var error = result["error"];
                            var userData = result["userData"];
                            if (error) {
                                switch (error.code) {
                                    case "EMAIL_TAKEN":
                                        _this.createAnnotation = 'The new user account cannot be created because the email is already in use.';
                                        break;
                                    case "INVALID_EMAIL":
                                        _this.createAnnotation = 'The specified email is not a valid email.';
                                        break;
                                    default:
                                        _this.createAnnotation = 'Error creating user: ' + error;
                                }
                            }
                            else {
                                _this.createAnnotation = '';
                                var user = { username: _this.username,
                                    uid: userData.uid,
                                    events: [''],
                                    firstName: '',
                                    lastName: '',
                                    email: _this.email };
                                _this.userService.addUser(userData["uid"], user);
                                _this.router.navigate(['/Login']);
                            }
                        });
                    }
                    else {
                        this.createAnnotation = 'You need to fill all the textfields.';
                    }
                };
                MyCreateAccountComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'my-create-account',
                        templateUrl: 'my-create-account.component.html',
                        styleUrls: ['my-create-account.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, my_users_service_1.MyUsersService])
                ], MyCreateAccountComponent);
                return MyCreateAccountComponent;
            }());
            exports_1("MyCreateAccountComponent", MyCreateAccountComponent);
        }
    }
});
//# sourceMappingURL=my-create-account.component.js.map