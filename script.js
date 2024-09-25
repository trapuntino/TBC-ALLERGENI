const recipes = [
    {
        name: "CAVIALE DI SCIMUDIN",
        ingredients: [
            "250GR Latte fresco intero",
            "125GR Scimudin",
            "2.5GR Agar Agar Sosa",
            "Sale",
            "Pepe"
        ],
        instructions: "Unire il latte e scimudin, sciogliere l'agar agar in poca acqua. Mescolare bene e versare in uno stampo.",
        allergens: ["Lattosio"]
    },
    {
        name: "PANBRIOCHES",
        ingredients: [
            "300GR Farina debole",
            "700GR Farina per croissant",
            "30GR Lievito di birra",
            "30GR Zucchero semolato",
            "150GR Uova intere",
            "100GR Tuorlo pastorizzato",
            "250GR Latte fresco",
            "300GR Burro pomata",
            "18GR Sale fino"
        ],
        instructions: "Unire uova e tuorlo, sciogliere il lievito in una parte di latte. Unire le farine, aggiungere latte e uova, una volta incordato aggiungere sale e burro pomata miscelati poco per volta. Lavorare fino ad ottenere un impasto liscio ed omogeneo. Far riposare a temperatura ambiente ben coperto per 30 min. Pezzare. COTTURA: 175° vapore x 40’.",
        allergens: ["Glutine", "Uova", "Lattosio"]
    },
    {
        name: "PAN BRIOCHE VARIANTE LIBRO",
        ingredients: [
            "300GR Farina 00 W 150/180",
            "700GR Farina 00 W 320/360",
            "30GR Lievito di birra",
            "30GR Zucchero semolato",
            "150GR Uova intere",
            "100GR Tuorlo",
            "250GR Latte intero",
            "300GR Burro cremoso 16°C",
            "18GR Sale"
        ],
        instructions: "Mettere le farine, il lievito, lo zucchero, le uova e il tuorlo in planetaria ed impastare con il gancio. Unire il burro mescolato al sale poco per volta. Lavorare fino ad ottenere un impasto liscio ed omogeneo. Far riposare a temperatura ambiente ben coperto per 30 min. Tagliare delle strisce di 40/50 grammi e fare una treccia a 5. Far lievitare a 27°C fino al raddoppio. Cuocere in forno a 170-180°C per circa 20/30 minuti a seconda della dimensione.",
        allergens: ["Glutine", "Uova", "Lattosio"]
    },
    {
        name: "PANE IN CASSATTA VARIANTE LIBRO",
        ingredients: [
            "1000GR Farina W 260/280 P/L 0,5",
            "350GR Latte fresco intero",
            "25GR Lievito di birra",
            "150GR Acqua",
            "45GR Zucchero invertito",
            "150GR Burro cremoso 16°C",
            "20GR Sale"
        ],
        instructions: "Mettere farina, latte, lievito di birra, acqua e zucchero invertito in planetaria, impastare con il gancio fino alla formazione dell’impasto. Unire il burro mescolato con il sale poco alla volta. Lavorare fino ad ottenere un impasto liscio ed omogeneo. Far riposare a temperatura ambiente ben coperto per 10-15 MIN. Quindi pezzare a 870GR e porli all’interno degli appositi stampi imburrati. Lasciar lievitare finché l’impasto non toccherà il coperchio. Cuocere a 190°C per 25 minuti circa.",
        allergens: ["Glutine", "Lattosio"]
    },
    {
        name: "CREME BRULE’ AL TARTUFO",
        ingredients: [
            "300GR panna fresca d’alpeggio",
            "65GR tuorlo",
            "34GR grana grosino",
            "7GR tartufo bianco",
            "15GR burro al tartufo",
            "Sale",
            "Pepe"
        ],
        instructions: "Frullare tutti gli ingredienti, passare al cinese. Dressare in stampi. COTTURA: 90° vapore x 15’. 70% umidità.",
        allergens: ["Lattosio", "Uova"]
    },
    {
        name: "GRISSINI LODGE",
        ingredients: [
            "400GR Farina '00'",
            "100GR Semola media",
            "50GR olio oliva/semi",
            "20GR olio extra di montagna",
            "35GR burro di malga chiarificato pizzoccheri",
            "15GR zucchero di canna",
            "15GR sale fino",
            "232GR H2O fredda",
            "14GR Lievito di birra",
            "25GR Polline d’ape",
            "25GR Mix erbe alpine",
            "12GR Finocchietto"
        ],
        instructions: "Sciogliere il lievito in un litro dosatore con l’acqua. Pesare tutti gli altri ingredienti nella campana di una planetaria. Due giri e aggiungere l’acqua a filo. Impastare fino a quando il composto non si staccherà dai bordi. Far puntare 3 volte la sua massa iniziale. Stendere su tappetti microforati, spolverare farina 00 e farina per polenta. COTTURA: 187° 6’ convenzione valvola aperta.",
        allergens: ["Glutine", "Lattosio"]
    },
    {
        name: "SFORMATINO ALLE VERDURE (ASPARAGI O CARCIOFI)",
        ingredients: [
            "500GR Asparagi freschi",
            "50GR Mascarpone",
            "25GR grana grosino",
            "N°2 Uova",
            "Sale",
            "Pepe"
        ],
        instructions: "Frullare tutti gli ingredienti, imburrare gli stampi con pane di segale. Dressare in stampi. COTTURA: 165° convenzione x 15’-18’.",
        allergens: ["Uova", "Lattosio"]
    },
    {
        name: "PANINI AL LATTE",
        ingredients: [
            "500GR farina bianca",
            "100GR burro pomata di malga",
            "15GR sale",
            "25GR zucchero semolato",
            "N°1 uovo pastaiola",
            "225GR Latte Fresco di malga",
            "15GR Lievito compresso",
            "Aromi: Cumino e anice"
        ],
        instructions: "Unire il tutto, riposo 30’. Pezzare 30 gr CAD. Spennellare tuorlo + panna. DECORARE!! COTTURA: 171° 20’ convenzione ventola media.",
        allergens: ["Glutine", "Uova", "Lattosio"]
    },
    {
        name: "MUFFIN SALATO AI FUNGHI PORCINI",
        ingredients: [
            "N°4 uova pastaiole",
            "14GR baking",
            "200GR burro ai funghi (o classico per le altre preparazioni)",
            "120GR grana grosino",
            "60GR fecola",
            "260GR farina '00'",
            "400GR funghi saltati",
            "200GR casera rapè",
            "Olio",
            "Timo sfogliato fresco",
            "Polvere di timo",
            "Polvere di funghi",
            "Essenza di timo",
            "Sale",
            "Pepe Bianco"
        ],
        instructions: "Ammorbidire il burro, unire tutti gli ingredienti in una campana. Montare la lire sulla planetaria e impastare. Stampo c4, burro spray pan grattato. 70gr cad stampo. Appiattire e modellare con punta cucchiaio e acqua fredda. COTTURA 181° 13-15 MINUTI SU TEGLIA FORATA VENTOLA 3/4.",
        allergens: ["Glutine", "Uova", "Lattosio"]
    },
    // Nuove ricette aggiunte
    {
        name: "ROUX PASTORIZZATA",
        ingredients: [
            "250GR Olio di semi",
            "250GR Burro d’alpe",
            "600GR Farina di riso"
        ],
        instructions: "Unire tutti gli ingredienti e cuocere in forno a 100° gradi statico per 60 minuti, mescolando ogni 5 minuti durante la cottura ed il raffreddamento.",
        allergens: ["Glutine"]
    },
    {
        name: "FOCACCIA GENOVESE",
        ingredients: [
            "3000GR Farina per focaccia",
            "40GR Lievito di birra",
            "60GR Sale fino",
            "60GR Evo",
            "1850GR H2O"
        ],
        instructions: "Preparare la salamoia con 100GR H2O, 100GR Evo, 15GR Sale. COTTURA: 195° per 15-20’ in convenzione ventola media. 830GR x Teglia.",
        allergens: ["Glutine"]
    },
    {
        name: "FOCACCIA RUSTICA INTEGRALE",
        ingredients: [
            "2000GR Farina rustica per focaccia",
            "40GR Lievito di birra",
            "40GR Evo",
            "1100GR H2O"
        ],
        instructions: "Preparare la salamoia con 100GR H2O, 100GR Evo, 15GR Sale. 15’ prima puntata, 60’ seconda. COTTURA: 196° per 12’ in convenzione ventola media, 850GR x Teglia.",
        allergens: ["Glutine"]
    },
    {
        name: "PANE INTEGRALE BASE LIEVITO MADRE",
        ingredients: [
            "1000GR Lievito madre",
            "700GR Universale",
            "900GR Rustica",
            "100GR Nucleo",
            "300GR Semola",
            "16GR Lievito di birra",
            "1600GR H2O",
            "50GR Malto d’orzo",
            "60GR Sale fino",
            "100GR Olio evo"
        ],
        instructions: "Impastare tutti gli ingredienti e lasciar lievitare fino al raddoppio. Cuocere in forno a 200°.",
        allergens: ["Glutine"]
    },
    {
        name: "PANE SEMI SEGALE BASE LIEVITO MADRE",
        ingredients: [
            "1000GR Lievito madre",
            "1400GR Universale",
            "200GR Manitoba",
            "200GR Semola",
            "400GR Segale",
            "16GR Lievito di birra",
            "1600GR H2O",
            "50GR Malto d’orzo",
            "110GR Sale fino",
            "70GR Olio evo"
        ],
        instructions: "Impastare tutti gli ingredienti e lasciar lievitare fino al raddoppio. Cuocere in forno a 200°.",
        allergens: ["Glutine"]
    },
    {
        name: "PANE INTEGRALE TBC",
        ingredients: [
            "100GR Nucleo",
            "2500GR Universale",
            "400GR Rustica",
            "35GR Zucchero",
            "66GR Lievito di birra",
            "1800GR H2O",
            "50GR Malto d’orzo (eventuale)",
            "55GR Sale fino",
            "75GR Olio evo"
        ],
        instructions: "Impastare tutti gli ingredienti e lasciar lievitare fino al raddoppio. Cuocere in forno a 200°.",
        allergens: ["Glutine"]
    },
    {
        name: "PANE BIANCO TBC",
        ingredients: [
            "3000GR Universale",
            "35GR Zucchero",
            "66GR Lievito di birra",
            "1800GR H2O",
            "50GR Malto d’orzo (eventuale)",
            "55GR Sale fino",
            "75GR Olio evo"
        ],
        instructions: "Impastare tutti gli ingredienti e lasciar lievitare fino al raddoppio. Cuocere in forno a 200°.",
        allergens: ["Glutine"]
    },
    {
        name: "PANE HAMBURGER",
        ingredients: [
            "200GR Segale",
            "300GR Manitoba",
            "700GR Universale",
            "200GR Burro",
            "10GR Sale fino",
            "N°2 Uova",
            "250GR Latte intero",
            "250GR Acqua",
            "700GR Lievito"
        ],
        instructions: "Impastare tutti gli ingredienti e lasciar lievitare fino al raddoppio. Cuocere in forno a 200°.",
        allergens: ["Glutine", "Uova", "Lattosio"]
    },
    {
        name: "PANE ALLA SEGALE E KAMUT",
        ingredients: [
            "Per la biga: 1KG Farina di kamut, 500GR Acqua, 10GR Lievito di birra. Riposo 16/18 ore a 16/18°C.",
            "Per il rinfresco: 350GR Farina di kamut, 380/400GR Acqua (in funzione dell'assorbimento), 150GR Farina di segale o saraceno, 45GR Olio extravergine di oliva dop italiano, 30GR Sale, 15GR Lievito di birra, 10GR Malto."
        ],
        instructions: "Unire tutti gli ingredienti tranne il sale e 60GR di acqua e impastare per 4 min. in prima velocità e 6 min. in seconda. Aggiungere il sale e la rimanente acqua e impastare ancora per 1 min. in prima velocità e 4 min. in seconda. Lasciare riposare l'impasto per 90 minuti a 22/24°C. Spezzare a 300GR e lasciare nuovamente riposare per 20 min. Formare a filone e porre a lievitare su assi abbondantemente infarinate per 90 minuti. Capovolgere sul nastro o su placca preriscaldata, tagliare la superficie a piacere e infornare direttamente in platea con vapore a 190°C per 60 min, aprendo il tiraggio del vapore a fine cottura.",
        allergens: ["Glutine"]
    },
    {
        name: "CUSCINO ALL’ ORSINO",
        ingredients: [
            "90GR Acqua",
            "20GR Foglie di aglio selvatico",
            "230GR Farina 00",
            "7GR Lievito secco",
            "30GR Burro fuso",
            "2GR Sale",
            "2GR Zucchero"
        ],
        instructions: "Frullare aglio e acqua. Impastare a mano farina e il liquido frullato con lievito secco, zucchero e burro, infine il sale. Chill una notte in frigorifero. Stendere a spessore 2cm, sformare, spennellare con acqua, attaccare sale maldon. Cuocere su silicone a 230°C fino a colorazione, poi abbassare la temperatura a 50°C fino a quando saranno asciutti e croccanti.",
        allergens: ["Glutine", "Lattosio"]
    },


     
        {
            name: "CUBI DI BUFALA",
            ingredients: [
                "250GR Latte fresco intero",
                "135GR Mozzarella di bufala",
                "1,5GR Agar Agar Sosa",
                "Sale",
                "Pepe"
            ],
            instructions: "Unire latte e bufala, portare a bollore e aggiungere agar agar. Cuocere per 60’ sec. Passare al cinese e porzionare il silpat unto.",
            allergens: ["Lattosio"]
        },
        {
            name: "CUBI DI RICOTTA",
            ingredients: [
                "350GR Latte fresco intero",
                "350GR Ricotta fresca",
                "2,5GR Agar Agar Sosa",
                "Sale",
                "Pepe"
            ],
            instructions: "Unire latte e ricotta, portare a bollore e aggiungere agar agar. Cuocere per 60’ sec. Passare al cinese e porzionare il silpat unto.",
            allergens: ["Lattosio"]
        },
        {
            name: "CUBI DI CASERA",
            ingredients: [
                "350GR Latte fresco intero",
                "350GR Casera rapè",
                "2GR Agar Agar Sosa",
                "Sale",
                "Pepe"
            ],
            instructions: "Unire latte e casera, portare a bollore e aggiungere agar agar. Cuocere per 60’ sec. Passare al cinese e porzionare il silpat unto.",
            allergens: ["Lattosio"]
        },
        {
            name: "CUBI DI POMODORO",
            ingredients: [
                "800GR Salsa al pomodoro",
                "22GR Colla di pesce"
            ],
            instructions: "Sciogliere la colla di pesce precedentemente ammollata nella salsa al pomodoro, stendere e raffreddare il composto, successivamente tagliare.",
            allergens: []
        },
        {
            name: "CAVIALE DI FRUTTA",
            ingredients: [
                "150GR Coulis frutta (Lampone)",
                "125GR Aceto balsamico",
                "2GR Agar Agar Sosa"
            ],
            instructions: "Unire tutti gli ingredienti e mescolare bene.",
            allergens: []
        },
        {
            name: "GEL LEGGERO AGLI AGRUMI",
            ingredients: [
                "500GR Succo / coulis frutta (Lampone)",
                "3GR Agar Agar Sosa"
            ],
            instructions: "Sciogliere agar agar e portare il composto a bollore per 60’ sec. Chill e mixare con CO2H2O + evo.",
            allergens: []
        },
        {
            name: "CAVIALE DI SENAPE",
            ingredients: [
                "75GR H2O",
                "50GR Senape",
                "1,4GR Agar Agar Sosa"
            ],
            instructions: "Unire tutti gli ingredienti e mescolare bene.",
            allergens: []
        },
        {
            name: "GEL AL BALSAMICO",
            ingredients: [
                "500GR Aceto balsamico",
                "10% Glucosio"
            ],
            instructions: "Mescolare gli ingredienti e portare a bollore.",
            allergens: []
        },
        {
            name: "GELATINA MELE SAMBUCO (x polpo)",
            ingredients: [
                "1000GR Succo di mela",
                "200GR Sambuco",
                "36GR Elastic",
                "Q.B. Menta secca"
            ],
            instructions: "Unire succo di mela e sambuco e menta secca sbriciolata, portare a bollore unire l’Elastic. Lasciar bollire finché il composto non inizia ad addensarsi.",
            allergens: []
        },
        {
            name: "PANNA COTTA SALATA (creme fresh)",
            ingredients: [
                "100GR Creme fresh",
                "200GR Panna",
                "200GR Yogurt",
                "20GR gelatina fogli"
            ],
            instructions: "Scaldare una parte di panna e scioglierci dentro la gelatina, successivamente unire al resto degli ingredienti a freddo, dressare e lasciar tirare.",
            allergens: ["Lattosio", "Gelatina"]
        },

        {
            name: "CRUMBLE NOCCIOLE VALTELLINESE",
            ingredients: [
                "300GR Burro d’alpeggio pomata",
                "100GR Grana grosino",
                "200GR Pane in cassetta o pan brioches",
                "150GR Nocciole tritate valtellinesi",
                "Timo sfogliato fresco",
                "Sale",
                "Pepe nero",
                "Noce moscata"
            ],
            instructions: "Impastare il tutto, lasciar riposare in abbattitore. Tagliare a cubetti dal panetto. Cottura 170° fino a colorazione.",
            allergens: ["Frutta secca", "Lattosio", "Glutine"]
        },
        {
            name: "COOKIES OLIVE CROCCANTI",
            ingredients: [
                "50GR Burro d’alpeggio pomata",
                "50GR Panna fresca",
                "100GR Grana grosino",
                "100GR Farina debole",
                "100GR Olive taggiasche",
                "Timo sfogliato fresco",
                "Sale",
                "Pepe nero",
                "Noce moscata"
            ],
            instructions: "Setacciare il grana. Tagliare le olive in modo grossolano. Impastare il tutto, burro pomata alla fine. Lasciar riposare in frigo. Stendere su silpat. Cottura 191° (2 min) convenzione fino a colorazione.",
            allergens: ["Frutta secca", "Lattosio", "Glutine"]
        },
        {
            name: "TEGOLINO OLIVE CROCCANTI",
            ingredients: [
                "50GR Grana grosino",
                "10GR Panna fresca",
                "50GR Burro d’alpeggio pomata",
                "500GR Farina debole",
                "50GR Olive taggiasche IN PUREA",
                "Timo sfogliato fresco",
                "Sale",
                "Pepe nero",
                "Noce moscata"
            ],
            instructions: "Unire tutti gli ingredienti. Lasciar riposare per 30’. Stendere su silpat, cuocere per 10’ a 181° convenzione.",
            allergens: ["Frutta secca", "Lattosio", "Glutine"]
        },
        {
            name: "CROCCHETTA FORMAGGIO",
            ingredients: [
                "2LT Latte",
                "300GR Farina 00",
                "200GR Burro",
                "2PZ Tuorli",
                "Sale",
                "Pepe",
                "Formaggio/ Funghi/ Verdure/ Prosciutto"
            ],
            instructions: "Raffreddare in teglia, panare e friggere.",
            allergens: ["Lattosio", "Glutine"]
        },
        {
            name: "TEGOLINO PATATE PFANNY",
            ingredients: [
                "Fare una purea con pfanny bello morbido."
            ],
            instructions: "Formare a piacere e seccare in microonde.",
            allergens: []
        },
        {
            name: "CHIPS OLIVE CROCCANTE",
            ingredients: [
                "100GR Grana",
                "50GR Burro pomata",
                "50GR Panna 35%",
                "100GR Farina 00",
                "100GR Olive Taggiasche"
            ],
            instructions: "Unire il tutto, infine burro pomata e impastare a mano. Stendere su silpat, cottura 190°C / 2 MIN.",
            allergens: ["Frutta secca", "Lattosio", "Glutine"]
        },
        {
            name: "CRUMBLE PARMIGIANO REGGIANO",
            ingredients: [
                "100GR Farina",
                "100GR Farina di mandorle",
                "100GR Parmigiano grattugiato",
                "100GR Burro",
                "2GR Sale"
            ],
            instructions: "Cutterizzare farina, parmigiano, farina di mandorle e sale. Trasferire in planetaria (foglia), aggiungere il burro e impastare fino a consistenza crumble. Cuocere su carta da forno 160°C per 14/16 minuti o fino a doratura.",
            allergens: ["Frutta secca", "Lattosio", "Glutine"]
        },
        {
            name: "SBRICIOLATA DI LIEVITO (CRUMBLE)",
            ingredients: [
                "20GR Burro",
                "150GR Lievito",
                "1GR Sale"
            ],
            instructions: "Sciogliere il burro in una padella. Aggiungere il lievito e farlo tostare lentamente fino ad ottenere un po’ di briciole. Condire con il sale.",
            allergens: []
        },
        {
            name: "CHIPS DI BIRRA",
            ingredients: [
                "400GR Birra scura",
                "50GR Zucchero",
                "4GR Agar Agar"
            ],
            instructions: "Unire tutti gli ingredienti e bollire. Mettere in un recipiente cilindrico e far raffreddare lentamente, utilizzando un frullatore a immersione mixare per evitare la formazione di grumi. Stendere su silpat e far asciugare in forno a 70°C per 3 ore. Modellare le chips velocemente quando sono ancora calde.",
            allergens: []
        },
        {
            name: "VINNENOISE ALLE NOCCIOLE",
            ingredients: [
                "200GR Burro pomata",
                "150GR Nocciole",
                "100GR Pan grattato",
                "121GR Aglio",
                "20GR Zenzero",
                "Q.b. Peperoncino",
                "1/2 Succo di Lime",
                "Q.b. Sale"
            ],
            instructions: "Unire tutti gli ingredienti, stendere e congelare.",
            allergens: ["Frutta secca", "Lattosio"]
        },

        {
            name: "SALSA ROBESPIERRE",
            ingredients: [
                "20 GR Rosmarino",
                "20 GR Origano",
                "20 GR Timo",
                "20 GR Maggiorana",
                "20 GR Estragone",
                "5 bacche di ginepro",
                "8 pz salvia",
                "2 pz lemon peel",
                "1 spicchio aglio nero o bianco sbollentato",
                "1 tuorlo bio",
                "10 GR senape all’estragone",
                "40% EVO 60% SEMI",
                "30 GR succo lime + zeste",
                "Worcestershire sauce to taste",
                "Acqua bollente per regolare di densità"
            ],
            instructions: "Tritare gli alimenti. Aggiungere il tuorlo e la senape. Montare con oli e succo di lime. Regolare la densità con acqua bollente.",
            allergens: ["Uova", "Senape"]
        },
        {
            name: "SALSA BBQ WESTERNTASTE",
            ingredients: [
                "2 scalogni appassiti + olio",
                "60 GR senape",
                "80 GR zucchero di canna",
                "87 GR concentrato di pomodoro",
                "25 GR succo di limone",
                "20 GR Worcestershire",
                "20 GR Maizena",
                "600 GR acqua"
            ],
            instructions: "Unire tutti gli ingredienti, mixare e cuocere fino a densità. Sale e pepe to taste.",
            allergens: ["Senape", "Glutine"]
        },
        {
            name: "SALSA BBQ PICCANTE",
            ingredients: [
                "200 GR salsa di pomodoro",
                "30 GR concentrato di pomodoro",
                "150 GR cipolla bianca",
                "100 GR zucchero",
                "1 pz aglio",
                "90 GR aceto bianco",
                "150 GR senape",
                "100 GR zucchero semolato",
                "4 GR peperoncino intero secco",
                "20 GR Worcestershire sauce",
                "3 GR sale",
                "3 GR pepe"
            ],
            instructions: "Tritare finemente la cipolla, rosolare con burro e aglio, versare lo zucchero e farlo imbiondire. Sfumare con aceto e aggiungere gli altri ingredienti. Cuocere per 20 minuti.",
            allergens: ["Senape", "Glutine"]
        },
        {
            name: "EMULSIONE SCIATT",
            ingredients: [
                "33 GR scalogno",
                "5 GR aglio",
                "15 GR sale",
                "8 GR senape",
                "10 GR zucchero",
                "50 GR aceto di riso",
                "50 GR aceto di vino bianco",
                "1 uovo bio",
                "2 GR pepe",
                "200 GR purea di mela"
            ],
            instructions: "Cuocere scalogno e aglio. Unire gli ingredienti e olio di semi a consistenza.",
            allergens: ["Uova"]
        },
        {
            name: "SALSA DELICATA",
            ingredients: [
                "Scalogeno",
                "Aglio",
                "Sale",
                "Senape",
                "Zucchero",
                "Aceti",
                "Pepe",
                "Tuorlo",
                "Olio di semi"
            ],
            instructions: "Cuocere scalogeno e aglio con acqua. Mixare con gli altri ingredienti e aggiungere olio a filo.",
            allergens: ["Uova"]
        },
        {
            name: "DRESSING FRANCESE MONTATO AL PINNER",
            ingredients: [
                "33 GR scalogno",
                "5 GR aglio",
                "15 GR sale",
                "8 GR senape",
                "10 GR zucchero",
                "100 GR aceto di riso",
                "1 uovo bio",
                "2 GR pepe"
            ],
            instructions: "Cuocere scalogno e aglio. Mixare con gli altri ingredienti e aggiungere olio di semi a consistenza.",
            allergens: ["Uova"]
        },
        {
            name: "EMULSIONE GIN DELLE ALPI E BURRO COTTO DELLA TRADIZIONE",
            ingredients: [
                "225 GR burro cotto della tradizione",
                "38 GR scalogno tritato",
                "120 GR gin delle Alpi",
                "35 GR panna fresca",
                "Olivello spinoso",
                "Aromi: aglio, timo, maggiorana, dragoncello, alloro",
                "Sale",
                "Pepe"
            ],
            instructions: "Soffriggere aromi, scalogna e burro. Aggiungere gin e ridurre. Unire panna e montare.",
            allergens: ["Lattosio"]
        },
        {
            name: "UMAMI VINAIGRETTE FUNGHI PORCINI",
            ingredients: [
                "120 GR aceto di vino rosso",
                "15 GR scalogni tritati",
                "2 spicchi d’aglio sbucciati",
                "4 filetti d’acciuga",
                "15 GR senape di Digione",
                "10 GR polvere porcini",
                "25 GR Grana grosino",
                "250 GR olio vegetale",
                "125 GR olio EVO"
            ],
            instructions: "Emulsionare gli ingredienti tranne gli oli. Montare con gli oli.",
            allergens: ["Pesce", "Lattosio"]
        },
        {
            name: "CREMA ACIDULA AL PARMIGIANO",
            ingredients: [
                "250 GR panna fresca",
                "400 GR yogurt fresco",
                "200 GR yogurt greco",
                "80 GR parmigiano",
                "30 GR succo di limone",
                "Zeste di 1 limone"
            ],
            instructions: "Emulsionare tutti gli ingredienti in planetaria.",
            allergens: ["Lattosio"]
        },
        {
            name: "FINTA MAYO AL MAIS",
            ingredients: [
                "Mais cotto",
                "Limone",
                "Senape",
                "Olio EVO",
                "Sale",
                "Pepe"
            ],
            instructions: "Emulsionare tutti gli ingredienti come una mayo normale.",
            allergens: []
        },
        {
            name: "EMULSIONE DI LIMONE (per cuscino)",
            ingredients: [
                "40 GR albume",
                "4 GR sale",
                "25 GR succo di limone",
                "30 GR cubetti di ghiaccio",
                "200 GR olio di girasole"
            ],
            instructions: "Mixare albume, sale, succo di limone e ghiaccio, poi emulsionare con olio.",
            allergens: ["Uova"]
        },
        {
            name: "KETCHUP DI FRAGOLINE DI BOSCO DELLA VALTELLINA",
            ingredients: [
                "40 GR scalogno tritato",
                "40 GR zenzero tritato",
                "2 spicchi d’aglio tritato",
                "10 GR burro d’alpe",
                "150 GR funghi porcini spadellati",
                "450 GR fragoline di bosco",
                "15 GR zucchero di canna",
                "10 GR semi di coriandolo in polvere",
                "4 GR pepe mulinello"
            ],
            instructions: "Soffrigere scalogno, zenzero e aglio. Aggiungere fragole e semi di coriandolo, frullare e ridurre.",
            allergens: ["Lattosio", "Frutta secca"]
        },
        {
            name: "VINAIGRETTE 1:3",
            ingredients: [
                "20 GR succo di limone",
                "40 GR aceto bianco",
                "150 GR olio di oliva",
                "30 GR olio EVO",
                "Sale, pepe, senape"
            ],
            instructions: "Emulsionare.",
            allergens: []
        },
        {
            name: "MAIONESE LATTE DI SOIA E YOGURT",
            ingredients: [
                "900 GR olio di semi",
                "300 GR latte di soia",
                "210 GR yogurt",
                "90 GR limone",
                "Scorza d'arancia"
            ],
            instructions: "Emulsionare tutti gli ingredienti.",
            allergens: ["Soia", "Lattosio"]
        },
        {
            name: "SALSA CAESAR",
            ingredients: [
                "300 GR maionese",
                "100 GR parmigiano",
                "30 GR alici sott’olio",
                "80 GR aglio sbollentato 3 volte nel latte",
                "15 GR succo limone",
                "8 ML worcestershire sauce",
                "5 GR erba cipollina",
                "3 GR prezzemolo",
                "5 PZ capperi dissalati"
            ],
            instructions: "Frullare tutti gli ingredienti tranne le erbe. Aggiungere le erbe e lasciare maturare sottovuoto per 24h.",
            allergens: ["Uova", "Pesce", "Lattosio"]
        },
        {
            name: "CREME FRESH AL DRAGONCELLO",
            ingredients: [
                "500 GR panna",
                "33 GR aceto di vino bianco",
                "62 GR aceto di riso",
                "10 GR dragoncello",
                "5 GR sale",
                "11 GR senape",
                "5 GR rafano"
            ],
            instructions: "Unire gli ingredienti e mixare.",
            allergens: ["Lattosio"]
        },
        {
            name: "OLANDESE AL MANGO",
            ingredients: [
                "210 GR burro",
                "130 GR tuorlo",
                "60 GR mango",
                "40 GR passion fruit",
                "40 GR bergamotto-mandarino",
                "4,5 GR sale",
                "5 GR senape"
            ],
            instructions: "Emulsionare tutti gli ingredienti.",
            allergens: ["Uova", "Lattosio"]
        },
        {
            name: "GUACAMOLE",
            ingredients: [
                "100 GR avocado",
                "5 GR cipolla di Tropea",
                "2,5 GR Tabasco",
                "15 GR mascarpone",
                "1,5 GR coriandolo-dragoncello"
            ],
            instructions: "Schiacciare l'avocado e mescolare con gli altri ingredienti.",
            allergens: ["Lattosio"]
        },

        {
            name: "VERDURE AGRODOLCI",
            ingredients: [
                "1000 GR vino bianco",
                "7500 GR aceto bianco",
                "250 GR aceto di riso",
                "500 GR zucchero di canna",
                "Aromi: finocchietto, pepe bianco, alloro, chiodi di garofano, pepe chichuan, ginepro, estragone, timo, timo limonato"
            ],
            instructions: "Portare a ebollizione il vino, aceti e zucchero. Ridurre il liquido filtrato a 104°. Immergere le verdure per 6'.",
            allergens: []
        },
        {
            name: "PERE AL VIN BRULÈ",
            ingredients: [
                "60 GR sciroppo di zucchero",
                "40 GR vin brulè",
                "N° 5 pere Williams mature"
            ],
            instructions: "Cuocere le pere a 70° per 180'. Sgasare sottovuoto con 250ml di vin brulè e poi fare vacuum.",
            allergens: []
        },
        {
            name: "CIPOLLE DI TROPEA AGRODOLCI",
            ingredients: [
                "250 GR aceto bianco",
                "500 GR vino bianco secco",
                "100 GR zucchero di canna",
                "10 GR pepe chichuan",
                "8 GR sale grosso",
                "N° 1 arancia (buccia e succo)"
            ],
            instructions: "Portare a ebollizione tutti gli ingredienti. Cuocere le cipolle tagliate a quarti al dente, separarle dal liquido e raffreddarle. Rimuovere la pellicina. Mantenere nel liquido ridotto a 104°. Conservare sottovuoto per 15 giorni o congelare per 90 giorni.",
            allergens: []
        },
        {
            name: "SEMI DI SENAPE SOTTACETO DI MELE DELLA VALTELLINA E BIRRA LOCALE",
            ingredients: [
                "100 GR semi di senape gialla",
                "50 GR semi di senape marrone",
                "250 GR aceto di sidro di mele della Valtellina",
                "20 GR zucchero di canna",
                "5 GR sale fino",
                "120 GR birra locale"
            ],
            instructions: "Portare a ebollizione i semi di senape partendo da acqua fredda per 3 volte, risciacquando in acqua fredda. Unire i semi con aceto, zucchero e sale, portare a ebollizione. A 35°, aggiungere la birra. Far riposare per 24h prima di utilizzo in un contenitore ermetico.",
            allergens: ["Cereali", "Glutine"]
        },
        
        {
            name: "CAROTINE BABY",
            ingredients: [
                "120 GR estratto di carota",
                "60 GR succo d'arancia",
                "30 GR succo di lime e limone",
                "15 GR zucchero"
            ],
            instructions: "Unire tutti gli ingredienti e utilizzare il liquido per cuocere le carotine. Legare al burro durante il servizio.",
            allergens: []
        },
        {
            name: "CARPIONE",
            ingredients: [
                "150 GR acqua",
                "150 GR aceto di vino",
                "120 GR zucchero",
                "2 GR pepe nero",
                "2 foglie di alloro"
            ],
            instructions: "Unire tutti gli ingredienti e portare a ebollizione. Utilizzare il liquido per scottare o cuocere le verdure.",
            allergens: []
        },

        {
            name: "TEMPURA PER FRIGGERE (PESCE & VERDURE)",
            ingredients: [
                "330 GR farina '00'",
                "45 GR farina di riso",
                "75 GR fecola",
                "8 GR lievito disidratato (oppure 4 GR fresco)",
                "650 GR acqua gasata gelata"
            ],
            instructions: "Unire tutti gli ingredienti tranne i liquidi in una campana. Montare la frusta sulla planetaria e incorporare l'acqua, rendendo la pastella liscia, lucida e priva di grumi. Utilizzo medio veloce.",
            allergens: ["Glutine"]
        },
       
        {
            name: "TEMPURA 2 GAMBERI",
            ingredients: [
                "130 GR acqua gasata",
                "75 GR farina debole",
                "15 GR fecola",
                "5 GR farina di riso",
                "3 GR lievito di birra"
            ],
            instructions: "Unire tutti gli ingredienti in una ciotola. Mescolare bene e utilizzare subito per friggere i gamberi.",
            allergens: ["Glutine", "Crostacei"]
        },
        {
            name: "PASTELLA SCIATT",
            ingredients: [
                "400 GR farina bianca '00'",
                "250 GR farina di saraceno fine",
                "150 GR farina di saraceno grossa",
                "40 GR birra",
                "20 GR grappa morbida",
                "13 GR sale",
                "2 GR pepe nero",
                "750 GR acqua gasata fredda",
                "1 GR noce moscata"
            ],
            instructions: "Mettere in una campana da planetaria tutti gli ingredienti tranne l'acqua, da aggiungere a filo. Utilizzare entro la giornata.",
            allergens: ["Glutine", "Alcol"]
        },

        {
            name: "SPUMA GRANA GROSINO 65°",
            ingredients: [
                "100 GR Grana grosino",
                "100 GR latte intero",
                "100 GR panna fresca"
            ],
            instructions: "Scaldare il latte e aggiungere il grana grosino. Mixare e filtrare. Aggiungere a freddo la panna fresca. Aggiustare di sale e pepe, filtrare nuovamente. Una carica e mantenere a +4° per max 3gg o 2 ore a 65° in roner.",
            allergens: ["Latticini"]
        },
        {
            name: "ITALIAN CITRUS ESPUMA",
            ingredients: [
                "210 GR burro d’alpe",
                "130 GR tuorlo d’uovo pastorizzato",
                "60 GR succo di limone",
                "80 GR succo di mandarino",
                "4,5 GR sale",
                "5 GR senape"
            ],
            instructions: "Unire tutti gli ingredienti in un sacchetto S/V. Cuocere a forno a vapore a 75° per 15 minuti. Trasferire in un bicchiere e montare al pinner. Regolare di sale e mettere in un sifone con 2 cariche. Mantenere a 55° in un bagno termostatico per il servizio.",
            allergens: ["Latticini", "Uova"]
        },
        {
            name: "SPUMA A FREDDO SIFONE",
            ingredients: [
                "500 GR purea",
                "35 GR Salsa Fryo"
            ],
            instructions: "Mixare gli ingredienti e chillare per 2 ore.",
            allergens: []  // Aggiungere allergeni se necessario
        },
        {
            name: "SPUMA CARBONARA",
            ingredients: [
                "300 GR panna fresca",
                "50 GR rapè pizzoccheri",
                "2 GR zafferano",
                "Timo",
                "Alloro",
                "Polvere di funghi porcini"
            ],
            instructions: "Portare tutto a 82°, setacciare. Aggiungere 150 GR di tuorlo sotto i 51°. Setacciare di nuovo e sifonare una volta freddo ma ancora liquido.",
            allergens: ["Latticini", "Uova"]
        },
        {
            name: "SPUMA PATATE",
            ingredients: [
                "350 GR patate cotte",
                "100 GR acqua di cottura patate",
                "100 GR panna",
                "Sale",
                "Pepe",
                "Parmigiano",
                "Burro"
            ],
            instructions: "Unire senza montare tutti gli ingredienti passati al setaccio, raffreddare e sfiorare.",
            allergens: ["Latticini"]
        },
        {
            name: "SPUMA OLANDESE AGLI AGRUMI",
            ingredients: [
                "630 GR burro affumicato",
                "390 GR uova intere",
                "180 GR succo di limone",
                "240 GR succo di mandarino",
                "13,5 GR sale",
                "15 GR senape classica"
            ],
            instructions: "Unire tutti gli ingredienti e montare fino a ottenere una consistenza spumosa.",
            allergens: ["Latticini", "Uova"]
        },
        {
            name: "SCHIUMA AGLIO ORSINO (per cuscino)",
            ingredients: [
                "300 GR patate",
                "50 GR olio d’oliva",
                "150 GR acqua di cottura patate",
                "100 GR panna",
                "2 GR sale",
                "30 GR aglio selvatico"
            ],
            instructions: "Cuocere le patate in acqua bollente, scolale e tenere l’acqua di cottura. Mixare tutti gli ingredienti e sifonare (2 cariche) a temperatura di servizio 40/50 °C.",
            allergens: ["Latticini"]
        },
        {
            name: "SPUMA OLANDESE BIRRA E MALTO",
            ingredients: [
                "20 GR burro",
                "60 GR scalogno",
                "200 GR birra scura",
                "100 GR aceto di mele",
                "30 GR melassa di malto affumicata",
                "30 GR jus di vitello",
                "250 GR burro integrale",
                "30 GR tuorlo d’uovo",
                "1 GR sale",
                "1 GR pepe",
                "1 GR malto in polvere"
            ],
            instructions: "Soffriggere lo scalogno nel burro, sfumare con birra e aceto di mele. Aggiungere il jus di vitello e la melassa, ridurre. Mescolare il tuorlo con 50 GR di riduzione e montare a bagnomaria fino a ottenere una consistenza spumosa. Aggiungere burro chiarificato e sistemare di sapore. Sifonare con due cariche CO2.",
            allergens: ["Latticini", "Uova", "Alcol"]
        },
        {
            name: "SPUMA ACQUA DI OSTRICHE",
            ingredients: [
                "400 GR acqua di ostriche",
                "2,5 GR agar agar",
                "2 fogli di gelatina",
                "1/2 lime (succo)",
                "100 GR albume"
            ],
            instructions: "Filtrare l'acqua di ostriche e portarla a bollore. Aggiungere l'agar e bollire per 1 minuto. Versare in una ciotola, aggiungere la gelatina sciolta, succo di lime e albume. Frullare e filtrare. Sifonare con 2 cariche CO2.",
            allergens: ["Uova", "Crostacei"]
        },

        {
            name: "SPUMA YOGURT",
            ingredients: [
                "310 GR yogurt bianco fresco",
                "150 GR panna fresca 35%",
                "75 GR zucchero semolato"
            ],
            instructions: "Unire tutti gli ingredienti in una ciotola e mescolare bene. Sifonare e refrigerare prima di servire.",
            allergens: ["Latticini"]
        },
        {
            name: "SPUMA ALLA CANNELLA",
            ingredients: [
                "125 GR latte",
                "125 GR panna",
                "50 GR tuorlo",
                "50 GR zucchero",
                "Sale",
                "Cannella",
                "150 GR panna"
            ],
            instructions: "Unire tuorlo, zucchero, sale e cannella. Nel frattempo, scaldare latte e panna (125 GR ciascuno). Raffreddare e infine aggiungere la seconda parte di panna. Sifonare.",
            allergens: ["Latticini", "Uova"]
        },

        {
            name: "PASTA FRESCA DA RIPIENO 1",
            ingredients: [
                "1000 GR Farina Smart",
                "666 GR Tuorlo",
                "10 GR Sale",
                "Acqua + EVO a consistenza (5:2)"
            ],
            instructions: "Impastare fino ad ottenere una consistenza omogenea. Sottovuoto per 3 ore di riposo.",
            allergens: ["Glutine", "Uova"]
        },
        {
            name: "PASTA FRESCA DA RIPIENO 2",
            ingredients: [
                "500 GR Farina Smart Semola",
                "500 GR Farina Smart",
                "666 GR Tuorlo",
                "10 GR Sale",
                "Acqua + EVO a consistenza (5:2)"
            ],
            instructions: "Impastare fino ad ottenere una consistenza omogenea. Sottovuoto per 3 ore di riposo.",
            allergens: ["Glutine", "Uova"]
        },
        {
            name: "PASTA FRESCA TAGLIOLINI",
            ingredients: [
                "700 GR Farina Smart",
                "300 GR Farina Smart Semola",
                "10 GR Sale",
                "200 GR Tuorlo",
                "N°4 uova pastaiole",
                "Aromi a piacere (es. polvere di funghi)"
            ],
            instructions: "Impastare tutti gli ingredienti e tirare la pasta. Tagliare a tagliolini.",
            allergens: ["Glutine", "Uova"]
        },
        {
            name: "PASTA FRESCA KAMUT",
            ingredients: [
                "1000 GR Farina Kamut",
                "N°6 Tuorli",
                "N°4 uova pastaiole",
                "10 GR Sale",
                "Acqua + EVO a consistenza"
            ],
            instructions: "Impastare fino ad ottenere una consistenza omogenea.",
            allergens: ["Glutine", "Uova"]
        },
        {
            name: "PASTA FRESCA GRANO ARSO",
            ingredients: [
                "700 GR Farina Smart",
                "300 GR Farina arso",
                "10 GR Sale",
                "60 GR Tuorlo",
                "500 GR Uova"
            ],
            instructions: "Impastare fino ad ottenere una consistenza omogenea.",
            allergens: ["Glutine", "Uova"]
        },
        {
            name: "PASTA FRESCA TAGLIATELLE",
            ingredients: [
                "700 GR Farina Smart",
                "300 GR Farina Smart Semola",
                "10 GR Sale",
                "200 GR Tuorlo",
                "N°4 uova pastaiole"
            ],
            instructions: "Impastare e tirare la pasta. Tagliare a tagliatelle.",
            allergens: ["Glutine", "Uova"]
        },
        {
            name: "PASTA FRESCA PER LASAGNE",
            ingredients: [
                "1000 GR Farina Smart",
                "666 GR Tuorlo",
                "10 GR Sale",
                "Acqua + EVO a consistenza"
            ],
            instructions: "Impastare fino ad ottenere una consistenza omogenea.",
            allergens: ["Glutine", "Uova"]
        },
        {
            name: "PASTA FRESCA 100% SEMOLA",
            ingredients: [
                "800 GR Farina Smart Semola",
                "480 GR Uova Pastaiole",
                "10 GR Sale"
            ],
            instructions: "Impastare e tirare la pasta.",
            allergens: ["Glutine", "Uova"]
        },
        {
            name: "TAJADIN DI SEGALE",
            ingredients: [
                "1000 GR Farina di segale",
                "1000 GR Farina Smart",
                "800 GR Smart semola",
                "200 GR Saraceno grossa",
                "1200 GR Uova",
                "460 GR Tuorlo",
                "30 GR Sale"
            ],
            instructions: "Impastare tutti gli ingredienti e formare la pasta.",
            allergens: ["Glutine", "Uova"]
        },
        {
            name: "PIZZOCCHERI DELLA VALTELLINA",
            ingredients: [
                "1000 GR Farina debole",
                "500 GR Farina saraceno grossa",
                "500 GR Farina saraceno fine",
                "500 GR H2O tiepida",
                "50 GR Grappa tellina",
                "20 GR Sale",
                "6 PZ Uova"
            ],
            instructions: "Unire farine e sale, aggiungere grappa, uova e acqua poco alla volta.",
            allergens: ["Glutine", "Uova", "Alcol"]
        },
        {
            name: "GNOCCHI CAPRINO - RICOTTA VACCINA",
            ingredients: [
                "400 GR Ricotta fresca",
                "400 GR Caprino vaccino",
                "150 GR Farina debole",
                "80 GR Grana grosino",
                "N°2 Tuorli",
                "Sale",
                "Pepe"
            ],
            instructions: "Mescolare tutti gli ingredienti e formare gli gnocchi.",
            allergens: ["Latticini", "Glutine", "Uova"]
        },
        {
            name: "GNOCCHI DI POLENTA",
            ingredients: [
                "500 GR Polenta",
                "50 GR Parmigiano",
                "20 GR Tuorlo",
                "1 PZ Uovo",
                "400 GR Farina 00"
            ],
            instructions: "Raffreddare e passare la polenta al tritacarne, unire gli altri ingredienti.",
            allergens: ["Latticini", "Glutine", "Uova"]
        },
        {
            name: "TAGLIOLINI PROFUMATI PORCINI",
            ingredients: [
                "1260 GR Farina debole",
                "1140 GR Smart",
                "600 GR Smart semola",
                "1500 GR Uova pastaiole",
                "170 GR Tuorlo",
                "40 GR Polvere porcini",
                "30 GR Sale"
            ],
            instructions: "Impastare e formare i tagliolini.",
            allergens: ["Glutine", "Uova"]
        },
        {
            name: "IMPASTO PER RAVIOLO FRITTO",
            ingredients: [
                "500 GR Farina debole",
                "100 GR Olio d'oliva",
                "160 GR Vino bianco",
                "15 GR Sale",
                "15 GR Zucchero",
                "Aromi: erbe, polveri, arancia, limone"
            ],
            instructions: "Impastare tutti gli ingredienti fino a ottenere un impasto omogeneo.",
            allergens: ["Glutine", "Alcol"]
        },
        {
            name: "MALFATTI AGLI SPINACI",
            ingredients: [
                "30 PZ Panini",
                "10 PZ Uova",
                "1500 GR Farina 00",
                "2000 ML Latte",
                "Pugno di spinaci"
            ],
            instructions: "Mixare tutti gli ingredienti fino a ottenere un composto omogeneo.",
            allergens: ["Glutine", "Latticini", "Uova"]
        },

        {
            name: "SOY UMAMI MARINATED",
            ingredients: [
                "35 GR succo di lime",
                "65 GR zucchero semolato",
                "200 GR salsa di soia",
                "100 GR H2O gasata",
                "20 GR foglie di rosmarino essiccate",
                "4 GR zeste di zenzero fresco"
            ],
            instructions: "Unire succo di lime, zucchero, salsa di soia, acqua gasata, rosmarino e zenzero in un recipiente. Mescolare bene e marinare per almeno 24 ore.",
            allergens: ["Soya"]
        },
        {
            name: "MARINATA 42%",
            ingredients: [
                "504 GR H2O",
                "47 GR sale",
                "7,6 GR zucchero semolato",
                "0,8 GR alloro",
                "0,4 GR bacche di ginepro",
                "0,4 GR pepe bianco in grani",
                "0,4 GR noce moscata",
                "5 GR scalogno",
                "8 GR aglio"
            ],
            instructions: "Bollire l'acqua, aggiungere sale e zucchero. Avvolgere le spezie in stamina e aggiungerle. Raffreddare e filtrare, poi lasciare maturare per 24 ore.",
            allergens: ["Aglio", "Cipolla"]
        },
        {
            name: "CETRIOLI MARINATO",
            ingredients: [
                "100 GR acqua di cetriolo",
                "40 GR zucchero semolato",
                "50 GR aceto di riso"
            ],
            instructions: "Frullare tutto a freddo, passare al cinese. Portare il liquido a 65°. Raffreddare in acqua e ghiaccio.",
            allergens: []
        },
        {
            name: "CAVOLFIORE MARINATO",
            ingredients: [
                "35 GR succo lime",
                "65 GR zucchero",
                "200 GR salsa di soia",
                "100 GR acqua frizzante",
                "4 GR zeste di zenzero"
            ],
            instructions: "Unire tutti gli ingredienti e marinare il cavolfiore per un periodo a piacere.",
            allergens: ["Soya"]
        },
        {
            name: "THE TUILLE",
            ingredients: [
                "60 GR bianco d'uovo pastorizzato",
                "50 GR zucchero semolato",
                "10 GR burro d’alpe",
                "50 GR farina debole",
                "40 GR olio neutro",
                "2 GR sale fino"
            ],
            instructions: "Mescolare tutti gli ingredienti e cuocere a 160° fino a doratura.",
            allergens: ["Uova", "Glutine", "Latticini"]
        },
        {
            name: "FLOWER TUILLE",
            ingredients: [
                "50 GR bianco d'uovo pastorizzato",
                "50 GR parmigiano",
                "35 GR burro d’alpe",
                "50 GR farina debole"
            ],
            instructions: "Mescolare tutti gli ingredienti e cuocere fino a doratura.",
            allergens: ["Uova", "Glutine", "Latticini"]
        },
        {
            name: "CROCCANTE KEOMA",
            ingredients: [
                "Mandorle a filetti",
                "Fiocchi d’avena",
                "50% burro di cacao",
                "50% cioccolato bianco"
            ],
            instructions: "Mescolare gli ingredienti, dare forma e cristallizzare in frigo.",
            allergens: ["Nuts", "Latticini"]
        },
        {
            name: "CHIPS DI FRAGOLA",
            ingredients: [
                "220 GR purea di fragole",
                "120 GR zucchero a velo",
                "40 GR isomalto",
                "180 GR farina debole",
                "Q.B. colorante rosso alimentare"
            ],
            instructions: "Mescolare e cuocere per ottenere chips croccanti.",
            allergens: ["Glutine"]
        },
        {
            name: "PISTACCHI CARAMELLATI",
            ingredients: [
                "280 GR acqua",
                "280 GR zucchero",
                "160 GR pistacchi"
            ],
            instructions: "Bollire acqua e zucchero, aggiungere pistacchi e caramellare.",
            allergens: ["Nuts"]
        },
        {
            name: "NOCI PECAN CARAMELLATE",
            ingredients: [
                "280 GR acqua",
                "280 GR zucchero",
                "160 GR noci pecan"
            ],
            instructions: "Bollire acqua e zucchero, aggiungere noci pecan e caramellare.",
            allergens: ["Nuts"]
        },
        {
            name: "NOCCIOLE CARAMELLATE IN FORNO INTERE",
            ingredients: [
                "280 GR acqua",
                "280 GR zucchero",
                "160 GR nocciole intere"
            ],
            instructions: "Bollire acqua e zucchero, aggiungere nocciole e caramellare in forno.",
            allergens: ["Nuts"]
        },
        {
            name: "CRUMBLE MANDORLE",
            ingredients: [
                "250 GR zucchero",
                "250 GR farina",
                "250 GR farina di mandorle",
                "250 GR burro",
                "Sale"
            ],
            instructions: "Mescolare gli ingredienti e cuocere fino a doratura.",
            allergens: ["Glutine", "Nuts", "Latticini"]
        },
        {
            name: "CRUMBLE CACAO E NOCCIOLA",
            ingredients: [
                "250 GR zucchero",
                "220 GR farina",
                "20 GR cacao",
                "250 GR burro",
                "250 GR farina di nocciole",
                "Sale"
            ],
            instructions: "Mescolare e cuocere fino a doratura.",
            allergens: ["Glutine", "Nuts", "Latticini"]
        },
        {
            name: "CIALDA ALL'ALBICOCCA",
            ingredients: [
                "220 GR polpa di albicocca",
                "60 GR zucchero a velo",
                "40 GR isomalto",
                "10 GR glucosio",
                "90 GR farina 00"
            ],
            instructions: "Mescolare e cuocere fino a ottenere una cialda croccante.",
            allergens: ["Glutine", "Frutta"]
        },

        {
            name: "RUB SELVADEK",
            ingredients: [
                "40 GR pepe nero in grani",
                "40 GR bacche di ginepro",
                "20 GR semi di coriandolo",
                "20 GR timo essiccato",
                "20 GR foglie di rosmarino essiccate",
                "60 GR sale Maldon",
                "15 GR zucchero",
                "N°4 zeste di arancia"
            ],
            instructions: "Macinare tutto finemente, prima gli aromi, poi aggiungere sale e zucchero. Conservare in frigorifero per massimo 3 mesi a temperatura di +4°C.",
            allergens: []
        },
        {
            name: "RUB AGNELLO",
            ingredients: [
                "40 GR caffè macinato",
                "7 GR semi di finocchio",
                "10 GR pepe nero",
                "15 GR porcini in polvere",
                "45 GR sale fino",
                "5 GR aglio disidratato",
                "N°1 zeste di limone",
                "10 GR menta disidratata in foglie"
            ],
            instructions: "Lavorare caffè, finocchio e aglio. Aggiungere le zeste e unire gli altri ingredienti. Lavorare poco. Conservare in frigorifero per massimo 1 mese a temperatura di +4°C.",
            allergens: ["Caffè", "Aglio"]
        },
        {
            name: "MIELE ALL’AGLIO",
            ingredients: [
                "175 GR miele grezzo",
                "8 GR aglio fresco",
                "4 GR senape in polvere",
                "5 GR polvere di resina"
            ],
            instructions: "In un contenitore da microonde, scaldare il miele a 81°C. Aggiungere gli aromi e mescolare. Lasciare riposare per 4 giorni. Conservare a temperatura ambiente.",
            allergens: ["Aglio"]
        },
        {
            name: "SALE BILANCIATO CARNI BIANCHE",
            ingredients: [
                "66,5 GR sale grosso",
                "33,5 GR zucchero semolato"
            ],
            instructions: "Utilizzare 8-10 gr per kg di carne.",
            allergens: []
        },
        {
            name: "SALE BILANCIATO CARNI NERE",
            ingredients: [
                "200 GR sale grosso (eventualmente)",
                "50 GR sale Maldon affumicato",
                "10 GR pepe affumicato WIBERG",
                "2 GR rosmarino",
                "2 GR zucchero",
                "2 GR aglio",
                "2 GR timo",
                "2 GR ginepro",
                "N°2 foglie d’alloro"
            ],
            instructions: "Utilizzare 8-10 gr per kg di carne.",
            allergens: ["Aglio"]
        },
        {
            name: "SALE BILANCIATO TROTA DELLA VALMALENCO MARINATA",
            ingredients: [
                "53 GR sale",
                "47 GR zucchero",
                "3 GR aneto",
                "1,5 GR pepe Sichuan",
                "0,5 GR lime",
                "0,2 GR ginepro",
                "0,2 GR chiodi di garofano"
            ],
            instructions: "Mescolare e utilizzare per marinare la trota.",
            allergens: []
        },

        {
            name: "ASPARAGI IN SOLUZIONE",
            ingredients: [
                "1000 GR H2O",
                "25 GR sale",
                "17 GR zucchero semolato"
            ],
            instructions: "Preparare una soluzione di acqua, sale e zucchero. Cuocere gli asparagi in ciclo misto a 110° per 12-14 minuti.",
            allergens: []
        },
        {
            name: "CALAMARI/SEPPIOLINE",
            ingredients: [
                "Pezzatura 60/UP"
            ],
            instructions: "Cuocere i calamari/seppioline in roner a 68° per 30 minuti oppure a vapore a 85° per 20 minuti.",
            allergens: ["Pesce"]
        },


        {
            name: "CREME CARAMEL",
            ingredients: [
                "10 GR Zucchero ogni stampino",
                "1000 GR Latte intero di malga",
                "235 GR Zucchero semolato",
                "N°8 uova pastaiole",
                "1/2 stecca vaniglia"
            ],
            instructions: "Preparare il caramello a 220° con 70% umidità per 7 minuti. Portare a bollore il latte, versare su uova e zucchero, schiumare e dressare. Cottura a 82° a vapore per 40 minuti.",
            allergens: ["Uova", "Latte"]
        },
        {
            name: "CREME BRULEE",
            ingredients: [
                "700 GR panna fresca",
                "230 GR cioccolato bianco",
                "200 GR tuorlo",
                "50 GR zucchero",
                "1/2 bacca di vaniglia"
            ],
            instructions: "Portare la panna a bollore, aggiungere tuorlo, zucchero e vaniglia e cuocere a 84°C. Emulsionare il cioccolato bianco e cuocere in forno a 86°C per circa 30 minuti. Al servizio, scaldare in microonde, spolverare con zucchero di canna e caramellare.",
            allergens: ["Latte", "Uova", "Cioccolato"]
        },
        {
            name: "TORTA CAPRESE",
            ingredients: [
                "280 GR Burro",
                "220 GR zucchero a velo",
                "240 GR uova fresche intere",
                "40 GR tuorlo pastorizzato",
                "50 GR Cacao",
                "450 GR Farina di mandorle"
            ],
            instructions: "Montare burro e zucchero, aggiungere uova e tuorli, poi cacao e farina di mandorle. Dressare in stampo e cuocere.",
            allergens: ["Noci", "Uova", "Latte"]
        },
        {
            name: "TORTA MASSA MONTATA SARACENA",
            ingredients: [
                "2 PZ Uova",
                "200 GR Zucchero",
                "200 GR Latte",
                "100 GR Olio di semi",
                "225 GR farina 00",
                "8 GR Baking powder"
            ],
            instructions: "Mixare tutto insieme al minipimmer e cuocere a 170°C.",
            allergens: ["Uova", "Latte", "Glutine"]
        },
        {
            name: "TORTA SUNNY VALLEY",
            ingredients: [
                "Base frolla non molto spessa",
                "650 GR Panna liquida fresca",
                "400 GR Passata ai marroni",
                "N°3 uova"
            ],
            instructions: "Stendere la frolla, congelare con i marroni interi. Mescolare panna, passata di marroni e uova, versare sulla frolla e cuocere a 170°C per 60 minuti.",
            allergens: ["Uova", "Noci", "Glutine"]
        },
        {
            name: "TORTA SARACENO SUNNY VALLEY Gluten Free",
            ingredients: [
                "250 GR Burro morbido",
                "250 GR Zucchero",
                "250 GR Farina Saracena mista (65% grossa - 35% fine)",
                "100 GR Farina di mandorle",
                "N°6 uova",
                "N°1 bustina lievito"
            ],
            instructions: "Montare uova e zucchero, unire le polveri e il burro morbido, dressare e cuocere a 171°C per 32-35 minuti.",
            allergens: ["Noci", "Uova"]
        },
        {
            name: "TORTA SARACENO VARIANTE",
            ingredients: [
                "2000 GR Burro",
                "2000 GR Zucchero semolato",
                "700 GR Farina saraceno fine",
                "700 GR Farina saraceno grossa",
                "800 GR Farina di mandorle",
                "600 GR Amido di riso",
                "40 PZ Uova",
                "8 PZ Bustine di lievito"
            ],
            instructions: "Montare uova e zucchero, setacciare le polveri, unire burro caldo, dressare e cuocere a 170°C per circa 25 minuti.",
            allergens: ["Noci", "Uova"]
        },
        {
            name: "TORTA DI MELE SUNNY VALLEY",
            ingredients: [
                "N° 3 mele",
                "300 GR farina 00",
                "300 GR zucchero",
                "120 GR latte",
                "16 GR lievito pane angeli",
                "N° 2 uova",
                "N° 2 tuorli"
            ],
            instructions: "Lavorare uova e zucchero, aggiungere farina, latte e lievito, poi mele. Cuocere a 180°C per 30 minuti.",
            allergens: ["Uova", "Glutine"]
        },
        {
            name: "TORTA CIOCCOLATO",
            ingredients: [
                "800 GR Burro",
                "730 GR Cioccolato fondente",
                "1000 GR Zucchero",
                "300 GR Farina 00",
                "300 GR Farina di mandorle",
                "320 GR Tuorlo",
                "16 PZ Uova intere"
            ],
            instructions: "Montare tutto insieme dopo aver fuso burro e cioccolato a bagno maria. Cuocere in forno a 23 minuti a 165°C.",
            allergens: ["Noci", "Uova", "Cioccolato"]
        },
        {
            name: "TORTA DI CAROTE",
            ingredients: [
                "300 GR Burro",
                "200 GR Zucchero (1 parte)",
                "200 GR Tuorli",
                "100 GR Latte",
                "350 GR Farina",
                "15 GR Lievito",
                "200 GR Farina di nocciole",
                "500 GR Carote grattugiate",
                "Limone",
                "Cannella",
                "200 GR Albume",
                "100 GR Zucchero (2 parte)"
            ],
            instructions: "Montare burro e zucchero (1), aggiungere tuorli, latte, farina e lievito, poi nocciole e carote. Incorporare albume e zucchero (2).",
            allergens: ["Uova", "Noci"]
        },
        {
            name: "STRUDEL DI MELE",
            ingredients: [
                "16 PZ Sfoglia panetti gelo",
                "3 PZ Casse mele doppie",
                "2000 GR Zucchero semolato",
                "500 GR Uvetta",
                "Q.B. Cannella",
                "500 GR Succo di limone",
                "200 GR Succo di bergamotto",
                "150 GR Confettura di albicocche",
                "3 PZ Confezioni biscotti secchi",
                "300 GR Pinoli"
            ],
            instructions: "Stendere sfoglia, spennellare con tuorlo e panna, aggiungere ripieno, arrotolare e cuocere a 180°C per circa 1 ora.",
            allergens: ["Glutine", "Noci"]
        },
        {
            name: "ETNAO AL CIOCCOLATO (CUORE SEMI-LIQUIDO)",
            ingredients: [
                "240 GR Cioccolato fondente",
                "257 GR Burro",
                "225 GR Uova",
                "180 GR Zucchero semolato",
                "135 GR Farina biscotto"
            ],
            instructions: "Sciogliere cioccolato e burro, montare uova e zucchero, aggiungere cioccolato e polveri. Cuocere a 190° per 10 minuti.",
            allergens: ["Uova", "Cioccolato"]
        },
        {
            name: "TORTINO CIOCCOLATO CUORE LIQUIDO",
            ingredients: [
                "600 GR Cioccolato fondente",
                "6090 GR Burro",
                "12 PZ Uova",
                "480 GR Zucchero",
                "240 GR Farina debole",
                "100 GR Acqua"
            ],
            instructions: "Sciogliere cioccolato, burro e acqua. Aggiungere uova, zucchero e farina. Congelare in stampini e cuocere a 220°C per 9 minuti.",
            allergens: ["Uova", "Cioccolato"]
        },
        {
            name: "PAN DI SPAGNA AL CIOCCOLATO",
            ingredients: [
                "400 GR Tuorlo",
                "200 GR Zucchero",
                "40 GR Tremolina",
                "600 GR Albume",
                "200 GR Zucchero",
                "110 GR Farina 00",
                "50 GR Fecola",
                "40 GR Cacao",
                "200 GR Cioccolato guanaja",
                "120 GR Acqua",
                "80 GR Burro liquido"
            ],
            instructions: "Preparare una ganache con cioccolato, acqua e burro. Montare tuorli e albumi, unire le montate e le polveri. Cuocere a 220° per 8 minuti.",
            allergens: ["Uova", "Glutine", "Cioccolato"]
        },
        {
            name: "PAN DI SPAGNA SACHER TORTE",
            ingredients: [
                "1300 GR Cioccolato fondente 61",
                "1075 GR Burro",
                "1500 GR Zucchero semolato",
                "1500 GR Albume",
                "1000 GR Tuorlo",
                "1100 GR Farina 00",
                "320 GR Zucchero a velo",
                "2 GR Sale"
            ],
            instructions: "Fondere burro e cioccolato. Montare albume e zucchero, tuorli e zucchero a velo. Unire gli ingredienti e cuocere a 180°C per circa 30 minuti.",
            allergens: ["Uova", "Glutine", "Cioccolato"]
        },

        {
            name: "NAMELAKA LIME",
            ingredients: [
                "600 GR panna fresca d’alpeggio",
                "300 GR latte intero",
                "510 GR cioccolato bianco",
                "180 GR lime filtrato",
                "Zeste lime"
            ],
            instructions: "Scaldare a 83° il latte, versarlo sul cioccolato. Mixare. Aggiungere panna liquida e infine il succo di lime e zeste di lime. Abbattere. Utilizzare dopo 4 ore.",
            allergens: ["Lattosio", "Cioccolato"]
        },
        {
            name: "NAMELANKA ALLA ZUCCA",
            ingredients: [
                "2.5 GR gelatina in polvere",
                "12.5 GR acqua per gelatina",
                "85 GR cioccolato bianco",
                "50 GR purea di zucca",
                "2.5 GR sciroppo di glucosio",
                "100 GR panna montata"
            ],
            instructions: "Idratare la gelatina in acqua. Sciogliere il cioccolato bianco e mescolare con la purea di zucca e lo sciroppo di glucosio. Incorporare la gelatina e infine la panna montata.",
            allergens: ["Lattosio", "Cioccolato"]
        },
        {
            name: "CREMA FREDDA AL LIMONE",
            ingredients: [
                "120 GR albume",
                "30 GR zucchero semolato",
                "70 GR miele di rododendro",
                "200 GR panna d’alpeggio"
            ],
            instructions: "Montare zucchero e albume, bollire il miele e versarlo sull’albume montato. Incorporare la panna semimontata alla fine.",
            allergens: ["Uova", "Lattosio"]
        },
        {
            name: "CREMA PASTICCERA VANIGLIA",
            ingredients: [
                "400 GR latte",
                "100 GR panna",
                "150 GR tuorlo",
                "150 GR zucchero",
                "40 GR amido di mais",
                "1/2 bacca di vaniglia"
            ],
            instructions: "Unire tutti gli ingredienti e cuocere fino a ottenere la consistenza desiderata. Per pistacchio, aggiungere 80 GR su KG di crema.",
            allergens: ["Lattosio", "Uova"]
        },
        {
            name: "CREMA AL MASCARPONE",
            ingredients: [
                "384 GR zucchero fondente",
                "300 GR tuorlo",
                "1280 GR panna",
                "1280 GR mascarpone",
                "20 GR gelatina",
                "100 GR acqua"
            ],
            instructions: "Idratare la gelatina in acqua. Montare i tuorli e lo zucchero, poi incorporare il mascarpone e la panna. Aggiungere la gelatina.",
            allergens: ["Lattosio", "Uova"]
        },
        {
            name: "TIRAMISÙ AL BICCHIERE",
            ingredients: [
                "300 GR tuorlo pastorizzato",
                "200 GR zucchero semolato",
                "1000 GR panna vegetale semimontata",
                "1000 GR mascarpone"
            ],
            instructions: "Montare tuorlo e zucchero. Montare la panna vegetale e aggiungere il mascarpone. Dressare nei bicchieri con savoiardi.",
            allergens: ["Uova", "Lattosio"]
        },
        {
            name: "TIRAMISÙ AI MARRONI AL BICCHIERE",
            ingredients: [
                "300 GR tuorlo pastorizzato",
                "140 GR zucchero semolato",
                "1000 GR panna vegetale semimontata",
                "1000 GR mascarpone",
                "Q.B. crema ai marroni"
            ],
            instructions: "Procedere come per il tiramisù al bicchiere, aggiungendo la crema di marroni.",
            allergens: ["Uova", "Lattosio"]
        },
        {
            name: "PANNA COTTA",
            ingredients: [
                "200 GR latte intero",
                "200 GR panna",
                "200 GR panna montata",
                "140 GR zucchero",
                "10 GR colla di pesce",
                "1/2 stecca di vaniglia"
            ],
            instructions: "Portare a ebollizione latte, panna, zucchero e vaniglia. Aggiungere la colla di pesce reidratata e poi unire la panna montata.",
            allergens: ["Lattosio", "Gelatina"]
        },
        {
            name: "FLAN CALDO",
            ingredients: [
                "165 GR cioccolato 67%",
                "125 GR zucchero",
                "60 GR farina di mandorle",
                "60 GR fecola",
                "128 GR albume",
                "60 GR tuorlo",
                "95 GR burro"
            ],
            instructions: "Sciogliere il cioccolato. Unire gli ingredienti secchi e i tuorli. Montare gli albumi e unire. Versare e cuocere.",
            allergens: ["Uova", "Cioccolato"]
        },
        {
            name: "FLAN AL LIMONE",
            ingredients: [
                "500 GR latte",
                "300 GR succo di limone (150 GR da ridotto)",
                "60 GR amido di mais",
                "150 GR zucchero granulare",
                "150 GR tuorlo d’uovo",
                "160 GR panna 35%",
                "90 GR burro"
            ],
            instructions: "Ridurre il succo di limone. Unire tutti gli ingredienti e cuocere fino a ottenere la consistenza della crema pasticcera. Versare e cuocere.",
            allergens: ["Uova", "Lattosio"]
        },
        {
            name: "CREMOSO CAMOMILLA",
            ingredients: [
                "210 GR panna",
                "210 GR latte",
                "85 GR tuorli",
                "40 GR zucchero",
                "410 GR cioccolato Dulcey 32%",
                "7 GR gelatina",
                "35 GR acqua",
                "Vaniglia",
                "12 GR camomilla"
            ],
            instructions: "Preparare una crema inglese con panna, latte, tuorli e zucchero. Aggiungere cioccolato e gelatina.",
            allergens: ["Lattosio", "Uova", "Cioccolato"]
        },
        {
            name: "CREMOSO AL LAMPONE",
            ingredients: [
                "400 GR lampone",
                "116 GR uova",
                "116 GR tuorli",
                "43 GR zucchero semolato",
                "6 GR gelatina",
                "166 GR cioccolato al latte",
                "106 GR burro"
            ],
            instructions: "Preparare una purea di lamponi. Unire con cioccolato, uova e gelatina.",
            allergens: ["Uova", "Lattosio", "Cioccolato"]
        },
        {
            name: "CREMOSO ALLA NOCCIOLA",
            ingredients: [
                "666 GR panna",
                "110 GR zucchero semolato",
                "153 GR tuorli",
                "8 GR gelatina",
                "40 GR acqua",
                "140 GR pasta di nocciola"
            ],
            instructions: "Idratare la gelatina. Unire tutti gli ingredienti e mescolare bene.",
            allergens: ["Uova", "Lattosio"]
        },
        {
            name: "SALSA LATTE E CAMOMILLA",
            ingredients: [
                "500 GR latte",
                "6 GR hibiscus",
                "10 GR camomilla fresca",
                "12 GR amido di mais"
            ],
            instructions: "Mettere in infusione a freddo la camomilla e a caldo l'hibiscus. Addensare con amido di mais.",
            allergens: ["Lattosio"]
        },
        {
            name: "CREMOSO ALL’AMARETTO",
            ingredients: [
                "256 GR latte",
                "256 GR panna",
                "53 GR zucchero",
                "100 GR tuorlo",
                "280 GR cioccolato fondente 70%",
                "40 GR amaretto"
            ],
            instructions: "Preparare una crema con tutti gli ingredienti e mescolare bene.",
            allergens: ["Uova", "Lattosio", "Cioccolato"]
        },
        {
            name: "CREMOSO ALLA RICOTTA DI PECORA",
            ingredients: [
                "400 GR ricotta",
                "200 GR panna",
                "40 GR mascarpone",
                "80 GR zucchero invertito"
            ],
            instructions: "Unire tutti gli ingredienti e mescolare fino a ottenere una consistenza omogenea.",
            allergens: ["Lattosio"]
        },

        {
            name: "CIOCCOLATINI ALLA FAVA TONKA",
            ingredients: [
                "250 GR cioccolato bianco bio icam",
                "90 GR panna liquida",
                "30 GR burro",
                "N°1 fava di tonka grattugiata"
            ],
            instructions: "Sciogliere il cioccolato. Portare ad ebollizione la panna. Incorporare il burro pomata. Lisciare il composto ed aggiungere la fava di tonka grattugiata.",
            allergens: ["Latte", "Noci"]
        },
        {
            name: "BACIO DI DAMA",
            ingredients: [
                "500 GR Burro 82% m.g.",
                "500 GR Zucchero semolato",
                "3 GR Sale",
                "1 GR Bacca vaniglia",
                "55 GR Tuorlo",
                "500 GR Polvere di mandorle bianche",
                "550 GR Farina 00 W 150/160"
            ],
            instructions: "Impastare il burro con lo zucchero, sale, bacca di vaniglia e il tuorlo, quindi unire la polvere di mandorle e infine la farina setacciata. Stendere tra due carte da forno a uno spessore di 1,5 cm e lasciare in frigo per 12 ore. Tagliare cilindri con un coppapasta da 1,5 cm. Formare palline e mettere su teglie. Riposare in frigo prima della cottura. Cottura a 160°C per 18-20 minuti a valvola aperta.",
            allergens: ["Noci", "Latte", "Uova"]
        },
        {
            name: "MACARON",
            ingredients: [
                "260 GR Farina di mandorle",
                "550 GR Zucchero a velo",
                "230 GR Albume",
                "120 GR Zucchero semolato"
            ],
            instructions: "Montare l’albume con lo zucchero semolato in tre fasi. Incorporare le polveri setacciate, mettere in sacca e dressare. Lasciare asciugare per 15-20 minuti. Cuocere a 140°C per 12-15 minuti.",
            allergens: ["Noci", "Uova"]
        },
        {
            name: "FLAN POMPELMO CIOCCOLATO BIANCO",
            ingredients: [
                "375 GR Panna",
                "176 GR Pompelmo",
                "102 GR Uova",
                "45 GR Zucchero semolato",
                "275 GR Cioccolato Bianco"
            ],
            instructions: "Mescolare tutti gli ingredienti e cuocere a bagnomaria fino a ottenere una consistenza cremosa. Versare in stampi e raffreddare.",
            allergens: ["Latte", "Uova"]
        },
        {
            name: "BIGNE’",
            ingredients: [
                "625 GR Acqua",
                "675 GR Burro",
                "15 GR Sale",
                "15 GR Zucchero",
                "375 GR Farina",
                "1000 GR Uova intere"
            ],
            instructions: "Portare a bollore acqua, burro, sale e zucchero. Aggiungere la farina e portare a 96°C. Aggiungere le uova quando l'impasto raggiunge i 60°C.",
            allergens: ["Glutine", "Latte", "Uova"]
        },
        {
            name: "CRAQUELIN",
            ingredients: [
                "320 GR Zucchero",
                "320 GR Farina 00",
                "240 GR Burro"
            ],
            instructions: "Lavorare gli ingredienti fino a ottenere un impasto omogeneo. Stendere e raffreddare prima dell'uso.",
            allergens: ["Latte", "Glutine"]
        },
        {
            name: "MALLOW CIOCCOLATO",
            ingredients: [
                "330 GR Massa gelatina",
                "720 GR Zucchero semolato",
                "550 GR Tremoline",
                "310 GR Massa di cacao",
                "50% Cacao per panatura",
                "25% Zucchero a velo per panatura",
                "25% Amido di mais per panatura"
            ],
            instructions: "Mettere a bagno la gelatina, aggiungere zuccheri e portare a 85°C. Montare in planetaria e lasciare stabilizzare 12 ore prima di tagliare.",
            allergens: ["Glutine", "Noci"]
        },
        {
            name: "MALLOW AL CIOCCOLATO VARIANTE 1",
            ingredients: [
                "180 GR Acqua",
                "27,5 GR Gelatina in polvere",
                "360 GR Zucchero semolato",
                "275 GR Zucchero invertito",
                "155 GR Massa di cacao"
            ],
            instructions: "Mettere a bagno la gelatina, aggiungere zuccheri e portare a 85°C. Montare in planetaria, aggiungere massa di cacao sciolta e lasciare stabilizzare 12 ore prima di tagliare.",
            allergens: ["Noci"]
        },
        {
            name: "MALLOW MANGO E MANDARINO",
            ingredients: [
                "360 GR Polpa di frutta",
                "55 GR Gelatina in polvere",
                "720 GR Zucchero semolato",
                "550 GR Tremoline"
            ],
            instructions: "Mettere a bagno la gelatina, aggiungere zuccheri e portare a 85°C. Montare in planetaria e lasciare stabilizzare 12 ore prima di tagliare.",
            allergens: ["Noci"]
        },
        {
            name: "SFERE CAIPIROSKA ALLA FRAGOLA",
            ingredients: [
                "400 GR Purea di fragole",
                "90 GR Lime",
                "120 GR Zucchero di canna",
                "60 GR Vodka",
                "150 GR Acqua tonica",
                "3 GR Agar Agar",
                "450 GR Burro di cacao a 40°C",
                "Colorante liposolubile rosso",
                "1000 GR Acqua di seltz"
            ],
            instructions: "Frullare e filtrare la purea di fragole con lime e zucchero di canna. Aggiungere vodka e acqua tonica. Aggiungere Agar Agar e portare a bollore.",
            allergens: ["Alcol", "Frutta"]
        },
        {
            name: "SFERE BELLINI",
            ingredients: [
                "250 GR Litchis",
                "100 GR Purea frutto della passione",
                "150 GR Prosecco",
                "4 GR Agar Agar",
                "80 GR Zucchero vanigliato",
                "200 GR Burro di cacao a 40°C",
                "Colorante giallo liposolubile",
                "1000 GR Acqua di seltz"
            ],
            instructions: "Frullare e filtrare la purea di litchi con zucchero vanigliato. Aggiungere prosecco e Agar Agar, portare a bollore.",
            allergens: ["Alcol", "Frutta"]
        },
        {
            name: "FINANZIERA PISTACCHIO",
            ingredients: [
                "326 GR Albume",
                "148 GR Zucchero a velo",
                "312 GR Burro",
                "210 GR Farina di pistacchi",
                "104 GR Farina debole",
                "45 GR Zucchero invertito",
                "3 GR sale",
                "8 GR Baking"
            ],
            instructions: "Mescolare tutti gli ingredienti fino a ottenere un impasto omogeneo. Versare negli stampi e cuocere fino a doratura.",
            allergens: ["Noci", "Glutine", "Latte", "Uova"]
        },
        {
            name: "FINANZIERE MANDORLA E ARANCIA",
            ingredients: [
                "275 GR Albume",
                "277 GR Zucchero a velo",
                "260 GR Burro 45°C",
                "175 GR Farina di mandorle",
                "45 GR Zucchero invertito",
                "Scorza d’arancia"
            ],
            instructions: "Mescolare tutti gli ingredienti fino a ottenere un impasto omogeneo. Versare negli stampi e cuocere fino a doratura.",
            allergens: ["Noci", "Glutine", "Latte", "Uova"]
        },
        {
            name: "AMARETTO AL LIMONE",
            ingredients: [
                "730 GR Albume",
                "240 GR Zucchero",
                "28 GR Albumina",
                "400 GR Farina di mandorle",
                "920 GR Zucchero",
                "140 GR Farina 00",
                "20 GR Zest"
            ],
            instructions: "Mescolare tutti gli ingredienti fino a ottenere un impasto omogeneo. Versare negli stampi e cuocere fino a doratura.",
            allergens: ["Noci", "Glutine", "Uova"]
        },
        {
            name: "CREMINO MANDORLA",
            ingredients: [
                "200 GR Cioccolato al latte",
                "400 GR Pasta di mandorle",
                "10 GR Burro di cacao",
                "15 GR Glucosio"
            ],
            instructions: "Sciogliere il cioccolato e il burro di cacao, mescolare con la pasta di mandorle e il glucosio fino a ottenere una consistenza omogenea.",
            allergens: ["Noci", "Latte"]
        },
        {
            name: "COOKIE CACAO CON GOCCE",
            ingredients: [
                "360 GR Burro",
                "90 GR Zucchero moscovado",
                "540 GR Zucchero semolato",
                "110 GR Cacao 20-24",
                "500 GR Farina 00",
                "6 GR Bicarbonato di sodio",
                "170 GR Uova intere",
                "6 GR Sale",
                "220 GR Gocce cioccolato da forno"
            ],
            instructions: "Ammorbidire il burro, lavorarlo con gli zuccheri fino a ottenere una crema omogenea. Aggiungere le uova e poi le polveri setacciate. Raffreddare e formare delle palline. Cuocere a 187°C per 11 minuti.",
            allergens: ["Glutine", "Latte", "Uova", "Noci"]
        },
        {
            name: "COOKIE BIANCO E NOCI",
            ingredients: [
                "300 GR Burro",
                "120 GR Zucchero moscovado",
                "400 GR Zucchero semolato",
                "80 GR Pasta pura di nocciole",
                "700 GR Farina 00",
                "6 GR Bicarbonato di sodio",
                "160 GR Uova intere",
                "200 GR Noci tostate e tritate"
            ],
            instructions: "Ammorbidire il burro, lavorarlo con la pasta di nocciole e gli zuccheri fino a ottenere una crema. Aggiungere le uova e le polveri setacciate. Raffreddare, formare delle palline, adagiare noci e cuocere a 180°C per 11 minuti.",
            allergens: ["Glutine", "Latte", "Uova", "Noci"]
        },

        {
            name: "FROLLA TBC",
            ingredients: [
                "1750 GR zucchero semolato",
                "1750 GR burro d’alpe",
                "1300 GR latte intero",
                "5000 GR farina bianca tipo “00”",
                "70 GR lievito",
                "20 GR sale fino"
            ],
            instructions: "Mescolare zucchero e burro fino a ottenere una crema. Aggiungere latte e mescolare. Incorporare farina, lievito e sale. Lavorare fino a ottenere un impasto omogeneo.",
            allergens: ["Glutine", "Latte"]
        },
        {
            name: "FROLLA SUNNY VALLEY",
            ingredients: [
                "3000 GR Farina bianca tipo “00”",
                "N°23 uova pastaiole",
                "1500 GR zucchero semolato",
                "1500 GR burro d’alpeggio",
                "N°2 bustine di lievito",
                "4 GR sale fino",
                "N°1 zeste limone",
                "N°5 cucchiai di marmellata"
            ],
            instructions: "Lavorare burro e zucchero. Aggiungere le uova e mescolare bene. Incorporare farina, lievito, sale e zeste di limone. Stendere la frolla e cuocere a 175°C per 21 minuti.",
            allergens: ["Glutine", "Uova", "Latte"]
        },
        {
            name: "FROLLA ALLE MANDORLE",
            ingredients: [
                "630 GR Burro",
                "15 GR Sale",
                "525 GR Zucchero a velo",
                "180 GR Farina di mandorle",
                "300 GR Uova",
                "360 GR Farina 00",
                "1020 GR Farina 00"
            ],
            instructions: "Montare burro e zucchero a velo. Aggiungere sale, farina di mandorle e uova. Incorporare farina 00 fino a ottenere un impasto omogeneo.",
            allergens: ["Noci", "Glutine", "Uova", "Latte"]
        },
        {
            name: "FROLLA MONTATA LAMPONI E NOCCIOLA",
            ingredients: [
                "1000 GR Burro",
                "6000 GR Zucchero a velo",
                "10 GR Sale",
                "Vaniglia",
                "300 GR uova",
                "100 GR Tuorli",
                "600 GR Farina di nocciole",
                "900 GR Farina",
                "12 GR Baking"
            ],
            instructions: "Unire burro, zucchero a velo, sale e vaniglia. Aggiungere uova e tuorli e montare. Incorporare farina di nocciole, farina e baking.",
            allergens: ["Noci", "Glutine", "Uova", "Latte"]
        },

    ];
    
  


// Funzione per aggiungere una nuova ricetta
function addRecipe() {
    const recipeName = document.getElementById('recipeName').value.trim();
    const recipeIngredients = document.getElementById('recipeIngredients').value.trim().split(',').map(ing => ing.trim());
    const recipeInstructions = document.getElementById('recipeInstructions').value.trim();
    const recipeAllergens = document.getElementById('recipeAllergens').value.trim().split(',').map(all => all.trim());

    if (!recipeName || !recipeIngredients.length || !recipeInstructions) {
        alert('Per favore, compila tutti i campi richiesti!');
        return;
    }

    const newRecipe = {
        name: recipeName,
        ingredients: recipeIngredients,
        instructions: recipeInstructions,
        allergens: recipeAllergens
    };

    recipes.push(newRecipe);
    displayRecipes(recipes);
    clearForm();
}

// Funzione per svuotare il modulo
function clearForm() {
    document.getElementById('recipeName').value = '';
    document.getElementById('recipeIngredients').value = '';
    document.getElementById('recipeInstructions').value = '';
    document.getElementById('recipeAllergens').value = '';
}

// Funzione per visualizzare le ricette
function displayRecipes(recipesToDisplay) {
    const recipesList = document.getElementById('recipesList');
    recipesList.innerHTML = '';

    if (recipesToDisplay.length === 0) {
        recipesList.innerHTML = '<p>Nessuna ricetta trovata.</p>';
        return;
    }

    recipesToDisplay.forEach(recipe => {
        const recipeItem = document.createElement('div');
        recipeItem.className = 'recipe-item';
        recipeItem.innerHTML = `
            <h3>${recipe.name}</h3>
            <p><strong>Ingredienti:</strong> ${recipe.ingredients.join(', ')}</p>
            <p><strong>Istruzioni:</strong> ${recipe.instructions}</p>
            <p><strong>Allergeni:</strong> <span class="allergens">${recipe.allergens.join(', ')}</span></p>
        `;
        recipesList.appendChild(recipeItem);
    });
}

// Funzione per cercare ricette
function searchRecipes() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchInput));
    displayRecipes(filteredRecipes);
}

// Event Listeners
document.getElementById('addRecipeBtn').addEventListener('click', addRecipe);
document.getElementById('searchBtn').addEventListener('click', searchRecipes);

// Mostra tutte le ricette inizialmente
displayRecipes(recipes);
