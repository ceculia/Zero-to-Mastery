document.getElementById("getPlanets").addEventListener('click', function(){
    let randomNum = Math.floor((Math.random() * 88) + 1)
fetch('https://swapi.co/api/people/' + randomNum).then((res) =>res.json())
.then((data) => {
   
    document.getElementById('output').innerHTML = data.name
})
});

document.getElementById("getPosts").addEventListener('click', function(){
    let randomNum = Math.floor((Math.random() * 88) + 1)
    fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>res.json())
    .then((data) => {
        let output = '<h2>Posts</h2>'
        data.forEach(function(posts){
            output += `
            <ul>
            <li>${posts.title}</li>
            <li> ${posts.body}</li>
            </ul>`
    
        })
        document.getElementById('output').innerHTML = output
    })
    });

