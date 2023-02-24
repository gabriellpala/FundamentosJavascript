function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()


    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora < 12) {
       //good morning!
       img.src = 'dia.png';
     
    } 
    else if (hora >= 12 && hour < 18) {
    // Boa tarde!
    img.src = 'td.png';
    }
    else {
        // Boa noite!
        img.src = 'nt.png';
    }
}