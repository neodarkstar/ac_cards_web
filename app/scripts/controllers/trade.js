'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:TradeCtrl
 * @description
 * # TradeCtrl
 * Controller of the webApp
 */
angular.module('webApp').controller('TradeCtrl', ['$scope','Trade',
  function($scope, Trade) {

    $scope.trades = Trade.allMatches({
      oUserId: 1
    })
    .$promise
    .then(function(trades){
      $scope.need = {
        user: trades[0].user.name,
        cards:[],
        count: 0
      }
      $scope.have = {
        user: 'me',
        cards:[],
        count: 0
      }

      _.forEach(trades[0].trades, function(trade){
        if(trade.need){
          $scope.need.cards.push(trade.number);
          $scope.need.count++;
        }
        if(trade.wanted){
          $scope.have.cards.push(trade.number);
          $scope.have.count++;
        }
      })


    })


}]);
