angular.
  module( 'app.headerAndFooter' , ['ngMaterial'])
    .directive( 'header' ,header)


      function header(){
      	var directive = {
      		link: link,
      		restrict: AE,
      		templateUrl: '../../html/header.html'

      	};
      	return directive;
      }