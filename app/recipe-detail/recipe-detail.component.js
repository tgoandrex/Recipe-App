angular.
	module('recipeDetail').
		component('recipeDetail', {
			templateUrl: 'recipe-detail/recipe-detail.template.html',
				controller: ['$http', '$routeParams', '$scope', '$interval',
					function RecipeDetailController($http, $routeParams, $scope, $interval) {
						
						$http.get('recipes/recipes.json').then(function(response) {
							$scope.recipe = response.data.recipes[$routeParams.recipeId - 1];
							
							let seconds = 0;
							let minutes = $scope.recipe.cookTime;
							
							$scope.timer = function timer() {
								if (minutes > 0 || seconds > 0 ) {
									seconds--;
								}
								if (seconds < 0) {
									seconds = 59;
									minutes = minutes - 1;
								}
								
								$scope.minute = minutes;
								$scope.second = seconds;
							};
							
							$scope.runTimer = function runTimer() {
								$interval($scope.timer, 1000);
							};
							
							$scope.completeStep = function completeStep(step) {
								step.completed = true;
							};
							
							$scope.detectCheckBox = function detectCheckBox(check){
								const beep = new Audio('sounds/beep.mp3');
								
								if(minutes == 0 && seconds == 0 && check == true) {
									beep.play();
								}
							};
						});
					}
				]
		});