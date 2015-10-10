'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:GridCtrl
 * @description
 * # GridCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('GridCtrl', ['$scope','$resource', '$http', function($scope, $resource, $http) {

  var authorization = { 'Authorization': sessionStorage.token };

  $resource('http://localhost:8080/api/users/1/cards', {}, { 'query': { method: 'GET', isArray: true, headers: authorization }}).query().$promise.then(function(cards){

    cards.forEach(function(card){
      if(card.qty === 0){
        card.style = 'need';
      }
    });

    $scope.cards = cards;

  });

  $scope.updateCount = function(card, qty){
    $resource('/api/users/1/cards/:cardId',
      { cardId: card },
      { 'updateCount':{ method: 'PUT' } }
    ).updateCount({qty:qty});
  };

}]);
