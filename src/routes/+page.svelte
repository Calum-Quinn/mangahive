<script>
  import { base } from '$app/paths';

  const topMangaSeries = [
	{
		title: "One Piece",
		author: "Eiichiro Oda",
		image: "/onepiece.jpg",
		books: "111"
	},
	{
		title: "Berserk",
		author: "Kentaro Miura",
		image: "/berserk.jpg",
		books: "42"
	},
	{
		title: "Hunter x Hunter",
		author: "Yoshihiro Togashi",
		image: "/hunterxhunter.jpg",
		books: "38"
	}
  ]
</script>

<!-- Navigation -->
<nav class="w-full bg-gray-900">
  <div class="max-w-7xl mx-auto flex justify-between items-center px-10 py-4">
    <a href="{base}/" class="text-3xl font-bold text-gray-400">Manga Hive</a>
    <ul class="hidden md:flex gap-6 text-gray-600">
      <li><a href="{base}/" class="hover:underline">Home</a></li>
      <li><a href="{base}/about" class="hover:underline">About</a></li>
      <li><a href="{base}/contact" class="hover:underline">Contact</a></li>
      <li><a href="{base}/faq" class="hover:underline">FAQ</a></li>
    </ul>
  </div>
</nav>

<!-- Header -->
<header class="w-full bg-gray-900 text-white py-12">
  <div class="max-w-7xl mx-auto flex flex-col xl:flex-row xl:gap-8 items-center px-10">
    <div class="xl:w-1/2 text-center xl:text-left">
      <h1 class="text-4xl font-bold mb-4">Le centre de partage pour tous vos mangas</h1>
      <p class="text-white/70 mb-6">Depuis ici il est facile et rapide de soit mettre en location vos mangas soit parcourir ceux mis à disposition par d'autres!</p>
      <div class="flex justify-center xl:justify-start gap-4">
        <a class="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded" href="{base}/start">Démarrer</a>
        <a class="btn btn-outline text-white border border-white py-2 px-4 rounded" href="#info">Plus d'infos</a>
      </div>
    </div>
    <div class="xl:w-1/2 mt-10 xl:mt-0 text-center">
      <img class="rounded-lg" src="{base}/dragonball.jpg" alt="Dragonball" />
    </div>
  </div>
</header>

<!-- Information -->
<section class="pt-12 pb-8" id="info">
	<div class="max-w-7xl mx-auto px-10 text-center">
		<h2 class="text-3xl font-bold mb-5">Principe</h2>
		<div class="grid md:grid-cols-2 gap-20">
			<div>
				<h3 class="font-semibold text-lg mb-2">Locateur</h3>
				<p class="text-gray-400">En tant que locateur tu peux mettre à disposition tous les tomes que tu as pour que d'autres personnes prochent de toi puissent en profiter aussi.</p>
			</div>
			<div>
				<h3 class="font-semibold text-lg mb-2">Locataire</h3>
				<p class="text-gray-400">En tant que locataire tu peux voir tous les tomes mis à disposition par les personnes autour de toi pour profiter pleinement de tout ce que tu veux!</p>
			</div>
		</div>
	</div>
</section>

<!-- Top Picks Preview -->
<section class="py-12">
  <div class="max-w-7xl mx-auto px-10 text-center">
    <h2 class="text-3xl font-bold mb-10">Les séries les plus appréciées</h2>
    <div class="grid md:grid-cols-3 gap-8">
      {#each topMangaSeries as series}
      <div class="bg-white shadow rounded overflow-hidden">
        <img src="{base}{series.image}" alt="Series" class="w-full h-48 object-cover" />
        <div class="p-2">
          <h3 class="font-semibold text-lg mb-2">{series.title}</h3>
        </div>
		<div class="bg-gray-100 p-4 flex justify-center">
			<div class="flex items-center gap-3">
				<div class="font-semibold text-sm">{series.author}</div>
				<div class="text-xs text-gray-500">{series.books} tomes</div>
        	</div>
		</div>
      </div>
      {/each}
    </div>
  </div>
</section>

<!-- Call to Action -->
<aside class="bg-blue-600 text-white py-7 text-center mt-12">
  <div class="max-w-3xl mx-auto px-10">
    <p class="text-white/70">Seulement une petite attente avant le reste...</p>
  </div>
</aside>
