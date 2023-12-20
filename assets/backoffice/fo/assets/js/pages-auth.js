"use strict";
const formAuthentication = document.querySelector("#formAuthentication");
document.addEventListener("DOMContentLoaded", function (e) {
    {
        formAuthentication &&
        FormValidation.formValidation(formAuthentication, {
            fields: {
                username: { validators: { notEmpty: { message: "Username tidak boleh kosong" }, stringLength: { min: 6, message: "Username harus lebih dari 6 karakter" } } },
                email: { validators: { notEmpty: { message: "Email tidak boleh kosong" }, emailAddress: { message: "Silahkan masukan alamat email yang valid" } } },
                "email-username": { validators: { notEmpty: { message: "Username tidak boleh kosong" }, stringLength: { min: 6, message: "Username harus lebih dari 6 karakter" } } },
                password: { validators: { notEmpty: { message: "password tidak boleh kosong" }, stringLength: { min: 6, message: "Password harus lebih dari 6 karakter" } } },
                "confirm-password": {
                    validators: {
                        notEmpty: { message: "Please confirm password" },
                        identical: {
                            compare: function () {
                                return formAuthentication.querySelector('[name="password"]').value;
                            },
                            message: "The password and its confirm are not the same"
                        },
                        stringLength: { min: 6, message: "Password must be more than 6 characters" }
                    }
                },
                terms: { validators: { notEmpty: { message: "Please agree terms & conditions" } } }
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                bootstrap5: new FormValidation.plugins.Bootstrap5({ eleValidClass: "", rowSelector: ".mb-3" }),
                submitButton: new FormValidation.plugins.SubmitButton(),
                defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
                autoFocus: new FormValidation.plugins.AutoFocus(),
            },
            init: function(e){
                e.on("plugins.message.placed", function (e) {
                    e.element.parentElement.classList.contains("input-group") && e.element.parentElement.insertAdjacentElement("afterend", e.messageElement);
                });
            }
        });
        const t = document.querySelectorAll(".numeral-mask");
        return void (
            t.length &&
            t.forEach(function(e){
                new Cleave(e, { numeral: !0 });
            })
        );
    }
});
