'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:GridCtrl
 * @description
 * # GridCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('GridCtrl', ['$scope','$resource', function($scope, $resource) {

  $scope.cards = $resource('http://127.0.0.1:8080/api/cards', {}, { 'query': { method: 'GET', isArray: true}}).query();


}]);
