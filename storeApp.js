//initializing main module and dependencies

angular.module('sportsStore', ['customFilters','cart','ngRoute'])
	.config(function($routeProvider){
		$routeProvider.when("/checkout", {
			templateUrl: "/views/checkoutSummary.html"
		});
		$routeProvider.when("/complete", {
			templateUrl: "/views/thankYou.html"
		});
		$routeProvider.when("/placeorder", {
			templateUrl: "/views/placeOrder.html"
		});
		$routeProvider.when("/products", {
			templateUrl: "/views/productList.html"
		});
		$routeProvider.otherwise({
			templateUrl: "/views/productList.html"
		});
});
 

 