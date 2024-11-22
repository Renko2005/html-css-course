document.getElementById('search-button').addEventListener('click', function () {
    const query = document.getElementById('search-input').value;
    if (query.trim() !== '') {
      const youtubeSearchURL = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
      window.location.href = youtubeSearchURL;
    } else {
      alert('Please enter a search query.');
    }
  });

  document.getElementById('search-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      document.getElementById('search-button').click();
    }
  });
  