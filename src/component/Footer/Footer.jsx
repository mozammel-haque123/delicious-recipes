
export default function Footer() {
  return (
    <div>
        <footer class="bg-emerald-100 text-gray-800 mt-10">
  <div class="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    
    {/* <!-- Logo and Description --> */}
    <div>
      <h2 class="text-2xl font-bold text-emerald-600">Foodie Recipes</h2>
      <p class="mt-2 text-sm">
        Discover delicious and easy-to-make recipes curated for every taste. Cook, eat, and enjoy!
      </p>
    </div>

    {/* <!-- Quick Links --> */}
    <div>
      <h3 class="text-lg font-semibold mb-3">Quick Links</h3>
      <ul class="space-y-2 text-sm">
        <li><a href="#" class="hover:text-emerald-600">Home</a></li>
        <li><a href="#" class="hover:text-emerald-600">Recipes</a></li>
        <li><a href="#" class="hover:text-emerald-600">Blog</a></li>
        <li><a href="#" class="hover:text-emerald-600">Contact</a></li>
      </ul>
    </div>

    {/* <!-- Categories --> */}
    <div>
      <h3 class="text-lg font-semibold mb-3">Categories</h3>
      <ul class="space-y-2 text-sm">
        <li><a href="#" class="hover:text-emerald-600">Vegetarian</a></li>
        <li><a href="#" class="hover:text-emerald-600">Non-Veg</a></li>
        <li><a href="#" class="hover:text-emerald-600">Desserts</a></li>
        <li><a href="#" class="hover:text-emerald-600">Quick Bites</a></li>
      </ul>
    </div>

    {/* <!-- Newsletter --> */}
    <div>
      <h3 class="text-lg font-semibold mb-3">Join Our Newsletter</h3>
      <form class="flex flex-col space-y-3">
        <input type="email" placeholder="Your email" class="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
        <button class="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600">Subscribe</button>
      </form>
    </div>
  </div>

  {/* <!-- Bottom --> */}
  <div class="text-center py-4 bg-emerald-200 text-sm text-gray-700">
    &copy; 2025 Foodie Recipes. All rights reserved.
  </div>
</footer>

    </div>
  )
}
