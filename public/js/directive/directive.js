angular.
  module( 'app.headerAndFooter' , ['ngMaterial'])
    .directive( 'headerF' ,headerF)


      function headerF(){
      	var directive = {
      		
      		restrict: 'AE',
      		templateUrl: 'html/header.html'

      	};
      	return directive;
      }