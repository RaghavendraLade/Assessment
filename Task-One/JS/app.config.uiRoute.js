(function(){
  'use strict';

  angular
    .module("innoApp")
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
          .state('startPage', {
              url:'/',
              templateUrl: './Views/route.map.html'

          })
    }]);

})();
