angular.
  module( 'app.headerAndFooter' , ['ngMaterial','MdMenuOffsetDemo','ngRoute', 'cardDemo1'])
  	.controller('ctrl', function($scope, $element, $attrs){
  		this.name = 'ctrl';
  		$scope.doSomething = function(){
  			console.log('прикольно');
  		}
  	})
    .directive( 'headerF' ,headerF)


      function headerF(){
      	var directive = {
      		
      		restrict: 'AE',
      		templateUrl: 'html/header.html',
      		controller: 'ctrl'

      	};
      	return directive;
      }