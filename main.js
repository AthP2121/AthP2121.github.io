window.onload = function() {
  const imageNames = [
    './IMG_1736.JPG',
    './IMG_1733.JPG',
    './IMG_1737.JPG',
    './IMG_7242.JPG',
    './IMG_7780.JPG',
    './IMG_7791.JPG',
    './IMG_7925.JPG',
    './IMG_1739.JPG',
    './IMG_1732.JPG',
    // add more filenames as needed
  ];

  const repoUrl = 'images/';

  const gallery = document.getElementById('image-gallery');
  imageNames.forEach(name => {
    const img = document.createElement('img');
    img.src = repoUrl + name;
    img.className = "gallery-item";
    gallery.appendChild(img);
  });
}
