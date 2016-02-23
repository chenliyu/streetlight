var app = angular.module('slidebox', ['ionic', 'tabSlideBox'])
		.run(['$q', '$http', '$rootScope', '$location', '$window', '$timeout', 
					function($q, $http, $rootScope, $location, $window, $timeout){
	    
	        $rootScope.$on("$locationChangeStart", function(event, next, current){
	            $rootScope.error = null;
	            console.log("Route change!!!", $location.path());
	            var path = $location.path();
	            
	            
	            console.log("App Loaded!!!");
	        });
	    }
	    ]);
		
		app.config(function($stateProvider, $urlRouterProvider) {
			$stateProvider.state('index', {
				url : '/',
				templateUrl : 'index.html',
				controller : 'IndexCtrl'
			});
		
			$urlRouterProvider.otherwise("/");
		});
		
        app.controller("IndexCtrl", ['$rootScope', "$scope", "$stateParams", "$q", "$location", "$window", '$timeout', 
			function($rootScope, $scope, $stateParams, $q, $location, $window, $timeout){
				//设置标签项内容
				$scope.tabs = [
					{"text" : "任务"},
					{"text" : "设备"},
					{"text" : "指标"},
					{"text" : "我的"}
				];
				
				$scope.onSlideMove = function(data){
					//alert("You have selected " + data.index + " tab");
				};
			
        }
        ]);