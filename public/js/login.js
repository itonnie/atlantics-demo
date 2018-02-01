$(document).ready(function() {

    $('#loginForm').submit(function(e) {
        e.preventDefault();

        var email = $("#email").val();
        var password = $("#password").val();

        $.post('/login', { email: email, password: password }).done(data => {
            if(data.ok == true) {
                window.localStorage.setItem("token", data.token);
                window.location.assign("/admin");
            } else {
                alert(data.message);
            }
        })
    })

});