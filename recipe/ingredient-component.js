angular
    .module('amo.recipe')
    .component('amoIngredient', {
        controller: 'AmoIngredientController',
        controllerAs: 'ingredient',
        bindings: {
            ingredient: '<',
            onToggle: '&',
            servings: '=',
            tooltip: '@'
        },
        templateUrl: 'ingredient.html'
    });
