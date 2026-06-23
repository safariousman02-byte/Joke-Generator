
const joke  = document.getElementById('joke');
const btn  = document.getElementById('btn');
const joke02 = document.getElementById('joke02');
const fact = document.getElementById('joke');

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

    function getJoke02() {

        joke02.innerHTML = 'The joke is about to come!..';

        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(res => res.json())
            .then(data => {

                    joke02.innerHTML = '" ' + data.setup + ' -- ' + data.punchline + ' "';
                })
            .catch(() => {

                    joke.innerHTML = 'No joke detected.';
                });
    }

    function getFact() {

        joke.textContent = 'Get ready for the new fact..';

        fetch('https://uselessfacts.jsph.pl/random.json?language=en')
            .then(res => res.json())
            .then(data => {
                    fact.textContent = ' Did you know that: ' + data.text;
                })
            .catch(() => {
                fact.textContent = 'Sorry! We failed to load the fact';
            });
    }

    btn.onclick = getJoke;

    btn.onclick = getJoke02;

    btn.onclick = getFact;

    getJoke();
    getJoke02();
    getFact();

    document.getElementById('title').onclick = function() {
        this.style.color = this.style.color === 'blue' ? 'black' : 'blue';
    }