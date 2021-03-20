document.getElementById('btn').addEventListener('click', () => {
    document.querySelector('.joke').innerHTML='';
    const joke = new jokesGen();

    const jokeDiv = document.createElement('div');
    jokeDiv.setAttribute('class', 'animate__animated animate__fadeInUp');


    // const tl = new TimelineMax();

    joke.get('http://api.icndb.com/jokes/random')
    .then( data => jokeDiv.innerHTML = data.value.joke).catch(err => console.log(err));

    document.querySelector('.joke').appendChild(jokeDiv);

    
});

document.getElementById('clear').addEventListener('click', () => {
    document.querySelector('.joke').innerHTML = '';
})







//Get jokes
// joke.get('http://api.icndb.com/jokes/random', function(err, response) {
//     if(err) {
//         console.log(err);
//     } else {
//         const output = JSON.parse(response)
//         document.body.innerHTML = output.value.joke;
//     }
// });


//GET jokes with Async method
//will also work with Promises




