var q = 0;
var w = 0;

function Register_Hear() {
    var a1 = document.getElementById("inp1").value;
    var a2 = document.getElementById("inp2").value;
    var a3 = document.getElementById("inp3").value;
    var a4 = document.getElementById("inp4").value;
    var a5 = document.getElementById("inp5").value;

    if (a1 == "" || a2 == "" || a3 == "" || a4 == "" || a5 == "") {
        alert("fill all the box")

    } else {

        q++;

    }


    if (a3 == a4) {
        q++;

    } else {
        alert("password dosent match")

    }








    if (a5 == "") {

    } else if (a5.toString().length > 10 || a5.toString().length < 10) {
        alert("enter valid number")

    } else {
        q++;

    }

    if (document.getElementById("inp2").value == "") {

    } else {
        var email = document.getElementById("inp2").value;
        var atpos = email.lastIndexOf("@");
        var dotpos = email.lastIndexOf(".");

        if (dotpos - atpos < 2) {
            alert("Invalid Email..!")

        } else {
            q++;
        }

    }




    if (q == 4) {
        alert("thanks for registresion")
        q = 0;
    }


}


















function ContactUs() {

    var o1 = document.getElementById("contyactusINP1").value;
    var o2 = document.getElementById("contyactusINP2").value;
    var o3 = document.getElementById("contyactusINP3").value;






    if (o1 == "" || o2 == "" || o3 == "") {
        alert("fill all the box")
        document.getElementById("contyactusINP1").focus;

    } else {

        w++;

    }


    if (document.getElementById("contyactusINP2").value == "") {

    } else {
        var email = document.getElementById("contyactusINP2").value;
        var atpos = email.lastIndexOf("@");
        var dotpos = email.lastIndexOf(".");

        if (dotpos - atpos < 2) {
            alert("Invalid Email..!")

        } else {
            w++;
        }
    }
    if (w == 2) {
        alert("thanks for sending your inormation")
        w = 0;
    }



}


function Subscribe() {

    if (document.getElementById("Subscribeinp1").value == "") {
        alert("enter your email")

    } else {
        var email = document.getElementById("Subscribeinp1").value;
        var atpos = email.lastIndexOf("@");
        var dotpos = email.lastIndexOf(".");

        if (dotpos - atpos < 2) {
            alert("Invalid Email..!")

        } else {
            alert("thank you ")
            document.getElementById("Subscribeinp1").reset;
        }
    }

}