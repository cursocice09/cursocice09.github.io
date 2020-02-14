


function diagnosticar() {
   console.log("DIAGNOSITCANDO")

    var dolorDeCabeza = document.getElementById("dolorDeCabeza").checked;
    var fiebre = document.getElementById("fiebre").checked;
    var origen = document.getElementById("origen").checked;

    if (dolorDeCabeza == true) {
        if (fiebre == true) {
            if (origen == true) {
                alert("Contravirus");
            } else {
                alert("Gripe");
            }
        } else {
            alert("No tienes nada");
        }
    } else {
        alert("Estas fenmomenal");
    }
}