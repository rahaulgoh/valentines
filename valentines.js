function createFloatingHearts() {
            const container = document.getElementById('heartsBg');
            const hearts = ['♥', '♡', '❤', '💕'];
            
            for (let i = 0; i < 15; i++) {
                const heart = document.createElement('span');
                heart.className = 'floating-heart';
                heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = Math.random() * 100 + '%';
                heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
                heart.style.animationDelay = Math.random() * 5 + 's';
                heart.style.color = `hsl(${350 + Math.random() * 20}, 80%, ${70 + Math.random() * 20}%)`;
                container.appendChild(heart);
            }
        }

        createFloatingHearts();

        // Open envelope animation
        function openEnvelope() {
            const envelope = document.getElementById('envelope');
            const overlay = document.getElementById('overlay');
            const letterContainer = document.getElementById('letterContainer');
            
            if (!envelope.classList.contains('opened')) {
                envelope.classList.add('opened');
                
                // Show letter after envelope opens
                setTimeout(() => {
                    overlay.classList.add('visible');
                    letterContainer.classList.add('visible');
                }, 600);
            }
        }

        // Show gallery
        function showGallery() {
            const overlay = document.getElementById('overlay');
            const letterContainer = document.getElementById('letterContainer');
            const gallery = document.getElementById('gallery');
            
            overlay.classList.remove('visible');
            letterContainer.classList.remove('visible');
            
            setTimeout(() => {
                gallery.classList.add('visible');
            }, 300);
        }

        // Close letter when clicking overlay
        document.getElementById('overlay').addEventListener('click', function(e) {
            if (e.target === this) {
                const overlay = document.getElementById('overlay');
                const letterContainer = document.getElementById('letterContainer');
                overlay.classList.remove('visible');
                letterContainer.classList.remove('visible');
            }
        });