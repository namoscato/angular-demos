angular
    .module('amo.recipe')
    .directive('amoIngredient', function() {
        return {
            controller: 'AmoIngredientController',
            controllerAs: 'ingredient',
            bindToController: true,
            restrict: 'E',
            scope: {
                ingredient: '<',
                onToggle: '&',
                servings: '=',
                tooltip: '@'
            },
            templateUrl: 'ingredient.html'
        };
    });
