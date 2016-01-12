var iPartSettings;
(function (iPartSettings) {
    "use strict";
    var MyController = (function () {
        function MyController(settingsService, $attrs) {
            this.settingsService = settingsService;
            //Grab our ContentKey and ContentItemKey from the custom attributes
            this.contentKey = $attrs.asiContentkey;
            this.contentItemKey = $attrs.asiContentitemkey;
            //Get settings for this iPart
            this.getSettings();
        }
        // Get settings via promise and update our scope with the data
        MyController.prototype.getSettings = function () {
            var _this = this;
            this.settingsService.getSettings(this.contentKey, this.contentItemKey).then(function (response) {
                _this.settings = response;
            });
        };
        MyController.id = "MyController";
        MyController.$inject = [app.core.Services.IPartSettingsService.id, "$attrs"];
        return MyController;
    })();
    iPartSettings.MyController = MyController;
    // register the controller with app
    angular.module("iPartConfiguration").controller(MyController.id, MyController);
})(iPartSettings || (iPartSettings = {}));
//# sourceMappingURL=MyController.js.map