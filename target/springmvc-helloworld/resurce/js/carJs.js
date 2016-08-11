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
            tableDraw(car);
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


function deleteData(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("TableData");
    var data=obj.parentNode.parentNode.innerText.split(/\s+/,5);
    var id=data[0];
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var out = JSON.parse(xhttp.responseText);
            if (out == true) {
                deleteEditeRow(obj);
            } else alert("no entry");
        }
    }
    xhttp.open('POST', '/delete', true);
    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhttp.send(id);
}


function editeData(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("TableData");
    var rowCount = table.rows.length;
    var row = table.insertRow(index);
    var data=obj.parentNode.parentNode.innerText.split(/\s+/,5);
    row.insertCell(0).innerHTML = '<input type="label"  id="idE" readonly="readonly" value=${id}>'
    row.insertCell(1).innerHTML = '<input type="text"  id="brandE" value=${b}> <span id = "brandE_e"></span>'
    row.insertCell(2).innerHTML = '<input type="text"  id="ageE"   value=${a}> <span id = "ageE_e"></span>'
    row.insertCell(3).innerHTML = '<input type="text"  id="colorE" value=${c}> <span id = "colorE_e"></span>'
    var brand =document.getElementById('idE').value=data[0];
    var brand =document.getElementById('brandE').value=data[1];
    var age = document.getElementById('ageE').value=data[2];
    var color = document.getElementById('colorE').value=data[3];
    row.insertCell(-1).innerHTML = '<input type= "button" value="Save" onclick="EditServise(this)"/>';
    row.insertCell(-1).innerHTML = '<input type= "button" value="Cancel" onclick="deleteEditeRow(this),start()"/>';
    deleteEditeRow(obj);
}


function EditServise(obj) {
    var idE = document.getElementById('idE').value;
    var brandE = document.getElementById('brandE').value;
    var colorE= document.getElementById('colorE').value;
    var ageE = document.getElementById('ageE').value;
    var json = JSON.stringify({
        id: idE,
        brand: brandE,
        color: colorE,
        age: ageE
    });
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var out = JSON.parse(xhttp.responseText);
            var idOut = out.id;
            var ageOut = out.age;
            var colorOut = out.color;
            var brandOut = out.brand;
            var newData = [idOut, brandOut, ageOut, colorOut];
            deleteEditeRow(obj);
            tableDraw(newData);
        }
    }
    xhttp.open('POST', '/editeCar', true);
    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhttp.send(json);
}


function deleteEditeRow(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("TableData");
    table.deleteRow(index);
}


function start() {
    xhttp = new XMLHttpRequest();
    var data;
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var out = JSON.parse(xhttp.responseText);
            for (var i = 0; i < out.length; i++) {
                var idOut = out[i].id;
                var ageOut = out[i].age;
                var colorOut = out[i].color;
                var brandOut = out[i].brand;
                var data = [idOut, brandOut, ageOut, colorOut];
                tableDraw(data);
            }
        }
    }
    xhttp.open('GET', '/start', true);
    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhttp.send();
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