angular.module('cart', [])
.directive("cartSummary", function (CartService) {
	return {
		restrict: "E",
		templateUrl: "components/cart/cartSummary.html",
		controller: function ($scope) {
			var cartData = cart.getProducts();

			$scope.total = function () {
				return cartData.reduce(function(total, item){
									return total + item.price * item.count;
								}, 0);
			}

			$scope.itemCount = function () {

				return cartData.reduce(function(total, item){
									return total + item.count;
								}, 0);
			}
		}
	};
});     