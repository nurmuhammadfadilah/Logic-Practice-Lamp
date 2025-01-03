function saklar2(action, idLamp) {
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");
    let lampu4 = document.getElementById("lampu4");
    let lampu5 = document.getElementById("lampu5");
    let lampu6 = document.getElementById("lampu6");
    let lampu7 = document.getElementById("lampu7");
    let lampu8 = document.getElementById("lampu8");
    let lampu9 = document.getElementById("lampu9");
    let lampu10 = document.getElementById("lampu10");

    if (action == "on") {
        // ruang keluarga
        if (idLamp == 1) {

            lampu1.src = "assets/images/on.gif";
        }

        if (idLamp == 1) {

            lampu2.src = "assets/images/on.gif";
        }

        if (idLamp == 1) {

            lampu3.src = "assets/images/on.gif";
        }

        // ruang makan
        if (idLamp == 2) {

            lampu4.src = "assets/images/on.gif";
        }

        // kamar
        if (idLamp == 3) {

            lampu5.src = "assets/images/on.gif";
        }

        if (idLamp == 3) {

            lampu6.src = "assets/images/on.gif";
        }

        // ruang tamu
        if (idLamp == 4) {

            lampu7.src = "assets/images/on.gif";
        }

        if (idLamp == 4) {

            lampu8.src = "assets/images/on.gif";
        }

        if (idLamp == 4) {

            lampu9.src = "assets/images/on.gif";
        }

        if (idLamp == 4) {

            lampu10.src = "assets/images/on.gif";
        }
    }
    if (action == "off") {
        // mati
        if (idLamp == 1) {

            lampu1.src = "assets/images/off.gif";
        }

        if (idLamp == 1) {

            lampu2.src = "assets/images/off.gif";
        }

        if (idLamp == 1) {

            lampu3.src = "assets/images/off.gif";
        }

        // ruang makan
        if (idLamp == 2) {

            lampu4.src = "assets/images/off.gif";
        }
        // kamar
        if (idLamp == 3) {

            lampu5.src = "assets/images/off.gif";
        }

        if (idLamp == 3) {

            lampu6.src = "assets/images/off.gif";
        }

        // ruang tamu
        if (idLamp == 4) {

            lampu7.src = "assets/images/off.gif";
        }

        if (idLamp == 4) {

            lampu8.src = "assets/images/off.gif";
        }

        if (idLamp == 4) {

            lampu9.src = "assets/images/off.gif";
        }

        if (idLamp == 4) {

            lampu10.src = "assets/images/off.gif";
        }
    }
}