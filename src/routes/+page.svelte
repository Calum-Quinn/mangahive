<script>
  
</script>

<!-- Navigation -->
<!-- <nav class="w-full bg-gray-900">
  <div class="max-w-7xl mx-auto flex justify-between items-center px-5 py-4">
    <a href="/" class="text-3xl font-bold text-gray-400">Manga Hive</a>
    <ul class="hidden md:flex gap-6 text-gray-600">
      <li><a href="/" class="hover:underline">Home</a></li>
      <li><a href="/about" class="hover:underline">About</a></li>
      <li><a href="/contact" class="hover:underline">Contact</a></li>
      <li><a href="/faq" class="hover:underline">FAQ</a></li>
    </ul>
  </div>
</nav> -->

<!-- Header -->
<!-- <header class="w-full bg-gray-900 text-white py-12">
  <div class="max-w-7xl mx-auto flex flex-col xl:flex-row items-center px-5">
    <div class="xl:w-1/2 text-center xl:text-left">
      <h1 class="text-4xl font-bold mb-4">Le centre de partage pour tous vos mangas</h1>
      <p class="text-white/70 mb-6">Depuis ici il est facile et rapide de soit mettre en location vos mangas soit parcourir ceux mis à disposition par d'autres!</p>
      <div class="flex justify-center xl:justify-start gap-4">
        <a class="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded" href="/start">Démarrer</a>
        <a class="btn btn-outline text-white border border-white py-2 px-4 rounded" href="#features">Plus d'infos</a>
      </div>
    </div>
    <div class="xl:w-1/2 mt-10 xl:mt-0 text-center">
      <img class="rounded-lg" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." />
    </div>
  </div>
</header> -->

<!-- Navigation -->
<nav class="absolute left-0 right-0 w-screen bg-gray-900">
  <div class="max-w-7xl mx-auto flex justify-between items-center px-5 py-4">
    <a href="/" class="text-3xl font-bold text-gray-400">Manga Hive</a>
    <ul class="hidden md:flex gap-6 text-gray-600">
      <li><a href="/" class="hover:underline">Home</a></li>
      <li><a href="/about" class="hover:underline">About</a></li>
      <li><a href="/contact" class="hover:underline">Contact</a></li>
      <li><a href="/faq" class="hover:underline">FAQ</a></li>
    </ul>
  </div>
</nav>

<!-- Header -->
<header class="absolute left-0 right-0 w-screen bg-gray-900 text-white py-12 mt-16">
  <div class="max-w-7xl mx-auto flex flex-col xl:flex-row items-center px-5">
    <div class="xl:w-1/2 text-center xl:text-left">
      <h1 class="text-4xl font-bold mb-4">Le centre de partage pour tous vos mangas</h1>
      <p class="text-white/70 mb-6">Depuis ici il est facile et rapide de soit mettre en location vos mangas soit parcourir ceux mis à disposition par d'autres!</p>
      <div class="flex justify-center xl:justify-start gap-4">
        <a class="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded" href="/start">Démarrer</a>
        <a class="btn btn-outline text-white border border-white py-2 px-4 rounded" href="#features">Plus d'infos</a>
      </div>
    </div>
    <div class="xl:w-1/2 mt-10 xl:mt-0 text-center">
      <img class="rounded-lg" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." />
    </div>
  </div>
</header>



<!-- Features Section -->
<section class="py-12" id="features">
  <div class="max-w-7xl mx-auto px-5">
    <div class="flex flex-col lg:flex-row gap-12">
      <div class="lg:w-1/3">
        <h2 class="text-2xl font-bold">A better way to start building.</h2>
      </div>
      <div class="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each Array(4) as _, i}
        <div class="bg-white shadow p-6 rounded-lg">
          <div class="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded mb-3">
            <i class="bi bi-collection"></i>
          </div>
          <h3 class="text-lg font-semibold mb-2">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
        </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Testimonial Section -->
<section class="py-12 bg-gray-100">
  <div class="max-w-7xl mx-auto px-5 text-center">
    <blockquote class="italic text-lg mb-6">
      "Working with Start Bootstrap templates has saved me tons of development time when building new projects!"
    </blockquote>
    <div class="flex justify-center items-center gap-4">
      <img class="rounded-full w-10 h-10" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="Something random"/>
      <div>
        <strong>Tom Ato</strong>
        <div class="text-sm text-gray-500">CEO, Pomodoro</div>
      </div>
    </div>
  </div>
</section>

<!-- Blog Preview -->
<section class="py-12">
  <div class="max-w-7xl mx-auto px-5 text-center">
    <h2 class="text-3xl font-bold mb-4">From our blog</h2>
    <p class="text-gray-600 mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque fugit ratione dicta mollitia.</p>
    <div class="grid md:grid-cols-3 gap-8">
      {#each Array(3) as _, i}
      <div class="bg-white shadow rounded overflow-hidden">
        <img src="https://dummyimage.com/600x350/ced4da/6c757d" alt="..." class="w-full" />
        <div class="p-4">
          <div class="text-sm text-white bg-blue-600 inline-block rounded px-2 py-1 mb-2">News</div>
          <h3 class="font-semibold text-lg mb-2">Blog post title</h3>
          <p class="text-sm text-gray-700">Some quick example text to build on the card title and make up the bulk of the content.</p>
        </div>
        <div class="bg-gray-100 p-4 flex items-center gap-3">
          <img class="rounded-full w-10 h-10" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
          <div>
            <div class="font-semibold text-sm">Kelly Rowan</div>
            <div class="text-xs text-gray-500">March 12, 2023 • 6 min read</div>
          </div>
        </div>
      </div>
      {/each}
    </div>
  </div>
</section>

<!-- Call to Action -->
<aside class="bg-blue-600 text-white py-10 text-center mt-12">
  <div class="max-w-3xl mx-auto px-5">
    <h3 class="text-2xl font-bold mb-2">New products, delivered to you.</h3>
    <p class="text-white/70">Sign up for our newsletter for the latest...</p>
  </div>
</aside>

