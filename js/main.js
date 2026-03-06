// --- Data ---
const villas = [
    {
        id: 'villa-01',
        title: 'Villa 01 - The Grand Tropical',
        capacity: '50-60',
        type: 'Modern Estate',
        image: 'images/villa_01_exterior_1772800502157.png',
        images: ['images/media__1772800243898.jpg', 'images/media__1772800243954.jpg'],
        desc: 'මෙම නවාතැන අතිවිශාල පිරිසකට පහසුකම් සැලසීමට සමත්ය. විශාල බස් රථ 3ක් දක්වා ගාල් කිරීමේ පහසුකම් ඇත. නවීන අංගෝපාංග වලින් සමන්විත වන අතර, පිරිසිදු බව සහ ආරක්ෂාව ඉහළින්ම තහවුරු කර ඇත. විවේක ගැනීමට විශාල සාලයක් සහ එළිමහන් ප්‍රදේශයක් ඇත.',
        features: ['Bus Parking Available', 'Large Group Capacity', 'Modern Bathrooms', 'Safe & Secure', 'Open Garden', 'Driver Quarters']
    },
    {
        id: 'villa-02',
        title: 'Villa 02 - Traditional Courtyard',
        capacity: '40-50',
        type: 'Heritage House',
        image: 'images/villa_02_traditional_1772800653381.png',
        images: ['images/media__1772800245123.jpg', 'images/media__1772800245719.jpg'],
        desc: 'යාපනයේ සම්ප්‍රදායික ගෘහ නිර්මාණ ශිල්පය විදහා දක්වන මෙම නවාතැන, පවුල් කිහිපයක් හෝ විශාල කණ්ඩායමක් සඳහා කදිමයි. සුවිශාල මැද මිදුලක් සහ සිසිල් පරිසරයක් ඇත.',
        features: ['Traditional Design', 'Courtyard (මැද මිදුල)', 'Large Dining Area', 'Secure Parking', 'Peaceful Environment']
    },
    {
        id: 'villa-03',
        title: 'Villa 03 - Premium Guesthouse',
        capacity: '30-40',
        type: 'Two-Story Guesthouse',
        image: 'images/villa_03_guesthouse_1772800674790.png',
        images: ['images/media__1772800245808.jpg', 'images/villa_03_guesthouse_1772800674790.png'],
        desc: 'මහල් දෙකකින් සමන්විත මෙම අගනා නවාතැන, යාපනය නගරයට ආසන්නව පිහිටා ඇත. සුවපහසු විවේකයක් සදහා අවශ්‍ය සියලු පහසුකම් වලින් සමන්විතයි.',
        features: ['City Proximity', 'Two Stories', 'Air Conditioned Rooms', 'Ample Parking', 'Clean Facilities']
    },
    {
        id: 'villa-04',
        title: 'Villa 04 - Luxury Estate',
        capacity: '45-55',
        type: 'Luxury Compound',
        image: 'images/villa_04_luxury_1772800722372.png',
        images: ['images/villa_04_luxury_1772800722372.png', 'images/media__1772800243898.jpg'],
        desc: 'සුපෝපභෝගී අත්දැකීමක් සොයන සංචාරකයින් සඳහාම වෙන්වු නවාතැනක්. විශාල උද්‍යානයක් සහ නවීන පහසුකම් වලින් අනූනයි.',
        features: ['Luxury Amenities', 'Expansive Garden', 'Premium Bedding', 'Spacious Veranda', 'Bus Parking']
    },
    {
        id: 'villa-05',
        title: 'Villa 05 - Contemporary Stay',
        capacity: '35-45',
        type: 'Modern Home',
        image: 'images/villa_05_contemporary_1772800985828.png',
        images: ['images/villa_05_contemporary_1772800985828.png', 'images/media__1772800245123.jpg'],
        desc: 'නවීන පන්නයට ඉදිවුනු මෙම නිවස, පිරිසිදු සහ නිදහස් පරිසරයක් අපේක්ෂා කරන ඔබට කදිමයි. වාහන නැවත්වීමට විශාල ඉඩකඩක් ඇත.',
        features: ['Modern Build', 'Quiet Neighbourhood', 'Large Common Area', 'Secure Gates', 'Clean Water Facility']
    }
];

// --- Templates ---
const HomeTemplate = () => `
    <section class="hero" id="home">
        <div class="hero-bg">
            <img src="images/villa_01_exterior_1772800502157.png" alt="Jaffna Villa">
        </div>
        <div class="container hero-content">
            <h1 class="hero-title">යාපනයේ සංචාරය කරන ඔබට සුපිරි නවාතැන්</h1>
            <p class="hero-subtitle">ඔබගේ බස් රථයට අපහසුවකින් තොරව පැමිණිය හැකි, ආරක්ෂිත සහ සුවපහසු නවාතැන් පහසුකම්.</p>
            <div class="hero-cta">
                <a href="#villas" class="btn btn-primary">නවාතැන් බලන්න</a>
                <a href="tel:0782626277" class="btn" style="background: white; color: var(--secondary);"><i class="fa-solid fa-phone"></i> 0782626277</a>
            </div>
        </div>
    </section>

    <section class="features">
        <div class="container">
            <div class="text-center">
                <h2 class="section-title">අපව තෝරා ගැනීමට හේතු</h2>
                <p class="section-subtitle">සෑම නවාතැනක්ම ඔබගේ පහසුව වෙනුවෙන්ම සකසා ඇත.</p>
            </div>
            <div class="features-grid">
                <div class="feature-card">
                    <i class="fa-solid fa-bus feature-icon"></i>
                    <h3>බස් රථ ගාල් කිරීමේ පහසුකම්</h3>
                    <p>විශාල බස් රථ සදහාම වෙන්වූ සුරක්ෂිත රථ ගාල්.</p>
                </div>
                <div class="feature-card">
                    <i class="fa-solid fa-users feature-icon"></i>
                    <h3>විශාල පිරිසකට පහසුකම්</h3>
                    <p>ඔබගේ පිරිසේ ප්‍රමාණය අනුව නිවාස වෙනස් වේ.</p>
                </div>
                <div class="feature-card">
                    <i class="fa-solid fa-house-chimney feature-icon"></i>
                    <h3>පිරිසිදු සහ ආරක්ෂිත</h3>
                    <p>ඔබට නිදහසේ විවේක ගැනීමට සුදුසු, ආරක්ෂිත වටපිටාව.</p>
                </div>
                <div class="feature-card">
                    <i class="fa-solid fa-hand-holding-dollar feature-icon"></i>
                    <h3>සාධාරණ මිල ගණන්</h3>
                    <p>කිසිදු අතරමැදියෙකු නොමැතිව, සෘජු මිල ගණන්. අමතන්න 0782626277.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="villas" id="villas">
        <div class="container">
            <div class="text-center">
                <h2 class="section-title">අපගේ නවාතැන්</h2>
                <p class="section-subtitle">ඔබගේ අවශ්‍යතාවය අනුව ඔබට ගැලපෙන නවාතැන තෝරාගන්න.</p>
            </div>
            <div class="villa-grid">
                ${villas.map(v => `
                    <div class="villa-card" onclick="navigateTo('${v.id}')">
                        <div class="villa-img-wrapper">
                            <span class="villa-badge">${v.type}</span>
                            <img src="${v.image}" alt="${v.title}">
                        </div>
                        <div class="villa-content">
                            <h3 class="villa-title">${v.title}</h3>
                            <div class="villa-specs">
                                <span><i class="fa-solid fa-users"></i> ${v.capacity} දෙනෙකුට</span>
                                <span><i class="fa-solid fa-bus"></i> Parking</span>
                            </div>
                            <div class="villa-footer">
                                <span class="villa-price">මිල ගණන් සඳහා අමතන්න</span>
                                <span class="btn" style="padding: 6px 16px; background: rgba(255,123,0,0.1); color: var(--primary);">බලන්න <i class="fa-solid fa-arrow-right"></i></span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
`;

const VillaTemplate = (villa) => `
    <div class="villa-detail">
        <div class="container">
            <a href="#" class="back-btn"><i class="fa-solid fa-arrow-left"></i> ආපසු මුල් පිටුවට</a>
            
            <div class="villa-header">
                <h1>${villa.title}</h1>
                <div class="villa-specs" style="font-size: 1rem;">
                    <span><i class="fa-solid fa-users"></i> Capacity: ${villa.capacity} People</span>
                    <span><i class="fa-solid fa-house"></i> ${villa.type}</span>
                </div>
            </div>

            <div class="villa-gallery">
                <div class="gallery-main">
                    <img src="${villa.image}" alt="Main Image">
                </div>
                <div class="gallery-side">
                    <img src="${villa.images[0] || villa.image}" alt="Interior 1">
                    <img src="${villa.images[1] || villa.image}" alt="Interior 2">
                </div>
            </div>

            <div class="villa-info-grid">
                <div>
                    <div class="villa-description">
                        <h2>විස්තරය</h2>
                        <p>${villa.desc}</p>
                    </div>

                    <div style="margin-top: 3rem;">
                        <h2>පහසුකම්</h2>
                        <ul class="villa-features-list">
                            ${villa.features.map(f => `<li><i class="fa-solid fa-check-circle"></i> ${f}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <div>
                    <div class="booking-card">
                        <h3>මිල ගණන් සහ වෙන්කරවා ගැනීම්</h3>
                        <p>මෙම නවාතැන වෙන්කරවා ගැනීම සඳහා සහ ඔබගේ පිරිසට සරිලන පරිදි මිල ගණන් කතා කරගැනීමට කරුණාකර පහත දුරකථන අංකයට අමතන්න.</p>
                        
                        <div class="price-note">
                            <i class="fa-solid fa-circle-info"></i> පිරිස අනුව සහ දින ගණන අනුව මිල ගණන් වෙනස් වේ. කිසිදු මුදල් ගෙවීමක් අන්තර්ජාලය හරහා සිදු නොකෙරේ.
                        </div>

                        <a href="tel:0782626277" class="phone-huge">0782626277</a>
                        <a href="tel:0782626277" class="btn btn-primary" style="width: 100%;"><i class="fa-solid fa-phone-volume"></i> දැන්ම අමතන්න</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;


// --- Router ---
const root = document.getElementById('app-root');

function renderPage() {
    const hash = window.location.hash.slice(1);
    
    // Scroll to top on route change
    window.scrollTo(0, 0);

    if (!hash || hash === '' || hash === 'home' || hash === 'villas' || hash === 'contact') {
        root.innerHTML = HomeTemplate();
        // If navigating to a section within home, scroll after render
        if(hash === 'villas' || hash === 'contact') {
             setTimeout(() => {
                 const el = document.getElementById(hash);
                 if(el) el.scrollIntoView({ behavior: 'smooth' });
             }, 100);
        }
    } else {
        const villa = villas.find(v => v.id === hash);
        if (villa) {
            root.innerHTML = VillaTemplate(villa);
        } else {
             root.innerHTML = `<div class="container" style="padding: 100px 0; text-align: center;"><h1>Page Not Found</h1><a href="#" class="btn btn-primary">Go Home</a></div>`;
        }
    }
}

// Ensure navigate function is global for inline onclick
window.navigateTo = (hash) => {
    window.location.hash = hash;
};

// Listen to Hash Changes
window.addEventListener('hashchange', renderPage);

// Initial Render
renderPage();

// Mobile Menu Placeholder Logic
document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
    alert('Mobile menu clicked. (Will toggle a class in full version)');
});
