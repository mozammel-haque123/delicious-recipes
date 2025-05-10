import React, { useEffect, useState } from 'react'
import RecipeData from '../RecipeData/RecipeData';

export default function RecipeFatch({handleWanttoCook}) {

    const [recipe, setRecipe] = useState([]);

    useEffect(()=>{
     fetch('recipe.json')
     .then(res => res.json())
     .then(data => setRecipe(data))
    },[])

  return (
    <div className='w-2/3 sm:w-full order-2 md:order-1'>
       {/* data loding */}
       
  
        {/* data */}

      
      <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 items-center'>
      {
        recipe.map((reci)=> <RecipeData key={reci.recipe_id} recopes={reci} handleWanttoCook={handleWanttoCook}></RecipeData>)
      }
      </div>

    </div>
  )
}
