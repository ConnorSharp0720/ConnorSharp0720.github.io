app.controller('MainController', ['$scope', function($scope) {
    $scope.likes = 0;
    $scope.plusOne = function() {
        console.log('Test function');
        $scope.likes ++;
    }
}]);