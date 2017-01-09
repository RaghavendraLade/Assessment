(function(){
  'use strict';

  angular
    .module('innoApp')
    .controller('tableCtrl',['$scope','paymentInfo',function($scope,paymentInfo){
        $scope.tableInfo = {};
      paymentInfo.dropDownValues().then(function(response){
        var resp = angular.copy(response)
        var data = [];
        var len = resp.length;
        for(var i = 0; i< len; i++){
          var subdata = [];
          if(Array.isArray(resp[i])){
            var subLen = resp[i].length;
            for(var j = 0; j<subLen; j++){
              subdata.push(((resp[i])[j].path).split("\\")[2]);
            }

          }
          if(!Array.isArray(resp[i]) && typeof(resp[i]) == 'object'){
            var subLen = resp[i].result.length;
            for(var j = 0; j<subLen; j++){
              subdata.push((resp[i].result)[j].value);
            }
          }
          data.push(subdata);
        }
        $scope.data = data;
      });
      $scope.formChange = true;
      $scope.generate = function(saveIt){
        var savedInfo = angular.copy(saveIt)
        if(savedInfo.paymentType != undefined){
          if(!(savedInfo.paymentType in $scope.tableInfo)){
            $scope.tableInfo[savedInfo.paymentType] = [];
          }
          $scope.tableInfo[savedInfo.paymentType].push(savedInfo);

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
