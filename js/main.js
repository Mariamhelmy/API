// async function getMeals(){
//     var response= await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
//     var data = await response.json();
//     console.log(data);
// }
// getMeals()
// for(i<0;i<recipes.length;i++){
//     cartona='';
//     cartona+=
//     `
//     <div class="col-md-3">
//                 <div class="card" >
//                     <img src="../fokir/images/5.jpg" class="card-img-top" alt="...">
//                     <div class="card-body">
//                       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     </div>
//                   </div>
//             </div>
//     `
//     document.querySelectorAll(".row").innerHTML=cartona;
// }
// const apiUrl = "https://forkify-api.herokuapp.com/api/search?q=pizza";

async function fetchRecipes(id="carrot") {
    try {
        const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${id}`);
        const data = await response.json();
        console.log(data);
        
         const recipes = data.recipes;

        // console.log(recipes);
        

        // حاوية العرض
        const recipesContainer = document.getElementById("recipes-container");
        recipesContainer.innerHTML = '';

        // عرض الوصفات
        recipes.forEach(recipe => {
             const recipeDiv = document.createElement("div");
             recipeDiv.classList.add("col-md-3");
            
            recipeDiv.innerHTML = `
                 
                      <div class="card" >
                    <img src="${recipe.image_url}" class="card-img-top" alt="...">
                    <div class="card-body">
                       <p class="card-text">${recipe.title}</p>
                     </div>                   
                     </div>
           
            `;
            recipesContainer.appendChild(recipeDiv);
        });
    } catch (error) {
        console.error("حدث خطأ أثناء جلب البيانات:", error);
    }
}

fetchRecipes("pizza");
var btns=document.querySelectorAll(".nav-link");
for(i=0;i<=btns.length;i++){
    btns[i].addEventListener("click",function(e){
        fetchRecipes(e.target.innerHTML);
    })
}
        

        // حاوية العرض
    //     const recipesContainer = document.getElementById("recipes-container");
    //     recipesContainer.innerHTML = '';

    //     // عرض الوصفات
    //     recipes.forEach(recipe => {
    //          const recipeDiv = document.createElement("div");
    //          recipeDiv.classList.add("col-md-3");
            
    //         recipeDiv.innerHTML = `
    //                   <div class="card" >
    //                 <img src="${recipe.image_url}" class="card-img-top" alt="...">
    //                 <div class="card-body">
    //                    <p class="card-text">${recipe.title}</p>
    //                  </div>                   
    //                  </div>
    //         `;
    //         recipesContainer.appendChild(recipeDiv);
    //     });
    
    //  catch (error) {
    //     console.error("حدث خطأ أثناء جلب البيانات:", error);
    // }



    