angular.
  module( 'app.headerAndFooter' , ['ngMaterial'])
    .directive( 'headerF' ,headerF)


      function headerF(){
      	var directive = {
      		
      		restrict: 'AE',
      		templateUrl: 'public/js/directive/header.html'

      	};
      	return directive;
      }