<%--
  Created by IntelliJ IDEA.
  User: piratXus
  Date: 30.06.2016
  Time: 16:44
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<body>
<h1>HTTP Status 403 - Access is denied</h1>

<c:choose>
    <c:when test="${empty username}">
        <h2>You do not have permission to access this page!</h2>
    </c:when>
    <c:otherwise>
        <h2>Username : ${username} <br/>
            You do not have permission to access this page!</h2>
    </c:otherwise>
</c:choose>

</body>
</html>