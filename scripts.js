
const menuItems=[
    {
        "nombreLoc": "Gratallops",
        "imgLoc": "./img/1_Gratallops.jpeg",
        "coordsLoc": [0.7768922673820403, 41.19292907031987],
        "urlTitle": "La relativa seducción de la garnacha",
        "urlLoc": "https://www.lavanguardia.com/vida/20210313/6264504/relativa-seduccion-garnacha.html"
    },
    {
        "nombreLoc": "Saldes",
        "imgLoc": "./img/2_Saldes.jpeg",
        "coordsLoc": [1.7354597705249006, 42.22882474598696],
        "urlTitle": "Con el Pedraforca no es suficiente",
        "urlLoc": "https://www.lavanguardia.com/local/barcelona/20210411/6642284/pedraforca-saldes-lejos-capital.html"
    },
    {
        "nombreLoc": "Soriguera",
        "imgLoc": "./img/3_Soriguera.jpg",
        "coordsLoc": [1.180973960019937, 42.37034260635638],
        "urlTitle": "Nueva vida a 1.700 metros de altura",
        "urlLoc": "https://www.lavanguardia.com/vida/20210517/7436945/nueva-vida-1-700-metros-altura.html"
    },
    {
        "nombreLoc": "Vallfogona",
        "imgLoc": "./img/4_Vallfogona.jpg",
        "coordsLoc": [1.2362376067675527, 41.56330733817715],
        "urlTitle": "La hora de abonar la cosecha del teletrabajo",
        "urlLoc": "https://www.lavanguardia.com/vida/20210606/7508187/hora-abonar-cosecha-teletrabajo.html"
    },
    {
        "nombreLoc": "Maldà",
        "imgLoc": "./img/5_Malda.jpg",
        "coordsLoc": [1.0382939302197796, 41.55049770156254],
        "urlTitle": "Futuro hipotecado por la falta de vivienda",
        "urlLoc": "https://www.lavanguardia.com/local/barcelona/20220116/7989688/futuro-hipotecado-falta-vivienda-lejos-capital.html"
    },
    {
        "nombreLoc": "Bot",
        "imgLoc": "./img/6_Bot.jpeg",
        "coordsLoc": [0.38466209199720897, 41.009140265671306],
        "urlTitle": "La garnacha blanca alienta la esperanza",
        "urlLoc": "https://www.lavanguardia.com/local/barcelona/20220515/8263868/garnacha-blanca-alienta-esperanza.html"
    },
    {
        "nombreLoc": "Farrera",
        "imgLoc": "./img/7_Farrera.jpeg",
        "coordsLoc": [1.2717148594173804, 42.49709856282452],
        "urlTitle": "Revitalizar el municipio con mucho arte",
        "urlLoc": "https://www.lavanguardia.com/vida/20220704/8380897/revitalizar-farrera-arte-despoblacion-pirineos.html"
    },
    {
        "nombreLoc": "Arbolí",
        "imgLoc": "./img/8_Arboli.jpeg",
        "coordsLoc": [0.9487869268765722, 41.242584234929176],
        "urlTitle": "El reto de recuperar hogares vacíos",
        "urlLoc": "https://www.lavanguardia.com/local/tarragona/20220927/8544443/reto-recuperar-hogares-vacios.html"
    },
    {
        "nombreLoc": "Els Prats de Rei",
        "imgLoc": "./img/9_Prats.jpg",
        "coordsLoc": [1.5428045867230935, 41.70596334163014],
        "urlTitle": "Músicos para revitalizar el núcleo histórico",
        "urlLoc": "https://www.lavanguardia.com/local/barcelona/20221010/8559183/musicos-mundo-revitalizan-nucleo-historico-els-prats-rei.html"
    },
    {
        "nombreLoc": "Almatret",
        "imgLoc": "./img/10_Almatret.jpeg",
        "coordsLoc": [0.4235630268150651, 41.305532159894085],
        "urlTitle": "Más energía contra la despoblación",
        "urlLoc": "https://www.lavanguardia.com/local/lleida/20221225/8639253/mas-energia-despoblacion.html"
    },
    {
        "nombreLoc": "Sarroca",
        "imgLoc": "./img/11_Sarroca.jpg",
        "coordsLoc": [0.8810512956233544, 42.360024410557095],
        "urlTitle": "Pueblo fantasma... y destino vacacional",
        "urlLoc": "https://www.lavanguardia.com/local/barcelona/20240102/9478580/pueblo-fantasma-destino-vacacional.html"
    },
    {
        "nombreLoc": "Riner",
        "imgLoc": "./img/12_Riner.jpg",
        "coordsLoc": [1.5637984456067122, 41.941699486176546],
        "urlTitle": "El mantra de menos papeleo y más vivienda",
        "urlLoc": "https://www.lavanguardia.com/vida/20240408/9586517/mantra-papeleo-mas-vivienda.html"
    }
];





const lv_mapboxCoords = [1.6676800, 41.4204600];
const lv_mapboxZoom = 6.4;




document.addEventListener('DOMContentLoaded', function () {

    mapboxgl.accessToken = 'pk.eyJ1IjoiYm1nb2l0aWFkZXYiLCJhIjoiY2xqbHRyamZjMTAxNDNrcGptNGJ1NXN6NyJ9.PQeFFflScwif_Hkr5GXdPQ';

    

    const bounds = new mapboxgl.LngLatBounds();
    menuItems.forEach(item => {
        bounds.extend(item.coordsLoc);  
    });
        
    const carousel = document.getElementById('lv_carousel_items');


    const map = new mapboxgl.Map({
        container: 'lv_map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: lv_mapboxCoords,
        zoom: lv_mapboxZoom,
        /* bounds: bounds,
        fitBoundsOptions: {
            padding: 120
        } */
        
    });

   








    map.on('load', function () {

        map.setLayoutProperty('country-label', 'text-field', ['get', 'name_es']);
        map.setLayoutProperty('water-line-label', 'text-field', ['get', 'name_es']);
        


        map.addSource('world', {
            type: 'geojson',
            data: './geojson/world_sin_3.geojson'
        });
    
        // Añadir la capa para la primera source
        map.addLayer({
            id: 'world-layer',
            type: 'fill',
            source: 'world',
            paint: {
                'fill-color': '#000',
                'fill-opacity': 0.3
            }
        });




        map.addSource('france', {
            type: 'geojson',
            data: './geojson/france.geojson'
        });
    
        map.addLayer({
            id: 'france-layer',
            type: 'fill',
            source: 'france',
            paint: {
                'fill-color': '#000',
                'fill-opacity': 0.3
            }
        });



        map.addSource('portugal', {
            type: 'geojson',
            data: './geojson/portugal.geojson'
        });
    
        map.addLayer({
            id: 'portugal-layer',
            type: 'fill',
            source: 'portugal',
            paint: {
                'fill-color': '#000',
                'fill-opacity': 0.3
            }
        });

        

/*         map.addSource('andorra', {
            type: 'geojson',
            data: 'andorra2.geojson'
        });
    
        map.addLayer({
            id: 'andorra-layer',
            type: 'fill',
            source: 'andorra',
            paint: {
                'fill-color': '#000',
                'fill-opacity': 0.3
            }
        });  */
    
        map.addSource('ccaa', {
            type: 'geojson',
            data: './geojson/CCAA_sin_Cat.geojson'
        });
    
        map.addLayer({
            id: 'ccaa-layer',
            type: 'fill',
            source: 'ccaa',
            paint: {
                'fill-color': '#000',
                'fill-opacity': 0.1
            }
        });

        
        



    });







    map.addControl(new mapboxgl.NavigationControl());
    

    menuItems.forEach(item => {
        
        
        const div = document.createElement('div');
        div.className = 'lv_carousel-item';
        div.innerHTML = `
            <div class="lv_carousel-itemWrapper">
            <img src="${item.imgLoc}" alt="${item.nombreLoc}">
            <div class="lv_carousel-caption"> <p>${item.nombreLoc}</p></div>
            </div>
        `;
        carousel.appendChild(div);
        div.onclick = () => handleCarouselItemClick(item);

        const marker = new mapboxgl.Marker({ color: '#4a70f7' })
            .setLngLat(item.coordsLoc)
            .addTo(map)
            .getElement();

            marker.addEventListener('click', () => {
                handleCarouselItemClick(item);
            });
        
    });

    function handleCarouselItemClick(item) {
         
        hideModal();  

    // Quitar cualquier evento anterior para evitar duplicados
        /* map.off('moveend');   */

    
        map.flyTo({ center: item.coordsLoc, zoom: 16 });

    // Una vez que el mapa termina de moverse, muestra el modal
        map.once('moveend', () => showModal(item));

    }

    function showModal(item) {
        const modal = document.getElementById('lv_modal');
        document.getElementById('lv_modal-img').src = item.imgLoc;
        document.getElementById('lv_modal-link').href = item.urlLoc;
/*         document.getElementById('lv_modal-link').textContent = `${item.nombreLoc} - ${item.urlTitle} →`;
 */     document.querySelector('.lv_modalInfoTitle').textContent = item.nombreLoc;
        document.querySelector('.lv_modalInfoDetail').innerHTML = `${item.urlTitle} <span> ⤴ </span>`;

        modal.style.display = 'flex';  
        // Añadir un pequeño retraso para asegurar que la transición CSS tenga tiempo de activarse
        setTimeout(() => {
            modal.classList.add('show');
        }, 10); 
    }

    function hideModal() {
        console.log('hola?')
        const modal = document.getElementById('lv_modal');
         modal.classList.remove('show');
    // Escuchar el final de la transición para ocultar completamente el modal
        /* modal.addEventListener('transitionend', function onTransitionEnd() {
            
            modal.removeEventListener('transitionend', onTransitionEnd);
        }, { once: true }); */
    }

    window.scrollCarousel = function(direction) {
        carousel.scrollLeft += direction * carousel.offsetWidth * 0.7;
    };

    const lv_closeButton = document.querySelector('.lv_close');

    lv_closeButton.addEventListener('click', hideModal);



    function lv_backToBounds(){

        map.flyTo({
            center: lv_mapboxCoords, 
            zoom: lv_mapboxZoom
            },
            {
                duration: 0.5
            }
        );

        hideModal();
    }


    const lv_butInicio = document.querySelector('.lv_inicio');

    lv_butInicio.addEventListener('click', lv_backToBounds);





});
