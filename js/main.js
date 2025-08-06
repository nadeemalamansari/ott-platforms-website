// Data for OTT platforms
const platforms = [
    {
        name: 'Netflix',
        logo: 'https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png',
        description: 'Netflix offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
        featured: [
            { title: 'Stranger Things', image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c442f8f5-9c91-49ce-9995-6bf93305c73f/dbi5n9z-a55ea10c-1888-482c-9b3f-a123b8334ceb.jpg/v1/fill/w_1024,h_576,q_75,strp/stranger_things_cast_wallpaper_04_by_happinessismusic_dbi5n9z-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvYzQ0MmY4ZjUtOWM5MS00OWNlLTk5OTUtNmJmOTMzMDVjNzNmXC9kYmk1bjl6LWE1NWVhMTBjLTE4ODgtNDgyYy05YjNmLWExMjNiODMzNGNlYi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.GJ7L4LxnZIhI8NHTOycTf372IFo1NhcQICGGbuw85Yw' },
            { title: 'The Witcher', image: 'https://images6.fanpop.com/image/photos/42800000/The-Witcher-Season-1-Poster-Henry-Cavill-as-Geralt-of-Rivia-the-witcher-netflix-42889136-1080-1080.jpg' },
            { title: 'Money Heist', image: 'https://tse4.mm.bing.net/th/id/OIP.FH03Ex_NoVV8OgRZHiXqCQHaLH?r=0&w=1000&h=1500&rs=1&pid=ImgDetMain&o=7&rm=3' },
            { title: 'Bridgerton', image: 'https://tse4.mm.bing.net/th/id/OIP.SuNs0hIjj2LG75J7DjCvKgHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' }
        ],
        price: '$15.49/month'
},
{
    name: 'Amazon Prime Video',
    logo: 'https://m.media-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light._CB430401866_.png',
    description: 'Stream popular movies, TV shows, award-winning Amazon Originals, and live events—all included with your Prime membership.',
    featured: [
        { title: 'The Boys', image: 'https://image.tmdb.org/t/p/original/eGhQmeTA6XnUiwFGfj3mfew9uWe.jpg' },
        { title: 'The Marvelous Mrs. Maisel', image: 'https://tse2.mm.bing.net/th/id/OIP.NhjOVfXzdUyaX1nJn_bCmgHaEd?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
        { title: 'Jack Ryan', image: 'https://tse2.mm.bing.net/th/id/OIP.n-NP_FwJAepLKXSAHmpkCQHaFD?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
        { title: 'Invincible', image: 'https://images.thedirect.com/media/article_full/invincible-season-2-release-date.jpg' }
    ],
    price: '$8.99/month'
},

{
    name: 'Disney+',
        logo: 'https://static-assets.bamgrid.com/product/disneyplus/images/logo.svg',
        description: 'Disney+ brings you the best of Disney, Pixar, Marvel, Star Wars, and National Geographic, all in one place.',
        featured: [
            { title: 'The Mandalorian', image: 'https://images.thedirect.com/media/article_full/invincible-season-2-release-date.jpg' },
            { title: 'Loki', image: 'https://tse2.mm.bing.net/th/id/OIP.JoeSrfNIN2WXAC9hD53mHQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
            { title: 'WandaVision', image: 'https://tse3.mm.bing.net/th/id/OIP.N1M8viHCIF23R2AlqRuS0AHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
            { title: 'Frozen II', image: 'https://tse4.mm.bing.net/th/id/OIP.5BnNNo6ab1-9ETZOCia8KAHaKl?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' }
        ],
        price: '$7.99/month'
    }
];

// Render platform cards
document.addEventListener('DOMContentLoaded', () => {
    const platformsContainer = document.querySelector('.platforms-cards');
    const pricingContainer = document.querySelector('.pricing-cards');

    platforms.forEach(platform => {
        // Platform Card
        const card = document.createElement('div');
        card.className = 'platform-card';
        card.innerHTML = `
            <img src="${platform.logo}" alt="${platform.name} Logo" class="platform-logo">
            <h3>${platform.name}</h3>
            <p>${platform.description}</p>
            <ul class="featured-list">
                ${platform.featured.map(show => `<li><img src="${show.image}" alt="${show.title}" style="width:32px;height:32px;vertical-align:middle;margin-right:8px;border-radius:4px;">${show.title}</li>`).join('')}
            </ul>
        `;
        platformsContainer.appendChild(card);

        // Pricing Card
        const priceCard = document.createElement('div');
        priceCard.className = 'pricing-card';
        priceCard.innerHTML = `
            <h3>${platform.name}</h3>
            <p><strong>${platform.price}</strong></p>
        `;
        pricingContainer.appendChild(priceCard);
    });

    // Navigation toggle for mobile
    const navToggle = document.getElementById('nav-toggle');
    const navUl = document.querySelector('nav ul');
    navToggle.addEventListener('click', () => {
        navUl.classList.toggle('active');
    });

    // Contact form validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        if (name && email) {
            alert('Thank you for contacting/subscribing!');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});
