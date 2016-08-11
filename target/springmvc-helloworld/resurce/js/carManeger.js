/**
 * Created by piratXus on 03.07.2016.
 */

function inputData() {
    var brand = document.getElementById('brand').value;
    var color = document.getElementById('color').value;
    var age = document.getElementById('age').value;
    var plate = document.getElementById('plate').value;
    var car = JSON.stringify({
        brand: brand,
        color: color,
        age: age,
        plate: plate
    });
    xhttp = new XMLHttpRequest();
    clearSpan();
    xhttp.onreadystatechange = function () {
        if(xhttp.readyState == 3 && xhttp.status == 400){
            var out = JSON.parse(xhttp.responseText);
            for(var i=0;i<out.errors.length;i++){
                if(out.errors[i]=="color, may not be empty" ){
                    document.getElementById('color_e').innerHTML=out.errors[i];
                }
                if(out.errors[i]=="color, size must be between 3 and 15" ){
                    document.getElementById('color_e').innerHTML=out.errors[i];
                }
                if(out.errors[i]=="brand, may not be empty" ){
                    document.getElementById('brand_e').innerHTML=out.errors[i];
                }
                if(out.errors[i]=="brand, size must be between 2 and 20"){
                    document.getElementById('brand_e').innerHTML=out.errors[i];
                }
                if(out.errors[i]=="age, must be greater than or equal to 1"){
                    document.getElementById('age_e').innerHTML=out.errors[i];
                }
            }
        }
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var out = JSON.parse(xhttp.responseText);
            var idOut = out.id;
            var ageOut = out.age;
            var colorOut = out.color;
            var brandOut = out.brand;
            var plateOut=out.plate;
            var data = [idOut, brandOut, ageOut, colorOut,plateOut];
            tableDraw(data);
            clearInput();
        }
    }
    xhttp.open('POST','/carAdd',true);
    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    xhttp.send(car)
}


function tableDraw(data) {
    var table = document.getElementById("TableData");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    for (var i = 0; i < data.length; i++) {
        row.insertCell(i).innerHTML = data[i];
    }
    row.insertCell(-1).innerHTML = '<input type= "button" value="Delete" onclick="deleteData(this)"/>';
    row.insertCell(-1).innerHTML = '<input type= "button" value="Edit" onclick="editeData(this)"/>';
}


function clearInput() {
    document.getElementById("brand").value='';
    document.getElementById("color").value='';
    document.getElementById("age").value='';
    document.getElementById("plate").value='';
}


function clearSpan() {
    document.getElementById('color_e').innerHTML='';
    document.getElementById('brand_e').innerHTML='';
    document.getElementById('age_e').innerHTML='';
    document.getElementById('plate_e').innerHTML='';
}

