'use strict';

angular.module('webApp').factory('User', [ '$resource', function($resource){

  var authorization = { 'Authorization': sessionStorage.token };

  var options = {
    'getProfile': { method: 'GET', headers: authorization }
  }

  return $resource('http://www.ideainprogress.com:8080/api/users/:id', { id: sessionStorage.userId }, options)

}]);
