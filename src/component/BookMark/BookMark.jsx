import React from 'react'

export default function BookMark({ bookMark,handaleBookMark,preparing,timeCalories,time,calories}) {
  return (
    <div className='sm:w-full md:w-1/3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl order-1 md:order-2'>
       <h2 className='font-semibold text-2xl text-center my-5'>Want to cook: {bookMark.length} </h2>
       <hr />

  {/* table book mark */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* Table head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>

          {/* Table body */}
          <tbody>
            {
              bookMark.map((item, idx) => (
                <tr key={idx} className='hover:bg-base-300'>
                  <th>{idx + 1}</th>
                  <td>{item.recipe_name}</td>
                  <td>{item.preparing_time} minutes </td>
                  <td>{item.calories}</td>
                  <td> <button onClick={()=>{handaleBookMark(item.recipe_id); timeCalories(item.preparing_time,item.calories);} } className='btn bg-green-400 font-medium text-[16px] rounded-full mt-4 border-none hover:bg-emerald-300'>Preparing</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      
    {/* table  drop dawon sho */}
      <h2 className='font-semibold text-2xl text-center my-5'>Currently cooking: {preparing.length} </h2>
       <hr />
     <div className="overflow-x-auto">
        <table className="table">
          {/* Table head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>

          {/* Table body */}
          <tbody>
            {
              preparing.map((item, idx) => (
                <tr key={idx} className='hover:bg-base-300'>
                  <th>{idx + 1}</th>
                  <td>{item.recipe_name}</td>
                  <td>{item.preparing_time} minutes </td>
                  <td>{item.calories}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

        <div className='flex justify-center mt-6 p-8'>
  
        <h1 className='mr-10'>Total Time = {time}</h1>
        <h1>Total Calories = {calories}</h1>

        </div>
    </div>
  );
}
