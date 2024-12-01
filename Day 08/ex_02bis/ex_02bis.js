document.addEventListener("DOMContentLoaded", () => {
    // Coordonnées des écoles Epitech
    const epitechSchools = [
        { city: "Paris", coords: [48.8566, 2.3522] },
        { city: "Lyon", coords: [45.7640, 4.8357] },
        { city: "Toulouse", coords: [43.6047, 1.4442] },
        { city: "Nantes", coords: [47.2184, -1.5536] },
        { city: "Bordeaux", coords: [44.8378, -0.5792] },
        { city: "Marseille", coords: [43.2965, 5.3698] },
    ];

    // Initialiser la carte centrée en France
    const map = L.map("map", { scrollWheelZoom: false }).setView([46.6034, 1.8883], 6);

    // Ajouter une couche de tuiles OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Ajouter les marqueurs pour chaque école
    const markers = epitechSchools.map((school) => {
        const marker = L.marker(school.coords).addTo(map);
        marker.bindPopup(`${school.city} rocks!`);
        return marker;
    });

    // Créer un groupe de marqueurs pour ajuster automatiquement le zoom
    const group = L.featureGroup(markers);
    map.fitBounds(group.getBounds(), { padding: [50, 50] });

    // Empêcher de zoomer trop loin en dehors des écoles
    map.setMaxBounds(group.getBounds());
});
