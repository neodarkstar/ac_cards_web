'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:GridCtrl
 * @description
 * # GridCtrl
 * Controller of the webApp
 */
angular.module('webApp').controller('LoginCtrl', ['$scope','Auth', '$location','User',
  function($scope, Auth, $location, User) {

    $scope.loggedOn = false;

    if(!_.isEmpty(sessionStorage.token)){
      $scope.loggedOn = true;
    }

    $scope.menuItems = [
      { href:"#/", name: 'Main' },
      { href:"#/gallery", name: 'Gallery' },
      { href:'#/collection', name: 'Collection'},
      { href:'#/trades', name: 'Trades'}
    ];

    $scope.credentials = {
      username: '',
      password: ''
    };

    $scope.login = function(){
      Auth.login($scope.credentials).then(function(data){
        $scope.loggedOn = true;
        $scope.profileInfo = User.getProfile();
        $location.path('/gallery');
      }).catch(function(err){
        console.log(err);
      });
    }

    $scope.logout = function(){
      $scope.loggedOn = false;
      $location.path('#/');
      Auth.logout();
    }

}]);
