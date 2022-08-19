const getYd = () => {
    const id= document.getElementById('idProd').value
    fetch(`http://localhost:8080/api/productos/${id}`)
        .then(data => {
            window.location.replace(data.url);;
        })
        .then(post => {
            console.log(post.title);
        });
};
const method = {
    method: 'DELETE'
}
const delYd = () => {
    const id= document.getElementById('deletId').value
    fetch(`http://localhost:8080/api/productos/${id}`, method,)
        .then(data => {
            window.location.replace(data.url);;
        })
        .then(post => {
            console.log(post.title);
        });
};

const getCarro = () => {
    const id= document.getElementById('idCarro').value
    fetch(`http://localhost:8080/api/carrito/${id}/productos`,)
        .then(data => {
            window.location.replace(data.url);;
        })
        .then(post => {
            console.log(post.title);
        });
};
const delProd = () => {
    const id= document.getElementById('deletProd').value;
    const prod= document.getElementById('prod').value
    fetch(`http://localhost:8080/api/carrito/${id}/prods/${prod}`, method,)
        .then(data => {
            window.location.replace(data.url);;
        })
        .then(post => {
            console.log(post.title);
        });
};