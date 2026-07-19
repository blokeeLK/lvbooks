const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace CSS
html = html.replace('.players-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; margin-top: 48px; }', 
  '.audio-carousel-wrapper { max-width: 450px; width: 92%; margin: 48px auto 0; overflow: hidden; position: relative; }' + '\n' +
  '.audio-carousel-inner { display: flex; transition: transform 0.4s ease; width: 100%; }' + '\n' +
  '.audio-slide { flex: 0 0 100%; width: 100%; padding: 10px; box-sizing: border-box; }' + '\n' +
  '.audio-carousel-controls { display: flex; align-items: center; justify-content: center; gap: 20px; margin-top: 10px; }' + '\n' +
  '.ac-btn { width: 42px; height: 42px; border-radius: 50%; background: #fff; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--black); transition: all 0.2s; }' + '\n' +
  '.ac-btn svg { width: 24px; height: 24px; fill: currentColor; }' + '\n' +
  '.ac-btn:disabled { opacity: 0.3; cursor: not-allowed; }' + '\n' +
  '.ac-btn:not(:disabled):hover { background: var(--bg-alt); }' + '\n' +
  '.ac-dots { display: flex; gap: 8px; }' + '\n' +
  '.ac-dot { width: 8px; height: 8px; border-radius: 50%; background: #ccc; transition: 0.3s; }' + '\n' +
  '.ac-dot.active { background: var(--black); transform: scale(1.2); }'
);
html = html.replace('@media (max-width: 992px) { .players-grid { grid-template-columns: 1fr; max-width: 600px; margin-left: auto; margin-right: auto; } }', '');

// Replace HTML structure for players
const oldGridStart = '<div class="players-grid">';
const gridEndMarker = '      </div>\n    </div>\n  </div>\n</section>';
const oldGridEnd = '</div>\n    </div>'; // Will just replace the string

let playersHTML = `
    <!-- NOVO CARROSSEL -->
    <div class="audio-carousel-wrapper">
      <div class="audio-carousel-inner" id="audioCarouselInner">
        
        <!-- Player 1 -->
        <div class="audio-slide">
          <div class="audio-player">
            <div class="player-cover-large">
              <img src="https://m.media-amazon.com/images/I/81WzW3xJb5L._AC_UF1000,1000_QL80_.jpg" alt="Os Segredos da Mente Milionária" />
            </div>
            <div class="player-title">Os Segredos da Mente Milionária</div>
            <div class="player-cat">T. Harv Eker</div>

            <audio id="audio1" preload="metadata">
              <source src="https://pub-82b93465ca7e43e7b6c625482bad2bac.r2.dev/mente-milionaria.mp3" type="audio/mpeg">
            </audio>

            <div class="player-inner-box">
              <div class="player-inner-top">
                <button class="play-btn" id="playBtn1" onclick="togglePlay(1)" aria-label="Play/Pause">
                  <svg id="playIcon1" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </button>
                
                <div class="player-inner-meta">
                  <div class="player-inner-text">
                    <div class="player-inner-title">Trecho de Os Segre...</div>
                    <div class="player-inner-author">T. Harv Eker</div>
                  </div>
                  <div class="time-display" id="time1">0:00 / 0:00</div>
                  
                  <div class="speed-btns">
                    <button class="speed-btn active" onclick="setSpeed(1,1,this)">1x</button>
                  </div>

                  <div class="volume-wrap">
                    <span class="volume-icon">🔊</span>
                    <input type="range" class="volume-slider" min="0" max="1" step="0.01" value="1" oninput="setVolume(1,this.value)" />
                  </div>
                </div>
              </div>
              
              <div class="progress-wrap" id="progress1" onclick="seekAudio(event,1)">
                <div class="progress-bar" id="bar1"></div>
                <div class="progress-thumb" id="thumb1"></div>
              </div>
              
              <div class="player-promo-text">Conteúdo promocional • Ouça o livro completo no app</div>
            </div>
            <div class="player-footer-text">Ouça alguns minutos gratuitos sem sair desta página.</div>
          </div>
        </div>

        <!-- Player 2 -->
        <div class="audio-slide">
          <div class="audio-player">
            <div class="player-cover-large">
              <img src="https://seborsraridades.com.br/wp-content/uploads/2025/03/as-48-leis-do-poder-capa-dura-2021.jpg" alt="As 48 Leis do Poder" />
            </div>
            <div class="player-title">As 48 Leis do Poder</div>
            <div class="player-cat">Robert Greene</div>

            <audio id="audio2" preload="metadata">
              <source src="https://pub-82b93465ca7e43e7b6c625482bad2bac.r2.dev/48-leis-do-poder.mp3" type="audio/mpeg">
            </audio>

            <div class="player-inner-box">
              <div class="player-inner-top">
                <button class="play-btn" id="playBtn2" onclick="togglePlay(2)" aria-label="Play/Pause">
                  <svg id="playIcon2" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </button>
                
                <div class="player-inner-meta">
                  <div class="player-inner-text">
                    <div class="player-inner-title">Trecho de As 48 L...</div>
                    <div class="player-inner-author">Robert Greene</div>
                  </div>
                  <div class="time-display" id="time2">0:00 / 0:00</div>
                  
                  <div class="speed-btns">
                    <button class="speed-btn active" onclick="setSpeed(2,1,this)">1x</button>
                  </div>

                  <div class="volume-wrap">
                    <span class="volume-icon">🔊</span>
                    <input type="range" class="volume-slider" min="0" max="1" step="0.01" value="1" oninput="setVolume(2,this.value)" />
                  </div>
                </div>
              </div>
              
              <div class="progress-wrap" id="progress2" onclick="seekAudio(event,2)">
                <div class="progress-bar" id="bar2"></div>
                <div class="progress-thumb" id="thumb2"></div>
              </div>
              
              <div class="player-promo-text">Conteúdo promocional • Ouça o livro completo no app</div>
            </div>
            <div class="player-footer-text">Ouça alguns minutos gratuitos sem sair desta página.</div>
          </div>
        </div>

      </div>
    </div>
    
    <div class="audio-carousel-controls">
       <button class="ac-btn" id="acPrev" aria-label="Anterior" disabled><svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg></button>
       <div class="ac-dots" id="acDots">
         <span class="ac-dot active"></span>
         <span class="ac-dot"></span>
       </div>
       <button class="ac-btn" id="acNext" aria-label="Próximo"><svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg></button>
    </div>
`;

// Replace the entire block from <div class="players-grid"> to the end of section
let startIdx = html.indexOf('<div class="players-grid">');
let endIdx = html.indexOf('</section>', startIdx);
let newSectionInner = html.substring(0, startIdx) + playersHTML + '\n  </div>\n' + html.substring(endIdx);
html = newSectionInner;

// Inject the JavaScript
const carouselJS = `
<!-- Audio Carousel -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  var inner = document.getElementById('audioCarouselInner');
  var prevBtn = document.getElementById('acPrev');
  var nextBtn = document.getElementById('acNext');
  var dots = document.querySelectorAll('.ac-dot');
  var currentIndex = 0;
  var totalSlides = 2;

  function updateCarousel() {
    inner.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === totalSlides - 1;
    
    dots.forEach(function(dot, idx) {
      if (idx === currentIndex) dot.classList.add('active');
      else dot.classList.remove('active');
    });

    [1, 2].forEach(function(id) {
      var audio = document.getElementById('audio' + id);
      if(audio && !audio.paused) {
        audio.pause();
      }
    });
  }

  prevBtn.addEventListener('click', function() {
    if(currentIndex > 0) { currentIndex--; updateCarousel(); }
  });
  nextBtn.addEventListener('click', function() {
    if(currentIndex < totalSlides - 1) { currentIndex++; updateCarousel(); }
  });

  var startX = 0;
  var isDragging = false;

  inner.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
    isDragging = true;
    inner.style.transition = 'none';
  }, {passive: true});

  inner.addEventListener('touchmove', function(e) {
    if(!isDragging) return;
    var currentX = e.touches[0].clientX;
    var diff = currentX - startX;
    var baseTranslate = -currentIndex * inner.offsetWidth;
    inner.style.transform = 'translateX(' + (baseTranslate + diff) + 'px)';
  }, {passive: true});

  inner.addEventListener('touchend', function(e) {
    isDragging = false;
    inner.style.transition = 'transform 0.4s ease';
    var endX = e.changedTouches[0].clientX;
    var diff = endX - startX;
    
    if (diff < -50 && currentIndex < totalSlides - 1) {
      currentIndex++;
    } else if (diff > 50 && currentIndex > 0) {
      currentIndex--;
    }
    updateCarousel();
  });
});
</script>
`;

html = html.replace('</body>', carouselJS + '\n</body>');

fs.writeFileSync('index.html', html);
console.log('Updated index.html successfully!');
