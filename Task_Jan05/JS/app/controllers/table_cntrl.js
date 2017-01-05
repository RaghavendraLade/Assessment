(function(){
  'use strict';

  angular
    .module('innoApp')
    .controller('tableCtrl',['$scope','paymentInfo',function($scope,paymentInfo){
        $scope.tableInfo = {};
      paymentInfo.dropDownValues().then(function(response){
        var data = angular.copy(response)
        var len = data[0].length;
        for(var i = 0; i<len; i++){
          (data[0])[i].path = ((data[0])[i].path).split("\\")[2];
        }
        len = data[1].length;
        for(var i = 0; i<len; i++){
          (data[1])[i].path = ((data[1])[i].path).split("\\")[2];
        }

        $scope.data = data;
      });
      $scope.form = true;
      $scope.generate = function(saveIt){
        var savedInfo = angular.copy(saveIt)
        if(savedInfo.paymentType != undefined){
          if(savedInfo.paymentType in $scope.tableInfo){
            $scope.tableInfo[savedInfo.paymentType].push(savedInfo);
            $scope.info = {};
            $scope.form = true;
          }else{
            $scope.tableInfo[savedInfo.paymentType] = [];
            $scope.tableInfo[savedInfo.paymentType].push(savedInfo);
            $scope.info = {};
            $scope.form = true;
          }
        }

      }
    }]);


})();
