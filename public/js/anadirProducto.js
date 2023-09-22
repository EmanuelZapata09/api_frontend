const url = 'https://api-productos3.onrender.com/api/producto'

const registrar = async () => {

  let _id_producto = document.getElementById("id_producto").value;
  let _precio_compra = document.getElementById("precio_compra").value;
  let _cantidad = document.getElementById("cantidad").value;
  let _estado = document.getElementById("estado").value;
  let _nombre_producto = document.getElementById("nombre_producto").value;
  let _precio_venta = document.getElementById("precio_venta").value;
  let _stockMinimo = document.getElementById("stockMinimo").value;
  let _stockMaximo = document.getElementById("stockMaximo").value;

  let expRegNom = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}?$/;

  let verificarNombreP = expRegNom.test(nombre_producto);

  if (
    _id_producto == "" ||
    _precio_compra == "" ||
    _cantidad == "" ||
    _estado == "" ||
    _nombre_producto == "" ||
    _precio_venta == "" ||
    _stockMinimo == "" ||
    _stockMaximo == ""
  ) {
    Swal.fire("No se permiten campos vacios");
  } else {
    if (verificarNombreP) {
      let producto = {
        id_producto: _id_producto,
        precio_compra: _precio_compra,
        cantidad: _cantidad,
        estado: _estado,
        nombre_producto: _nombre_producto,
        precio_venta: _precio_venta,
        stockMinimo: _stockMinimo,
        stockMaximo: _stockMaximo
      }

      fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(producto),//Convertir el objeto _usuario  a un JSON
        headers: { "Content-type": "application/json; charset=UTF-8" }
      })
        .then((resp) => resp.json()) //Obtener la respuesta y convertirla a json
        .then(json => {
          //alert(json.msg)//Mensaje que retorna la API
          console.log(json)
          if (json.msg) {
            Swal.fire({
              icon: "success",
              title: "Producto registrado con exito",
              showConfirmButton: false,
            });
            setTimeout(() => {
              window.location.replace("/productos");
            }, 2000);
          }
        })
    }
  } else {
    Swal.fire("No se permiten caracteres especiales");
  }

}



if(document.querySelector('#btnRegistrar') !== null) {
  document.querySelector('#btnRegistrar')
  .addEventListener('click',()=>{
    alert("Regist")
  })
}


