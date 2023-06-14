    //audio
    var audio = new Audio('assets/sounds/music.mp3');
    var isPlaying = false;

    function toggleMusic() {
      if (isPlaying) {
        audio.pause();
        isPlaying = false;
      } else {
        audio.play();
        isPlaying = true;
      }
    }

    //page indicator
    var indicator = document.getElementById('page-indicator');
    var sections = document.querySelectorAll('section');
    var totalPages = sections.length;

    // Function to update the page indicator based on scrolling
    function updatePageIndicator() {
      var currentPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

      var currentPage = 0;
      for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;

        if (currentPosition >= sectionTop && currentPosition < sectionTop + sectionHeight) {
          currentPage = i + 1;
          break;
        }
      }

      indicator.textContent = currentPage + '/' + totalPages;
    }

    // Event listener for scroll events
    window.addEventListener('scroll', updatePageIndicator);

    // Initial update of the page indicator
    updatePageIndicator();