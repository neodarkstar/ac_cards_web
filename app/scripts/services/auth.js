'use strict';

angular.module('webApp').factory('Auth', [ '$http', function($http){

  return {
    login: function(credentials){
      return $http({
        method: 'POST',
        url: 'http://localhost:8080/api/login',
        data: credentials
      }).then(function(res){
        sessionStorage.setItem('token', res.data.token);
        sessionStorage.setItem('userId', res.data.userId);
      })
    },
    isValid: function(){
      return $http({
        method: 'GET',
        url: 'http://localhost:8080/api/login/validate',
        headers: { authorization: sessionStorage.getItem('token')}
      });
    },
    logout: function(){
      sessionStorage.clear();
    }
  };

}]);
