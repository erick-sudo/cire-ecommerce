fetch("http://localhost:8000/products")
.then( res => res.json())
.then( res => {
    res.forEach(product => {
        fetch(`http://localhost:8000/products/${product.id}`,{
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                thumbnails: Array(randomNumber()).fill(product.image)
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.thumbnails)
        })
    })
})


function randomNumber() {
    return 5+ Math.floor(Math.random()*10)%6
}
