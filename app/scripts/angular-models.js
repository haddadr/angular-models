'use strict';

/**
 * @ngdoc overview
 * @name ng-models
 * @description
 * # ng-models
 * @author Haddad Raouf
 * @homepage https://github.com/haddadr/angular-models
 */
angular
  .module('ng-models', [])
  .directive('ngModels', function() {
	  return {
	  	require: '^ngModel',
	  	scope:{
	  	  ngModels: '=',
	      ngModel: '='
	    },
	    transclude: true,
	    link: function() {
	       scope.$watchCollection('ngModels', function(newModelValues, oldModelValues) {
	       scope.ngModel = _.difference(newModelValues, oldModelValues)[0];
	    	});
	    }
	  }
});
