/*fetch('https://dwallet.develotion.com/movimientos.php?idUsuario=3',{
    method: 'GET',
    headers:{
        'Content-Type': 'application/json',
        'apikey': 'c292fd03255d662ee68a219b98cd9d1e'
    }
})
.then(response => response.json())
.then(data => console.log(data));
*/

fetch('https://dwallet.develotion.com/usuarios.php',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "usuario": 'julio',
        "password": '1234',
        "idDepartamento":3204,
        "idCiudad": 34
      })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => {
    console.error('Error:', error);
  });
