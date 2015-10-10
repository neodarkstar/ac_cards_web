'use strict';

angular.module('webApp').factory('authService', [ '$http', function($http){

  var authService = {
    login: function(credentials){
      return $http({
        method: 'POST',
        url: 'http://www.ideainprogress.com:8080/api/login',
        data: credentials
      }).then(function(res){
        sessionStorage.token = res.data;
      })
    },
    isValid: function(){
      return $http({
        method: 'GET',
        url: 'http://www.ideainprogress.com:8080/api/login/validate',
        headers: { authorization: sessionStorage.token}
      });
    }
  };

  return authService;

}]);
