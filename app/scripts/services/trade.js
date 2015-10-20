'use strict';

angular.module('webApp').factory('Trade', [ '$resource', function($resource){

  var authorization = { 'Authorization': sessionStorage.token };

  var options = {
    'allMatches': { method: 'GET', isArray: true, headers: authorization }
  }

  return $resource('http://www.ideainprogress.com:8080/api/trades/:oUserId', { oUserId: '@oUserId' }, options);

}]);
