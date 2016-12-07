angular.
  module( 'app.headerAndFooter' , ['ngMaterial'])
    .directive( 'header' ,headerF)


      function headerF(){
      	var directive = {
      		
      		restrict: AE,
      		templateUrl: 'header.html'

      	};
      	return directive;
      }