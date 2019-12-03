import { getSessionInfo, loadAllPartials, checkInput, displayError } from '../scripts/helpers.js';
import { get, post, put, del } from '../scripts/requester.js';

const categories = {
    'Vegetables and legumes/beans': 'https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__340.jpg',
    'Grain Food': 'https://cdn.pixabay.com/photo/2014/12/11/02/55/corn-syrup-563796__340.jpg',
    Fruits: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029__340.jpg',
    'Milk, cheese, eggs and alternatives': 'https://image.shutterstock.com/image-photo/assorted-dairy-products-milk-yogurt-260nw-530162824.jpg',
    'Lean meats and poultry, fish and alternatives': 'https://t3.ftcdn.net/jpg/01/18/84/52/240_F_118845283_n9uWnb81tg8cG7Rf9y3McWT1DT1ZKTDx.jpg',
};

export const recipeController = {
    getCreate: function (ctx) {
        getSessionInfo(ctx);
        loadAllPartials(ctx)
            .partial('../templates/recipe/create.hbs');
    },

    postCreate: function (ctx) {
        const { meal, ingredients, foodImageURL, prepMethod, description, category } = ctx.params;
        if(checkInput(meal, ingredients, foodImageURL, prepMethod, description, category)){
            displayError('All inputs must be field!');
            return;
        }
        const recipe = {
            meal,
            ingredients: ingredients.split(','),
            foodImageURL,
            prepMethod,
            description,
            category,
            categoryImgUrl: categories[category],
            likesCounter: 0,
        };

        post('appdata', 'recipe', recipe, 'Kinvey')
            .then(() => {
                ctx.redirect('#/');
            })
            .catch(console.error);
    },

    getDetails: function (ctx) {
        getSessionInfo(ctx);
        const id = ctx.params.id;
        get('appdata', `recipe/${id}`, 'Kinvey')
            .then(recipe => {
                ctx.recipe = recipe;
                const creator = recipe._acl.creator;
                ctx.isAuthor = creator === ctx.userId;
                loadAllPartials(ctx)
                    .partial('../templates/recipe/details.hbs');
            });
    },

    getEdit: function (ctx) {
        getSessionInfo(ctx);
        const id = ctx.params.id;
        get('appdata', `recipe/${id}`, 'Kinvey')
            .then(recipe => {
                ctx.recipe = recipe;
                ctx.recipe.ingredients = recipe.ingredients.join(',');

                loadAllPartials(ctx)
                    .partial('../templates/recipe/edit.hbs');
            });
    },

    postEdit: function (ctx) {
        const { meal, ingredients, foodImageURL, prepMethod, description, category, id } = ctx.params;

        const recipe = {
            meal,
            ingredients: ingredients.split(','),
            foodImageURL,
            prepMethod,
            description,
            category,
            categoryImgUrl: categories[category],
        };

        put('appdata', `recipe/${id}`, recipe, 'Kinvey')
            .then(() => {
                ctx.redirect('#/');
            })
            .catch(console.error);
    },

    deleteRecipe: function (ctx){
        const id = ctx.params.id;
        del('appdata', `recipe/${id}`, 'Kinvey')
            .then(() => {
                ctx.redirect('#/');
            });
    },

    likeRecipe: function (ctx){
        const id = ctx.params.id;

        get('appdata', `recipe/${id}`, 'Kinvey')
            .then(recipe => {
                recipe.likesCounter++;
                return put('appdata', `recipe/${id}`, recipe, 'Kinvey');
            })
            .then(() => {
                ctx.redirect('#/');
            });
    },
};
