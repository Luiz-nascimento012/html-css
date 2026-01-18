 var bota = document.querySelector('#bota');
        var container = document.querySelector('.container');

        bota.addEventListener('click', sumir);

        function sumir() {
            if (container.style.display === 'block') {
                container.style.display = 'none';
            } else {
                container.style.display = 'block';
            }
        }
