angular.module('cart', [])
.factory('cart', function(){
	var cartData = [];

	return {

		addProduct :  function(id, name, price){
			var addedToExisting = false;

			for(var i=0; i< cartData.length;i++){
				if(cartData[i].id == id){
					cartData[i].count++;
					addedToExisting = true;
					break;
				}
			}
			if(!addedToExisting){
				cartData.push({
					id : id,
					name: name,
					price : price,
					count : 1
				});
			}
		},

		removeProduct  : function(id){
			for (var i = 0; i < cartData.length; i++) {
				if (cartData[i].id == id) {
					cartData.splice(i, 1);
					break;
				}
			}
		},

		getProducts : function(){
			return cartData;
		}
	};
})
.directive("cartSummary", function (cart) {
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

