(function(){
  'use strict';

  angular
    .module('innoApp')
    .directive('innoHeader',innoHeader);

  function innoHeader(){
    return {
      restrict : 'E',
      templateUrl : './Views/directive.innoHeader.html'
    }
  }

})();
