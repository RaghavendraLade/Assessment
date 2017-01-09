(function(){
  'use strict';
  angular
    .module('innoCustomDropDown',[])
    .directive('inFilterChoose',function(){
      return {
        restrict : 'E',
        scope : {
          options : '=',
          selected : '=',
          name :'@',
          onChange : '&'
        },
        template : "<div class = 'container-fluid inno-custom-input'><div class = 'col-xs-12 inno-custom-input'><div class='input-group custom-content' data-toggle='dropdown'><input type='text' class='form-control custom-field remove-border-bg' name = '{{name}}' placeholder='Select' ng-model='selected' required = 'required' ng-change = 'onChange(selected)'disabled><div class='input-group-addon remove-border-bg'><span><i class = 'fa fa-angle-down'></i></span></div></div><div class='dropdown-menu col-xs-12 select-menu'><input type='text' class = 'form-control' placeholder='Select' ng-model = 'filterIt'><ul class = 'menu-list'><li ng-repeat='data in options | filter:filterIt track by $index' ng-click = 'selectThis(data)'>{{data}}</li></ul></div></div></div>",
        link : function(scope){
          scope.selectThis = function(data){
            scope.selected = data;
            scope.filterIt = "";
          }
        }
      }

    });
})();
