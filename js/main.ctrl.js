var mgharbi_ctrl = angular.module('mgharbi.controllers', []);

mgharbi_ctrl.controller("MainController",   ['$scope', 'Projects', function($scope, Projects) {
    var vm       = this;
    vm.firstname = "Michaël";
    vm.lastname  = "Gharbi";
    vm.title     = "PhD student - MIT CSAIL";
    vm.email     = "gharbi@mit.edu";
    vm.phone     = "+1 (857)-210-9559";
    vm.github    = "https://github.com/mgharbi";
    vm.facebook  = "https://www.facebook.com/michael.gharbi.5";
    vm.twitter   = "https://twitter.com/m_gharbi";
    vm.linkedin  = "https://www.linkedin.com/in/michaelgharbi";
    vm.map       = "https://www.google.com/maps/place/32+Vassar+St,+Cambridge,+MA+02139/@42.3618641,-71.0927513,17z/data=!3m1!4b1!4m2!3m1!1s0x89e370abe1db5703:0xd3b042dc26a8b515?hl=en";


    // Get project list
    // vm.projects = ["joe"];
    // Projects.get().then(function(response) { 
    //     $scope.projects = response.data;
    // });
    // vm.projects = $scope.projects;
    // console.log("scope ",  vm.projects);

}]);
