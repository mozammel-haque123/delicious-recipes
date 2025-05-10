import { useState } from 'react'
import './App.css'
import Banner from './component/Banner/Banner'
import BookMark from './component/BookMark/BookMark'
import MainSection from './component/MainSection/MainSection'
import Navver from './component/Navver/Navver'
import RecipeFatch from './component/RecipeFetch/RecipeFatch'
import Footer from './component/Footer/Footer'

function App() {
 
  const [bookMark, setBookMark] = useState ([])

  const [preparing, setPreparing] = useState([])

  const [time, setTime] = useState(0)

  const [calories, setCalories] = useState(0)



const handleWanttoCook = (recopes) =>{
  const newbookMark = bookMark.find((b)=>b.recipe_id === recopes.recipe_id);
  if(newbookMark){
    alert('Dont add it twice.')
  }else{
  const newBook = [...bookMark ,recopes]
 setBookMark(newBook)
  }
}

const handaleBookMark = (bookMarks)=>{
  //  drop dawon data show
 const showData = bookMark.find((sho)=> sho.recipe_id === bookMarks); 
 setPreparing([...preparing, showData])

  // remove data 
 const removeData = bookMark.filter((bo)=>bo.recipe_id !== bookMarks)
 setBookMark(removeData)

}

const timeCalories = (times,item)=>{
 const updateTime = Number(times) + time;
 setTime(updateTime)

const updateCalories = Number(item) + calories;
setCalories(updateCalories)
}


  return (
    <>
    {/* navver jsx */}
  <Navver></Navver>
  {/* Banner */}
  <Banner></Banner>

{/* mai section */}
<MainSection></MainSection>
  <div className="max-w-[91.6667%] mx-auto flex flex-col md:flex-row gap-4">
      {/* Recipe fetch */}
  <RecipeFatch handleWanttoCook={handleWanttoCook}></RecipeFatch>
   {/* Book Mark */}
   <BookMark bookMark={bookMark} handaleBookMark={handaleBookMark} preparing={preparing} timeCalories={timeCalories} time={time} calories={calories}></BookMark>
  </div>
  {/* Footer */}
  <Footer></Footer>
    </>
  )
}

export default App
