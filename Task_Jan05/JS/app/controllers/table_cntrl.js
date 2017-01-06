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
      $scope.formChange = true;
      $scope.generate = function(saveIt){
        var savedInfo = angular.copy(saveIt)
        if(savedInfo.paymentType != undefined){
          if(savedInfo.paymentType in $scope.tableInfo){
            $scope.tableInfo[savedInfo.paymentType].push(savedInfo);
          }else{
            $scope.tableInfo[savedInfo.paymentType] = [];
            $scope.tableInfo[savedInfo.paymentType].push(savedInfo);
          }
          $scope.info = {};
          $scope.formChange = true;
          $('#open-form').modal('hide');
        }
      }
      $scope.editPage = true;
      $scope.editFun = function(editData,payType,index){
        $scope.formChange = true;
        $scope.info = angular.copy(editData);
        $('#open-form').modal('show');
        $scope.editPage = false;
        $scope.saveEditInfo = function(editedInfo){
          ($scope.tableInfo[payType])[index] = angular.copy(editedInfo);
          $scope.info = {};
          $scope.formChange = true;
          $scope.editPage = true;
          $('#open-form').modal('hide');
        }
      }

      $scope.delFun = function(key,index){
        $('#del-confirm-box').modal('show');
        $scope.confirmDel = function(){
          ($scope.tableInfo[key]).splice(index,1);
          $('#del-confirm-box').modal('hide');

        }
      }

      $scope.dismissModal = function(){
        $('#open-form').modal('hide');
        $scope.info = {};
        $scope.formChange = true;
        $scope.editPage = true;
      }


    }]);


})();
