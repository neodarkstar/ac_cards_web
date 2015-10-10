'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:GridCtrl
 * @description
 * # GridCtrl
 * Controller of the webApp
 */
angular.module('webApp').controller('LoginCtrl', ['$scope','authService', '$location',
  function($scope, authService, $location) {

    $scope.loggedOn = false;

    $scope.menuItems = [
      { href:"#/", name: 'Main' },
      { href:"#/grid", name: 'Gallery' }
    ];

    $scope.credentials = {
      username: '',
      password: ''
    };

    $scope.login = function(){
      authService.login($scope.credentials).then(function(data){
        $scope.loggedOn = true;
        $location.path('/grid');
      }).catch(function(err){
        console.log(err);
      });
    }

    $scope.logout = function(){
      $scope.loggedOn = false;
      $location.path('#/');
      sessionStorage.token = '';
    }

}]);
