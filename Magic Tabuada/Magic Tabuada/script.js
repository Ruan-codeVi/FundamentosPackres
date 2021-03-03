function tabuadas(){
    let num = document.querySelector('input#txtNum');
    let tab = document.querySelector('select#selecTabuada');
    
    if(num.value.length ==0){
        alert('[ERRO] Campo vazio, digite algum número');
    }
    else{
        let n = Number(num.value);
        tab.innerHTML = '';
        for(cont = 1; cont <=19; cont++){
            let item = document.createElement('option');
            item.text = `${n} x ${cont} =  ${n*cont}`;
            tab.appendChild(item)
        }
    }
}