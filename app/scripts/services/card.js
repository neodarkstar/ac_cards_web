'use strict';

angular.module('webApp').factory('Card', [ '$resource', function($resource){

  return $resource('http://localhost:8080/api/users/1/cards');


}]);
