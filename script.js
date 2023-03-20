const recipeBtn = document.getElementById("generate-recipe");
const recipeDiv = document.getElementById("recipe");

const recipes = [
    {
        title: "Spaghetti Carbonara",
        ingredients: ["spaghetti", "bacon", "garlic", "eggs", "parmesan", "salt", "pepper"],
        instructions: "Cook the spaghetti. In a separate pan, cook bacon and garlic. In a bowl, whisk eggs and parmesan. Combine all ingredients, season with salt and pepper, and serve."
    },
    {
        title: "Chicken Alfredo",
        ingredients: ["fettuccine", "butter", "garlic", "heavy cream", "parmesan", "chicken", "salt", "pepper"],
        instructions: "Cook fettuccine. In a saucepan, melt butter, add garlic, heavy cream, and parmesan. Cook chicken separately. Combine all ingredients, season with salt and pepper, and serve."
    },
    {
        title: "Grilled Cheese Sandwich",
        ingredients: ["bread", "butter", "cheddar cheese"],
        instructions: "Butter one side of each bread slice. Place cheddar cheese between the unbuttered sides. Cook in a pan on medium heat until the bread is golden brown and the cheese is melted, flipping once. Serve immediately."
    },
    {
        title: "Caprese Salad",
        ingredients: ["fresh mozzarella", "tomatoes", "basil", "olive oil", "balsamic vinegar", "salt", "pepper"],
        instructions: "Slice fresh mozzarella and tomatoes. Arrange them on a plate, alternating between mozzarella, tomato, and basil leaves. Drizzle with olive oil and balsamic vinegar. Season with salt and pepper. Serve."
    },
    {
        title: "Shakshuka",
        ingredients: ["olive oil", "onion", "bell pepper", "garlic", "tomatoes", "tomato paste", "paprika", "cumin", "cayenne pepper", "eggs", "cilantro", "salt", "pepper"],
        instructions: "In a skillet, heat olive oil and sauté onion and bell pepper. Add garlic, tomatoes, tomato paste, paprika, cumin, and cayenne pepper. Simmer until sauce thickens. Crack eggs into the sauce, cover, and cook until the whites are set but the yolks are still runny. Season with salt and pepper. Garnish with cilantro and serve."
    },
    {
        title: "Pancakes",
        ingredients: ["flour", "baking powder", "salt", "sugar", "milk", "egg", "butter", "maple syrup"],
        instructions: "In a bowl, whisk together flour, baking powder, salt, and sugar. In a separate bowl, combine milk, egg, and melted butter. Add wet ingredients to dry ingredients and mix until just combined. Preheat a nonstick pan or griddle over medium heat. Pour batter onto the pan and cook until bubbles form on the surface, then flip and cook until golden brown. Serve with maple syrup."
    },
    {
        title: "Taco Salad",
        ingredients: ["ground beef", "taco seasoning", "lettuce", "tomatoes", "cheddar cheese", "tortilla chips", "sour cream", "salsa"],
        instructions: "Cook ground beef with taco seasoning. In a large bowl, combine lettuce, tomatoes, cheddar cheese, and crushed tortilla chips. Top with cooked beef, sour cream, and salsa. Serve."
    }
];

recipeBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const randomRecipe = recipes[randomIndex];

    let recipeHtml = `
        <h2>${randomRecipe.title}</h2>
        <h3>Ingredients:</h3>
        <ul>
            ${randomRecipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
        </ul>
        <h3>Instructions:</h3>
        <p>${randomRecipe.instructions}</p>
    `;

    recipeDiv.innerHTML = recipeHtml;
    recipeDiv.style.display = "block";
});
