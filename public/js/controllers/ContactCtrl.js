function ContactController($scope, $http) {
	$scope.success = false;
	$scope.error = false;
	$scope.send = function () {

		console.log('contact ContactController')

		var htmlBody = '<div>Name: ' + $scope.user.name + '</div>' +
		'<div>Email: ' + $scope.user.email + '</div>' +
		'<div>Message: ' + $scope.user.body + '</div>' +
		'<div>Date: ' + (new Date()).toString() + '</div>';
	}
}