function enviar_formulario(){
  var nombre = document.getElementById('nombre').value;
  var tel = document.getElementById('tel').value;
  var dir = document.getElementById('dir').value;

  //Añadir la información del input text a un texto -> document.getElementById('nombre1').innerHTML = nombre;

  //Guardar datos en el localStorage

  // Opción 1 ->  localStorage.setItem(name, content)
  // Opción 2 ->  localStorage.name = content
  // name = nombre del elemento
  // content = Contenido del elemento


  if(nombre == "" && tel == "" && dir == ""){
    alert('No hay datos.');
  }else{
    if(nombre == "" || tel == "" || dir == ""){
      alert('Todos los campos son obligatorios.');
    }else{
      //ingresar datos al localStorage
      localStorage.nom = nombre
      localStorage.tel = tel
      localStorage.dir = dir

      document.form1.nombre.value = "";
      document.form1.dir.value = "";
      document.form1.tel.value = "";

      //Obtener datos del localStorage
      // Opción 1 -> localStorage.getItem(name, content)
      // Opción 2 -> localStorage.name
      alert('El contacto '+localStorage.nom+' se creó.');

    }
  }
}

function limpiar(){
  document.getElementById('nombre').value = "";
  document.getElementById('tel').value = "";
  document.getElementById('dir').value = "";
}

function buscar_p(){
  var busqueda = document.getElementById('busqueda').value;
  if(busqueda == localStorage.nom){
    document.form1.nombre.value = localStorage.nom;
    document.form1.dir.value = localStorage.dir;
    document.form1.tel.value = localStorage.tel;
  }else{
    alert('No existen registros.');
    document.form1.busqueda.value="";
  }
}

function f_eliminar(){
  //ocultar
  document.getElementById('info').style.display = 'none';
  document.getElementById('nombre').value = "";
  document.getElementById('tel').value = "";
  document.getElementById('dir').value = "";
  //mostar
  document.getElementById('info2').style.display = 'block';
}

function atras(){
  //mostar
  document.getElementById('info').style.display = 'block';
  //ocultar
  document.getElementById('info2').style.display = 'none';
}

function eliminar(){
  //mostar
  document.getElementById('info2').style.display = 'block';
  //Eliminar datos del localStorage
  // localStorage.removeItem(name)
  var nom_e = document.getElementById('nom_eliminar').value;
  if(nom_e != localStorage.nom){
    alert('El contacto no existe.');
    document.getElementById('nom_eliminar').value="";
    return;
  }else{
    localStorage.clear(nom_e);
    alert('El contacto '+nom_e+' se ha eliminado');
    document.getElementById('nom_eliminar').value="";
  }
}
