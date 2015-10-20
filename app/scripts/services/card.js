'use strict';

angular.module('webApp').factory('Card', [ '$resource', function($resource){

  var authorization = { 'Authorization': sessionStorage.token };

  var options = {
    'all': { method: 'GET', isArray: true, headers: authorization },
    'updateCount': { method: 'PUT', headers: authorization }
  }

  return $resource('http://localhost:8080/api/users/:userId/cards/:cardId', { userId: sessionStorage.getItem('userId'), cardId: '@cardId'}, options);


}]);
