fetch('https://dummyjson.com/recipes').then(response=>
    response.json()
).then(data=>{
    const recipes = data.recipes;
    recipes.forEach((recipe) => {
        console.log(recipe.id); 


    });
});


