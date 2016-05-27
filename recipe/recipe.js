angular
    .module('amo.recipe')
    .directive('amoRecipe', function() {
        return {
            controller: 'AmoRecipeController',
            controllerAs: 'recipe',
            restrict: 'E',
            templateUrl: 'recipe.html'
        };
    })
    .controller('AmoRecipeController', function(amoRecipeDataFactory) {
        this.count = 0;
        this.data = amoRecipeDataFactory;
        this.servings = 1;

        this.onToggleIngredient = function(value) {
            this.count += 1 * (value ? 1 : -1);
        }
    });
