window.onload = function() {
  const imageUrls = [
    'https://github.com/AthP2121/AthP2121.github.io/blob/main/IMG_1736.JPG',
    'https://github.com/AthP2121/AthP2121.github.io/blob/main/IMG_1737.JPG',
    'https://github.com/AthP2121/AthP2121.github.io/blob/main/IMG_7242.JPG',
    'https://github.com/AthP2121/AthP2121.github.io/blob/main/IMG_7780.JPG',
    'https://github.com/AthP2121/AthP2121.github.io/blob/main/IMG_7791.JPG',
    'https://github.com/AthP2121/AthP2121.github.io/blob/main/IMG_7925.JPG',
    'https://github.com/AthP2121/AthP2121.github.io/blob/main/IMG_1739.JPG',
    'https://github.com/AthP2121/AthP2121.github.io/blob/main/IMG_1732.JPG',

    // add more URLs as needed
  ];

  const feed = document.getElementById('instagram-feed');
  imageUrls.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    img.style.width = window.innerWidth < 900 ? '100%' : 'calc(50% - 40px)';
    img.onclick = function() { window.location.href = url; };
    feed.appendChild(img);
  });
}

window.onresize = function() {
  const images = document.querySelectorAll('#instagram-feed img');
  images.forEach(img => {
    img.style.width = window.innerWidth < 900 ? '100%' : 'calc(50% - 40px)';
  });
}
