angular.
	module('recipeRandom').
		component('recipeRandom', {
			templateUrl: 'recipe-random/recipe-random.template.html',
				controller: ['$http', '$scope',
					function RecipeDetailController($http, $scope) {
						
						$http.get('recipes/recipes.json').then(function(response) {
							$scope.recipes = response.data.recipes;
							
							$scope.random = Math.floor(Math.random() * $scope.recipes.length);
							
							$scope.randomRecipe = $scope.recipes[$scope.random];
						});
					}
				]
		});