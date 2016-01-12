var helloWorld;
(function (helloWorld) {
    "use strict";
    var HelloWorldController = (function () {
        function HelloWorldController() {
        }
        HelloWorldController.prototype.hello = function () {
            return "Is it me you're looking for?";
        };
        HelloWorldController.id = "helloWorldController";
        HelloWorldController.$inject = [];
        return HelloWorldController;
    })();
    helloWorld.HelloWorldController = HelloWorldController;
    // register the controller with app
    angular.module("helloWorld").controller(HelloWorldController.id, HelloWorldController);
})(helloWorld || (helloWorld = {}));
//# sourceMappingURL=helloWorldController.js.map