angular.module('webApp')
  .controller('CollectionCtrl', ['$scope','$resource', '$http', 'Card', function($scope, $resource, $http, Card) {

    $scope.cards = Card.all();


  }]);
