var app = angular.module('wsscat', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/detail1', {
		templateUrl: 'views/detail1.html',
		//controller:'indexCtrl'
	}).when('/detail2', {
		templateUrl: 'views/detail2.html',
		//controller:'homeCtrl'
	})
}])
app.controller('indexCtrl', function($scope, $http) {
	//	(adsbygoogle = window.adsbygoogle || []).push({});
	console.log($scope);
	$scope.methods = function() {

	}
	$scope.name = 'wsscat'
	$scope.fuck = '菜鸟教程 -- 学的不仅是技术，更是梦想！'
	$scope.navs = [{
		name: '第一个DEMO页面',
		url: '1.html#/detail1'
	}, {
		name: '第二个DEMO页面',
		url: '2.html#/detail2'
	}, {
		name: '首页',
		url: 'http://www.runoob.com/'
	}, {
		name: '首页',
		url: 'http://www.runoob.com/'
	}, {
		name: '首页',
		url: 'http://www.runoob.com/'
	}, {
		name: '首页',
		url: 'http://www.runoob.com/'
	}, {
		name: '首页',
		url: 'http://www.runoob.com/'
	}, {
		name: '首页',
		url: 'http://www.runoob.com/'
	}, {
		name: '首页',
		url: 'http://www.runoob.com/'
	}, {
		name: '首页',
		url: 'http://www.runoob.com/'
	}]
})
app.controller('index2Ctrl', function($scope, $http) {
	$scope.name = 'wsscat'
	$scope.fuck = '菜鸟教程 -- 学的不仅是技术，更是梦想！'
	$scope.navs = [{
		name: '第一个DEMO页面',
		url: '1.html#/detail1'
	}, {
		name: '第二个DEMO页面',
		url: '2.html#/detail2'
	}, {
		name: '第二个页面',
		url: 'http://www.runoob.com/'
	}, {
		name: '第二个页面',
		url: 'http://www.runoob.com/'
	}, {
		name: '第二个页面',
		url: 'http://www.runoob.com/'
	}, {
		name: '第二个页面',
		url: 'http://www.runoob.com/'
	}, {
		name: '第二个页面',
		url: 'http://www.runoob.com/'
	}, {
		name: '第二个页面',
		url: 'http://www.runoob.com/'
	}, {
		name: '第二个页面',
		url: 'http://www.runoob.com/'
	}, {
		name: '第二个页面',
		url: 'http://www.runoob.com/'
	}]
})
app.directive('xheader', function() {
	return {
		templateUrl: 'directive/xheader.html',
		link: function(scope, ele, attr) {
			console.log(ele)
		}
	}
})
app.directive('xnav', function() {
	return {
		templateUrl: 'directive/xnav.html',
		link: function(scope, ele, attr) {
			console.log(ele)
		}
	}
})

app.directive('xcontent', function() {
	return {
		templateUrl: 'directive/xcontent.html',
		link: function(scope, ele, attr) {
			ele.css('color', 'red')
		}
	}
})

app.directive('xfooter', function() {
	return {
		templateUrl: 'directive/xfooter.html',
		link: function(scope, ele, attr) {}
	}
})

app.directive('fixedbtn', function() {
	return {
		templateUrl: 'directive/fixedbtn.html'
	}
})