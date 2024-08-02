function setup() {
  cook("Chai", ["tea leaves", "water", "milk", "spices"]);
}

// taking name of the dish and list of ingredients
function cook(whatToCook = "nothing", ingredients = []) {
  console.log("Now cooking " + whatToCook);

  // check if ingredients are not empty
  if (ingredients.length > 0) {
    showRecipe(ingredients);
  } else {
    console.log("Missing all ingredients");
  }
}

// take ingredients
// and list the recipe for a dish
function showRecipe(collection = []) {
  for(let x=0; x<collection.length; x++) {
    console.log("element number-" + x + ": " + collection[x]);
  }
}
