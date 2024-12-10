const containerImg = document.getElementById('container-img');


fetch('imagenes.json')
  .then(response => response.json())
  .then(data => {
     data.forEach(imagen => {
       const img = document.createElement('img');
       img.src = imagen.url;
       containerImg.appendChild(img);
     });
 
  })