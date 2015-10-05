angular.module('webApp').factory('Cards', [ '$resource', function($resource){

  return $resource('http://localhost:8080/api/users/1/cards');


}]);
