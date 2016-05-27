angular
    .module('amo.recipe')
    .factory('amoRecipeDataFactory', function() {
        return {
            name: 'Blueberry Cheesecake',
            ingredients: [
                {
                    amount: 1,
                    unit: 'cup',
                    name: 'graham cracker crumbs'
                },
                {
                    amount: 2,
                    unit: 'tablespoons',
                    name: 'white sugar'
                },
                {
                    amount: .4,
                    unit: 'cup',
                    name: 'melted butter'
                },
                {
                    amount: 2,
                    unit: '(8 oz) packages',
                    name: 'cream cheese, softened'
                },
                {
                    amount: 1,
                    unit: 'cup',
                    name: 'sour cream'
                },
                {
                    amount: .75,
                    unit: 'cup',
                    name: 'white sugar'
                },
                {
                    amount: 1,
                    unit: 'teaspoon',
                    name: 'vanilla extract'
                },
                {
                    amount: 2,
                    unit: 'tablespoon',
                    name: 'all-purpose flour'
                },
                {
                    amount: 2,
                    unit: 'cup',
                    name: 'frozen blueberries, dry pack'
                },
                {
                    amount: .3,
                    unit: 'cup',
                    name: 'blueberry jelly'
                }
            ]
        };
    });
