(function(){
  'use strict';

  angular
    .module('innoApp')
    .service('paymentInfo',function($http,$q){
      var fileArr = ['c_frequecyType','c_paymentType','l_AccountingType','l_ChargeAmountBasis','l_GrowthType','l_PaymentDueDay','l_PaymentDueOn','l_PaymentTiming'];
      var promiseArr = [];

      function getData(url){
        return $http.get(url)
          .then(function(response){
            return response.data;
          }, function(error){
             return response;
          });
      }

      (function(){
        var len = fileArr.length;
        for(var i = 0; i<len; i++){
          promiseArr.push(getData('../jsons/'+fileArr[i]+'.json'));
        }
      })();

      this.dropDownValues = function(){
        return $q.all(promiseArr)
      };
    });

})();
