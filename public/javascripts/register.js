/*
* Description: Add basic functions
*
* Author: Neo
*/
"use strict";
function confirmPassword() {
    let currPass = $("#inputPassword").val();
    let confPass = $("#confirmPassword").val();

    if(currPass === confPass) return true;
    else return false;
}

$(function() {
    $("#registerForm").on("submit", (e) => {
        e.preventDefault();

        let data = {
            "username": $("#inputUsername").val(),
            "email": $("#inputEmail").val(),
            "password": $("#inputPassword").val()
        };

        let isValidPass = confirmPassword();
        if(!isValidPass)
            return $("#passMsg").html("Password does not match");
        
        $.post("http://localhost:3000/users/register", data, () => {})
            .done(function() {
                location.href = "login";
                //console.log("Register success");
            })
            .fail(function() {
                //console.log("Register failed");
            })
    });
});