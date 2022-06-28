export function campoRequerido(input){
    if(input.value.trim().length > 0){
        console.log('El dato está correcto');
        input.className = 'form-control is-valid'
    }else{
        console.log('error! no cargo valores');
        input.className += ' is-invalid';
    }
}