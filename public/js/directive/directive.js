angular.
  module( 'app.headerAndFooter' , ['ngMaterial','MdMenuOffsetDemo'])
    .directive( 'headerF' ,headerF)


      function headerF(){
      	var directive = {
      		
      		restrict: 'AE',
      		templateUrl: 'html/header.html'

      	};
      	return directive;
      }