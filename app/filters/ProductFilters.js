	
var app	= angular.module('productFilters', []);

app.filter('unique', function(){

	return function(items, propName){
		if(angular.isArray(items) && angular.isString(propName)){
			var result = [],
			keys = {};

			for(var i=0; i<items.length;i++){
				value = items[i][propName];
				if(angular.isUndefined(keys[value])){
					keys[value] = true;
					result.push(value);
				}	
			}
			return result;
		} else{
			return items;
		}
	}
})
.filter("range", function ($filter) {

	return function (data, page, size) {
		if (angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)) {
			var start_index = (page - 1) * size;
			if (data.length < start_index) {
				return [];
			} else {
				return $filter("limitTo")(data.splice(start_index), size);
			}
		} else {
			return data;
		}
	}
})
.filter("pageCount", function () {
	
	return function (data, size) {
		if (angular.isArray(data)) {
			var result = [];
			for (var i = 0; i < Math.ceil(data.length / size) ; i++) {
				result.push(i);
			}
			return result;
		} else {
			return data;
		}
	}
});
