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

  $resource('http://127.0.0.1:8080/api/users/1/cards', {}, { 'query': { method: 'GET', isArray: true }}).query().$promise.then(function(cards){

    cards.forEach(function(card){
      if(card.qty == 0){
        card.style = 'need';
      }
    });

    $scope.cards = cards;

  });

  $scope.updateCount = function(card, qty){
    $resource('http://127.0.0.1:8080/api/users/1/cards/:cardId',
      { cardId: card },
      { 'updateCount':{ method: 'PUT' } }
    ).updateCount({qty:qty});
  };

}]);
