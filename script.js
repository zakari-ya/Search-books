async function searchBooks() {
  const searchTerm = document.getElementById("searchInput").value;
  const resultsDiv = document.getElementById("results");
  const loadingDiv = document.getElementById("loading");

  if (!searchTerm) {
    alert("Veuillez entrer un titre de livre");
    return;
  }

  // Afficher le chargement
  loadingDiv.style.display = "block";
  resultsDiv.innerHTML = "";

  try {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(
        searchTerm
      )}&limit=20`
    );
    const data = await response.json();

    loadingDiv.style.display = "none";

    if (data.docs.length === 0) {
      resultsDiv.innerHTML = '<p class="no-results">Aucun livre trouvé</p>';
      return;
    }

    // Filtrer les livres qui ont une image
    const booksWithImages = data.docs.filter((book) => book.cover_i);

    if (booksWithImages.length === 0) {
      resultsDiv.innerHTML =
        '<p class="no-results">Aucun livre avec image trouvé</p>';
      return;
    }

    // Afficher uniquement les livres avec images
    booksWithImages.forEach((book) => {
      const bookElement = document.createElement("div");
      bookElement.className = "book";

      // Construire l'URL de l'image (maintenant garantie d'exister)
      const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;

      // Auteurs (peut être un tableau)
      const authors = book.author_name
        ? book.author_name.join(", ")
        : "Auteur inconnu";

      // Créer un lien de téléchargement si un identifiant est disponible
      let downloadLink = "";
      if (book.key) {
        // Lien vers la page du livre sur Open Library où on peut parfois trouver des versions numériques
        const openLibraryUrl = `https://openlibrary.org${book.key}`;
        downloadLink = `<a href="${openLibraryUrl}" target="_blank" class="download-link">Voir sur Open Library</a>`;
      }

      // Alternative: chercher sur Project Gutenberg (livres du domaine public)
      let gutenbergLink = "";
      if (book.title && authors !== "Auteur inconnu") {
        const gutenbergQuery = encodeURIComponent(`"${book.title}" ${authors}`);
        gutenbergLink = `<a href="https://www.gutenberg.org/ebooks/search/?query=${gutenbergQuery}" target="_blank" class="download-link" style="background-color: #6f42c1; margin-left: 10px;">Chercher sur Gutenberg</a>`;
      }

      bookElement.innerHTML = `
                        <img class="book-cover" src="${coverUrl}" alt="Couverture de ${book.title}">
                        <div class="book-info">
                            <h3>${book.title}</h3>
                            <p><strong>Auteur:</strong> ${authors}</p>
                            <p><strong>Année:</strong> ${
                              book.first_publish_year || "Inconnue"
                            }</p>
                            ${
                              book.isbn
                                ? `<p><strong>ISBN:</strong> ${book.isbn[0]}</p>`
                                : ""
                            }
                            <div>
                                ${downloadLink}
                                ${gutenbergLink}
                            </div>
                        </div>
                    `;

      resultsDiv.appendChild(bookElement);
    });
  } catch (error) {
    loadingDiv.style.display = "none";
    resultsDiv.innerHTML = "<p>Erreur lors de la recherche</p>";
    console.error("Erreur:", error);
  }
}

// Recherche avec la touche Entrée
document
  .getElementById("searchInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchBooks();
    }
  });
