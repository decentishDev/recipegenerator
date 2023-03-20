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
    // Add more recipes here
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
