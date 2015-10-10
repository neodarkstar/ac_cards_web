'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:GridCtrl
 * @description
 * # GridCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('GalleryCtrl', ['$scope','$resource', '$http', 'Card', function($scope, $resource, $http, Card) {

  
  $scope.cards = Card.all();

  $scope.updateCount = function(card, qty){
    $resource('/api/users/1/cards/:cardId',
      { cardId: card },
      { 'updateCount':{ method: 'PUT' } }
    ).updateCount({qty:qty});
  };

}]);
