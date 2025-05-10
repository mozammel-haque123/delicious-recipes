import BannerImg from '../../assets/rectangle.png.png'

export default function Banner() {
  return (
    <div  className='max-w-11/12 mx-auto mt-5'>
       
       <div  style={{ backgroundImage: `url(${BannerImg})` }}
             className='w-full h-[750px] bg-cover bg-center rounded-xl  text-white text-3xl font-bold' 

       >

      <div className='flex flex-col  items-center'>
      <h1 className='font-bold text-5xl text-center mt-56'>Discover an exceptional cooking <br /> class tailored for you!</h1>
      <p className='font-normal text-gray-300 text-base text-center mt-6'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>

      <div className='mt-10'>
        <button className='btn bg-green-400 font-semibold text-[20px] p-6 rounded-full mr-3 border-none hover:bg-emerald-300'>Explore Now</button>
        <button className='btn bg-transparent font-semibold text-[20px] p-6 rounded-full border border-white text-white'>
  Our Feedback
</button>
      </div>
      </div>

       </div>

    </div>
  )
}
