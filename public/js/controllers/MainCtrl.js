// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope, $http, $location) {
	
	$scope.user = {name: "", email: ""};

	$scope.send = function() {
    console.log('Im in the controller');

    // Trigger validation flag.
    $scope.submitted = true;

    $http.post('/email', {
        name: $scope.user.name,
        email: $scope.user.email,
        message: $scope.user.message
    }).success(function(data, status, headers, config) {
            if(data.success){
                $location.path('/');
            }else {
                //do something about the error
            }
        });
};

});
