 // Retrieve the selected recipe from localStorage
 const recipe = JSON.parse(localStorage.getItem('selectedRecipe'));


 if (recipe) {
     const recipeDetailsContainer = document.getElementById('recipe-details');
     recipeDetailsContainer.innerHTML = `
         <img src="${recipe.image || 'https://via.placeholder.com/300x200?text=No+Image'}" alt="${recipe.name}">
         <h2>${recipe.name}</h2>
         <p><strong>Rating:</strong> ${recipe.rating || 'N/A'}</p>
         <p><strong>Preparation Time:</strong> ${recipe.prepTimeMinutes || 'N/A'}</p>
         <p><strong>Cooking Time:</strong> ${recipe.cookTimeMinutes || 'N/A'}</p>
         <p><strong>Servings:</strong> ${recipe.servings || 'N/A'}</p>
         <p><strong>Cuisine:</strong> ${recipe.cuisine || 'N/A'}</p>
         <p><strong>Difficulty:</strong> ${recipe.difficulty || 'N/A'}</p>
         <p><strong>Calories per serving:</strong> ${recipe.caloriesPerServing || 'N/A'}</p>

         <div class="ingredients">
             <h3>Ingredients:</h3>
             <ul>
                 ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
             </ul>
         </div>

         <div class="instructions">
             <h3>Instructions:</h3>
             <ul>
                 ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
             </ul>
         </div>
         <button><a href="../index.html">Go to Home Page</a></button>
 
     `;
 } else {
     // If no recipe is found, show a message
     document.body.innerHTML = `<h2>No recipe details available</h2>`;
 }