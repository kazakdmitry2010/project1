angular.
  module( 'app.headerAndFooter' , ['ngMaterial'])
    .directive( 'headerF' ,headerF)


      function headerF(){
      	var directive = {
      		
      		restrict: 'AE',
      		templateUrl: 'js/directive/header.html'

      	};
      	return directive;
      }