angular.
  module( 'app.headerAndFooter' , ['ngMaterial'])
    .directive( 'header' ,headerF)


      function header(){
      	var directive = {
      		
      		restrict: AE,
      		templateUrl: 'header.html'

      	};
      	return directive;
      }