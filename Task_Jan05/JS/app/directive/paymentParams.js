(function(){
  'use strict';

  angular
    .module('innoApp')
    .directive('payparam',function(){
      return {
        restrict : 'E',
        templateUrl : '../views/paymentParams.html'
      }
    })

})();
