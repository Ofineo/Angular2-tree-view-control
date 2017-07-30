(function () {
    "use strict";

    var app = angular.module("tree", ['ui.tree',"ngRoute"])

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "main.html",
                controller: "ConnectedTreesCtrl"
            })
            
            .otherwise({ redirectTo: "/main" });
    });
}());