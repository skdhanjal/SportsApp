angular.module('cart', [])
.factory('CartService', function(){
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
  

