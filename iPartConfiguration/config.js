var iPartSettings;
(function (iPartSettings) {
    "use strict";
    //This is just an example of how to do this, we shouldnt be using a watch inside a controller.
    // ASI plans to write a directive to handle this, i.e. we createa "settingsWatch" directive, you put
    // all of your controls within that directive and they will be automatically sync'd with  the JsonSettings control
    var ConfigController = (function () {
        function ConfigController($scope) {
            var _this = this;
            this.$scope = $scope;
            // Grab our JSON serialized settings
            var settingsField = angular.element(document.querySelector("#JsonSettings"));
            //De-serialize our settings
            if (settingsField.val() !== "") {
                this.$scope.serializedSettings = JSON.parse(settingsField.val());
            }
            this.$scope.$watch('serializedSettings', function () {
                settingsField.val(JSON.stringify(_this.$scope.serializedSettings));
            }, true);
        }
        ConfigController.id = "ConfigController";
        ConfigController.$inject = ["$scope"];
        return ConfigController;
    })();
    iPartSettings.ConfigController = ConfigController;
    // register the controller with app
    angular.module("iPartConfiguration").controller(ConfigController.id, ConfigController);
})(iPartSettings || (iPartSettings = {}));
//# sourceMappingURL=config.js.map