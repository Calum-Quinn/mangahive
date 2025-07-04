<script>
  import { invalidate } from '$app/navigation';
  let title = '';
  let author = '';
  let year = '';
  let image = null;

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('year', year);
    formData.append('image', image);

    const res = await fetch('/user/new', {
      method: 'POST',
      body: formData
    });

    if (res.ok) {
      await invalidate();
      window.location.href = '/user/mangas';
    } else {
      alert('Erreur lors de l\'ajout du manga.');
    }
  }
</script>

<section class="max-w-xl mx-auto mt-10 bg-white rounded-xl shadow-lg p-8">
  <h1 class="text-2xl font-semibold mb-6 text-center">Ajouter un Manga</h1>
  <form on:submit|preventDefault={handleSubmit} class="space-y-4">
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
      <label class="block font-medium">Image</label>
      <input type="file" accept="image/*" on:change={(e) => image = e.target.files[0]} required />
    </div>

    <button class="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700" type="submit">
      Ajouter
    </button>
  </form>
</section>
