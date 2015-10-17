'use strict';

angular.module('webApp').factory('Auth', [ '$http', function($http){

  return {
    login: function(credentials){
      return $http({
        method: 'POST',
        url: 'http://www.ideainprogress.com:8080/api/login',
        data: credentials
      }).then(function(res){
        sessionStorage.token = res.data.token;
        sessionStorage.userId = res.data.userId;
      })
    },
    isValid: function(){
      return $http({
        method: 'GET',
        url: 'http://www.ideainprogress.com:8080/api/login/validate',
        headers: { authorization: sessionStorage.getItem('token')}
      });
    },
    logout: function(){
      sessionStorage.clear();
    }
  };

}]);
