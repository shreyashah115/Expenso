var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', ['$scope','$http', function($scope,$http){
	console.log("Hello from the controller");

}]); 

myApp.controller('AddCtrl', ['$scope','$http', function($scope,$http){
	console.log("Hello from the Add controller");

	// console.log($scope.exp);
	$scope.add = function(){
		x = $scope.Datetemp;
		$scope.exp.Date = x.getDate() + '-' + ( x.getMonth() + 1 ) + '-' + x.getFullYear();
		
		$http.post('/AddExpense', $scope.exp).success(function(response){
			console.log(response);
			$scope.exp = "";
			$scope.Datetemp = "";
		});


	}

}]); 

myApp.controller('SumCtrl', ['$scope','$http', function($scope,$http){
	console.log("Hello from the Summary controller");
	
	$scope.refresh = function(){
	$http.get('/Summary').success(function(response){
		$scope.expense = response;
	});
};
	
	$scope.remove = function(id){
		$http.delete('/Remove/'+ id).success(function(response){
			refresh();
	});	
	};

}]); 