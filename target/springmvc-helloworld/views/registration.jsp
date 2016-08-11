<%--
  Created by IntelliJ IDEA.
  User: piratXus
  Date: 27.06.2016
  Time: 16:59
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Registration</title>
    <script type="text/javascript"  src="/resurce/js/jquery-1.11.3.min.js"></script>
    <script type="text/javascript"  src="/resurce/js/registration.js"></script>
</head>
<body>
<h1>User</h1>
    <table>
        <tr>
            <td>Logi:</td> <td><input type="text" id="login" ></td>
            <span id = "login_e"></span>
        </tr>
        <tr>
            <td>Password:</td> <td><input type="password" id="password" ></td>
            <span id = "password_e"></span>
        </tr>
        <tr>
            <td>Name:</td> <td><input type="text" id="name" ></td>
            <span id = "name_e"></span>
        </tr>
        <tr>
            <td>Surname:</td> <td><input type="text" id="surname" ></td>
            <span id = "surname_e"></span>
        </tr>

    </table>

<input type="submit" value = "Save" onclick = "return inputDataClient()" />

<script type="text/javascript">
    window.onload = function() {
        clearInput();
    }
</script>
</body>
</html>
