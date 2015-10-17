angular.module('webApp')
  .controller('CollectionCtrl', ['$scope','$resource', '$http', 'Card', function($scope, $resource, $http, Card) {

    $scope.cards = Card.all();

    $scope.updateCount = function(cardNumber, quantity){
      Card.updateCount({ cardId: cardNumber, qty: quantity});
    }

    $scope.counts = {
      duplicates: 0,
      total: 0,
      missing: 0
    }

    $scope.cards.$promise.then(function(cards){
      cards.forEach(function(card){
        if(card.qty > 0){
          $scope.counts.duplicates += (card.qty - 1);
          $scope.counts.total += card.qty;
        }

        if(card.qty == 0){
          $scope.counts.missing ++;
        }
      })
    })


  }]);
