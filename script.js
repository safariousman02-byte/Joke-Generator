
const joke  = document.getElementById('joke');
const btn  = document.getElementById('btn');

    function getJoke() {

        joke.textContent = 'Loading...';

        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(res => res.json())
            .then(data => {
                    joke.textContent = data.setup + ' - ' + data.punchline;
                })
            .catch(() => {
                    joke.textContent = 'Opps! Try again.';
                });
    }

    btn.onclick = getJoke;
    getJoke();

    document.getElementById('title').onclick = function() {
        this.style.color = this.style.color === 'blue' ? 'black' : 'blue';
    }