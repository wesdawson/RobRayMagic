// public/js/services/ContactService.js
// This is where you would use $http or $resource to do your API calls to the Node backend from your Angular frontend.
angular.module('ContactService', []).factory('Contact', ['$http', function($http) {
	
}]);

// Those are just placeholders and they won’t work unless you define those specific routes in your app/routes.js file.
// These services will call our Node backend, retrieve data in JSON format, and then we can use it in our Angular controllers.