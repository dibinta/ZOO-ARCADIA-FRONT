document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM content loaded");
    fetch('http://localhost/zoo_arcadia/ZOO_ARCADIA_FRONT/api/services.php')
        .then(response => {
            console.log("Response status:", response.status);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log("Data received:", data);
            const servicesContainer = document.getElementById('services');
            if (!servicesContainer) {
                console.error('No element with ID "services" found.');
                return;
            }
            servicesContainer.innerHTML = ''; // Clear any existing content
            if (Array.isArray(data) && data.length > 0) {
                data.forEach(service => {
                    console.log("Processing service:", service);
                    const serviceElement = document.createElement('div');
                    serviceElement.className = 'col-md-4';
                    serviceElement.innerHTML = `
                        <div class="card mb-4">
                            <img src="${service.images}" class="card-img-top" alt="${service.nom}">
                            <div class="card-body">
                                <h5 class="card-title">${service.nom}</h5>
                                <p class="card-text">${service.description}</p>
                            </div>
                        </div>
                    `;
                    servicesContainer.appendChild(serviceElement);
                });
            } else {
                console.log("No services found or data is not an array.");
            }
        })
        .catch(error => console.error('Erreur lors de la récupération des services:', error));
});
