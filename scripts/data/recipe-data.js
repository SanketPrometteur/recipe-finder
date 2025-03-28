export async function loadRecipe() {
    
    const response = await fetch('https://dummyjson.com/recipes');

    let data = await response.json();

    let recipes = data.recipes;
    return recipes;
        
}


