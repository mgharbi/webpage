var mgharbi_ctrl = angular.module('mgharbi.controllers', []);

mgharbi_ctrl.controller("MainController", function() {
    var vm       = this;
    vm.firstname = "Michaël";
    vm.lastname  = "Gharbi";
    vm.title     = "PhD candidate - MIT CSAIL";
    vm.email     = "gharbi@mit.edu";
    vm.phone = "+1 (857)-210-9559";
});
