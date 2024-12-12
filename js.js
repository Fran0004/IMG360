document.addEventListener('DOMContentLoaded', () => {
    const nameInst = document.getElementById('nombreInst');
    const arrayImgs = ['img/106_22b56044baf86be759c5b885da79396c_file.jpg','img/b0398f0b-ffa7-4a0a-b783-3ea14b0d6786.jpeg','img/cea52cba.jpg', 'img/2caec941.jpg']
  const image = document.querySelector('a-sky')
  image.setAttribute('src', arrayImgs[0])
  
    const buttonIzq = document.getElementById('buttonIzq');
    buttonIzq.addEventListener('click', () => {
        indexValido = arrayImgs.indexOf(image.getAttribute('src')) - 1
        if ( indexValido > -1 ){
            image.setAttribute('src', arrayImgs[indexValido])
            nameInst.setAttribute('value', '');
            console.log(nameInst);
        }else{
            image.setAttribute('src', arrayImgs[arrayImgs.length-1])
        }
        if(image.getAttribute('src') == arrayImgs[0]){
            nameInst.setAttribute('value', 'IES RAFAEL ALBERTI');
        }else{
            nameInst.setAttribute('value', '');
        }
    });
    const buttonDer = document.getElementById('buttonDer');
    buttonDer.addEventListener('click', () => {
        indexValido = arrayImgs.indexOf(image.getAttribute('src')) + 1
        if ( indexValido < arrayImgs.length ){
            image.setAttribute('src', arrayImgs[indexValido])
        }else{
            image.setAttribute('src', arrayImgs[0])
        }
        if(image.getAttribute('src')== arrayImgs[0]){
            nameInst.setAttribute('value', 'IES RAFAEL ALBERTI');
        }else{
            nameInst.setAttribute('value', '');
        }
    });

});
