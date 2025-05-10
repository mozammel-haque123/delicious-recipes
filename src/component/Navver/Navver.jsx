import { CgProfile } from "react-icons/cg";

export default function Navver() {
  return (
    <div className='max-w-11/12 mx-auto'>
        <div class="md:flex justify-between items-center mt-3">
  <div class="">
    <a class="text-3xl font-bold">Recipe Calories</a>
  </div>
  <div class="mt-4">
    <ul class="flex gap-12">
      <li><a className='font-normal text-black'>Home</a></li>
      <li><a  className='font-normal text-black'>Recipes</a></li>
      <li><a  className='font-normal text-black'>About</a></li>
      <li><a  className='font-normal text-black'>Search</a></li>
    </ul>
  </div>
  <div class="flex gap-8 mt-4">
  <label class="input rounded-full">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input className='w-[250px] font-normal' type="search" required placeholder="Search" />
</label>
    
    <button class="btn rounded-full bg-green-400 w-12 h-12"><a className='text-2xl'><CgProfile /></a></button>

  </div>
</div>
    </div>
  )
}
