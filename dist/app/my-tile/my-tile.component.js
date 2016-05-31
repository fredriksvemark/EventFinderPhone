System.register(['angular2/core', '../my-events.service'], function(exports_1, context_1) {
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
    var core_1, my_events_service_1;
    var MyTileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (my_events_service_1_1) {
                my_events_service_1 = my_events_service_1_1;
            }],
        execute: function() {
            MyTileComponent = (function () {
                function MyTileComponent(eventService) {
                    this.eventService = eventService;
                    this.event = {};
                }
                MyTileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.eventService.getEvent(this.eventId).then(function (result) {
                        _this.event = result;
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MyTileComponent.prototype, "eventId", void 0);
                MyTileComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'my-tile',
                        templateUrl: 'my-tile.component.html',
                        styleUrls: ['my-tile.component.css'],
                        providers: [my_events_service_1.MyEventsService]
                    }), 
                    __metadata('design:paramtypes', [my_events_service_1.MyEventsService])
                ], MyTileComponent);
                return MyTileComponent;
            }());
            exports_1("MyTileComponent", MyTileComponent);
        }
    }
});
//# sourceMappingURL=my-tile.component.js.map