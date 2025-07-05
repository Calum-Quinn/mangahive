<script>
  import { invalidate } from '$app/navigation';
  export let data;


  // Form 1 fields
  let title = '';
  let author = '';
  let description = '';
  let year = '';
  let image = null;

  // Form 2 fields

  let selectedMangaId = '';
  let volumeNumber = '';
  let volumeDate = '';

  async function handleSubmitManga(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('formType', 'addSeries');
    formData.append('title', title);
    formData.append('author', author);
    formData.append('description', description);
    formData.append('year', year);
    formData.append('image', image);

    const res = await fetch('/new_admin', {
      method: 'POST',
      body: formData
    });

    if (res.ok) {
      await invalidate();
      window.location.href = '/mangas';
    } else {
      alert('Erreur lors de l\'ajout du manga.');
    }
  }

  async function handleSubmitVolume(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('formType', 'addVolume');
    formData.append('mangaId', selectedMangaId);
    formData.append('volumeNumber', volumeNumber);
    formData.append('releaseDate', volumeDate);

    const res = await fetch('/new_admin', {
      method: 'POST',
      body: formData
    });

    if (res.ok) {
      await invalidate();
      window.location.href = '/mangas';
    } else {
      alert('Erreur lors de l\'ajout du tome.');
    }
  }
</script>

<!-- Container for both forms -->
<section class="flex flex-col md:flex-row justify-center gap-8 mt-10 px-4">
  <!-- Form 1: Add Manga -->
  <div class="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
    <h1 class="text-2xl font-semibold mb-6 text-center">Ajouter un Manga</h1>
    <form on:submit|preventDefault={handleSubmitManga} class="space-y-4">
      <input type="hidden" name="formType" value="addSeries" />
      <div>
        <label class="block font-medium">Titre</label>
        <input class="w-full border rounded px-3 py-2" bind:value={title} required />
      </div>

      <div>
        <label class="block font-medium">Auteur</label>
        <input class="w-full border rounded px-3 py-2" bind:value={author} required />
      </div>

      <div>
        <label class="block font-medium">Année</label>
        <input type="number" class="w-full border rounded px-3 py-2" bind:value={year} required />
      </div>

      <div>
        <label class="block font-medium">Description (facultatif)</label>
        <input class="w-full border rounded px-3 py-2" bind:value={description} />
      </div>

      <div>
        <label class="block font-medium">Image</label>
        <input type="file" accept="image/*" on:change={(e) => image = e.target.files[0]} required />
      </div>

      <button class="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700" type="submit">
        Ajouter
      </button>
    </form>
  </div>

  <!-- Form 2: Add Volume -->
  <div class="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl self-start">
    <h1 class="text-2xl font-semibold mb-6 text-center">Ajouter un Tome</h1>
    <form on:submit|preventDefault={handleSubmitVolume} class="space-y-4">
      <input type="hidden" name="formType" value="addVolume" />
      <div>
        <label class="block font-medium">Manga</label>
        <select class="w-full border rounded px-3 py-2" bind:value={selectedMangaId} required>
          <option value="" disabled selected>Choisir un manga</option>
          {#each data.mangas as manga}
            <option value={manga.id}>{manga.title}</option>
          {/each}
        </select>
      </div>

      <div>
        <label class="block font-medium">Numéro du Tome</label>
        <input type="number" min="1" class="w-full border rounded px-3 py-2" bind:value={volumeNumber} required />
      </div>

      <div>
        <label class="block font-medium">Date de sortie</label>
        <input type="date" class="w-full border rounded px-3 py-2" bind:value={volumeDate} required />
      </div>

      <div>
        <label class="block font-medium">Image</label>
        <input type="file" accept="image/*" on:change={(e) => image = e.target.files[0]} />
      </div>

      <button class="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700" type="submit">
        Ajouter
      </button>
    </form>
  </div>
</section>
