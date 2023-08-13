        // './IMG_1736.JPG',
        // './IMG_1733.JPG',
        // './IMG_1737.JPG',
        // './IMG_7242.JPG',
        // './IMG_7780.JPG',
        // './IMG_7791.JPG',
        // './IMG_7925.JPG',
        // './IMG_1739.JPG',
        // './IMG_1732.JPG'

document.addEventListener("DOMContentLoaded", function() {
    const images = [
        { src: './IMG_1736.JPG', desc: 'Elegant Gold Ring', price: '$150' },
        { src: './IMG_1733.JPG', desc: 'Silver Diamond Ring' },
        // ... other images
    ];

    const repoUrl = 'images/';
    const gallery = document.getElementById('image-gallery');
    const fragment = document.createDocumentFragment();

    images.forEach(image => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = repoUrl + image.src;
        img.alt = image.desc;
        img.loading = "lazy";

        const caption = document.createElement('p');
        caption.textContent = image.desc;

        div.appendChild(img);
        div.appendChild(caption);

        if (image.price) {
            const priceTag = document.createElement('span');
            priceTag.className = 'price-tag';
            priceTag.textContent = image.price;
            div.appendChild(priceTag);
        }

        fragment.appendChild(div);
    });

    gallery.appendChild(fragment);
});
