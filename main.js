// window.onload = function() {
//     fetch('https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=IGQVJWeUgyamd0ZADBNRDhXU3dRX3NYbWJrM2s5T0VVa2o0YnU4Q0puZAHJmbUp3cTRNN184dkxrSWVMckt3QmNJME13MXdMNHNkZA1FsQUtLY084MzBRNGN1T1FFSFdNMF8yRk9wXzU3dk5EZAUVpRHJDRAZDZD')
//     .then(response => response.json())
//     .then(data => {
//         const feed = document.getElementById('instagram-feed');
//         data.data.forEach(item => {
//             const img = document.createElement('img');
//             img.src = item.media_url;
//             img.alt = item.caption;
//             img.onclick = function() { window.location.href = item.permalink; };
//             feed.appendChild(img);
//         });
//     })
//     .catch(error => console.error('Error:', error));
// }
window.onload = function() {
    fetch('https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=IGQVJWeUgyamd0ZADBNRDhXU3dRX3NYbWJrM2s5T0VVa2o0YnU4Q0puZAHJmbUp3cTRNN184dkxrSWVMckt3QmNJME13MXdMNHNkZA1FsQUtLY084MzBRNGN1T1FFSFdNMF8yRk9wXzU3dk5EZAUVpRHJDRAZDZD')
      .then(response => response.json())
      .then(data => {
        const feed = document.getElementById('instagram-feed');
        data.data.forEach(item => {
        if (item.media_type === 'IMAGE') {  // This line ensures only image types are processed.
            const img = document.createElement('img');
            img.src = item.media_url;
            img.alt = item.caption;
            img.style.width = window.innerWidth < 900 ? '100%' : 'calc(50% - 40px)'; // Adjust the size here based on window size
            img.onclick = function() { window.location.href = item.permalink; };
            feed.appendChild(img);
          }
        });
      })
      .catch(error => console.error('Error:', error));
  }
  
  window.onresize = function() {
    const images = document.querySelectorAll('#instagram-feed img');
    images.forEach(img => {
      img.style.width = window.innerWidth < 900 ? '100%' : 'calc(50% - 40px)'; // Adjust the size here based on window size
    });
  }
  
// window.onload = function() {
//     fetch('https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=IGQVJWeUgyamd0ZADBNRDhXU3dRX3NYbWJrM2s5T0VVa2o0YnU4Q0puZAHJmbUp3cTRNN184dkxrSWVMckt3QmNJME13MXdMNHNkZA1FsQUtLY084MzBRNGN1T1FFSFdNMF8yRk9wXzU3dk5EZAUVpRHJDRAZDZD')
//       .then(response => response.json())
//       .then(data => {
//         const feed = document.getElementById('instagram-feed');
//         data.data.forEach(item => {
//           const img = document.createElement('img');
//           img.src = item.media_url;
//           img.alt = item.caption;
//           img.style.width = window.innerWidth < 900 ? '100%' : 'calc(50% - 40px)'; // Adjust the size here based on window size
//           img.onclick = function() { window.location.href = item.permalink; };
//           feed.appendChild(img);
//         });
//       })
//       .catch(error => console.error('Error:', error));
  
//   window.onresize = function() {
//     const images = document.querySelectorAll('#instagram-feed img');
//     images.forEach(img => {
//       img.style.width = window.innerWidth < 900 ? '100%' : 'calc(50% - 40px)'; // Adjust the size here based on window size
//     });
//   }
  