var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v12', 
    accessToken: '',
    showMarkers: false,
    theme: 'dark',
    title: 'Ecuador Choco: Conservation and Communities',
    subtitle: 'The work of NGOs and the challenges they face from <span style="color: red; font-weight: bold">climate change</span>, <span style="color: red; font-weight: bold">mining</span>, and <span style="color: red; font-weight: bold">illegal logging</span> are causing deforestation and destroying <span style="color: red; font-weight: bold">animal habitats</span>. It\'s accelerating the impact of <span style="color: red; font-weight: bold">climate change</span>, providing revenue to organized criminal networks, and threatening the livelihood of the local Indigenous communities in the Ecuadorian Choco.',
    logo: '<a href="https://www.chocoalliance.org/" target="_blank"><img src="/static/Logos/Logo-white.png" alt="Choco Alliance Logo"></a>',
    byline: 'By <a href="https://www.chocoalliance.org/" target="_blank">Choco Alliance</a>',
    footer: 'Source: <a href="https://www.chocoalliance.org/" target="_blank">Choco Alliance</a>, <a href="http://ide.ambiente.gob.ec/mapainteractivo/" target="_blank">Ecuadorian Environmental Data</a>',

    chapters: [
        // 1) INTRO
        {
            id: 'intro',
            alignment: 'center',
            hidden: false,
            title: 'Introduction to the Ecuador Choco Region',
            image: '/static/Content_website/images/CloudForest 1.jpg',
            description: 'Discover the rich biodiversity and conservation efforts of the Ecuadorian Choco. This Story Map provides an overview of ongoing NGO projects, forest change analysis, and protection strategies.',
            location: {
                center: [-78.50, 0.50],
                zoom: 10,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: {
                duration: 2000,
                essential: true,
                animate: true
            },
            onChapterEnter: [
               
            ],
            onChapterExit: [

            ]
        },

        // 2) NGOS (10 chapters)
        {
            id: 'decoin-all',
            alignment: 'left',
            title: '<a href="https://www.decoin.org/" target="_blank">DECOIN: Community Conservation</a>',
            image: '/static/Content_website/DECOIN/images/Decoin_1.jpg',
            description: 'For nearly 30 years, DECOIN has worked with Ecuador’s Intag Valley communities to preserve watersheds and forests, establishing 38 local reserves (12,000 hectares). Visit <a href="https://www.decoin.org/" target="_blank">DECOIN</a> for details.',
            location: {
                center: [-78.52, 0.43],
                zoom: 11,
                pitch: 60,
                bearing: -15
            },
            mapAnimation: {
                duration: 3500,
                essential: true,
                animate: true,
                curve: 1.5
            },
            onChapterEnter: [
                {
                    layer: 'decoin-all',
                    opacity: 0.8,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'decoin-all',
                    opacity: 0
                }
            ]
        },
        {
            id: 'fcat-reserves',
            alignment: 'right',
            title: 'FCAT: Bridging Science and Conservation',
            image: '/static/Content_website/FCAT/images/Fcat_1.jpg',
            description: 'The Foundation for the Conservation of the Tropical Andes (FCAT) manages crucial protected areas in the Choco-Andean corridor. Their research-driven approach has led to the discovery of new species and the implementation of evidence-based conservation strategies. The FCAT Reserve serves as a living laboratory for scientific research while protecting critical habitat for endangered species.',
            location: {
                center: [-79.68, 0.35],
                zoom: 12,
                pitch: 50,
                bearing: 20
            },
            mapAnimation: {
                duration: 3000,
                essential: true,
                animate: true
            },
            onChapterEnter: [
                {
                    layer: 'fcat-reserve',
                    opacity: 0.8,
                    duration: 1000
                },
                {
                    layer: 'fcat-bilsa',
                    opacity: 0.8,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'fcat-reserve',
                    opacity: 0
                },
                {
                    layer: 'fcat-bilsa',
                    opacity: 0
                }
            ]
        },
        {
            id: 'ecominga-manduriacu',
            alignment: 'right',
            hidden: false,
            title: '<a href="https://ecomingafoundation.wordpress.com/" target="_blank">Fundación EcoMinga: Guardians of Andean Biodiversity</a>',
            image: '/static/Content_website/Ecominga/images/Ecominga_1.jpg',
            description: 'Fundación EcoMinga is dedicated to protecting foothill forests, cloud forests, and paramo areas in the Andes. With 8,000 hectares of reserves, it works closely with local communities to preserve biodiversity. Learn more at <a href="https://ecomingafoundation.wordpress.com/" target="_blank">EcoMinga Foundation</a>.',
            location: {
                center: [-78.86, 0.33],
                zoom: 12,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: {
                duration: 2000,
                essential: true,
                animate: true
            },
            onChapterEnter: [
                {
                    layer: 'ecominga-manduriacu',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'ecominga-manduriacu',
                    opacity: 0
                }
            ]
        },
        {
            id: 'ecominga-dracula',
            alignment: 'left',
                        title: '<a href="https://ecomingafoundation.wordpress.com/" target="_blank">Ecominga: Dracula Reserve</a>',
            image: '/static/Content_website/Ecominga/images/Ecominga_2.jpg',
            description: 'Named for its remarkable Dracula orchids, the Dracula Reserve shelters over 45 endemic plant species. EcoMinga’s efforts have connected isolated forest fragments, supporting wildlife movement. [Ref: <a href="https://doi.org/10.3390/su16041566" target="_blank">Sustainability Article</a>] More info: <a href="https://ecomingafoundation.wordpress.com/" target="_blank">EcoMinga</a>.',
            location: {
                center: [-78.21, 0.93],
                zoom: 12,
                pitch: 45,
                bearing: 20
            },
            mapAnimation: {
                duration: 2000,
                essential: true,
                animate: true
            },
            onChapterEnter: [
                {
                    layer: 'ecominga-dracula',
                    opacity: 0.8,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'ecominga-dracula',
                    opacity: 0
                }
            ]
        },
        {
            id: 'great-leaf-esperanza',
            alignment: 'right',
            hidden: false,
            title: '<a href="https://www.great-leaf.org/" target="_blank">Great Leaf: La Esperanza Forest</a>',
            image: '/static/Content_website/Great_Leaf/images/Great_leaf_2.webp',
            description: 'Great Leaf manages La Esperanza Forest, a key biodiversity refuge in Ecuador’s Chocó. Their interdisciplinary team combines research and community engagement to protect endangered species, including howler monkeys. [Ref: <a href="https://doi.org/10.3390/land12051112" target="_blank">Land Journal</a>] More info: <a href="https://www.great-leaf.org/" target="_blank">Great Leaf</a>.',
            location: {
                center: [-79.60, -0.37],
                zoom: 14,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: {
                duration: 2500,
                essential: true,
                animate: true
            },
            onChapterEnter: [
                {
                    layer: 'great-leaf-esperanza',
                    opacity: 0.8,
                    duration: 1500
                }
            ],
            onChapterExit: [
                {
                    layer: 'great-leaf-esperanza',
                    opacity: 0
                }
            ]
        },
        {
            id: 'tesoro-escondido',
            alignment: 'left',
            title: '<a href="https://tesororeserve.org/en/" target="_blank">Fundación Tesoro Escondido: Sanctuary for Endangered Species</a>',
            image: '/static/Content_website/Tesoro_Escondido/images/Tesoro_escondido_1.webp',
            description: 'Over 2,000 hectares of primary forest in the Chocó lowlands are safeguarded here, including endangered spider monkeys, Great Green Macaw, and jaguars. Logging, monocrops, and mining threaten this region. Learn more: <a href="https://tesororeserve.org/en/" target="_blank">Tesoro Escondido</a>.',
            location: {
                center: [-79.15, 0.51],
                zoom: 16,
                pitch: 45,
                bearing: 20
            },
            mapAnimation: {
                duration: 2000,
                essential: true,
                animate: true
            },
            onChapterEnter: [
                {
                    layer: 'tesoro-ecoregions',
                    opacity: 0.8,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'tesoro-ecoregions',
                    opacity: 0
                }
            ]
        },
        {
            id: 'tesoro-main-area',
            alignment: 'right',
            hidden: false,
            title: '<a href="https://tesororeserve.org/en/" target="_blank">Tesoro Escondido: Main Area</a>',
            image: '/static/Content_website/Tesoro_Escondido/images/Tesoro_escondido_2.webp',
            description: 'Critically important habitat for the brown-headed spider monkey, Harpy Eagle, and more. This forest refuge underscores the need for urgent protection in Ecuador’s Chocó. Additional info: <a href="https://tesororeserve.org/en/" target="_blank">Tesoro Escondido</a>.',
            location: {
                center: [-79.13, 0.51],
                zoom: 13,
                pitch: 45,
                bearing: 20
            },
            mapAnimation: {
                duration: 2000,
                essential: true,
                animate: true
            },
            onChapterEnter: [
                {
                    layer: 'tesoro-main-area',
                    opacity: 0.8,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'tesoro-main-area',
                    opacity: 0
                }
            ]
        },
        {
            id: 'tma-jama-coaque',
            alignment: 'right',
            hidden: false,
            title: '<a href="https://www.tma.earth/" target="_blank">TMA: Jama-Coaque Reserve</a>',
            image: '/static/Content_website/TMA/images/Tma_1.jpg',
            description: 'Since 2007, TMA has protected over 1,600 hectares through community-based restoration and regenerative agroforestry. Their goal is a “Capuchin Corridor” of 40,000 hectares. More details: <a href="https://www.tma.earth/" target="_blank">TMA</a>.',
            location: {
                center: [-80.12, -0.12],
                zoom: 13,
                pitch: 50,
                bearing: 10
            },
            mapAnimation: {
                duration: 2000,
                essential: true,
                animate: true
            },
            onChapterEnter: [
                {
                    layer: 'tma-pata-de-patajo',
                    opacity: 0.8,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'tma-pata-de-patajo',
                    opacity: 0
                }
            ]
        },
        {
            id: 'tma-pata-de-patajo',
            alignment: 'right',
            hidden: false,
            title: 'TMA: Pata de Patajo',
            image: '/static/Content_website/TMA/images/Tma_5.jpg',
            description: 'An extension of TMA’s work focusing on habitat restoration and sustainable land use. Their approach integrates local communities to secure long-term forest health. [Ref: <a href="https://github.com/eosGV/LULC-PBS" target="_blank">LULC-PBS Method</a>]',
            location: {
                center: [-79.97, 0.01],
                zoom: 12,
                pitch: 50,
                bearing: 10
            },
            mapAnimation: {
                duration: 2000,
                essential: true,
                animate: true
            },
            onChapterEnter: [
                {
                    layer: 'tma-jama-coaque',
                    opacity: 0.8,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'tma-jama-coaque',
                    opacity: 0
                }
            ]
        },
        {
            id: 'fcat-reserve',
            alignment: 'left',
            hidden: false,
            title: '<a href="https://fcat-ecuador.org/" target="_blank">FCAT: FCAT Reserve</a>',
            image: '/static/Content_website/FCAT/images/Fcat_4.jpg',
            description: 'FCAT (Fundación para la Conservación de los Andes Tropicales) conducts scientific research, land purchase, capacity building, and income diversification for conservation. Bilsa Reserve exemplifies these efforts. [More at <a href="https://fcat-ecuador.org/" target="_blank">FCAT</a>]',
            location: {
                center: [-79.68, 0.38],
                zoom: 12,
                pitch: 50,
                bearing: 10
            },
            mapAnimation: {
                duration: 2000,
                essential: true,
                animate: true
            },
            onChapterEnter: [
                {
                    layer: 'fcat-reserve',
                    opacity: 0.8,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'fcat-reserve',
                    opacity: 0
                }
            ]
        },
        {
            id: 'fcat-bilsa',
            alignment: 'left',
            hidden: false,
            title: 'FCAT: Bilsa Reserve',
            image: '/static/Content_website/FCAT/images/Fcat_3.jpg',
            description: 'The Bilsa Reserve spans roughly 3,000 hectares in the Mache-Chindul mountains. It harbors endemic amphibians, undiscovered orchids, and provides key habitat for threatened mammals such as ocelots and margays. Field research here informs FCAT’s strategic expansion and community-based programs, ensuring that livelihoods align with conservation goals.',
            location: {
                center: [-79.75, 0.35],
                zoom: 12,
                pitch: 50,
                bearing: 20
            },
            mapAnimation: {
                duration: 2000,
                essential: true,
                animate: true
            },
            onChapterEnter: [
                {
                    layer: 'fcat-bilsa',
                    opacity: 0.8,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'fcat-bilsa',
                    opacity: 0
                }
            ]
        },

        // 3) FOREST CHANGE (3 chapters)
        {
            id: 'forest-loss',
            alignment: 'center',
            title: 'Forest Loss: A Growing Crisis',
            image: '/static/Content_website/images/Loss.png',
            description: 'From 2001 to 2023, Ecuador lost ~997k hectares of tree cover (5.2% decrease), with ~241k hectares of humid primary forest lost since 2002. [Data: <a href="https://data.globalforestwatch.org/" target="_blank">Global Forest Watch</a>] The LULC-PBS analysis (see <a href="https://github.com/eosGV/LULC-PBS" target="_blank">GitHub</a>) refines local trends by leveraging phenology-based mapping. A similar approach has been implemented in Quirimbas National Park, Mozambique (<a href="https://az4y.users.earthengine.app/view/qnp" target="_blank">LULC-PBS vis</a>).',
            location: {
                center: [-78.5, 0.5],
                zoom: 7,
                pitch: 15,
                bearing: 0
            },
            mapAnimation: {
                duration: 2000,
                essential: true
            },
            onChapterEnter: [
                {
                    layer: 'forest-loss',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'forest-loss',
                    opacity: 0
                }
            ]
        },
        {
            id: 'forest-loss-timeline',
            alignment: 'left',
            title: 'Two Decades of Change (2001-2023)',
            image: '/static/Content_website/images/Loss_year.png',
            description: 'Tree cover loss accelerated from <span style="color: #FFD700; font-weight: bold">2001</span> to <span style="color: #FF0000; font-weight: bold">2025</span>, peaking around infrastructure expansions. Net change in tree cover from <span style="color: #FFD700; font-weight: bold">2000</span> to <span style="color: #FFA500; font-weight: bold">2020</span> was -276k hectares. LULC-PBS captures fine-scale deforestation drivers better than standardized global products. [Refs: <a href="https://doi.org/10.3390/su16041566" target="_blank">Sustainability</a>, <a href="https://doi.org/10.3390/land12051112" target="_blank">Land</a>] <br><br><strong>Legend:</strong> <span style="color: #FFD700; font-weight: bold">2000s</span>, <span style="color: #FFA500; font-weight: bold">2010s</span>, <span style="color: #FF0000; font-weight: bold">2020s</span>',
            location: {
                center: [-78.48, -0.48],
                zoom: 10,
                pitch: 60,
                bearing: 15
            },
            mapAnimation: {
                duration: 2000,
                essential: true
            },
            onChapterEnter: [
                {
                    layer: 'forest-loss-timeline',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'forest-loss-timeline',
                    opacity: 0
                }
            ]
        },
        {
            id: 'forest-gain',
            alignment: 'right',
            title: 'Forest Recovery: Signs of Hope',
            image: '/static/Content_website/images/gain.png',
            description: 'Ecuador gained ~219k hectares of tree cover between 2000 and 2020 (0.17% globally). Restoration projects by NGOs and communities show that regeneration is possible. PBS analysis reveals patterns of both loss and gain, offering a holistic view.',
            location: {
                center: [-78.52, 0.52],
                zoom: 11,
                pitch: 50,
                bearing: -20
            },
            mapAnimation: {
                duration: 2000,
                essential: true
            },
            onChapterEnter: [
                {
                    layer: 'forest-gain',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'forest-gain',
                    opacity: 0
                }
            ]
        },

        // 4) PROTECTION SCHEME (6 chapters)
        {
            id: 'protection-acus',
            alignment: 'left',
            title: 'Protection Scheme: ACUS',
            video: '<iframe width="100%" height="350" src="https://www.youtube.com/embed/bF7zBhIps7Y?si=6x0D7gwFZH2l33wb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            // image: '/static/Content_website/images/acus.jpg', 
            description: 'ACUS (Áreas de Conservación y Uso Sustentable) grants local communities ownership of forest stewardship. These areas protect water sources, preserve forest cover, and promote sustainable development projects that minimize logging and hunting.',
            location: {
                center: [-78.70, -0.80],
                zoom: 7,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: {
                duration: 2000,
                essential: true,
                animate: true
            },
            onChapterEnter: [
                {
                    layer: 'protection-acus',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'protection-acus',
                    opacity: 0
                }
            ]
        },
        {
            id: 'protection-acusmit',
            alignment: 'right',
            title: 'Protection Scheme: Acusmit',
            image: '/static/Content_website/images/Acusmit.jpg',
            description: 'Acusmit extends the ACUS framework, linking isolated forest pockets to maintain wildlife corridors. Its zoning regulations limit extractive industries while fostering traditional livelihoods like shade-grown agriculture. However, recent constitutional changes have enabled mining in protected areas through presidential request, leading to increased conflicts. Between 2013-2017, faced with falling oil prices, Ecuador intensified foreign mining investment despite local opposition. This has resulted in threats to water sources, biodiversity, and Indigenous rights. [<a href="https://doi.org/10.1016/j.geoforum.2024.104111" target="_blank">Read more about the challenges</a>]. Despite these pressures, local communities continue fighting for their rights to prior consultation and environmental protection.',
            location: {
                center: [-78.51, 0.51],
                zoom: 9.5,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: {
                duration: 2000,
                essential: true
            },
            onChapterEnter: [
                {
                    layer: 'protection-acusmit',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'protection-acusmit',
                    opacity: 0
                }
            ]
        },
        {
            id: 'protection-bosques',
            alignment: 'right',
            title: 'Protection Scheme: Bosques Protectores',
            video: '<iframe width="100%" height="350" src="https://www.youtube.com/embed/iyJxgmItsV8?si=UipTXGdKi_2ed21V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            // image: '/static/Content_website/Protection/bosques.jpg',
            description: 'Bosques Protectores serve as buffer zones around national parks, creating essential biological connectors between core reserves. They also safeguard critical water catchments, benefiting downstream communities.',
            location: {
                center: [-78.70, -0.75],
                zoom: 7,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: {
                duration: 2000,
                essential: true
            },
            onChapterEnter: [
                {
                    layer: 'protection-bosques',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'protection-bosques',
                    opacity: 0
                }
            ]
        },
        {
            id: 'protection-cotocachi',
            alignment: 'left',
            title: 'Protection Scheme: Cotocachi Cayapas Ecological Reserve',
            image: '/static/Content_website/images/CCER.jpg',
            description: 'Cotocachi Cayapas Ecological Reserve covers diverse altitudinal gradients, hosting cloud forests, páramo ecosystems, and remarkable avian diversity. It is a UNESCO Biosphere Reserve central to preserving Andean and Chocó biodiversity hot spots.',
            location: {
                center: [-78.80, 0.53],
                zoom: 9,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: {
                duration: 2000,
                essential: true
            },
            onChapterEnter: [
                {
                    layer: 'protection-cotocachi',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'protection-cotocachi',
                    opacity: 0
                }
            ]
        },
        {
            id: 'protection-mache',
            alignment: 'right',
            title: 'Protection Scheme: Mache-Chindul',
            image: '/static/Content_website/FCAT/images/Fcat_2.jpg',
            description: 'Mache-Chindul Ecological Reserve conserves lowland tropical and premontane forests across nearly 70,000 hectares. Restoration here prioritizes securing vantage points for migratory birds and protecting amphibian breeding sites.',
            location: {
                center: [-79.40, 0.54],
                zoom: 9,
                pitch: 35,
                bearing: 0
            },
            mapAnimation: {
                duration: 2000,
                essential: true
            },
            onChapterEnter: [
                {
                    layer: 'protection-mache',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'protection-mache',
                    opacity: 0
                }
            ]
        },
        {
            id: 'protection-biosfera',
            alignment: 'left',
            title: 'Protection Scheme: Reserva Biosfera Chocó',
            image: '/static/Content_website/DECOIN/images/Decoin_2.jpeg',
            description: 'Reserva Biosfera Chocó integrates multiple protected areas, fostering integrated management across government agencies, NGOs, and local communities. The goal is large-scale habitat conservation in a globally significant biodiversity hotspot marked by high endemism.',
            location: {
                center: [-78.95, 0.20],
                zoom: 9,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: {
                duration: 2000,
                essential: true
            },
            onChapterEnter: [
                {
                    layer: 'protection-biosfera',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'protection-biosfera',
                    opacity: 0
                }
            ]
        },

        // 5) CONSERVATION ANALYSIS (3 chapters)
        {
            id: 'mining-concessions',
            alignment: 'right',
            title: 'Conservation Analysis: Mining Concessions',
            image: '/static/Content_website/images/mining_choco.jpeg',
            description: 'Mining concessions threaten primary forest interiors, potentially fragmenting wildlife habitats and polluting rivers. Environmental impact assessments often lack enforcement, highlighting the need for stronger coordinated policies.',
            location: {
                center: [-78.56, -0.48],
                zoom: 7,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: {
                essential: true,
                duration: 2000,
                essential: true
            },
            onChapterEnter: [
                {
                    layer: 'mining-concessions',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'mining-concessions',
                    opacity: 0
                }
            ]
        },
        {
            id: 'wildlife-corridors',
            alignment: 'center',
            title: 'Conservation Analysis: Wildlife Corridors',
            image: '/static/Content_website/Tesoro_Escondido/images/Tesoro_escondido_4.webp',
            description: 'Wildlife corridors bridge fragmented zones to ensure genetic flow between populations of tapirs, pumas, and hundreds of bird species. These corridors reduce human-wildlife conflicts by guiding animal movements away from farmland.',
            location: {
                center: [-78.57, -0.47],
                zoom: 8,
                pitch: 45,
                bearing: 10
            },
            mapAnimation: {
                duration: 2000,
                essential: true
            },
            onChapterEnter: [
                {
                    layer: 'wildlife-corridors',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'wildlife-corridors',
                    opacity: 0
                }
            ]
        },
        {
            id: 'terrestrial-ecoregions',
            alignment: 'right',
            title: 'Conservation Analysis: Terrestrial Ecoregions',
            image: '/static/Content_website/TMA/images/Tma_6.jpg',
            description: 'Ecuador’s terrestrial ecoregions range from coastal mangroves to montane cloud forests. Each contains unique ecological communities that provide ecosystem services—such as pollination and carbon sequestration—vital to mitigating climate change.',
            location: {
                center: [-78.58, -0.46],
                zoom: 7,
                pitch: 45,
                bearing: -10
            },
            mapAnimation: {
                duration: 2000,
                essential: true
            },
            onChapterEnter: [
                {
                    layer: 'terrestrial-ecoregions',
                    opacity: 0.3
                }
            ],
            onChapterExit: [
                {
                    layer: 'terrestrial-ecoregions',
                    opacity: 0
                }
            ]
        }
    ]
};

// Initialize layers
// function initializeLayers() {
//     const layers = [
//         // NGO Reserve Layers
//         {
//             id: 'decoin-all',
//             color: '#00ff00',
//             url: 'https://services7.arcgis.com/PojvpgOuvaAklOT8/arcgis/rest/services/DECOIN/FeatureServer/0'
//         },
//         {
//             id: 'fcat-bilsa',
//             color: '#66cc66',
//             url: 'https://services7.arcgis.com/PojvpgOuvaAklOT8/arcgis/rest/services/FCAT___Bilsa/FeatureServer/0'
//         },
//         {
//             id: 'fcat-reserve',
//             color: '#99ccff',
//             url: 'https://services7.arcgis.com/PojvpgOuvaAklOT8/arcgis/rest/services/FCAT___Reserve/FeatureServer/0'
//         },
//         {
//             id: 'tma-jama-coaque',
//             color: '#00ffff',
//             url: 'https://services7.arcgis.com/PojvpgOuvaAklOT8/arcgis/rest/services/TMA_JAMA_COAQUE/FeatureServer/0'
//         },
//         {
//             id: 'tma-pata-de-patajo',
//             color: '#ffbf00',
//             url: 'https://services7.arcgis.com/PojvpgOuvaAklOT8/arcgis/rest/services/TMA_PATA_DE_PATAJO/FeatureServer/0'
//         },
//         {
//             id: 'tesoro-ecoregions',
//             color: '#808000',
//             url: 'https://services7.arcgis.com/PojvpgOuvaAklOT8/arcgis/rest/services/Tesoro_Escondido_Reserve/FeatureServer/0'
//         },
//         {
//             id: 'tesoro-main-area',
//             color: '#008080',
//             url: 'https://services7.arcgis.com/PojvpgOuvaAklOT8/arcgis/rest/services/Tesoro_Escondido_Reserve/FeatureServer/0'
//         },
//         {
//             id: 'ecominga-manduriacu',
//             color: '#0000ff',
//             url: 'https://services7.arcgis.com/PojvpgOuvaAklOT8/arcgis/rest/services/Ecominga/FeatureServer/0'
//         },
//         {
//             id: 'ecominga-dracula',
//             color: '#ff00ff',
//             url: 'https://services7.arcgis.com/PojvpgOuvaAklOT8/arcgis/rest/services/Dracula/FeatureServer/0'
//         },
//         {
//             id: 'great-leaf-esperanza',
//             color: '#ffff00',
//             url: 'https://services7.arcgis.com/PojvpgOuvaAklOT8/arcgis/rest/services/LA_ESPERANZA/FeatureServer/0'
//         },
        
//         // Forest Change Layers
//         {
//             id: 'forest-loss',
//             color: '#8b4513',
//             // Instead of the REST service URL, use a local GeoJSON file:
//             // url: '/static/Data/ForestChangeTotal_tree_loss_40.js'
//             url: 'https://services7.arcgis.com/PojvpgOuvaAklOT8/arcgis/rest/services/Forest_Change/FeatureServer/0'
//         },
//         {
//             id: 'forest-loss-timeline',
//             color: '#a0522d',
//             // Instead of the REST service URL, use a local GeoJSON file:
//             // url: '/static/Data/ForestChangeTreeLossYear0123_43.js'
//             url: 'https://services7.arcgis.com/PojvpgOuvaAklOT8/arcgis/rest/services/Forest_Change/FeatureServer/2'
//         },
//         {
//             id: 'forest-gain',
//             color: '#228b22',
//             // Instead of the REST service URL, use a local GeoJSON file:
//             // url: '/static/Data/ForestChangeTree_gain_41.js'
//             url: 'https://services7.arcgis.com/PojvpgOuvaAklOT8/arcgis/rest/services/Forest_Change/FeatureServer/3'
//         },

//         // Protection Scheme Layers
//         {
//             id: 'protection-acus',
//             color: '#4a148c',
//             url: 'https://services7.arcgis.com/PojvpgOuvaAklOT8/arcgis/rest/services/Protection_schemes/FeatureServer/0'
//         },
//         {
//             id: 'protection-acusmit',
//             color: '#800080',
//             url: 'https://services7.arcgis.com/PojvpgOuvaAklOT8/arcgis/rest/services/Protection_schemes/FeatureServer/1'
//         },
//         {
//             id: 'protection-bosques',
//             color: '#6a1b9a',
//             url: 'https://services7.arcgis.com/PojvpgOuvaAklOT8/arcgis/rest/services/Protection_schemes/FeatureServer/2'
//         },
//         {
//             id: 'protection-cotocachi',
//             color: '#4a148c',
//             url: 'https://services7.arcgis.com/PojvpgOuvaAklOT8/arcgis/rest/services/Protection_schemes/FeatureServer/3'
//         },
//         {
//             id: 'protection-mache',
//             color: '#7b1fa2',
//             url: 'https://services7.arcgis.com/PojvpgOuvaAklOT8/arcgis/rest/services/Protection_schemes/FeatureServer/4'
//         },
//         {
//             id: 'protection-biosfera',
//             color: '#9c27b0',
//             url: 'https://services7.arcgis.com/PojvpgOuvaAklOT8/arcgis/rest/services/Protection_schemes/FeatureServer/5'
//         },

//         // Conservation Analysis Layers
//         {
//             id: 'mining-concessions',
//             color: '#ff0000',
//             url: 'https://services7.arcgis.com/PojvpgOuvaAklOT8/arcgis/rest/services/Conservation_analysis/FeatureServer/1'
//         },
//         {
//             id: 'wildlife-corridors',
//             color: '#ffff00',
//             url: 'https://services7.arcgis.com/PojvpgOuvaAklOT8/arcgis/rest/services/Conservation_analysis/FeatureServer/2'
//         },
//         {
//             id: 'terrestrial-ecoregions',
//             type: 'fill',
//             url: 'https://services7.arcgis.com/PojvpgOuvaAklOT8/arcgis/rest/services/Conservation_analysis/FeatureServer/3',
//             paint: {
//                 'fill-color': 'transparent',
//                 'fill-opacity': 0,
//                 'fill-outline-color': '#c62828',
//                 'fill-outline-width': 2
//             }
//             }
//     ];

//     layers.forEach(layer => {
//         map.addSource(layer.id, {
//             type: 'geojson',
//             // Directly reference the local file:
//             data: layer.url
//         });

//         map.addLayer({
//             id: layer.id,
//             type: 'fill',
//             source: layer.id,
//             paint: {
//                 'fill-color': layer.color,
//                 'fill-opacity': 0.5
//             }
//         });
//     });

//     // Example of adding an additional layer from arcgis rest api feature service
//     /*
//     layers.push({        id: 'new-layer-id',        color: '#123456',        url: 'https://services7.arcgis.com/PojvpgOuvaAklOT8/arcgis/rest/services/New_Layer/FeatureServer/0'    });    */
// }

// Helper function to get ArcGIS Feature Service URL
function getArcGISFeatureServiceUrl(serviceUrl) {
    return `${serviceUrl}/query?where=1%3D1&outFields=*&returnGeometry=true&f=geojson&token=YOUR_PERSONAL_ACCSESSTOKEN_IF_NEEDED_BASICALLY_IF_ITS_PRIVATE`;
}