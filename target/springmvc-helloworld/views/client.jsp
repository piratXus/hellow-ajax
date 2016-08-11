<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
    <link rel="stylesheet" href="<c:url value="/resurce/css/bootstrap.min.css"/>">
    <script type="text/javascript" src="<c:url value="/resurce/js/bootstrap.min.js"/>"></script>
    <script type="text/javascript" src="<c:url value="/resurce/js/jquery-1.11.3.min.js"/>"></script>
    <script type="text/javascript" src="<c:url value="/resurce/js/carManeger.js"/>"></script>


    <title>User ${login}</title>
</head>
<body>
<br><br><br>
<div class="container">
    <div class="row">
        <c:if test="${pageContext.request.userPrincipal.name != null}">
            <h2 align="center">Dear ${pageContext.request.userPrincipal.name}, welcome to Client Page</h2>
        </c:if>
        <div class="col-md-5 toppad pull-right col-md-offset-3">
            <a href="<c:url value="/"/>" >Home</a>
            <a href="<c:url value="/logout"/>" >Logout</a>
            <a href="/loginAdmin"/>Admin</a>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad" >
            <div class="panel panel-info">
                <div class="panel-heading">
                    <h3 class="panel-title" align="center">User: ${login}</h3>
                </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class=" col-md-9 col-lg-9 ">
                                    <table class="table table-user-information">
                                        <tbody>
                                        <tr>
                                            <th><strong>User level:</strong></th>
                                            <td><strong>User</strong></td>
                                        </tr>
                                        <tr>
                                            <th>First Name:</th>
                                            <td>${name}</td>
                                        </tr>
                                        <tr>
                                        <tr>
                                            <th>Surname:</th>
                                            <td>${surName}</td>
                                        </tr>
                                        </tbody>
                                    </table>

                                    <a href="#" class="btn btn-primary">Show orders</a>
                                </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
<div class="col-xs-3 col-sm-3 col-md-8 col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-1 col-lg-offset-1 toppad" >
    <div class="panel panel-info">

            <h3 class="panel-title" align="center">you cars:</h3>
    <table class="table table-car-information">
        <tbody>
        <tr>
            <td>Brand</td> <td>Year </td> <td>Color </td><td>Plate </td>
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

        </tbody>
    </table>
    <a href="javascript: inputData()" class="btn btn-primary">Save</a>
            </div>

    </div>

<div class="col-xs-3 col-sm-3 col-md-8 col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-1 col-lg-offset-1 toppad" >
    <div class="panel panel-info">

        <h3 class="panel-title" align="center">you cars:</h3>
        <table id="TableDate">
            <tr>
                <td>Brand</td> <td>Year </td> <td>Color </td><td>Plate </td>
            </tr>

        </table>
    </div>

</div>

</body>
</html>