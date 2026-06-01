/**
 * HEALTHY LIVING - SINGLE PAGE APPLICATION JAVASCRIPT
 * Includes a multi-lingual translation engine (English, Sepedi, Shona),
 * a state-driven view router, interactive BMI calculator, and dynamic content generators.
 */

// Global Application State
const state = {
    currentLang: 'en',
    currentView: 'home', // 'home', 'detail', 'contact'
    currentTopic: null
};

// 1. COMPREHENSIVE TRANSLATION DICTIONARY
const translations = {
    // Static UI translations
    ui: {
        en: {
            hero_title: "Welcome to Healthy Living",
            hero_subtitle: "Empowering you with affordable, practical ways to manage overweight and obesity. By Mmakou M.N & Sekgobela T,In Partnership with Raganya S.E",
            section_learn: "Understanding Weight & Obesity",
            section_diet: "Diet & Portion Management",
            card_intro_title: "What is Overweight & Obesity?",
            card_intro_desc: "Learn the definitions and how fat accumulation impacts healthy height ratios.",
            view_guide: "View Guide",
            card_occur_title: "How It Occurs",
            card_occur_desc: "Understand how energy intake, low activity levels, and stored fat connect.",
            card_bmi_title: "Classification & BMI",
            card_bmi_desc: "Determine weight categories using the Body Mass Index equation.",
            view_calculator: "Calculator & Chart",
            card_risks_title: "Risk Factors",
            card_risks_desc: "Explore stressors, poor diet, sleep deprivation, and lack of exercise.",
            card_complications_title: "Complications",
            card_complications_desc: "Understand hypertension, diabetes mellitus, joint pain, and heart risks.",
            card_activity_title: "Physical Activity",
            card_activity_desc: "How to incorporate 150 minutes of active movements into daily routines.",
            card_portions_title: "Portion Sizes",
            card_portions_desc: "Visualizing meals using your hand limits and plate divisions as guides.",
            card_diet_quality_title: "Diet Quality & Items",
            card_diet_quality_desc: "Identify everyday food swaps for carbohydrates, protein, and fats.",
            card_recipes_title: "Affordable Recipes",
            card_recipes_desc: "Step-by-step cooking methods for breakfast, snacks, lunch, and dinner.",
            view_recipes: "View Recipes",
            back_to_dashboard: "Back to Dashboard",
            original_slide_badge: "Visual",
            contact_title: "Get In Touch",
            contact_subtitle: "Have any questions about managing overweight and obesity? Reach out to us for direct guidance and counseling.",
            contact_label_phone: "Call Helpline",
            contact_label_whatsapp: "WhatsApp Chat",
            contact_label_email: "Send Email",
            btn_call: "Call Us",
            btn_whatsapp: "WhatsApp Us",
            btn_email: "Email Us",
            nav_home: "Home",
            nav_bmi: "BMI Cal",
            nav_basket: "Food Basket",
            nav_contact: "Contact Us"
        },
        nso: { // Sepedi (Northern Sotho)
            hero_title: "O amogetšwe go Healthy Living",
            hero_subtitle: "Go go thuša ka ditsela tša go laola go nona go fetisisa ka mokgwa wa go boloka tšhelete. By Mmakou M.N & Sekgobela T,In Partnership with Raganya S.E",
            section_learn: "Go Kwešiša Boima le go Nona go Feteletseng",
            section_diet: "Taolo ya Dijo le Portion ya gago",
            card_intro_title: "Go nona go fetisisa ke eng?",
            card_intro_desc: "Ithute ka ditlhaloso le ka fao go boloka mahura go amang botelele bja gago boitekanelong.",
            view_guide: "Bona Tlhahlo",
            card_occur_title: "Ka fao se Hlagang ka Gona",
            card_occur_desc: "Kwešiša kamano magareng ga dijo, go se šišinyege, le go boloka mahura mmeleng.",
            card_bmi_title: "Dihlopha le BMI",
            card_bmi_desc: "Hlaola dihlopha tša boima bja mmele o šomiša tlhahlobo ya Body Mass Index.",
            view_calculator: "Sekala le Tšhate",
            card_risks_title: "Mabaka a Kotsi",
            card_risks_desc: "Hlahloba go stressa, dijo tše mpe, go hlokega ga boroko, le go hloka boitšhidullo.",
            card_complications_title: "Mathata a Maphelo (Complications)",
            card_complications_desc: "Kwešiša tlhago ya high-blood pressure, bolwetši bja swikiri, go lwa ga manonyeletšo le pelo.",
            card_activity_title: "Boitšhidullo bja Mmele",
            card_activity_desc: "Ka fao o ka tsenyago metsotso e 150 ya go šišinya mmele mešomong ya gago ya tšatši le tšatši.",
            card_portions_title: "Gola Dijo go ya ka Portion",
            card_portions_desc: "Bona portion ya dijo o šomiša diatla tša gago le go arola thulaganyo ya sefejana sa dijo.",
            card_diet_quality_title: "Khwalithi ya Dijo",
            card_diet_quality_desc: "Hlaola dijo tša swaping tša dikhabohaithrete, diproteine le mahura go tšatši le tšatši.",
            card_recipes_title: "Diresipi tša go Boloka",
            card_recipes_desc: "Ditsela tša go apea sefela-sefe sa breakfast, snack, dijo tša matena le dijo tša mantšiboa.",
            view_recipes: "Bona Diresipi",
            back_to_dashboard: "Morago go Letlapa",
            original_slide_badge: "Visual",
            contact_title: "Ikgokaganye le Rena",
            contact_subtitle: "A o na le dipotšišo ka go laola go nona go fetisisa? Ikgokaganye le rena bakeng sa tlhahlobo le thušo e nngwe.",
            contact_label_phone: "Letsetsa Mogala",
            contact_label_whatsapp: "WhatsApp Chat",
            contact_label_email: "Romela Email",
            btn_call: "Re Letsetse",
            btn_whatsapp: "WhatsApp Rena",
            btn_email: "Re Emaile",
            nav_home: "Gae",
            nav_bmi: "BMI Sekala",
            nav_basket: "Meketla wa Dijo",
            nav_contact: "Ikgokaganye"
        },
        sn: { // Shona
            hero_title: "Tikugamuchirai ku Healthy Living",
            hero_subtitle: "Kukubatsirai nenzira dzakachipa uye dzinoshanda dzokubata nadzo kufuta zvakapfurikidza. By Mmakou M.N & Sekgobela T,In Partnership with Raganya S.E",
            section_learn: "Kunzwisisa Huremu & Kufuta Kwazvo",
            section_diet: "Kugadzirisa Zvikafu & Zvidimbu Zvinodyiwa",
            card_intro_title: "Chii chinonzi Kufuta Zvakapfurikidza?",
            card_intro_desc: "Dzidza tsananguro yekuti kuunganidza mafuta mumuviri kunokanganisa sei hurefu hwakagwinya.",
            view_guide: "Ona Gwaro",
            card_occur_title: "Zvainoitika Sei",
            card_occur_desc: "Nzwisisa kubatana pakati pesimba rekudya, kusasimbisa muviri, nemafuta anochengetwa.",
            card_bmi_title: "Mupanda weBMI",
            card_bmi_desc: "Tsvaga chikamu chehuremu hwako uchishandisa nzira yeBody Mass Index.",
            view_calculator: "Karekyureta neChati",
            card_risks_title: "Zvinhu Zvinopinza Mungozi",
            card_risks_desc: "Ongorora zvinoshungurudza, chikafu chisina kunaka, kushaya hope, nekusaita maekisesaizi.",
            card_complications_title: "Matambudziko Ehutano",
            card_complications_desc: "Nzwisisa BP yakakwira, chirwere cheshuga, kurwadza kwemajoini, nenjodzi dzemwoyo.",
            card_activity_title: "Kusimbisa Muviri",
            card_activity_desc: "Maitiro ekuisa maminetsi zana nemakumi mashanu ekuita basa muzvirongwa zvezuva nezuva.",
            card_portions_title: "Kuyera Zvidimbu zveChikafu",
            card_portions_desc: "Kutarisa zvikafu uchishandisa zvigunwe zvako nendiro sechitungamiriri chekuyera.",
            card_diet_quality_title: "Mhando yeChikafu",
            card_diet_quality_desc: "Tsvaga zvikafu zvinotsiviwa zvemashuga (carbs), mapuroteni nemafuta ezuva nezuva.",
            card_recipes_title: "Mabikirwo Akachipa",
            card_recipes_desc: "Maitiro ekubika zvikafu zvemangwanani, zvekutsenga, zvemasikati, nezvemanheru.",
            view_recipes: "Ona Mabikirwo",
            back_to_dashboard: "Kudzokera kuDashboard",
            original_slide_badge: "Visual",
            contact_title: "Taura Nesu",
            contact_subtitle: "Une mibvunzo here pamusoro pekutonga kufuta zvakapfurikidza? Taura nesu kuti uwane chitungamiri chakazara.",
            contact_label_phone: "Fona paMutsara Wedu",
            contact_label_whatsapp: "WhatsApp Chat",
            contact_label_email: "Tumira Email",
            btn_call: "Tifonele",
            btn_whatsapp: "Titumire WhatsApp",
            btn_email: "Titumire Email",
            nav_home: "Musha",
            nav_bmi: "Karekyureta BMI",
            nav_basket: "Chiroro cheChikafu",
            nav_contact: "Taura Nesu"
        }
    },

    // Dynamic Topic Content translations
    topics: {
        'obesity-intro': {
            en: {
                title: "What is Overweight & Obesity?",
                cards: [
                    {
                        title: "Overweight Definition",
                        content: "<p><strong>Overweight</strong> is when a person’s body weight is higher than what is healthy for their height.</p><p>This usually happens when the body takes in more energy from food than it uses, so the extra energy starts to be stored as fat.</p>"
                    },
                    {
                        title: "Obesity Definition",
                        content: "<p><strong>Obesity</strong> is a more serious medical condition where there is excessive accumulation of body fat that harms health.</p><p>This extra fat affects how the body works, including the heart, blood vessels, joints, and how sugar and fat are handled in the body.</p>"
                    }
                ]
            },
            nso: {
                title: "Go nona go fetisisa ke eng?",
                cards: [
                    {
                        title: "Tlhaloso ya go nona go fetisisa (Overweight)",
                        content: "<p><strong>Go nona go fetisisa</strong> ke ge boima bja mmele bja motho bo le godimo go feta bo bo swanetšego boitekanelong bja botelele bja gagwe.</p><p>Se se hlaga gantši ge mmele o amogela maatla a mantši go tšwa dijong go feta ao o a šomišago, ka gona maatla ao a fetang a thoma go bolokwa bjalo ka mahura.</p>"
                    },
                    {
                        title: "Tlhaloso ya Bofutu jo bo feteletseng (Obesity)",
                        content: "<p><strong>Bofutu jo bo feteletseng</strong> ke boemo bo bo kotsi kudu fao go nago le kgobokano e e feteletseng ya mahura a mmele ao a gobatšago bophelo bo botse.</p><p>Mahura a a tlaleletšego a ama ka fao mmele o šomago ka gona, go thabela pelo, megala ya madi, manonyeletšo, le ka fao swikiri le mahura di laolwago ka gona mmeleng.</p>"
                    }
                ]
            },
            sn: {
                title: "Chii chinonzi Kufuta Zvakapfurikidza?",
                cards: [
                    {
                        title: "Tsananguro yekufuta zvakapfurikidza (Overweight)",
                        content: "<p><strong>Kufuta zvakapfurikidza</strong> ndipo apo huremu hwemuviri wemunhu hunenge hwakakwira kupfuura zvakagwinya zvichienderana nehurefu hwake.</p><p>Izvi zvinowanzoitika kana muviri ukatora simba rakawanda kubva kuchikafu kupfuura raunoshandisa, saka simba iroro rinopfuura rinotanga kuchengetwa semafuta.</p>"
                    },
                    {
                        title: "Tsananguro yekufuta kwakanyanya (Obesity)",
                        content: "<p><strong>Kufuta kwakanyanya</strong> idambudziko rakakomba zvikuru apo panenge paine kuunganidzwa kwemafuta akawandisa mumuviri anokuvadza hutano.</p><p>Mafuta akawedzerwa aya anokanganisa mashandiro anoita muviri, kusanganisira mwoyo, tsinga dzeropa, majoini, uye magadzirirwo anoitwa shuga nemafuta mumuviri.</p>"
                    }
                ]
            }
        },
        'how-occurs': {
            en: {
                title: "How Overweight & Obesity Occurs",
                cards: [
                    {
                        title: "The Mechanism of Fat Storage",
                        content: "<p>Weight gain is primarily determined by energy balance. It follows a simple path:</p>" +
                                 "<ul class='info-card-list'>" +
                                 "<li><strong>High Energy Intake:</strong> When a person eats a poor diet high in fat, sugar, and processed foods, the body takes in too much energy.</li>" +
                                 "<li><strong>Low Energy Outflow:</strong> Small energy is used through your daily activities (e.g., walking, cleaning, and working).</li>" +
                                 "<li><strong>Fat Storing:</strong> Extra energy that is not used is stored in the body as fat.</li>" +
                                 "<li><strong>Result:</strong> Over time, this leads to overweight and obesity.</li>" +
                                 "</ul>"
                    }
                ]
            },
            nso: {
                title: "Ka fao go Nona go Fetisisa go Hlagang ka Gona",
                cards: [
                    {
                        title: "Mekgwa ya go Boloka Mahura Mmeleng",
                        content: "<p>Boima bo laolwa ke go balelwa ga maatla mmeleng. E latela tsela e e bonolo:</p>" +
                                 "<ul class='info-card-list'>" +
                                 "<li><strong>Go Ja Dijo tša Maatla a Mantši:</strong> Ge motho a ja dijo tše mpe tšeo di nago le mahura, swikiri le dijo tše di processed, mmele o amogela maatla a mantši.</li>" +
                                 "<li><strong>Tšhomišo e Nnyane ya Maatla:</strong> Maatla a manyane a šomišwa ka ditiro tša letsatsi le letsatsi (mohlala: go sepela, go hlwekisa, le go šoma).</li>" +
                                 "<li><strong>Go Boloka Mahura:</strong> Maatla a tlaleletšo ao a sa šomišwego a bolokwa mmeleng e le mahura.</li>" +
                                 "<li><strong>Se se Hlagang:</strong> Ka nako e telele, se se thoma go thabela go nona go fetisisa le bofutu bo bo feteletseng.</li>" +
                                 "</ul>"
                    }
                ]
            },
            sn: {
                title: "Kufuta Zvakapfurikidza Zvinoitika Sei",
                cards: [
                    {
                        title: "Nzira Inounganidzwa Nayo Mafuta",
                        content: "<p>Kuwedzera kwehuremu kunonyanya kuenderana nekuenzana kwesimba mumuviri. Inotevera nzira iri nyore:</p>" +
                                 "<ul class='info-card-list'>" +
                                 "<li><strong>Kudya Kune Simba Rakanyanya:</strong> Kana munhu achidya chikafu chisina kunaka chine mafuta akawanda, shuga, nezvikafu zvakagadzirwa, muviri unowana simba rakawandisa.</li>" +
                                 "<li><strong>Kushandiswa Kushoma kweSimba:</strong> Simba shoma rinoshandiswa kuburikidza nezviitwa zvezuva nezuva (senge kufamba, kuchenesa, uye kushanda).</li>" +
                                 "<li><strong>Kuchengeta Mafuta:</strong> Simba rakawandisa risingashandiswe rinochengetwa mumuviri semafuta.</li>" +
                                 "<li><strong>Mhedzisiro:</strong> Nekufamba kwenguva, izvi zvinotungamira mukufuta zvakapfurikidza nekuve nehuremu hwakanyanyisa.</li>" +
                                 "</ul>"
                    }
                ]
            }
        },
        'bmi-classification': {
            en: {
                title: "Body Mass Index (BMI) & Classification",
                cards: [
                    {
                        title: "What is Body Mass Index?",
                        content: "<p><strong>Body Mass Index (BMI)</strong> is a standardized mathematical formula used to classify weight categories. It compares height to weight to assess overall health risks.</p>" +
                                 "<div style='background-color:#FAF8F5; padding:12px; border-radius:10px; margin:10px 0; border:1px solid var(--border-color); text-align:center; font-weight:700; font-size:1.1rem;'>" +
                                 "Equation: BMI = Weight (kg) / [ Height (m) &times; Height (m) ]" +
                                 "</div>"
                    },
                    {
                        title: "Interactive BMI Calculator",
                        content: `<div class="bmi-calc-card">
                                    <div class="bmi-calc-grid">
                                        <div class="input-group">
                                            <label for="bmi-weight">Weight (kg)</label>
                                            <input type="number" id="bmi-weight" placeholder="e.g. 70" step="0.1">
                                        </div>
                                        <div class="input-group">
                                            <label for="bmi-height">Height (meters)</label>
                                            <input type="number" id="bmi-height" placeholder="e.g. 1.75" step="0.01">
                                        </div>
                                    </div>
                                    <button class="calc-btn" onclick="app.calculateBMI()">
                                        <i class="fa-solid fa-calculator"></i> Calculate BMI
                                    </button>
                                    <div class="bmi-result-box" id="bmi-result">
                                        <div>Your Body Mass Index (BMI) is:</div>
                                        <div class="bmi-val-display" id="bmi-val">--</div>
                                        <div class="bmi-badge" id="bmi-badge-type">Category</div>
                                    </div>
                                  </div>`
                    },
                    {
                        title: "BMI Classification Reference Table",
                        content: `<div class="table-responsive">
                                    <table class="styled-table">
                                        <thead>
                                            <tr>
                                                <th>Classification</th>
                                                <th>Body Mass Index (kg/m²)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr id="row-underweight"><td>Underweight</td><td>&lt; 18.5</td></tr>
                                            <tr id="row-normal" style="background-color:rgba(127,168,127,0.08);"><td>Normal Range</td><td>18.5 - 24.9</td></tr>
                                            <tr id="row-overweight"><td>Overweight</td><td>25.0 - 29.9</td></tr>
                                            <tr id="row-obese1"><td>Obesity Class 1</td><td>30.0 - 34.9</td></tr>
                                            <tr id="row-obese2"><td>Obesity Class 2</td><td>35.0 - 39.9</td></tr>
                                            <tr id="row-obese3"><td>Obesity Class 3</td><td>&ge; 40</td></tr>
                                        </tbody>
                                    </table>
                                  </div>`
                    }
                ]
            },
            nso: {
                title: "Dihlopha le Body Mass Index (BMI)",
                cards: [
                    {
                        title: "Body Mass Index ke eng?",
                        content: "<p><strong>Body Mass Index (BMI)</strong> ke mokgwa wa go bala wa dipalo o šomišwang go arola boima bja mmele. E bapisa botelele le boima go bona gore a o phela boemong bjo kotsi bja maphelo.</p>" +
                                 "<div style='background-color:#FAF8F5; padding:12px; border-radius:10px; margin:10px 0; border:1px solid var(--border-color); text-align:center; font-weight:700; font-size:1.1rem;'>" +
                                 "Lebakelo: BMI = Boima (kg) / [ Botelele (m) &times; Botelele (m) ]" +
                                 "</div>"
                    },
                    {
                        title: "Sekala sa go Balela BMI ya Gago",
                        content: `<div class="bmi-calc-card">
                                    <div class="bmi-calc-grid">
                                        <div class="input-group">
                                            <label for="bmi-weight">Boima (kg)</label>
                                            <input type="number" id="bmi-weight" placeholder="mohlala. 70" step="0.1">
                                        </div>
                                        <div class="input-group">
                                            <label for="bmi-height">Botelele (dimetara)</label>
                                            <input type="number" id="bmi-height" placeholder="mohlala. 1.75" step="0.01">
                                        </div>
                                    </div>
                                    <button class="calc-btn" onclick="app.calculateBMI()">
                                        <i class="fa-solid fa-calculator"></i> Balela BMI
                                    </button>
                                    <div class="bmi-result-box" id="bmi-result">
                                        <div>BMI ya gago ya Mmele ke:</div>
                                        <div class="bmi-val-display" id="bmi-val">--</div>
                                        <div class="bmi-badge" id="bmi-badge-type">Category</div>
                                    </div>
                                  </div>`
                    },
                    {
                        title: "Tšhate ya go Hlaola BMI ya Mmele",
                        content: `<div class="table-responsive">
                                    <table class="styled-table">
                                        <thead>
                                            <tr>
                                                <th>Karolo ya Boima</th>
                                                <th>Body Mass Index (kg/m²)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr id="row-underweight"><td>Ka fase ga boima (Underweight)</td><td>&lt; 18.5</td></tr>
                                            <tr id="row-normal" style="background-color:rgba(127,168,127,0.08);"><td>Boima bo botse (Normal)</td><td>18.5 - 24.9</td></tr>
                                            <tr id="row-overweight"><td>Go nona go fetisisa (Overweight)</td><td>25.0 - 29.9</td></tr>
                                            <tr id="row-obese1"><td>Bofutu ba Karolo 1 (Obesity 1)</td><td>30.0 - 34.9</td></tr>
                                            <tr id="row-obese2"><td>Bofutu ba Karolo 2 (Obesity 2)</td><td>35.0 - 39.9</td></tr>
                                            <tr id="row-obese3"><td>Bofutu ba Karolo 3 (Obesity 3)</td><td>&ge; 40</td></tr>
                                        </tbody>
                                    </table>
                                  </div>`
                    }
                ]
            },
            sn: {
                title: "Huremu weMuviri (BMI) & Mipanda yacho",
                cards: [
                    {
                        title: "Chii chinonzi Body Mass Index?",
                        content: "<p><strong>Body Mass Index (BMI)</strong> inzira yemasvomhu inoshandiswa kuyera mupanda wehuremu hwemunhu. Inofananidza hurefu nehuremu kuona njodzi dzehutano.</p>" +
                                 "<div style='background-color:#FAF8F5; padding:12px; border-radius:10px; margin:10px 0; border:1px solid var(--border-color); text-align:center; font-weight:700; font-size:1.1rem;'>" +
                                 "Masvomhu: BMI = Huremu (kg) / [ Hurefu (m) &times; Hurefu (m) ]" +
                                 "</div>"
                    },
                    {
                        title: "Karekyureta yeBMI Yako",
                        content: `<div class="bmi-calc-card">
                                    <div class="bmi-calc-grid">
                                        <div class="input-group">
                                            <label for="bmi-weight">Huremu (kg)</label>
                                            <input type="number" id="bmi-weight" placeholder="e.g. 70" step="0.1">
                                        </div>
                                        <div class="input-group">
                                            <label for="bmi-height">Hurefu (mamita)</label>
                                            <input type="number" id="bmi-height" placeholder="e.g. 1.75" step="0.01">
                                        </div>
                                    </div>
                                    <button class="calc-btn" onclick="app.calculateBMI()">
                                        <i class="fa-solid fa-calculator"></i> Verenga BMI
                                    </button>
                                    <div class="bmi-result-box" id="bmi-result">
                                        <div>BMI yeMuviri wako ndizvo:</div>
                                        <div class="bmi-val-display" id="bmi-val">--</div>
                                        <div class="bmi-badge" id="bmi-badge-type">Category</div>
                                    </div>
                                  </div>`
                    },
                    {
                        title: "Tafura yeMipanda yeBMI",
                        content: `<div class="table-responsive">
                                    <table class="styled-table">
                                        <thead>
                                            <tr>
                                                <th>Mupanda weHuremu</th>
                                                <th>Huremu weMuviri (kg/m²)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr id="row-underweight"><td>Kuderera Huremu (Underweight)</td><td>&lt; 18.5</td></tr>
                                            <tr id="row-normal" style="background-color:rgba(127,168,127,0.08);"><td>Huremu hwakanaka (Normal)</td><td>18.5 - 24.9</td></tr>
                                            <tr id="row-overweight"><td>Kufuta zvakapfurikidza (Overweight)</td><td>25.0 - 29.9</td></tr>
                                            <tr id="row-obese1"><td>Kufuta Chikamu 1 (Obesity 1)</td><td>30.0 - 34.9</td></tr>
                                            <tr id="row-obese2"><td>Kufuta Chikamu 2 (Obesity 2)</td><td>35.0 - 39.9</td></tr>
                                            <tr id="row-obese3"><td>Kufuta Chikamu 3 (Obesity 3)</td><td>&ge; 40</td></tr>
                                        </tbody>
                                    </table>
                                  </div>`
                    }
                ]
            }
        },
        'risk-factors': {
            en: {
                title: "Risk Factors for Overweight & Obesity",
                cards: [
                    {
                        title: "Key Triggers & Risk Behaviors",
                        content: "<ul class='info-card-list'>" +
                                 "<li><strong>Stress:</strong> Stress can make people eat more, especially unhealthy, calorie-dense foods.</li>" +
                                 "<li><strong>Lack of Sleep:</strong> Not getting enough sleep increases hunger hormones and food cravings, making you eat more than the body requires.</li>" +
                                 "<li><strong>Lack of Physical Activity:</strong> Sitting or not moving enough means the body does not burn energy. Extra energy is stored as fat.</li>" +
                                 "<li><strong>Alcohol Consumption:</strong> Alcohol adds significant extra empty calories without containing any nutrients.</li>" +
                                 "<li><strong>Poor Diet (High Energy, Fats & Sugars, Processed Foods):</strong> Eating too much fast food, sugary items, and fatty foods yields excess unused energy stored as fat.</li>" +
                                 "</ul>"
                    }
                ]
            },
            nso: {
                title: "Mabaka a Kotsi a go nona go fetisisa",
                cards: [
                    {
                        title: "Dilolwa tša mathomo le Mekgwa ya Maphelo",
                        content: "<ul class='info-card-list'>" +
                                 "<li><strong>Stress (Monagano o boima):</strong> Go stressa go ka dira gore batho ba je dijo tše dintši, kudu tšeo di sa hlapang tšeo di nago le dikhalori tše ntši.</li>" +
                                 "<li><strong>Go Hloka Boroko:</strong> Go se hwetše boroko bo lekanego go okletša dihormone tša tlala le ditakatso tša dijo, go go dira gore o je go feta kamoo mmele o hlokang ka gona.</li>" +
                                 "<li><strong>Go se Šišinyege ga Mmele:</strong> Go dula le go se tšheeletše go šišinya mmele go thibela go tšhuma maatla. Maatla a mantsi a thoma go bolokwa e le mahura.</li>" +
                                 "<li><strong>Bjala (Alcohol):</strong> Bjala bo tlaleletša dikhalori tše ntši tšeo di se nago bohlokwa bja phepo go mmele.</li>" +
                                 "<li><strong>Dijo tše Mpe (Maatla, Mahura, Swikiri le tše di Processed):</strong> Go ja dijo tša mabenkele kudu, diswikiri le dijo tše nago le mafura go thabela go bolokwa ga maatla e le mahura mmeleng.</li>" +
                                 "</ul>"
                    }
                ]
            },
            sn: {
                title: "Zvinhu Zvinopinza Mungozi yekufuta Zvakapfurikidza",
                cards: [
                    {
                        title: "Zvinokonzera uye Maitiro eHupenyu",
                        content: "<ul class='info-card-list'>" +
                                 "<li><strong>Kushungurudzika (Stress):</strong> Kushungurudzika kunogona kuita kuti vanhu vadye zvakanyanya, zvikuru chikafu chisina hutano chine macalorie akawanda.</li>" +
                                 "<li><strong>Kushaya Hope:</strong> Kusawana hope dzakakwana kunowedzera mahomoni enzara nezvishuwo zvechikafu, zvichiita kuti udye zvakanyanya kupfuura zvinodiwa nemuviri.</li>" +
                                 "<li><strong>Kusasimbisa Muviri:</strong> Kugarisa kana kusafamba zvakakwana zvinoreva kuti muviri haupise simba. Simba rakawandisa rinosara richichengetwa semafuta.</li>" +
                                 "<li><strong>Doro (Alcohol):</strong> Doro rinowedzera macalorie asina zvibereko zvinoita kuti muviri ugwinye.</li>" +
                                 "<li><strong>Chikafu Chisina Hutano (Shuga, Mafuta, neZvakagadzirwa):</strong> Kudya zvakanyanya zvikafu zvinokurumidza kubikwa, zvinotapira, nemafuta kunounza simba rakawandisa rinochengetwa semafuta.</li>" +
                                 "</ul>"
                    }
                ]
            }
        },
        'complications': {
            en: {
                title: "Health Complications of Obesity",
                cards: [
                    {
                        title: "How Obesity Affects Key Organ Systems",
                        content: "<ul class='info-card-list'>" +
                                 "<li><strong>Hypertension (High Blood Pressure):</strong> Extra body fat makes the heart pump harder to supply tissues. This increases the mechanical pressure within blood vessels.</li>" +
                                 "<li><strong>Diabetes Mellitus (DM):</strong> Extra fat builds insulin resistance, making it hard for insulin to regulate glucose. This causes dangerously high blood sugar levels.</li>" +
                                 "<li><strong>Joint Problems:</strong> Carrying extra body weight puts critical physical strain on joints, especially knees and hips, causing chronic pain, stiffness, and difficulty moving.</li>" +
                                 "<li><strong>Heart Problems:</strong> Excess fat forces the heart to work harder. Over time, this significantly elevates the risks of heart attacks and coronary artery diseases.</li>" +
                                 "<li><strong>Dyslipidemia (Unhealthy Blood Fats):</strong> Weight gain raises bad cholesterol and fatty levels in the bloodstream, which can form plaques that block blood vessels.</li>" +
                                 "</ul>"
                    }
                ]
            },
            nso: {
                title: "Mathata a Maphelo a go Nona go Feteletseng",
                cards: [
                    {
                        title: "Ka fao Bofutu bo Amang Ditho tša Mmele ka Gona",
                        content: "<ul class='info-card-list'>" +
                                 "<li><strong>Hypertension (High-Blood):</strong> Mahura a mantši a dira gore pelo e pompe ka maatla. Se se okletša kgatelelo ka gare ga megala ya madi.</li>" +
                                 "<li><strong>Bolwetši bja Swikiri (Diabetes):</strong> Mahura a mantši a dira gore insulin e šitswe ke go šoma ka maleba, go dira gore swikiri e phagame ka mo go kotsi mmeleng.</li>" +
                                 "<li><strong>Mathata a Manonyeletšo (Joints):</strong> Boima bjo bo feteletseng bo bea kgatelelo e kgolo manonyeletšong (kudu mangole le dinoka), bo baka bohloko le go thatafala ga go sepela.</li>" +
                                 "<li><strong>Mathata a Pelo:</strong> Mahura a mantsi a imela pelo. Se se okletša kotsi ya malwetši a pelo le go thubega ga methapo ya pelo.</li>" +
                                 "<li><strong>Dyslipidemia (Mahura a kotsi a madi):</strong> Go nona go phagamiša cholesterol e mpe le mafura mading, tšeo di ka thibelang go sepela ga madi ka megala.</li>" +
                                 "</ul>"
                    }
                ]
            },
            sn: {
                title: "Matambudziko eHutano Anokonzerwa nekufuta",
                cards: [
                    {
                        title: "Kukanganiswa kunoitwa Nhengo dzeMuviri neKufuta",
                        content: "<ul class='info-card-list'>" +
                                 "<li><strong>BP Yakakwira (Hypertension):</strong> Mafuta akawandisa mumuviri anoita kuti mwoyo upope nesimba rakawanda. Izvi zvinowedzera kumanikidza mukati metsinga dzeropa.</li>" +
                                 "<li><strong>Chirwere cheShuga (Diabetes):</strong> Mafuta akawandisa anoita kuti insulin isashande zvakanaka. Izvi zvinokonzera kuve neshuga yakanyanyisa mumuviri.</li>" +
                                 "<li><strong>Matambudziko eMajoini:</strong> Kutakura huremu hwakawanda kunoremedza majoini (zvikuru mabvi nehudyu), zvichikonzera kurwadziwa uye kutadza kufamba zvakanaka.</li>" +
                                 "<li><strong>Matambudziko emWoyo:</strong> Mafuta akawandisa anoremedza mwoyo. Nekufamba kwenguva, izvi zvinowedzera njodzi dzekubatwa nemwoyo nezvirwere zvemwoyo.</li>" +
                                 "<li><strong>Dyslipidemia (Mafuta asina hutano muRopa):</strong> Kufuta kunowedzera cholesterol yakaipa mumuviri, iyo inogona kuvhara tsinga dzinofambisa ropa.</li>" +
                                 "</ul>"
                    }
                ]
            }
        },
        'portion-sizes': {
            en: {
                title: "Diet Portion Sizes - Visual Guides",
                cards: [
                    {
                        title: "Using Your Hand as a Portion Guide",
                        content: "<p>You don't need a scale to measure portions. Your hand provides an easy personal guide to healthy portion sizes:</p>" +
                                 "<div class='guide-grid'>" +
                                 "<div class='guide-box'><div class='guide-box-val'>Hand Cup</div><div class='guide-box-lbl'>Carbohydrates<br><small>(pap, rice, samp, sweet potato)</small></div></div>" +
                                 "<div class='guide-box'><div class='guide-box-val'>Fist Size</div><div class='guide-box-lbl'>Vegetables<br><small>(spinach, cabbage, carrots)</small></div></div>" +
                                 "<div class='guide-box'><div class='guide-box-val'>Palm Size</div><div class='guide-box-lbl'>Proteins<br><small>(eggs, tin fish, beans, chicken)</small></div></div>" +
                                 "<div class='guide-box'><div class='guide-box-val'>Thumb Size</div><div class='guide-box-lbl'>Fats<br><small>(peanut butter, cooking oil, mayo)</small></div></div>" +
                                 "</div>"
                    },
                    {
                        title: "Using Your Plate as a Portion Guide",
                        content: "<p>Divide your plate visually to manage food groups during meals:</p>" +
                                 "<ul class='info-card-list'>" +
                                 "<li><strong>Half Plate (1/2):</strong> Vegetables and fresh fruits should make up half of what you eat.</li>" +
                                 "<li><strong>Quarter Plate (1/4):</strong> Carbohydrates (starch) should fill only one quarter.</li>" +
                                 "<li><strong>Quarter Plate (1/4):</strong> Protein (beans, fish, meat) fills the remaining quarter.</li>" +
                                 "<li><strong>Fats:</strong> A very small added portion (thumb size).</li>" +
                                 "</ul>" +
                                 "<div class='plate-visualization'>" +
                                 "<div class='plate-circle'>" +
                                 "<div class='plate-half-left'>1/2<br>Veggies & Fruits</div>" +
                                 "<div class='plate-quarter-tr'>1/4<br>Carbs</div>" +
                                 "<div class='plate-quarter-br'>1/4<br>Protein</div>" +
                                 "</div>" +
                                 "<div><strong>Balanced Meal Plate Division</strong></div>" +
                                 "</div>"
                    }
                ]
            },
            nso: {
                title: "Portion ya gago ya Dijo - Tlhahlobo ka Mahlo",
                cards: [
                    {
                        title: "Šomiša seatla sa gago bjalo ka Tlhahlo ya Dijo",
                        content: "<p>O seke wa tšhaba boima ka sekala. Seatla sa gago se go fa tsela e e bonolo ya go laola portion ya dijo:</p>" +
                                 "<div class='guide-grid'>" +
                                 "<div class='guide-box'><div class='guide-box-val'>Seatla se gobolotšweng</div><div class='guide-box-lbl'>Dikhapohaithrete<br><small>(pap, rice, samp, sweet potato)</small></div></div>" +
                                 "<div class='guide-box'><div class='guide-box-val'>Bolekano bja Feisi</div><div class='guide-box-lbl'>Merogo<br><small>(spinach, cabbage, carrots)</small></div></div>" +
                                 "<div class='guide-box'><div class='guide-box-val'>Bophara bja Legatla</div><div class='guide-box-lbl'>Diproteine<br><small>(mae, tin fish, dinawa, kgogo)</small></div></div>" +
                                 "<div class='guide-box'><div class='guide-box-val'>Bolekano bja Monwana wa Mogolo</div><div class='guide-box-lbl'>Mahura<br><small>(peanut butter, oil, mayonnaise)</small></div></div>" +
                                 "</div>"
                    },
                    {
                        title: "Šomiša sefejana (Plate) sa gago bjalo ka Tlhahlo",
                        content: "<p>Arola sefejana sa gago ka mahlo go laola dihlopha tša dijo tše o di jang:</p>" +
                                 "<ul class='info-card-list'>" +
                                 "<li><strong>Seripa sa Sefejana (1/2):</strong> Merogo le dienywa tše di foreše di swanetše go tlala seripa.</li>" +
                                 "<li><strong>Karolo ya Bone ya Sefejana (1/4):</strong> Dikhapohaithrete (stese) di swanetše go dula karolong e le tee ya bone.</li>" +
                                 "<li><strong>Karolo ya Bone ya Sefejana (1/4):</strong> Diproteine (dinawa, hlapi, dinama) di dula karolong ya bone e šetšeng.</li>" +
                                 "<li><strong>Mahura:</strong> Seabe sa go fokotšega se se nnyane kudu (bolekano bja monwana wa mogolo).</li>" +
                                 "</ul>" +
                                 "<div class='plate-visualization'>" +
                                 "<div class='plate-circle'>" +
                                 "<div class='plate-half-left'>1/2<br>Merogo le Dienywa</div>" +
                                 "<div class='plate-quarter-tr'>1/4<br>Setese (Carbs)</div>" +
                                 "<div class='plate-quarter-br'>1/4<br>Proteine</div>" +
                                 "</div>" +
                                 "<div><strong>Kakaretšo ya Karolo ya Sefejana se se Tekatekaneng</strong></div>" +
                                 "</div>"
                    }
                ]
            },
            sn: {
                title: "Kuyera Zvidimbu zveChikafu - Zvitungamiriri",
                cards: [
                    {
                        title: "Kushandisa Chanza Chako sechiyero",
                        content: "<p>Haufanire kushandisa sekera kuti uyere chikafu. Ruoko rwako runokubatsira kuyera zvidimbu zvakakodzera zviri nyore:</p>" +
                                 "<div class='guide-grid'>" +
                                 "<div class='guide-box'><div class='guide-box-val'>Chanza chakakombwa</div><div class='guide-box-lbl'>Mashuga (Carbs)<br><small>(pap, rice, samp, sweet potato)</small></div></div>" +
                                 "<div class='guide-box'><div class='guide-box-val'>Saizi yeChibhakera</div><div class='guide-box-lbl'>Muriwo<br><small>(spinach, cabbage, carrots)</small></div></div>" +
                                 "<div class='guide-box'><div class='guide-box-val'>Saizi yeChanza</div><div class='guide-box-lbl'>Mapuroteni<br><small>(mazai, tin fish, bhinzi, huku)</small></div></div>" +
                                 "<div class='guide-box'><div class='guide-box-val'>Saizi yeChigunwe</div><div class='guide-box-lbl'>Mafuta<br><small>(peanut butter, cooking oil, mayo)</small></div></div>" +
                                 "</div>"
                    },
                    {
                        title: "Kushandisa Ndiro Yako sechiyero cheKudya",
                        content: "<p>Kamura ndiro yako nemeso kuti ugadzirise zvikwata zvezvikafu zvaunodya:</p>" +
                                 "<ul class='info-card-list'>" +
                                 "<li><strong>Hafu yeNdiro (1/2):</strong> Muriwo nemichero mitsva zvinofanira kuita hafu yezvaunodya.</li>" +
                                 "<li><strong>Chikamu chimwe chete (1/4):</strong> Mashuga (starch) anofanira kuzadza chikamu chimwe chete pazvina.</li>" +
                                 "<li><strong>Chikamu chimwe chete (1/4):</strong> Mapuroteni (bhinzi, hove, nyama) anozadza chimwe chikamu chasara.</li>" +
                                 "<li><strong>Mafuta:</strong> Chidimbu chidiki kwazvo chakawedzerwa (saizi yechigunwe chikuru).</li>" +
                                 "</ul>" +
                                 "<div class='plate-visualization'>" +
                                 "<div class='plate-circle'>" +
                                 "<div class='plate-half-left'>1/2<br>Muriwo nemichero</div>" +
                                 "<div class='plate-quarter-tr'>1/4<br>Mashuga (Carbs)</div>" +
                                 "<div class='plate-quarter-br'>1/4<br>Mapuroteni</div>" +
                                 "</div>" +
                                 "<div><strong>Kugovaniswa kweNdiro yeChikafu chine Hutano</strong></div>" +
                                 "</div>"
                    }
                ]
            }
        },
        'diet-quality': {
            en: {
                title: "Diet Quality - Healthy Substitutions",
                cards: [
                    {
                        title: "Carbohydrates & Sugars Swaps",
                        content: "<p><strong>Include These as Everyday Food:</strong><br>Brown bread, sorghum pap or porridge, sweet potatoes.</p>" +
                                 "<p><strong>Avoid Having These Everyday and Every Week:</strong><br>White bread, scones and biscuits, cold drinks/juices, sweets, chocolates, ice cream, and refined sugar.</p>"
                    },
                    {
                        title: "Protein & Fats Swaps",
                        content: "<p><strong>Include These as Everyday Food:</strong><br>Fish, chicken meat with no fatty skin, eggs, low-fat milk, avocado, nuts, and healthy cooking oil (sunflower, canola, and olive oil).</p>" +
                                 "<p><strong>Avoid Having These Everyday and Every Week:</strong><br>Polony, Russian sausages, Viennas, boerewors, full cream milk, deep-fried foods, butter, and coconut oil.</p>"
                    },
                    {
                        title: "Meal Frequency & Snack Habits",
                        content: "<p><strong>Meal vs. Snack:</strong><br>" +
                                 "• <strong>Meal:</strong> Heavier and bigger amounts of food; keeps you fuller for longer.<br>" +
                                 "• <strong>Snack:</strong> Lighter and smaller amounts of food; keeps you fuller for a short time.</p>" +
                                 "<p><strong>Guideline:</strong> Try to eat 3 meals a day and 2-3 healthy snacks a day.</p>" +
                                 "<p><strong>Healthy Snacks to Include:</strong> Fruits, popcorns, half-meals (e.g. 1 slice of bread with low-fat milk). Avoid crisps, sweets, biscuits, and chocolates.</p>"
                    }
                ]
            },
            nso: {
                title: "Khwalithi ya Dijo - go Swapa Dijo tša Maphelo",
                cards: [
                    {
                        title: "Dikhapohaithrete le go Swapa Swikiri",
                        content: "<p><strong>Tsenya tše Dijo tša Tšatši le Tšatši:</strong><br>Borotho bja brown, bogobe bja mabele, sweet potatoes.</p>" +
                                 "<p><strong>Thibela go ja tše tšatši le tšatši le beke le beke:</strong><br>Borotho bja white, disekonse le dibisikiti, dicold drink le dijuice tša mabenkele, disweets, ditsokolate, ice cream le refined sugar.</p>"
                    },
                    {
                        title: "Diproteine le Mafura go Swapa",
                        content: "<p><strong>Tsenya tše Dijo tša Tšatši le Tšatši:</strong><br>Hlapi, nama ya kgogo e se nago letlalo le nago le mahura, mae, low fat milk, avocado, dinuts, le cooking oil e hlapang (sunflower, canola, olive oil).</p>" +
                                 "<p><strong>Thibela go ja tše tšatši le tšatši le beke le beke:</strong><br>Pholoni, Russian, Vienna, boerewors, full cream milk, dijo tše di gadikilwego kudu (deep fried), butter le coconut oil.</p>"
                    },
                    {
                        title: "Go ja gantsi (Frequency) le Mekgwa ya diSnack",
                        content: "<p><strong>Phapano magareng ga Dijo (Meal) le Snack:</strong><br>" +
                                 "• <strong>Dijo (Meal):</strong> Dijo tše boima le ditlaleletšo tše dikgolo tša dijo; di go boloka o khotše nako e telele.<br>" +
                                 "• <strong>Snack:</strong> Dijo tše bofefo le ditlaleletšo tše nnyane tša dijo; di go boloka o khotše nako e nnyane.</p>" +
                                 "<p><strong>Tsela ya Maphelo:</strong> Leka go ja makga a 3 ka letsatsi, le di healthy snacks di le 2 go ya go 3 ka letsatsi.</p>" +
                                 "<p><strong>DiHealthy Snacks go ja:</strong> Dienywa, popcorns, dipalo tša go fokotšega tša dijo (mohlala. lelepana le le tee la borotho ka maswi a se nago mahura). Thibela dicrisps, disweets, dibisikiti le ditsokolate.</p>"
                    }
                ]
            },
            sn: {
                title: "Mhando yeChikafu - Kutsiva Kune Hutano",
                cards: [
                    {
                        title: "Kutsiva Mashuga (Carbs) neShuga",
                        content: "<p><strong>Idya izvi seChikafu cheZuva neZuva:</strong><br>Chingwa chebrown, mabgobe emabele, matapiri anotapira (sweet potatoes).</p>" +
                                 "<p><strong>Rega Kudya izvi Zuva neZuva kana Vhiki neVhiki:</strong><br>Chingwa chewhite, masikoni nemabhisikiti, zvinwiwa zvine shuga nemajuice, zvihwitsi, machokoreti, ice cream, neshuga yakacheneswa.</p>"
                    },
                    {
                        title: "Kutsiva Mapuroteni neMafuta",
                        content: "<p><strong>Idya izvi seChikafu cheZuva neZuva:</strong><br>Hove, nyama yehuku isina matehwe ane mafuta, mazai, mukaka une mafuta mashoma (low-fat), avhokadho, nzungu, nemafuta ekubikisa ane hutano (sunflower, canola, neolive oil).</p>" +
                                 "<p><strong>Rega Kudya izvi Zuva neZuva kana Vhiki neVhiki:</strong><br>Maporoni, marussian, mavienna, maboriwosi, mukaka une mafuta akawanda (full cream), zvikafu zvakatsvetwa mumafuta, bhata, nemafuta ecoconut.</p>"
                    },
                    {
                        title: "Maitiro ekudya nezvokutsenga (Snacks)",
                        content: "<p><strong>Kusiyana kweChikafu chikuru (Meal) neKutsenga (Snack):</strong><br>" +
                                 "• <strong>Chikafu Chikuru (Meal):</strong> Chinorema uye chinowanda; chinoita kuti ugute kwenguva refu.<br>" +
                                 "• <strong>Kutsenga (Snack):</strong> Chakareruka uye chiri chishoma; chinoita kuti ugute kwenguva pfupi chete.</p>" +
                                 "<p><strong>Chitungamiri:</strong> Edza kudya chikafu chikuru katatu pazuva, uye zvekutsenga (snacks) zvine hutano kaviri kana katatu pazuva.</p>" +
                                 "<p><strong>Zvekutsenga Zvine Hutano:</strong> Michero, mapopukoni, chimedu chikafu (senge chimedu chechingwa nemukaka). Dzivisa machipisi, zvihwitsi, mabhisikiti nemachokoreti.</p>"
                    }
                ]
            }
        },
        'recipes': {
            en: {
                title: "Healthy & Affordable Recipes",
                cards: [
                    {
                        title: "Breakfast: Soft Maize Porridge (Yield: 5 servings)",
                        content: "<div class='recipe-meta'><span class='recipe-meta-item'><i class='fa-solid fa-users'></i> Serves 5</span><span class='recipe-meta-item'><i class='fa-solid fa-clock'></i> 25 mins</span></div>" +
                                 "<div class='recipe-section-title'>Ingredients</div>" +
                                 "<ul><li>1 ½ cup Maize meal</li><li>5 cups Water</li><li>½ cup Low-fat Milk</li></ul>" +
                                 "<div class='recipe-section-title'>Materials Needed</div>" +
                                 "<ul><li>1 Pot, 1 cup measure, 1 Wooden spoon, 1 small bowl, 1 teaspoon, Stove/Fire</li></ul>" +
                                 "<div class='recipe-section-title'>Cooking Method</div>" +
                                 "<ol style='padding-left:20px; font-size:0.95rem; color:var(--text-secondary);'>" +
                                 "<li>Boil the 5 cups of water in a pot.</li>" +
                                 "<li>Add the maize meal to the boiling water and stir continuously until all maize meal is dissolved with no lumps.</li>" +
                                 "<li>Cover the pot and cook for 15-20 minutes on low heat.</li>" +
                                 "<li>Remove from the stove. Scoop a cup of porridge into a small bowl and let it cool down.</li>" +
                                 "<li>Enjoy with half a cup of cold low-fat milk!</li>" +
                                 "</ol>"
                    },
                    {
                        title: "Snack: Microwave Popcorn (Yield: 10 cups, 2 per person)",
                        content: "<div class='recipe-meta'><span class='recipe-meta-item'><i class='fa-solid fa-users'></i> Serves 5</span><span class='recipe-meta-item'><i class='fa-solid fa-clock'></i> 10 mins</span></div>" +
                                 "<div class='recipe-section-title'>Ingredients</div>" +
                                 "<ul><li>3 tablespoons Cooking oil</li><li>½ cup Popcorn kernels</li><li>A pinch of salt (optional)</li></ul>" +
                                 "<div class='recipe-section-title'>Materials Needed</div>" +
                                 "<ul><li>1 Pot with lid, 1 cup measure, 1 tablespoon, 1 small bowl, Stove/Fire</li></ul>" +
                                 "<div class='recipe-section-title'>Cooking Method</div>" +
                                 "<ol style='padding-left:20px; font-size:0.95rem; color:var(--text-secondary);'>" +
                                 "<li>Add the 3 tablespoons of oil and ½ cup of popcorn kernels to a pot.</li>" +
                                 "<li>Place the pot on a hot stove, and cover immediately with a lid.</li>" +
                                 "<li>Cook the popcorns on medium-high heat until the popping sound stops.</li>" +
                                 "<li>Add a small pinch of salt (or enjoy with no salt for a healthier option). Serve!</li>" +
                                 "</ol>"
                    },
                    {
                        title: "Lunch: Pan-Fried Eggs & Bread (Yield: 1 serving)",
                        content: "<div class='recipe-meta'><span class='recipe-meta-item'><i class='fa-solid fa-user'></i> Serves 1</span><span class='recipe-meta-item'><i class='fa-solid fa-clock'></i> 15 mins</span></div>" +
                                 "<div class='recipe-section-title'>Ingredients</div>" +
                                 "<ul><li>2 slices of Brown bread</li><li>1 teaspoon of Tomato sauce</li><li>2 Eggs</li><li>1 teaspoon Cooking oil</li><li>A pinch of salt (¼ tsp)</li></ul>" +
                                 "<div class='recipe-section-title'>Materials Needed</div>" +
                                 "<ul><li>1 Pan/Pot, 1 Spoon/Fork, Small bowl, Plate</li></ul>" +
                                 "<div class='recipe-section-title'>Cooking Method</div>" +
                                 "<ol style='padding-left:20px; font-size:0.95rem; color:var(--text-secondary);'>" +
                                 "<li><strong>Bread preparation:</strong> Lightly spread 1 tsp of tomato sauce on both slices of brown bread.</li>" +
                                 "<li><strong>Eggs preparation:</strong> Add 1 tsp cooking oil to a hot pan.</li>" +
                                 "<li>Crack two eggs into a small bowl, add a pinch of salt, and stir with a fork.</li>" +
                                 "<li>Add the beaten eggs to the hot oil in the pan. Wait until the eggs are lightly cooked, stir gently, and remove from the heat. Assemble and enjoy!</li>" +
                                 "</ol>"
                    },
                    {
                        title: "Dinner: Bean Soup & Pap (Yield: 5 servings)",
                        content: "<div class='recipe-meta'><span class='recipe-meta-item'><i class='fa-solid fa-users'></i> Serves 5</span><span class='recipe-meta-item'><i class='fa-solid fa-clock'></i> 1 hr 30 mins</span></div>" +
                                 "<div class='recipe-section-title'>Ingredients</div>" +
                                 "<ul>" +
                                 "<li><strong>Bean soup:</strong> 1 medium Onion (chopped), 3 medium Tomatoes (chopped), 2 cups Dried beans, 6 cups warm water, 2 tbsp Cooking oil, 2 tsp Curry powder, 1 tsp Salt.</li>" +
                                 "<li><strong>Pap:</strong> 2 ½ cups Maize meal, 5 cups hot water.</li>" +
                                 "</ul>" +
                                 "<div class='recipe-section-title'>Materials Needed</div>" +
                                 "<ul><li>2 Pots, 2 Wooden spoons, 1 cup measure, 1 Knife, 1 Cutting board, 1 Dish cloth, Stove/Fire</li></ul>" +
                                 "<div class='recipe-section-title'>Cooking Method</div>" +
                                 "<ol style='padding-left:20px; font-size:0.95rem; color:var(--text-secondary);'>" +
                                 "<li><strong>Bean Soup:</strong> Soak dried beans for 4-6 hours in warm water, then discard the soak water. Wash hands.</li>" +
                                 "<li>Fry chopped onion in 2 tbsp oil until golden brown. Add chopped tomatoes, 1 tsp salt, and 2 tsp curry powder.</li>" +
                                 "<li>Add the soaked beans and 6 cups of fresh water, then cook for 15-20 minutes on medium-high heat until beans are soft.</li>" +
                                 "<li><strong>Pap:</strong> Bring 5 cups of water to a boil in the second pot.</li>" +
                                 "<li>Gradually add 2 ½ cups maize meal and stir vigorously with a wooden spoon into a thick paste. Cover the pot and cook for 10 minutes.</li>" +
                                 "<li>Add more maize meal to reach preferred consistency, stir thoroughly, cover, and cook for 10-15 minutes. Remove from heat and serve with warm bean soup!</li>" +
                                 "</ol>"
                    }
                ]
            },
            nso: {
                title: "Diresipi tša Maphelo tša go Boloka",
                cards: [
                    {
                        title: "Breakfast: Bogobe bjo Bofefo bja Lesheleshele (Serves: 5)",
                        content: "<div class='recipe-meta'><span class='recipe-meta-item'><i class='fa-solid fa-users'></i> Batho ba 5</span><span class='recipe-meta-item'><i class='fa-solid fa-clock'></i> Metsotso e 25</span></div>" +
                                 "<div class='recipe-section-title'>Dihlongwa</div>" +
                                 "<ul><li>1 ½ cup bja go lekanyetša bja maize meal</li><li>5 cups bja meetse</li><li>½ cup bja low-fat milk</li></ul>" +
                                 "<div class='recipe-section-title'>Didiriswa tše di hlokegago</div>" +
                                 "<ul><li>Poto e 1, 1 cup metric, leswalo la go duba, lelepana le le nnyane, Stove/Fire</li></ul>" +
                                 "<div class='recipe-section-title'>Mokgwa wa go Apea</div>" +
                                 "<ol style='padding-left:20px; font-size:0.95rem; color:var(--text-secondary);'>" +
                                 "<li>Bedisa meetse a dinkgo tše 5 ka potong.</li>" +
                                 "<li>Tšhela bupi bja maize meal meetseng a go bela, o dube ka leso la go duba go fihlela bo kopana gabotse bo se nago dinkgo.</li>" +
                                 "<li>Khurumetsa poto o apee metsotso e 15 go ya go 20 ka mogolela o fase.</li>" +
                                 "<li>Tloša poto stobong. Tšhela cup e tee ya lesheleshele ka mogopong o le tlogele le fole.</li>" +
                                 "<li>Ja ka seripa sa go lekanyetša sa maswi a go tonya a low-fat!</li>" +
                                 "</ol>"
                    },
                    {
                        title: "Snack: Popcorn ka Poto (Yield: Mekgo e 10)",
                        content: "<div class='recipe-meta'><span class='recipe-meta-item'><i class='fa-solid fa-users'></i> Batho ba 5</span><span class='recipe-meta-item'><i class='fa-solid fa-clock'></i> Metsotso e 10</span></div>" +
                                 "<div class='recipe-section-title'>Dihlongwa</div>" +
                                 "<ul><li>3 tablespoons tša cooking oil</li><li>½ cup ya popcorn kernels</li><li>Letswai le le nnyane (optional)</li></ul>" +
                                 "<div class='recipe-section-title'>Didiriswa tše di hlokegago</div>" +
                                 "<ul><li>Poto e 1 e nago le sekhurumetšo, cup e 1, tablespoon e 1, Stove/Fire</li></ul>" +
                                 "<div class='recipe-section-title'>Mokgwa wa go Apea</div>" +
                                 "<ol style='padding-left:20px; font-size:0.95rem; color:var(--text-secondary);'>" +
                                 "<li>Tšhela oil e 3 tbsp le ½ cup ya kernels ka potong.</li>" +
                                 "<li>Bea poto stobong se se gotetšego, o khurumelše poto ka pela ka sekhurumetšo.</li>" +
                                 "<li>Apea popcorn ka mogolela o mogolonyana go fihlela medumo ya go phatša e ema.</li>" +
                                 "<li>Tšhela letswai le le nnyane kudu (goba o je ka ntle le letswai bakeng sa maphelo a mabetse). E fa batho!</li>" +
                                 "</ol>"
                    },
                    {
                        title: "Lunch: Mae a go Gadikwa le Borotho (Serves: 1)",
                        content: "<div class='recipe-meta'><span class='recipe-meta-item'><i class='fa-solid fa-user'></i> Motho o 1</span><span class='recipe-meta-item'><i class='fa-solid fa-clock'></i> Metsotso e 15</span></div>" +
                                 "<div class='recipe-section-title'>Dihlongwa</div>" +
                                 "<ul><li>Dilae tše 2 tša borotho bja brown</li><li>1 teaspoon ya tomato sauce</li><li>Mae a le 2</li><li>1 teaspoon ya cooking oil</li><li>Letswai le le nnyane (¼ tsp)</li></ul>" +
                                 "<div class='recipe-section-title'>Didiriswa tše di hlokegago</div>" +
                                 "<ul><li>Pan/Poto e 1, lešwalo goba foroko, mogopo o monnyane, sefejana</li></ul>" +
                                 "<div class='recipe-section-title'>Mokgwa wa go Apea</div>" +
                                 "<ol style='padding-left:20px; font-size:0.95rem; color:var(--text-secondary);'>" +
                                 "<li><strong>Go lokiša Borotho:</strong> Tšhela 1 tsp ya tomato sauce dilaeng tše pedi tša borotho bja brown ka mahlakoreng a mabedi.</li>" +
                                 "<li><strong>Go gadika Mae:</strong> Tšhela 1 tsp ya oil paneng e gotetšego.</li>" +
                                 "<li>Phatša mae a mabedi ka mogopong o monnyane, o tšhele letswai le le nnyane, o a dube ka foroko.</li>" +
                                 "<li>Tšhela mae paneng e nago le oli e gotetšego. Letela go fihlela mae a apeega ka bofefo, o a dube o be o a tloše stobong. Kopanya o je!</li>" +
                                 "</ol>"
                    },
                    {
                        title: "Dinner: Moro wa Dinawa le Bogobe (Serves: 5)",
                        content: "<div class='recipe-meta'><span class='recipe-meta-item'><i class='fa-solid fa-users'></i> Batho ba 5</span><span class='recipe-meta-item'><i class='fa-solid fa-clock'></i> Iri e 1 le metsotso e 30</span></div>" +
                                 "<div class='recipe-section-title'>Dihlongwa</div>" +
                                 "<ul>" +
                                 "<li><strong>Moro wa Dinawa:</strong> 1 Onion e lekanyetšego (chopped), 3 Tomatoes (chopped), 2 cups tša dinawa tše di omilego, 6 cups tša meetse a borutho, 2 tbsp tša cooking oil, 2 tsp tša curry powder, 1 tsp ya Letswai.</li>" +
                                 "<li><strong>Bogobe:</strong> 2 ½ cups tša bupi bja maize meal, 5 cups tša meetse a go gotela.</li>" +
                                 "</ul>" +
                                 "<div class='recipe-section-title'>Didiriswa tše di hlokegago</div>" +
                                 "<ul><li>Ba dipoto tše 2, maso a go duba a 2, cup e 1, Thipa e 1, Letlapa la go ripa, Stove/Fire</li></ul>" +
                                 "<div class='recipe-section-title'>Mokgwa wa go Apea</div>" +
                                 "<ol style='padding-left:20px; font-size:0.95rem; color:var(--text-secondary);'>" +
                                 "<li><strong>Moro wa Dinawa:</strong> Inela dinawa meetse a borutho diiri tše 4 go ya go 6, o tšholle meetse ao. Hlapa diatla tša gago.</li>" +
                                 "<li>Gadika onion e ripilwego ka 2 tbsp ya oil go fihlela e thabela kholofelo ya bo-golden. Tšhela ditomato tše ripilwego, 1 tsp ya letswai le 2 tsp ya curry powder.</li>" +
                                 "<li>Tšhela dinawa tše inwetšego le meetse a mabetse a dinkgo tše 6, o apee metsotso e 15-20 ka mogolela o mogolo go fihlela dinawa di tieya tša bofefo.</li>" +
                                 "<li><strong>Bogobe (Pap):</strong> Bedisa meetse a dinkgo tše 5 ka potong ya bobedi.</li>" +
                                 "<li>Tšhela bupi bja maize meal gape le gape o dube ka maatla o šomiša leso la go duba go fihlela e ba thick paste. Khurumetsa poto o apee metsotso e 10.</li>" +
                                 "<li>Tšhela bupi bo bongwe go fihlela bo tieya ka mokgwa wo o ratago ka gona, o dube gabotse, o khurumele gape metsotso e 10 go ya go 15. Tloša stobong o fe batho ka moro o warm wa dinawa!</li>" +
                                 "</ol>"
                    }
                ]
            },
            sn: {
                title: "Mabikirwo eChikafu ane Hutano",
                cards: [
                    {
                        title: "Breakfast: Hupfu hwemakoko kana Bota (Serves: 5)",
                        content: "<div class='recipe-meta'><span class='recipe-meta-item'><i class='fa-solid fa-users'></i> Vanhu va 5</span><span class='recipe-meta-item'><i class='fa-solid fa-clock'></i> 25 mins</span></div>" +
                                 "<div class='recipe-section-title'>Zvinodiwa</div>" +
                                 "<ul><li>Komichi 1 nehafu yehupfu hwemagwere</li><li>Komichi 5 dzeMvura</li><li>Hafu yekomichi yemukaka une mafuta mashoma</li></ul>" +
                                 "<div class='recipe-section-title'>Midziyo Inodiwa</div>" +
                                 "<ul><li>Poto 1, komichi yekuyera, mugoti wemuti, mbiya diki, supuni yediki, Choto/Stove</li></ul>" +
                                 "<div class='recipe-section-title'>Mabikirwo acho</div>" +
                                 "<ol style='padding-left:20px; font-size:0.95rem; color:var(--text-secondary);'>" +
                                 "<li>Vhaisa mvura inokwana makomichi mashanu mupoto.</li>" +
                                 "<li>Dira hupfu mumvura irikuvhaira uchingomona nemugoti kusvika hupfu hwese hwanyungudika pasina mapundu.</li>" +
                                 "<li>Kupura poto woisiya ichibika kwemaminitsi gumi nemashanu kusvika makumi maviri pamoto mudiki.</li>" +
                                 "<li>Bvisa pachoto. Dira komichi imwe yebota mundiro woisiya ichitonhorera.</li>" +
                                 "<li>Idya nehafu yekomichi yemukaka unotonhorera!</li>" +
                                 "</ol>"
                    },
                    {
                        title: "Snack: Mapopukoni (Yield: Makomichi e 10)",
                        content: "<div class='recipe-meta'><span class='recipe-meta-item'><i class='fa-solid fa-users'></i> Vanhu va 5</span><span class='recipe-meta-item'><i class='fa-solid fa-clock'></i> 10 mins</span></div>" +
                                 "<div class='recipe-section-title'>Zvinodiwa</div>" +
                                 "<ul><li>3 supuni dzemafuta ekubikisa</li><li>Hafu yekomichi yechibage chemapopukoni</li><li>Chishoma chemunyu (kana uchida)</li></ul>" +
                                 "<div class='recipe-section-title'>Midziyo Inodiwa</div>" +
                                 "<ul><li>Poto 1 ine chivharo, komichi yekuyera, supuni yekuyera, mbiya, Choto</li></ul>" +
                                 "<div class='recipe-section-title'>Mabikirwo acho</div>" +
                                 "<ol style='padding-left:20px; font-size:0.95rem; color:var(--text-secondary);'>" +
                                 "<li>Dira supuni nhatu dzemafuta nehafu yekomichi yechibage chemapopukoni mupoto.</li>" +
                                 "<li>Isa poto pachoto chakapisa, woivhara nekukasira nechivharo chayo.</li>" +
                                 "<li>Bika mapopukoni kusvika kurira kwekupatika kwamira.</li>" +
                                 "<li>Sanganisa nemunyu mushoma zvikuru (kana kusaisa munyu zvachose kuti zvive nehutano). Govera!</li>" +
                                 "</ol>"
                    },
                    {
                        title: "Lunch: Mazai akatsvetwa neChingwa (Serves: 1)",
                        content: "<div class='recipe-meta'><span class='recipe-meta-item'><i class='fa-solid fa-user'></i> Munhu 1</span><span class='recipe-meta-item'><i class='fa-solid fa-clock'></i> 15 mins</span></div>" +
                                 "<div class='recipe-section-title'>Zvinodiwa</div>" +
                                 "<ul><li>Zvimedu zviviri zvechingwa chebrown</li><li>Supuni 1 yediki yetomato sauce</li><li>Mazai maviri</li><li>Supuni 1 yediki yemafuta ekubikisa</li><li>Chishoma chemunyu (¼ tsp)</li></ul>" +
                                 "<div class='recipe-section-title'>Midziyo Inodiwa</div>" +
                                 "<ul><li>Pani 1, Supuni/Forogo, mbiya diki, ndiro</li></ul>" +
                                 "<div class='recipe-section-title'>Mabikirwo acho</div>" +
                                 "<ol style='padding-left:20px; font-size:0.95rem; color:var(--text-secondary);'>" +
                                 "<li><strong>Kugadzira Chingwa:</strong> Zora chishoma chetomato sauce pazvimedu zviviri zvechingwa chebrown kumativi ese.</li>" +
                                 "<li><strong>Kugadzira Mazai:</strong> Dira supuni imwe yemafuta mupani yakapisa.</li>" +
                                 "<li>Putsa mazai maviri mundiro diki, dira munyu mushoma womona neforogo.</li>" +
                                 "<li>Dira mazai akamonwa mumafuta anopisa mupani. Mirira kusvika mazai aibva zvishoma, womona wobvisa pamoto. Gadzira chingwa nemazai udye!</li>" +
                                 "</ol>"
                    },
                    {
                        title: "Dinner: Muto weBhinzi neSadza (Serves: 5)",
                        content: "<div class='recipe-meta'><span class='recipe-meta-item'><i class='fa-solid fa-users'></i> Vanhu va 5</span><span class='recipe-meta-item'><i class='fa-solid fa-clock'></i> 1 hr 30 mins</span></div>" +
                                 "<div class='recipe-section-title'>Zvinodiwa</div>" +
                                 "<ul>" +
                                 "<li><strong>Muto weBhinzi:</strong> Hanyanisi 1 (yakachekwa), madomasi matatu (akachekwa), makomichi maviri eBhinzi dzakaoma, makomichi matanhatu emvura inodziya, masupuni maviri emafuta ekubika, masupuni maviri emuriwo wecurry, supuni imwe yemunyu.</li>" +
                                 "<li><strong>Sadza:</strong> Makomichi maviri nehafu ehupfu, makomichi mashanu emvura inopisa.</li>" +
                                 "</ul>" +
                                 "<div class='recipe-section-title'>Midziyo Inodiwa</div>" +
                                 "<ul><li>Mapoto maviri, migoti miviri, komichi yekuyera, banga, puranga rekuchekerera, Choto</li></ul>" +
                                 "<div class='recipe-section-title'>Mabikirwo acho</div>" +
                                 "<ol style='padding-left:20px; font-size:0.95rem; color:var(--text-secondary);'>" +
                                 "<li><strong>Muto weBhinzi:</strong> Nyika bhinzi mumvura inodziya kwemaawa mana kusvika kumatatu, wozorasa mvura iyoyo. Geza maoko ako.</li>" +
                                 "<li>Kanga hanyanisi mumafuta ekubika kusvika yatsvukuruka. Dira madomasi, munyu nemuriwo wecurry.</li>" +
                                 "<li>Dira bhinzi dzakanyikwa nemakomichi matanhatu emvura, wozosiya ichibika kwemaminitsi gumi nemashanu kusvika makumi maviri kusvika bhinzi dzapfava.</li>" +
                                 "<li><strong>Sadza:</strong> Vhaisa makomichi mashanu emvura mupoto yechipiri.</li>" +
                                 "<li>Dira hupfu zvishoma nezvishoma uchingomona nemugoti kusvika sadza rakora. Kupura poto woisiya kwemaminitsi gumi pamoto mudiki.</li>" +
                                 "<li>Wedzera hupfu hushoma kuti sadza rive sezvaunoda, mona zvakanaka, wovhara woisiya ichibika kwemaminitsi gumi kusvika gumi nemashanu. Bvisa pachoto ugozvipakurira nemuto webhinzi!</li>" +
                                 "</ol>"
                    }
                ]
            }
        },
        'basket': {
            en: {
                title: "Food Basket Costing & Budget",
                cards: [
                    {
                        title: "Bean Soup & Pap Costing (Shoprite vs. SaveMore)",
                        content: "<p>Recipe cost comparison details for the dinner recipe (Serves 5):</p>" +
                                 "<div class='table-responsive'>" +
                                 "<table class='styled-table'>" +
                                 "<thead><tr><th>Ingredient</th><th>Quantity details</th><th>Shoprite</th><th>SaveMore</th></tr></thead>" +
                                 "<tbody>" +
                                 "<tr><td>Onions (1kg basket base)</td><td>2 small (280g)</td><td>R5.60</td><td>R7.00</td></tr>" +
                                 "<tr><td>Tomatoes (1kg basket base)</td><td>3 medium (360g)</td><td>R14.40</td><td>R14.40</td></tr>" +
                                 "<tr><td>Dried Beans (500g bag)</td><td>1 bag (500g)</td><td>R26.00</td><td>R29.00</td></tr>" +
                                 "<tr><td>Cooking Oil (750ml base)</td><td>2 tbsp (30ml)</td><td>R1.32</td><td>R1.40</td></tr>" +
                                 "<tr><td>Curry Powder (100g base)</td><td>2 tsp (10g)</td><td>R1.90</td><td>R3.00</td></tr>" +
                                 "<tr><td>Sea Salt (500g base)</td><td>1 tsp (5g)</td><td>R0.08</td><td>R0.13</td></tr>" +
                                 "<tr style='font-weight:700; background-color:#FAF8F5;'><td>Total Dinner Cost</td><td>5 Servings</td><td>R49.30</td><td>R53.93</td></tr>" +
                                 "</tbody></table></div>"
                    },
                    {
                        title: "Monthly Household Food Basket for 5 People",
                        content: "<p>An example of an affordable, healthy monthly household basket compared between stores:</p>" +
                                 "<div class='table-responsive'>" +
                                 "<table class='styled-table'>" +
                                 "<thead><tr><th>Food Item</th><th>Quantity</th><th>Shoprite</th><th>Save More</th></tr></thead>" +
                                 "<tbody>" +
                                 "<tr><td>Spekko Rice</td><td>10kg</td><td>R109.99</td><td>R99.99</td></tr>" +
                                 "<tr><td>Supersun Maize Meal</td><td>5kg</td><td>R89.99</td><td>R99.00</td></tr>" +
                                 "<tr><td>Brown Blue Ribbon Bread</td><td>700g &times; 13</td><td>R207.87</td><td>R207.89</td></tr>" +
                                 "<tr><td>Potatoes</td><td>7kg</td><td>R49.99</td><td>R47.99</td></tr>" +
                                 "<tr><td>Excella Sunflower Oil</td><td>750ml</td><td>R31.99</td><td>R35.75</td></tr>" +
                                 "<tr><td>Dried Red Speckled Beans</td><td>500g &times; 2</td><td>R51.98</td><td>R53.99</td></tr>" +
                                 "<tr><td>KOO Baked Beans</td><td>400g &times; 2 tins</td><td>R33.98</td><td>R25.98</td></tr>" +
                                 "<tr><td>Lucky Star Tin Fish</td><td>400g &times; 6 tins</td><td>R132.94</td><td>R173.94</td></tr>" +
                                 "<tr><td>Nulaid Medium Eggs</td><td>30 eggs</td><td>R64.99</td><td>R66.99</td></tr>" +
                                 "<tr><td>Low-fat Milk (UHT)</td><td>1L &times; 3</td><td>R50.97</td><td>R50.50</td></tr>" +
                                 "<tr><td>Maas (Sour Milk)</td><td>2L</td><td>R37.99</td><td>R35.00</td></tr>" +
                                 "<tr><td>Rite Soya Mince</td><td>400g &times; 2</td><td>R45.00</td><td>R46.99</td></tr>" +
                                 "<tr><td>Marina Sea Salt</td><td>500g</td><td>R8.00</td><td>R13.00</td></tr>" +
                                 "<tr><td>Freshmark Carrots</td><td>1kg</td><td>R19.99</td><td>R19.99</td></tr>" +
                                 "<tr><td>Freshmark Onions</td><td>1kg</td><td>R20.00</td><td>R25.00</td></tr>" +
                                 "<tr><td>White Sugar</td><td>2kg</td><td>R45.00</td><td>R46.99</td></tr>" +
                                 "<tr><td>Freshmark Tomatoes</td><td>1kg</td><td>R40.00</td><td>R40.00</td></tr>" +
                                 "<tr><td>Rooibos Tea</td><td>80 pack</td><td>R56.99</td><td>R57.99</td></tr>" +
                                 "<tr><td>Tomato Sauce</td><td>700ml</td><td>R38.99</td><td>R35.99</td></tr>" +
                                 "<tr><td>Knorr Soup</td><td>50g &times; 2</td><td>R10.00</td><td>R10.00</td></tr>" +
                                 "<tr><td>SuperPop Popcorn Seeds</td><td>500g</td><td>R16.99</td><td>R17.99</td></tr>" +
                                 "<tr><td>Freshmark Spinach</td><td>300g</td><td>R19.99</td><td>R22.99</td></tr>" +
                                 "<tr><td>Whole Cabbage</td><td>1 whole</td><td>R15.99</td><td>R15.99</td></tr>" +
                                 "<tr><td>Apples</td><td>1.5kg</td><td>R24.99</td><td>R25.00</td></tr>" +
                                 "<tr><td>Bananas</td><td>1kg</td><td>R19.99</td><td>R20.00</td></tr>" +
                                 "<tr style='font-weight:800; background-color:#FAF8F5; color:var(--text-primary);'>" +
                                 "<td>TOTAL BASKET ESTIMATE</td><td>5 People / Month</td><td>R1,208.60</td><td>R1,293.95</td></tr>" +
                                 "</tbody></table></div>"
                    }
                ]
            },
            nso: {
                title: "Boima bja Mketla wa Dijo & Tekanyo",
                cards: [
                    {
                        title: "Dipalelo tša Dinner (Shoprite vs. SaveMore)",
                        content: "<p>Dintlha ka go arola ditshenyegelo tša go apea dinner (Serves 5):</p>" +
                                 "<div class='table-responsive'>" +
                                 "<table class='styled-table'>" +
                                 "<thead><tr><th>Dihlongwa</th><th>Dintlha tša dipalo</th><th>Shoprite</th><th>SaveMore</th></tr></thead>" +
                                 "<tbody>" +
                                 "<tr><td>Onions (1kg basket base)</td><td>tše nnyane tše 2 (280g)</td><td>R5.60</td><td>R7.00</td></tr>" +
                                 "<tr><td>Tomatoes (1kg basket base)</td><td>tša gare tše 3 (360g)</td><td>R14.40</td><td>R14.40</td></tr>" +
                                 "<tr><td>Dried Beans (500g bag)</td><td>mokotla o 1 (500g)</td><td>R26.00</td><td>R29.00</td></tr>" +
                                 "<tr><td>Cooking Oil (750ml base)</td><td>2 tbsp (30ml)</td><td>R1.32</td><td>R1.40</td></tr>" +
                                 "<tr><td>Curry Powder (100g base)</td><td>2 tsp (10g)</td><td>R1.90</td><td>R3.00</td></tr>" +
                                 "<tr><td>Sea Salt (500g base)</td><td>1 tsp (5g)</td><td>R0.08</td><td>R0.13</td></tr>" +
                                 "<tr style='font-weight:700; background-color:#FAF8F5;'><td>Ditshenyegelo tša Dinner</td><td>Batho ba 5</td><td>R49.30</td><td>R53.93</td></tr>" +
                                 "</tbody></table></div>"
                    },
                    {
                        title: "Mketla wa Dijo tša Maphelo wa Letsatsi le Letsatsi (Batho ba 5)",
                        content: "<p>Mohlala wa mketla o bolokago maphelong o arotšwego magareng ga Shoprite le Save More bakeng sa lelapa la batho ba 5:</p>" +
                                 "<div class='table-responsive'>" +
                                 "<table class='styled-table'>" +
                                 "<thead><tr><th>Dijo</th><th>Palo</th><th>Shoprite</th><th>Save More</th></tr></thead>" +
                                 "<tbody>" +
                                 "<tr><td>Spekko Rice</td><td>10kg</td><td>R109.99</td><td>R99.99</td></tr>" +
                                 "<tr><td>Supersun Maize Meal</td><td>5kg</td><td>R89.99</td><td>R99.00</td></tr>" +
                                 "<tr><td>Brown Blue Ribbon Bread</td><td>700g &times; 13</td><td>R207.87</td><td>R207.89</td></tr>" +
                                 "<tr><td>Potatoes</td><td>7kg</td><td>R49.99</td><td>R47.99</td></tr>" +
                                 "<tr><td>Excella Sunflower Oil</td><td>750ml</td><td>R31.99</td><td>R35.75</td></tr>" +
                                 "<tr><td>Dried Red Speckled Beans</td><td>500g &times; 2</td><td>R51.98</td><td>R53.99</td></tr>" +
                                 "<tr><td>KOO Baked Beans</td><td>400g &times; 2 tins</td><td>R33.98</td><td>R25.98</td></tr>" +
                                 "<tr><td>Lucky Star Tin Fish</td><td>400g &times; 6 tins</td><td>R132.94</td><td>R173.94</td></tr>" +
                                 "<tr><td>Nulaid Medium Eggs</td><td>30 eggs</td><td>R64.99</td><td>R66.99</td></tr>" +
                                 "<tr><td>Low-fat Milk (UHT)</td><td>1L &times; 3</td><td>R50.97</td><td>R50.50</td></tr>" +
                                 "<tr><td>Maas (Sour Milk)</td><td>2L</td><td>R37.99</td><td>R35.00</td></tr>" +
                                 "<tr><td>Rite Soya Mince</td><td>400g &times; 2</td><td>R45.00</td><td>R46.99</td></tr>" +
                                 "<tr><td>Marina Sea Salt</td><td>500g</td><td>R8.00</td><td>R13.00</td></tr>" +
                                 "<tr><td>Freshmark Carrots</td><td>1kg</td><td>R19.99</td><td>R19.99</td></tr>" +
                                 "<tr><td>Freshmark Onions</td><td>1kg</td><td>R20.00</td><td>R25.00</td></tr>" +
                                 "<tr><td>White Sugar</td><td>2kg</td><td>R45.00</td><td>R46.99</td></tr>" +
                                 "<tr><td>Freshmark Tomatoes</td><td>1kg</td><td>R40.00</td><td>R40.00</td></tr>" +
                                 "<tr><td>Rooibos Tea</td><td>80 pack</td><td>R56.99</td><td>R57.99</td></tr>" +
                                 "<tr><td>Tomato Sauce</td><td>700ml</td><td>R38.99</td><td>R35.99</td></tr>" +
                                 "<tr><td>Knorr Soup</td><td>50g &times; 2</td><td>R10.00</td><td>R10.00</td></tr>" +
                                 "<tr><td>SuperPop Popcorn Seeds</td><td>500g</td><td>R16.99</td><td>R17.99</td></tr>" +
                                 "<tr><td>Freshmark Spinach</td><td>300g</td><td>R19.99</td><td>R22.99</td></tr>" +
                                 "<tr><td>Whole Cabbage</td><td>1 whole</td><td>R15.99</td><td>R15.99</td></tr>" +
                                 "<tr><td>Apples</td><td>1.5kg</td><td>R24.99</td><td>R25.00</td></tr>" +
                                 "<tr><td>Bananas</td><td>1kg</td><td>R19.99</td><td>R20.00</td></tr>" +
                                 "<tr style='font-weight:800; background-color:#FAF8F5; color:var(--text-primary);'>" +
                                 "<td>TOTAL BASKET ESTIMATE</td><td>Lelapa le 1 / Month</td><td>R1,208.60</td><td>R1,293.95</td></tr>" +
                                 "</tbody></table></div>"
                    }
                ]
            },
            sn: {
                title: "Mari inodiwa paChikafu & Mutengo",
                cards: [
                    {
                        title: "Mutengo weMuto weBhinzi neSadza (Dinner)",
                        content: "<p>Fananidzo yemutengo wechikafu chemanheru (Dinner) (Serves 5):</p>" +
                                 "<div class='table-responsive'>" +
                                 "<table class='styled-table'>" +
                                 "<thead><tr><th>Zvinoshandiswa</th><th>Kuyerwa kwazvo</th><th>Shoprite</th><th>SaveMore</th></tr></thead>" +
                                 "<tbody>" +
                                 "<tr><td>Hanyanisi (1kg basket base)</td><td>zvidiki zviviri (280g)</td><td>R5.60</td><td>R7.00</td></tr>" +
                                 "<tr><td>Matomasi (1kg basket base)</td><td>zvirinani zvitatu (360g)</td><td>R14.40</td><td>R14.40</td></tr>" +
                                 "<tr><td>Bhinzi dzakaoma (500g bag)</td><td>bhegi 1 (500g)</td><td>R26.00</td><td>R29.00</td></tr>" +
                                 "<tr><td>Mafuta ekubikisa (750ml base)</td><td>2 tbsp (30ml)</td><td>R1.32</td><td>R1.40</td></tr>" +
                                 "<tr><td>Curry Powder (100g base)</td><td>2 tsp (10g)</td><td>R1.90</td><td>R3.00</td></tr>" +
                                 "<tr><td>Munyu wemugungwa (500g base)</td><td>1 tsp (5g)</td><td>R0.08</td><td>R0.13</td></tr>" +
                                 "<tr style='font-weight:700; background-color:#FAF8F5;'><td>Mutengo weDinner yese</td><td>Vanhu va 5</td><td>R49.30</td><td>R53.93</td></tr>" +
                                 "</tbody></table></div>"
                    },
                    {
                        title: "Chiroro cheChikafu cheMhuri yeVanhu va 5 paMwedzi",
                        content: "<p>Muenzaniso wechiroro chechikafu chinochengetedza hutano uye chakachipa paShoprite neSave More pashure pemwedzi:</p>" +
                                 "<div class='table-responsive'>" +
                                 "<table class='styled-table'>" +
                                 "<thead><tr><th>Chikafu</th><th>Kuwanda</th><th>Shoprite</th><th>Save More</th></tr></thead>" +
                                 "<tbody>" +
                                 "<tr><td>Spekko Rice</td><td>10kg</td><td>R109.99</td><td>R99.99</td></tr>" +
                                 "<tr><td>Supersun Maize Meal</td><td>5kg</td><td>R89.99</td><td>R99.00</td></tr>" +
                                 "<tr><td>Brown Blue Ribbon Bread</td><td>700g &times; 13</td><td>R207.87</td><td>R207.89</td></tr>" +
                                 "<tr><td>Potatoes</td><td>7kg</td><td>R49.99</td><td>R47.99</td></tr>" +
                                 "<tr><td>Excella Sunflower Oil</td><td>750ml</td><td>R31.99</td><td>R35.75</td></tr>" +
                                 "<tr><td>Dried Red Speckled Beans</td><td>500g &times; 2</td><td>R51.98</td><td>R53.99</td></tr>" +
                                 "<tr><td>KOO Baked Beans</td><td>400g &times; 2 tins</td><td>R33.98</td><td>R25.98</td></tr>" +
                                 "<tr><td>Lucky Star Tin Fish</td><td>400g &times; 6 tins</td><td>R132.94</td><td>R173.94</td></tr>" +
                                 "<tr><td>Nulaid Medium Eggs</td><td>30 eggs</td><td>R64.99</td><td>R66.99</td></tr>" +
                                 "<tr><td>Low-fat Milk (UHT)</td><td>1L &times; 3</td><td>R50.97</td><td>R50.50</td></tr>" +
                                 "<tr><td>Maas (Sour Milk)</td><td>2L</td><td>R37.99</td><td>R35.00</td></tr>" +
                                 "<tr><td>Rite Soya Mince</td><td>400g &times; 2</td><td>R45.00</td><td>R46.99</td></tr>" +
                                 "<tr><td>Marina Sea Salt</td><td>500g</td><td>R8.00</td><td>R13.00</td></tr>" +
                                 "<tr><td>Freshmark Carrots</td><td>1kg</td><td>R19.99</td><td>R19.99</td></tr>" +
                                 "<tr><td>Freshmark Onions</td><td>1kg</td><td>R20.00</td><td>R25.00</td></tr>" +
                                 "<tr><td>White Sugar</td><td>2kg</td><td>R45.00</td><td>R46.99</td></tr>" +
                                 "<tr><td>Freshmark Tomatoes</td><td>1kg</td><td>R40.00</td><td>R40.00</td></tr>" +
                                 "<tr><td>Rooibos Tea</td><td>80 pack</td><td>R56.99</td><td>R57.99</td></tr>" +
                                 "<tr><td>Tomato Sauce</td><td>700ml</td><td>R38.99</td><td>R35.99</td></tr>" +
                                 "<tr><td>Knorr Soup</td><td>50g &times; 2</td><td>R10.00</td><td>R10.00</td></tr>" +
                                 "<tr><td>SuperPop Popcorn Seeds</td><td>500g</td><td>R16.99</td><td>R17.99</td></tr>" +
                                 "<tr><td>Freshmark Spinach</td><td>300g</td><td>R19.99</td><td>R22.99</td></tr>" +
                                 "<tr><td>Whole Cabbage</td><td>1 whole</td><td>R15.99</td><td>R15.99</td></tr>" +
                                 "<tr><td>Apples</td><td>1.5kg</td><td>R24.99</td><td>R25.00</td></tr>" +
                                 "<tr><td>Bananas</td><td>1kg</td><td>R19.99</td><td>R20.00</td></tr>" +
                                 "<tr style='font-weight:800; background-color:#FAF8F5; color:var(--text-primary);'>" +
                                 "<td>TOTAL BASKET ESTIMATE</td><td>Mhuri 1 / Month</td><td>R1,208.60</td><td>R1,293.95</td></tr>" +
                                 "</tbody></table></div>"
                    }
                ]
            }
        },
        'physical-activity': {
            en: {
                title: "Physical Activity & Fitness Guidelines",
                cards: [
                    {
                        title: "Weekly Activity Goals",
                        content: "<p><strong>Guideline:</strong> Move your body most of the time, rather than sitting down.</p>" +
                                 "<p>Spend at least <strong>150 minutes per week</strong> staying active. This breaks down to a very manageable <strong>21-22 minutes per day</strong> every day.</p>"
                    },
                    {
                        title: "Recommended Everyday Activities",
                        content: "<p>You don't need a gym membership. Incorporate these everyday activities to burn excess stored fat:</p>" +
                                 "<ul class='info-card-list'>" +
                                 "<li><strong>Household Cleaning:</strong> Sweeping, washing windows, scrubbing floors, and moving items.</li>" +
                                 "<li><strong>Walking & Running:</strong> Taking brisk walks around your neighborhood or jogging.</li>" +
                                 "<li><strong>Cycling:</strong> Riding a bicycle on paths or open roads.</li>" +
                                 "<li><strong>Dancing:</strong> Moving dynamically to music in your home.</li>" +
                                 "<li><strong>Aerobics & Strength:</strong> Bodyweight squats, pushups, or light weight lifting.</li>" +
                                 "<li><strong>Active Games & Swimming:</strong> Playing soccer, tag, or swimming in a pool.</li>" +
                                 "<li><strong>Gardening & Outdoor Work:</strong> Planting, digging, and maintaining a vegetable garden.</li>" +
                                 "</ul>"
                    }
                ]
            },
            nso: {
                title: "Ditlabelo tša go Šišinya Mmele le Boitšhidullo",
                cards: [
                    {
                        title: "Ditebanyo tša go Šišinya Mmele ka Beke",
                        content: "<p><strong>Tlhahlo ya bohlokwa:</strong> Šišinya mmele wa gago makga a mantši, go e na le go dula fatshe.</p>" +
                                 "<p>Feleletša bonnyane bja <strong>metsotso e 150 ka beke</strong> o šišinya mmele. Se se ra gore o swanetše go šišinya mmele metsotso e <strong>21 go ya go 22 ka letsatsi</strong> e le nngwe.</p>"
                    },
                    {
                        title: "Ditiro tša tšatši le tšatši tše di kgothaletšwago",
                        content: "<p>Ga o hloke gym ya go bitša kudu. Tsenya mekgwa e mebonolo ya go šišinya mmele mešomong ya gago:</p>" +
                                 "<ul class='info-card-list'>" +
                                 "<li><strong>Go Hlwepisa gae:</strong> Go sweeping, go hlwekisa windows, go duba maps, le ditiro tša ka gae.</li>" +
                                 "<li><strong>Go sepela le go kitima:</strong> Go sepela ka pela ditseleng tša moletša goba go kitimanyana.</li>" +
                                 "<li><strong>Go namela Paesekele:</strong> Go kgweetsa paesekele mo go thabelang bophelo.</li>" +
                                 "<li><strong>Go bina (Dancing):</strong> Go šišinya mmele ka dipina ka lapeng.</li>" +
                                 "<li><strong>Aerobics le Strength training:</strong> Di-squat, di-pushup, goba go gola dilo tše nngwe tše boima tša letsogo.</li>" +
                                 "<li><strong>Dipapadi le go rutha:</strong> Go papadi ya kgwele ya maoto le dipapadi tša bana, goba go thutha ka meetse.</li>" +
                                 "<li><strong>Go lema le go gardening:</strong> Go epa mobu, go lema merogo le go hlwekisa jarata.</li>" +
                                 "</ul>"
                    }
                ]
            },
            sn: {
                title: "Kusimbisa Muviri & Hutano hwako",
                cards: [
                    {
                        title: "Zvinangwa zvaVhiki neVhiki",
                        content: "<p><strong>Chitungamiri:</strong> Fambisa muviri wako nguva zhinji, pane kugarisa pasi.</p>" +
                                 "<p>Ita maekisesaizi anokwana maminetsi <strong>zana nemakumi mashanu pavhiki</strong>. Izvi zvinoenzana nemaminetsi <strong>21 kusvika pa 22 pazuva</strong> zuva rega rega.</p>"
                    },
                    {
                        title: "Zviitwa zveZuva neZuva Zvinokurudzirwa",
                        content: "<p>Haufanire kubhadhara mari yegym yakawanda. Gadzirisa zviitwa zvezuva nezuva izvi mumabasa ako:</p>" +
                                 "<ul class='info-card-list'>" +
                                 "<li><strong>Kuchenesa Mumba:</strong> Kutsvaira, kusuka mafafitera, kukwesha pasi, nekutakura midziyo.</li>" +
                                 "<li><strong>Kufamba neKumhanya:</strong> Kufamba nekukasira munharaunda mako kana kumhanya zvishoma.</li>" +
                                 "<li><strong>Kuchovha Bhasikoro:</strong> Kuchovha bhasikoro munzira dzekumaruva kana mumigwagwa.</li>" +
                                 "<li><strong>Kutamba (Dancing):</strong> Kufambisa muviri wako nemumhanzi mumba mako.</li>" +
                                 "<li><strong>Aerobics nekusimbisa muviri:</strong> Ma-squats, ma-pushups, kana kusimudza zvinhu zvirinani kurema.</li>" +
                                 "<li><strong>Mitambo nekutuhwina:</strong> Kutamba bhora retsoka nemitambo yevana, kana kutuhwina mudziva.</li>" +
                                 "<li><strong>Kurima neGadheni:</strong> Kuchera, kurima muriwo, nekuchenesa gadheni rako.</li>" +
                                 "</ul>"
                    }
                ]
            }
        }
    }
};

// Map topics to their corresponding original images
const topicImages = {
    'obesity-intro': ['Images/web_page-0002.jpg'],
    'how-occurs': ['Images/web_page-0003.jpg'],
    'bmi-classification': [
        'Images/web_page-0005.jpg',
        'Images/web_page-0004.jpg'
    ],
    'risk-factors': ['Images/web_page-0006.jpg'],
    'complications': [
        'Images/web_page-0007.jpg'
        
    ],
    'physical-activity': ['Images/web_page-0024.jpg'],
    'portion-sizes': ['Images/web_page-0009.jpg', 'Images/web_page-0010.jpg'],
    'diet-quality': [
        'Images/web_page-0011.jpg',
        'Images/web_page-0012.jpg'
    
    ],
    'recipes': [
        'Images/web_page-0009.jpg',
        'Images/web_page-0011.jpg',
        'Images/web_page-0012.jpg',
        'Images/web_page-0013.jpg',
        'Images/web_page-0014.jpg',
        'Images/web_page-0015.jpg',
        'Images/web_page-0016.jpg',
        'Images/web_page-0017.jpg',
        'Images/web_page-0018.jpg'
        
    ],
    'basket': [
        'Images/web_page-0022.jpg',
        'Images/web_page-0023.jpg'
        
    ]
};

// 2. THE APPLICATION CORE ENGINE (ROUTING, STATE, INTERACTIVITY)
class App {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.translatePage(state.currentLang);
    }

    setupEventListeners() {
        // Logo triggers Home
        document.getElementById('btn-header-logo').addEventListener('click', () => {
            this.switchTab('home');
        });

        // Translation triggers
        const trigger = document.getElementById('translate-trigger');
        const menu = document.getElementById('translate-menu');
        
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.parentElement.classList.toggle('active');
        });

        document.addEventListener('click', () => {
            menu.parentElement.classList.remove('active');
        });

        // Language Options select
        const langOptions = document.querySelectorAll('.lang-option');
        langOptions.forEach(opt => {
            opt.addEventListener('click', (e) => {
                const lang = e.currentTarget.getAttribute('data-lang');
                this.changeLanguage(lang);
            });
        });
    }

    changeLanguage(lang) {
        state.currentLang = lang;
        
        // Update selection UI active styles
        document.querySelectorAll('.lang-option').forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update active label text
        const labels = { 'en': 'English', 'nso': 'Sepedi', 'sn': 'Shona' };
        document.getElementById('current-lang-label').innerText = labels[lang];

        // Translate the DOM
        this.translatePage(lang);
        
        // If in detail slide view, re-render the dynamic content immediately
        if (state.currentView === 'detail' && state.currentTopic) {
            this.renderDetailContent(state.currentTopic);
        }
    }

    translatePage(lang) {
        const dict = translations.ui[lang];
        
        // Translate all marked DOM elements
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(el => {
            const key = el.getAttribute('data-translate');
            if (dict[key]) {
                // If it is a button or span, preserve its structural html elements if any
                if (el.tagName === 'SPAN' && el.querySelector('i')) {
                    const icon = el.querySelector('i').outerHTML;
                    el.innerHTML = `${dict[key]} ${icon}`;
                } else {
                    el.innerText = dict[key];
                }
            }
        });
    }

    switchTab(tabId) {
        // Deactivate all navigation tabs
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        
        // Hide all major views
        document.querySelectorAll('.app-view').forEach(view => view.classList.remove('active'));

        // Reset scroll position
        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (tabId === 'home') {
            state.currentView = 'home';
            state.currentTopic = null;
            document.getElementById('nav-home').classList.add('active');
            document.getElementById('home-view').classList.add('active');
        } 
        else if (tabId === 'bmi') {
            document.getElementById('nav-bmi').classList.add('active');
            this.navigateTo('bmi-classification');
        } 
        else if (tabId === 'basket') {
            document.getElementById('nav-basket').classList.add('active');
            this.navigateTo('basket');
        } 
        else if (tabId === 'contact') {
            state.currentView = 'contact';
            state.currentTopic = null;
            document.getElementById('nav-contact').classList.add('active');
            document.getElementById('contact-view').classList.add('active');
        }
    }

    navigateTo(topicId) {
        state.currentView = 'detail';
        state.currentTopic = topicId;

        // Hide all views
        document.querySelectorAll('.app-view').forEach(view => view.classList.remove('active'));

        // Populates content details dynamically
        this.renderDetailContent(topicId);

        // Show detail view
        document.getElementById('detail-view').classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Update bottom nav highlights if they clicked category cards
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        if (topicId === 'bmi-classification') {
            document.getElementById('nav-bmi').classList.add('active');
        } else if (topicId === 'basket') {
            document.getElementById('nav-basket').classList.add('active');
        } else {
            // Keep home highlighted or none
            document.getElementById('nav-home').classList.add('active');
        }
    }

    backToDashboard() {
        this.switchTab('home');
    }

    renderDetailContent(topicId) {
        const lang = state.currentLang;
        const topicData = translations.topics[topicId]?.[lang];
        
        if (!topicData) return;

        // Injects detail view title
        document.getElementById('detail-banner-title').innerHTML = `
            <h2 class="detail-title">${topicData.title}</h2>
        `;

        // Injects detail text cards
        const textCardsContainer = document.getElementById('detail-text-cards');
        textCardsContainer.innerHTML = '';
        
        topicData.cards.forEach(card => {
            const cardEl = document.createElement('div');
            cardEl.className = 'info-card';
            cardEl.innerHTML = `
                <h3 class="info-card-title">${card.title}</h3>
                <div class="info-card-text">${card.content}</div>
            `;
            textCardsContainer.appendChild(cardEl);
        });

        // Injects dynamic image content
        const images = topicImages[topicId];
        const imageContainer = document.getElementById('detail-image-container');
        imageContainer.innerHTML = '';

        const visualArea = document.querySelector('.detail-visual-area');
        if (visualArea) {
            if (topicId === 'basket') {
                visualArea.classList.add('non-sticky');
            } else {
                visualArea.classList.remove('non-sticky');
            }
        }

        if (images && images.length > 0) {
            // If multiple images are available, create a beautifully padded slideshow/vertical list
            images.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = topicData.title;
                img.loading = 'lazy';
                imageContainer.appendChild(img);
            });
        }
    }

    // 3. INTERACTIVE BMI CALCULATOR LOGIC
    calculateBMI() {
        const weightInput = document.getElementById('bmi-weight');
        const heightInput = document.getElementById('bmi-height');
        
        const w = parseFloat(weightInput.value);
        const h = parseFloat(heightInput.value);

        if (!w || !h || w <= 0 || h <= 0) {
            alert(state.currentLang === 'en' ? "Please enter valid Weight and Height values!" 
                  : state.currentLang === 'nso' ? "Ka kgopelo tšhela dipalelo tša boima le botelele tše di hlapang!" 
                  : "Ndapota pinda uremu nehurefu hwakakodzera!");
            return;
        }

        // Formula: BMI = w / (h * h)
        const bmi = (w / (h * h)).toFixed(1);
        
        // Category thresholds and translation text
        let category = '';
        let badgeClass = '';
        let rowId = '';

        if (bmi < 18.5) {
            category = state.currentLang === 'en' ? 'Underweight' : state.currentLang === 'nso' ? 'Ka fase ga boima (Underweight)' : 'Huremu huri pasi (Underweight)';
            badgeClass = 'bmi-underweight';
            rowId = 'row-underweight';
        } else if (bmi >= 18.5 && bmi < 25.0) {
            category = state.currentLang === 'en' ? 'Normal Range' : state.currentLang === 'nso' ? 'Boima bo botse (Normal)' : 'Huremu hwakanaka (Normal)';
            badgeClass = 'bmi-normal';
            rowId = 'row-normal';
        } else if (bmi >= 25.0 && bmi < 30.0) {
            category = state.currentLang === 'en' ? 'Overweight' : state.currentLang === 'nso' ? 'Go nona go fetisisa (Overweight)' : 'Kufuta zvakapfurikidza (Overweight)';
            badgeClass = 'bmi-overweight';
            rowId = 'row-overweight';
        } else if (bmi >= 30.0 && bmi < 35.0) {
            category = state.currentLang === 'en' ? 'Obesity Class 1' : state.currentLang === 'nso' ? 'Bofutu ba Karolo 1 (Obesity 1)' : 'Kufuta Chikamu 1';
            badgeClass = 'bmi-obese-1';
            rowId = 'row-obese1';
        } else if (bmi >= 35.0 && bmi < 40.0) {
            category = state.currentLang === 'en' ? 'Obesity Class 2' : state.currentLang === 'nso' ? 'Bofutu ba Karolo 2 (Obesity 2)' : 'Kufuta Chikamu 2';
            badgeClass = 'bmi-obese-2';
            rowId = 'row-obese2';
        } else {
            category = state.currentLang === 'en' ? 'Obesity Class 3 (Severe)' : state.currentLang === 'nso' ? 'Bofutu ba Karolo 3 (Obesity 3)' : 'Kufuta Chikamu 3';
            badgeClass = 'bmi-obese-3';
            rowId = 'row-obese3';
        }

        // Render result values
        const resultVal = document.getElementById('bmi-val');
        const resultBadge = document.getElementById('bmi-badge-type');
        const resultBox = document.getElementById('bmi-result');

        resultVal.innerText = bmi;
        resultBadge.innerText = category;
        resultBadge.className = `bmi-badge ${badgeClass}`;

        // Add visual transition active classes
        resultBox.classList.add('active');

        // Reset highlights on reference table rows
        const rows = ['row-underweight', 'row-normal', 'row-overweight', 'row-obese1', 'row-obese2', 'row-obese3'];
        rows.forEach(r => {
            const el = document.getElementById(r);
            if (el) {
                el.style.backgroundColor = '';
                el.style.fontWeight = '';
            }
        });

        // Highlight matching row
        const targetRow = document.getElementById(rowId);
        if (targetRow) {
            targetRow.style.backgroundColor = 'rgba(232, 162, 161, 0.2)';
            targetRow.style.fontWeight = '700';
        }
    }
}

// 4. INSTANTIATE APP GLOBAL INSTANCE ON DOCUMENT LOAD
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new App();
});
