import { IoTimeOutline } from "react-icons/io5";
import { FaBurn } from "react-icons/fa";
export default function RecipeData({recopes,handleWanttoCook}) {
    const {recipe_name,recipe_image,short_description,ingredients,preparing_time,calories} = recopes
  return (
    <div>
      <div className="card bg-base-100 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl h-[800px]">
  <figure>
    <img className="w-full h-96 p-4 rounded-4xl"
      src= {recipe_image}
      alt="Shoes" />
  </figure>
  <div className="p-6">
    <h2 className="card-title font-bold text-[20px]">{recipe_name}</h2>
    <p className="font-normal text-gray-500 my-1">{short_description}</p>
    <hr />

    <div className="card-actions">
<ul>
    <h1 className="font-medium text-[18px] my-2">ingredients: {ingredients.length}</h1>
  {ingredients.map((inItem, idx) => (
    <li className="font-normal text-base text-gray-700 my-1" key={idx}>{idx+1}.  : {inItem}</li>
  ))}
</ul>

    </div>

    <hr />
    <div className="flex my-4">
        <p className="flex items-center gap-2 text-base text-gray-600 mr-6"><IoTimeOutline /> {preparing_time} : minutes
        
        </p>
        <p className="flex items-center gap-2 font-normal text-base text-gray-600 "><FaBurn /> {calories}</p>
    </div>
    <div> 
      <button onClick={()=> handleWanttoCook(recopes)} className='btn bg-green-400 font-medium text-[18px] p-6 rounded-full mt-4 border-none hover:bg-emerald-300'>Want to Cook</button>
      </div>
     
  </div>
</div>

    </div>
  )
}
