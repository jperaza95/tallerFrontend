fetch('https://dwallet.develotion.com/movimientos.php?idUsuario=3',{
    method: 'GET',
    headers:{
        'Content-Type': 'application/json',
        'apikey': 'c292fd03255d662ee68a219b98cd9d1e'
    }
})
.then(response => response.json())
.then(data => console.log(data));