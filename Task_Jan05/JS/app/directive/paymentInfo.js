(function(){
  'use strict';

  angular
    .module('innoApp')
    .directive('payinfo',function(){
      return {
        restrict : 'E',
        templateUrl : '../views/paymentInfo.html'
      }
    })

})();
