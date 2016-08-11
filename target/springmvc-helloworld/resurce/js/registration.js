/**
 * Created by piratXus on 01.07.2016.
 */
function inputDataClient() {

    var login = $('#login').val();
    var password = $('#password').val();
    var name = $('#name').val();
    var surname = $('#surname').val();

    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: '/registrationUser',
        data: JSON.stringify(
            {
                'login': login,
                'password': password,
                'name': name,
                'surname': surname,

            }),
        dataType: 'json',
        success: function () {
        }
    });


}

function clearSpan() {
   
    

}

function clearInput() {
    $('#login').text('');
    $('#password').text('');
    $('#name').text('');
    $('#surname').text('');
}