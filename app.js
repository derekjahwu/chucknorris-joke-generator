document.getElementById('btn').addEventListener('click', () => {
    document.querySelector('.joke').innerHTML='';
    const joke = new jokesGen();

    const jokeDiv = document.createElement('div');
    jokeDiv.setAttribute('class', 'animate__animated animate__fadeInUp');

    joke.get('http://api.icndb.com/jokes/random')
    .then( data => jokeDiv.innerHTML = data.value.joke).catch(err => console.log(err));

    document.querySelector('.joke').appendChild(jokeDiv);

});







