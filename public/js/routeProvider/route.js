angular.module('app.headerAndFooter')
	.config(function($routeProvider){
		$routeProvider
		 .when("/myFoto", {
		 	templateUrl : "html/myFoto.html"
		 })
	});