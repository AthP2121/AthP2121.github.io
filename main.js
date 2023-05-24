window.onload = function() {
  const imageNames = [
    'IMG_1736.JPG',
    './IMG_1736.JPG',
    './IMG_1737.JPG',
    './IMG_7242.JPG',
    './IMG_7780.JPG',
    './IMG_7791.JPG',
    './IMG_7925.JPG',
    './IMG_1739.JPG',
    './IMG_1732.JPG',
    // add more filenames as needed
  ];

  const repoUrl = 'https://raw.githubusercontent.com/YourGithubUsername/AthP2121.github.io/main/';

  const feed = document.getElementById('instagram-feed');
  imageNames.forEach(name => {
    const img = document.createElement('img');
    img.src = repoUrl + name;
    img.style.width = window.innerWidth < 900 ? '100%' : 'calc(50% - 40px)';
    feed.appendChild(img);
  });
}

window.onresize = function() {
  const images = document.querySelectorAll('#instagram-feed img');
  images.forEach(img => {
    img.style.width = window.innerWidth < 900 ? '100%' : 'calc(50% - 40px)';
  });
}

