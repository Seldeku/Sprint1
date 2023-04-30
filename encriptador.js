function encripta(){
    var texto=document.getElementById("entrada").value.toLowerCase();
    var salida="";
    for (let i = 0; i < texto.length; i++) {
        var element = texto[i];
        if (element=="e") {
            element="enter";
        }else if (element=="i") {
            element="imes";
        }else if (element=="a"){
            element="ai";
        }else if (element=="o"){
            element="ober";
        }else if(element=="u"){
            element="ufat";
        }
        salida+=element;
    }
    document.getElementById("resultado").value=salida;
    document.getElementById("resultado").rows="11";
    document.getElementById("resultado").style.fontWeight="400";
    document.getElementById("resultado").style.fontSize= "1.5rem";
    document.getElementById("resultado").style.lineHeight= "150%";
    document.getElementById("muneca").style.display="none";
    document.getElementById("mensaje").style.display="none";
    document.getElementById("bloque").style.top="10%";
    document.getElementById("copia").style.display="revert";
}
function desencriptar() {
    var texto=document.getElementById("entrada").value.toLowerCase();
    var texto = texto.replace(/enter/igm,"e");
    var texto = texto.replace(/ober/igm,"o");
    var texto = texto.replace(/imes/igm,"i");
    var texto = texto.replace(/ai/igm,"a");
    var texto = texto.replace(/ufat/igm,"u");
    document.getElementById("resultado").value=texto;
    document.getElementById("resultado").rows="11";
    document.getElementById("resultado").style.fontWeight="400";
    document.getElementById("resultado").style.fontSize= "1.5rem";
    document.getElementById("resultado").style.lineHeight= "150%";
    document.getElementById("muneca").style.display="none";
    document.getElementById("mensaje").style.display="none";
    document.getElementById("bloque").style.top="10%";
    document.getElementById("copia").style.display="revert";
}

function copiar() {
    
}