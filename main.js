window.onload = function() {
  const imageUrls = [
    'https://share.icloud.com/photos/036hh6wr6ogc7Vq4udy9qaY3Q',
    'https://share.icloud.com/photos/08elx3YyBSn8thl0QmDyBpvXw',
    'https://share.icloud.com/photos/0042IMFPQkE9VSp6VTM12Eugw',
    'https://share.icloud.com/photos/001FmV3IfjnDJPRLxk5H8w6uw',
    'https://share.icloud.com/photos/00bmipjQ-0F3QMgykXVqu-vMA',
    'https://share.icloud.com/photos/029g9PjTUEijObZurh0BBZjEg',
    'https://share.icloud.com/photos/09558R5pLgiuO5JX7RKJyUThw',

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
