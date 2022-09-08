const mealInfo = (search) => {
  const url = `https://themealdb.com/api/json/v1/1/search.php?s=${search}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  const mealContainer = document.getElementById("food-container");
  mealContainer.innerHTML = "";
  meals.forEach((meal) => {
    // console.log(meal);
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
         <div onclick="loadMealDetail(${meal.idMeal})" class="card">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
				<ul>
				<li>${meal.strIngredient1}</li>
				<li>${meal.strIngredient2}</li>
				<li>${meal.strIngredient3} </li>
				<li>${meal.strIngredient4}</li>
				<li>${meal.strIngredient5}</li>
				</ul>
              </div>
            </div>
        `;
    mealContainer.appendChild(mealDiv);
  });
};
// eslint-disable-next-line no-unused-vars
const searchFood = () => {
  const searchField = document.getElementById("search-container");
  const searchText = searchField.value;
  mealInfo(searchText);
  searchField.value = "";
};
// eslint-disable-next-line no-unused-vars
const loadMealDetail = (idMeal) => {
  // eslint-disable-next-line no-unused-vars
  const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetail(data.meals[0]));
  //
};
const displayMealDetail = (meal) => {
  const detailContainer = document.getElementById("detail-container");
  detailContainer.innerHTML = "";
  const divMeal = document.createElement("div");
  divMeal.classList.add("card");
  divMeal.innerHTML = `<img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
        <div class="card-body">
             <h5 class="card-title">${meal.strMeal}</h5>
			 <h6>${meal.strTags}</h6>
			 <ul>
             <li><a href="${meal.strYoutube}">Youtube</a></li>
             <li><a href="${meal.strSource}">Meal Info</a></li>
            </ul>
        </div>`;
  detailContainer.appendChild(divMeal);
};

// mealInfo('');
