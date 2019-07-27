angular.
	module('recipeList').
		component('recipeList', {
			templateUrl: 'recipe-list/recipe-list.template.html',
				controller: ['$http', '$scope',
					function RecipeListController($http, $scope) {
						$scope.orderProp = 'level';
						
						$http.get('recipes/recipes.json').then(function(response) {
							$scope.recipes = response.data.recipes;
						});
					}
				]
		});