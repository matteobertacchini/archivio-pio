
        // Inizializzazione della libreria Panzoom
    const elem = document.getElementById('panzoom-element');
    const panzoom = Panzoom(elem, {
            maxScale: 5,         // Zoom massimo 5x
            contain: 'outside',  // Mantiene l'immagine centrata quando si zooma indietro
            step: 0.3            // Sensibilità dello zoom
        });

        // Abilita lo zoom con la rotellina del mouse
    elem.parentElement.addEventListener('wheel', panzoom.zoomWithWheel);

        // Collega i bottoni dell'interfaccia ai comandi
    document.getElementById('zoomIn').addEventListener('click', panzoom.zoomIn);
    document.getElementById('zoomOut').addEventListener('click', panzoom.zoomOut);

        // --- Inizializzazione Mappa Leaflet ---
    const map = L.map('map').setView([43.2, 11.5], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    const locations = [
        { 
            name: "Roma", 
            coords: [41.8902, 12.4922], 
            popupText: "<b>Roma</b><br>Luogo di stesura del documento: <i>'In Roma a dì 4 de febraro 1513.'</i>" 
        },
        { 
            name: "Sassuolo (Saxolo)", 
            coords: [44.5422, 10.7836], 
            popupText: "<b>Sassuolo (Saxolo)</b><br>Luogo in cui si trovano le armi: <i>'In Saxolo sono alcuni miei pezi de artigliaria legiera...'</i>" 
        },
        { 
            name: "Carpi", 
            coords: [44.7825, 10.8841], 
            popupText: "<b>Carpi</b><br>Sede dei conflitti e destinazione richiesta: <i>'...havendoni gran bisogno per Carpi, elquale ni è in tutto privo.'</i>" 
        }
    ];

    locations.forEach(place => {
        L.marker(place.coords).addTo(map).bindPopup(place.popupText);
    });
