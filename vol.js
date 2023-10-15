function calculator() {
    let num1 = document.querySelector("#num1").value;
    console.log(num1);
    var sol=4.1887901943144154726508803828305*num1*num1*num1;
    document.getElementById("ans").innerHTML=sol;
}