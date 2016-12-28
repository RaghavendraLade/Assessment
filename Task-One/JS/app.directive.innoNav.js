(function(){
  'use strict';

  angular
    .module('innoApp')
    .directive('innoNav',innoNav);

  function innoNav(){
    return {
      restrict : 'E',
      templateUrl : './Views/directive.innoNAv.html'
    }
  }

})();
