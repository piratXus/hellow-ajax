<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<html>
<head>
    <style>
    table, th, td {
    border: 1px solid black;
    }
    </style>
    <title>Car main</title>

    <script type="text/javascript"  src="/resurce/js/carJs.js">

        window.onload = function() {
            start();
        }
    </script>


</head>
<body>

    <table>
        <tr>
            <td>Brand</td> <td>Age </td> <td>color </td> <td>plate </td>
        </tr>
        <tr>
            <td>
                <input type="text" id = "brand"  value = ${brand}>
                <span id = "brand_e"></span>
            </td>
            <td>
                <input type="text" id = "age"  value = ${age}>
                <span id = "age_e"></span>
            </td>
            <td>
                <input type="text" id = "color"  value = ${color}>
                <span id = "color_e"></span>
            </td>
            <td>
                <input type="text" id = "plate"  value = ${plate}>
                <span id = "plate_e"></span>
            </td>
        </tr>

    </table>
    <input type="submit" value = "Save" onclick = "return inputData()" />



<table border="1" id="TableData">
    <tr><td>Id</td><td>Brand</td> <td>Age </td> <td>color </td><td>plate </td></tr>

</table>


 </body>
</html>