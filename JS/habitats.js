document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM content loaded");
    fetch('http://localhost/zoo_arcadia/ZOO_ARCADIA_FRONT/api/habitats.php')
        .then(response => {
            console.log("Response status:", response.status);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log("Data received:", data);
            const habitatsContainer = document.getElementById('habitats');
            if (!habitatsContainer) {
                console.error('No element with ID "habitats" found.');
                return;
            }
            habitatsContainer.innerHTML = ''; // Clear any existing content
            if (Array.isArray(data) && data.length > 0) {
                data.forEach(habitat => {
                    console.log("Processing habitat:", habitat);
                    const habitatElement = document.createElement('div');
                    habitatElement.className = 'col-md-4';
                    habitatElement.innerHTML = `
                        <div class="card mb-4">
                            <img src="${habitat.images}" class="card-img-top" alt="${habitat.nom}">
                            <div class="card-body">
                                <h5 class="card-title">${habitat.nom}</h5>
                                <p class="card-text">${habitat.description}</p>
                            </div>
                        </div>
                    `;
                    habitatsContainer.appendChild(habitatElement);
                });
            } else {
                console.log("No habitats found or data is not an array.");
            }
        })
        .catch(error => console.error('Erreur lors de la récupération des habitats:', error));
});