import { loadRecipe } from "./data/recipe-data.js";


let recipesData;
let searchInput ;

// 
// let filteredFood= [];
// let searchButton = document.getElementById('search-button');

async function getRecipes() {
    recipesData = await loadRecipe();

    // console.log(recipesData);

    if (recipesData) {
        displayFoodItems(recipesData);


        // searchButton.addEventListener('click', () => {

        //     searchInput = document.getElementById('search-input').value.toLowerCase();

        //     searchByIngredients(searchInput);

        //     // displayFoodItems(filteredFood);

        // });


        // added on keyup event and pass the search input to the searchByIngredients() as a parameter
        document.getElementById('search-input').addEventListener('keyup',()=>{
            searchInput= document.getElementById('search-input').value.toLowerCase();
            searchByIngredients(searchInput);

        });


    } else {
        console.log('No recipes available');
    }

}


function displayFoodItems(recipes) {
    const foodItemsContainer = document.getElementById('food-items');
    foodItemsContainer.innerHTML = '';
    recipes.forEach(recipe => {
        const foodCard = document.createElement('div');
        foodCard.classList.add('food-card');

        // console.log(recipe.id);

        foodCard.innerHTML = `
            <img src="${recipe.image || 'https://via.placeholder.com/300x200?text=No+Image'}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <p>${recipe.ingredients}</p>
            <button class="js-view-recipe-btn" onclick="viewRecipe(${recipe.id})">View Recipe</button>
        `;
        foodItemsContainer.appendChild(foodCard);
    });
}






function searchByIngredients(searchInput){
    // console.log(searchInput);

        let filteredFood =  recipesData.filter(recipe=>{

        let recipeName = String(recipe.name);
        let recipeIngredients = String(recipe.ingredients);

        // console.log(recipeIngredients);
        // console.log(recipeName);
        
        recipeName = recipeName.toLowerCase();

        recipeIngredients = recipeIngredients.toLowerCase();

        // console.log(recipeIngredients);
        // console.log(recipeName);
        
        return recipeName.includes(searchInput) || recipeIngredients.includes(searchInput);

    });
    displayFoodItems(filteredFood);
}


try{
window.viewRecipe = function (recipeId) {
    const selectedRecipe = recipesData.find(recipe => recipe.id === recipeId);
    localStorage.setItem('selectedRecipe', JSON.stringify(selectedRecipe));
    window.location.href = 'recipe-detail.html'; 
};
} catch (error) {
console.error('Error fetching data:', error);
}

getRecipes();





// Fetch data from the API
// fetch('https://dummyjson.com/recipes')
// .then(response => response.json())
// .then(data => {
//     const recipes = data.recipes;
//     // Initially display all food items
//     displayFoodItems(recipes);

//     // Event listener for the search button

//     document.getElementById('search-button').addEventListener('click', () => {
//         const searchQuery = document.getElementById('search-input').value.toLowerCase();
//         const filteredFood = recipes.filter(recipe => {
//             const name = String(recipe.name || '').toLowerCase();
//             const ingredients = String(recipe.ingredients || '').toLowerCase();
//             return name.includes(searchQuery) || ingredients.includes(searchQuery);
//         });
//         displayFoodItems(filteredFood);
//     });

//     // Display food items in cards
//     function displayFoodItems(recipes) {
//         const foodItemsContainer = document.getElementById('food-items');
//         foodItemsContainer.innerHTML = '';
//         recipes.forEach(recipe => {
//             const foodCard = document.createElement('div');
//             foodCard.classList.add('food-card');
//             foodCard.innerHTML = `
//                 <img src="${recipe.image'}" alt="${recipe.name}">
//                 <h3>${recipe.name}</h3>
//                 <p>${recipe.ingredients}</p>
//                 <button onclick="viewRecipe(${recipe.id})">View Recipe</button>
//             `;
//             foodItemsContainer.appendChild(foodCard);
//         });
//     }


//     window.viewRecipe = function (recipeId) {
//         const selectedRecipe = recipes.find(recipe => recipe.id === recipeId);
//         localStorage.setItem('selectedRecipe', JSON.stringify(selectedRecipe));
//         window.location.href = 'recipe-detail.html'; 
//     };
// })
// .catch(error => console.error('Error fetching data:', error));


