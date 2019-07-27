angular.
	module('mainApp').
		config(['$routeProvider',
			function config($routeProvider) {
				$routeProvider.
					when('/featuredrecipe', {
						template: '<recipe-random></recipe-random>'
					}).
					when('/recipes', {
						template: '<recipe-list></recipe-list>'
					}).
					when('/recipes/:recipeId', {
						template: '<recipe-detail></recipe-detail>'
					}).
					otherwise('/featuredrecipe');
					}
				]);