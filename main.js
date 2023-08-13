document.addEventListener("DOMContentLoaded", function() {
    const imageNames = [
        './IMG_1736.JPG',
        './IMG_1733.JPG',
        './IMG_1737.JPG',
        './IMG_7242.JPG',
        './IMG_7780.JPG',
        './IMG_7791.JPG',
        './IMG_7925.JPG',
        './IMG_1739.JPG',
        './IMG_1732.JPG'
    ];

    const repoUrl = 'images/';
    const gallery = document.getElementById('image-gallery');
    const fragment = document.createDocumentFragment();

    imageNames.forEach(name => {
        const img = document.createElement('img');
        img.src = repoUrl + name;
        img.alt = `Gallery image - ${name.split('/').pop().split('.')[0]}`;  // This adds a prefix "Gallery image -" before the filename as the alt text.
        img.className = "gallery-item";
        img.loading = "lazy";  // Enable lazy loading
        img.onerror = function() {
            img.src = 'path_to_placeholder_image.jpg';
            img.alt = 'Placeholder image';
        };

        fragment.appendChild(img);
    });

    gallery.appendChild(fragment);
});
