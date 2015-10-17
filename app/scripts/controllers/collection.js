angular.module('webApp')
  .controller('CollectionCtrl', ['$scope','$resource', '$http', 'Card', function($scope, $resource, $http, Card) {

    $scope.cards = Card.all();

    $scope.updateCount = function(cardNumber, quantity){
      Card.updateCount({ cardId: cardNumber, qty: quantity});
    }


  }]);
