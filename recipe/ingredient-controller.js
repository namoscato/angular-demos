angular
    .module('amo.recipe')
    .controller('AmoIngredientController', function() {
        this.getSetAmount = function(amount) {
            if (angular.isDefined(amount)) {
                this.servings = amount / this.ingredient.amount;
            }

            return this.ingredient.amount * this.servings;
        };

        this.onToggleIngredient = function() {
            this.onToggle({
                value: this.isChecked
            });
        };
    });
