import "./css/style.scss";

// add more prod infos
jQuery(document).ready(function (e) {
    $('#hero-banner-cta').click(function (e) {
        e.preventDefault()
        var scrollElement = $(this).data('scroll')
        if (scrollElement) {
            $('body, html').animate({
            scrollTop: $('.' + scrollElement).position().top
            }, 500)
        }
    })

    const maximumProd = 10;
    const prodInfoTemp = $('.prod-info').clone();
    const prodBlank = $('.prod-blank').clone();

    function addMoreProdInfo() {
        var product_wrapper = $('.prod-infos-wrapper');
        let product_info_length = parseInt($('.prod-info').length);
        if (product_info_length >= maximumProd)
            return;
        product_info_length++

        let ele = prodInfoTemp;
        ele.attr('data-id', product_info_length);
        ele.find('.prod-header span').text(product_info_length)
        product_wrapper.html(product_wrapper.html() + ele[0].outerHTML)
    }

    $('.cta--addmore').click(function(e){
        e.preventDefault()
        addMoreProdInfo()
    })
});

// submit form
jQuery(document).ready(function (e) {

    let r = e("#firstName"),
        a = e("#lastName"),
        t = e("#dateOfBirth"),
        s = e("#email"),
        n = e("#phoneNumber");
    const o = ".form-submit__group";

    const isQA = window.location.href.indexOf('p6-qa') != -1;

    const i = isQA ? "https://vn-2022-da-ref-campaign-11470-stg.azurewebsites.net/api/User/insertUser" : "https://vn-2022-da-ref-campaign-11470-prod.azurewebsites.net/api/User/insertUser";
    const formCode = (isQA ? '1' : '0') + 'da_gcdm_redemption'

    function isNumber(e) {
        var r = e.which ? e.which : event.keyCode;
        return !(r > 31 && (r < 48 || r > 57))
    }

    function validateEmail(e) {
        return /\S+@\S+\.\S+/.test(e)
    }

    function ValidateDate(dtValue) {
        return /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/.test(dtValue)
    }


    r.on("focusout", function () {
        r.val() ? r.parents(o).removeClass("has-error") : r.parents(o).addClass("has-error")
    })

    a.on("focusout", function () {
        a.val() ? a.parents(o).removeClass("has-error") : a.parents(o).addClass("has-error")
    })

    s.on("focusout", function () {
        s.val() ? 0 == validateEmail(s.val()) ? s.parents(o).addClass("has-error").find(".form-submit__error span").text("Email không đúng định dạng") : s.parents(o).removeClass("has-error") : s.parents(o).addClass("has-error").find(".form-submit__error span").text("Vui lòng nhập email")
    })

    t.on("focusout", function () {
        t.val() ? !ValidateDate(t.val()) ? t.parents(o).addClass('has-error').find(".form-submit__error span").text("Ngày sinh không đúng định dạng") : t.parents(o).removeClass("has-error") : t.parents(o).addClass("has-error").find(".form-submit__error span").text("Vui lòng nhập ngày sinh")
    })

    $("#dateOfBirth").keyup(function () {
        e("#dateOfBirth").mask("00/00/0000")
    })

    n.on("focusout", function () {
        this.value.length;
        let e = n.val(),
            r = e.substring(0, 1),
            a = e.substring(0, 3);

        if (n.val()) {
            let t = n.val();
            if ("0" === r)
                e = e.substring(1, e.length);
            else {
                "840" === a && (e = e.substring(3, e.length)),
                    "84" === e.substring(0, 2) && (e = e.substring(2, e.length))
            }

            n.val("84" + e.substring(0, 9)),
                (t = n.val()) ? n.parents(o).removeClass("has-error") : n.parents(o).addClass("has-error").find(".form-submit__error span").text("Số điện thoại không đúng định dạng")

        } else
            n.parents(o).addClass("has-error").find(".form-submit__error span").text("Vui lòng nhập số điện thoại")
    })

    e("#policy").on("change", function () {
        e("#policy").is(":checked") ? e("#policy").parents(o).removeClass("has-error") : e("#policy").parents(o).addClass("has-error")
    })

    e("#receiveEmail").on("change", function () {
        e("#receiveEmail").is(":checked") ? e("#receiveEmail").parents(o).removeClass("has-error") : e("#receiveEmail").parents(o).addClass("has-error")
    })

    e("#jsSubmit").click(function (l) {
        l.preventDefault();

        var d = 0;
        let p = window.location.href;
        if (r.val() ? r.parents(o).removeClass("has-error") : (r.parents(o).addClass("has-error"), d++),
            a.val() ? a.parents(o).removeClass("has-error") : (a.parents(o).addClass("has-error"), d++),
            e("#policy").is(":checked") ? e("#policy").parents(o).removeClass("has-error") : (e("#policy").parents(o).addClass("has-error"), d++),
            e("#receiveEmail").is(":checked") ? e("#receiveEmail").parents(o).removeClass("has-error") : (e("#receiveEmail").parents(o).addClass("has-error"), d++),
            s.val() ? 0 == validateEmail(s.val()) ? (s.parents(o).addClass("has-error").find(".form-submit__error span").text("Email không đúng định dạng"), d++) : s.parents(o).removeClass("has-error") : (s.parents(o).addClass("has-error").find(".form-submit__error span").text("Vui lòng nhập email"), d++),
            t.val() ? !ValidateDate(t.val()) ? (t.parents(o).addClass('has-error').find(".form-submit__error span").text("Ngày sinh không đúng định dạng"), d++) : t.parents(o).removeClass("has-error") : (t.parents(o).addClass("has-error").find(".form-submit__error span").text("Vui lòng nhập ngày sinh"), d++),
            n.val()) {
            n.val();
            n.parents(o).removeClass("has-error")
        } else
            n.parents(o).addClass("has-error").find(".form-submit__error span").text("Vui lòng nhập số điện thoại"), d++;

        if (!t.val()) {
            let e = t.val();
            ValidateDate(e) || 0 == e.length ? (t.parents(o).addClass("has-error"), d++) : t.parents(o).removeClass("has-error")
        }

        if (d <= 0) {
            e("#jsSubmit").addClass("loading").prop("disabled", true)
            grecaptcha.ready(function () {
                grecaptcha.execute("6LeYzwgfAAAAAH8970TxAt7M0lMefol3WSnlSwIJ", {
                    action: "submit"
                })
                    .then(function (r) {
                        ! function (r) {
                            (new Date).toISOString().split(".")[0], window.location.href;

                            var callAjax = $.ajax({
                                url: i,
                                method: "POST",
                                headers: {
                                    "content-type": "application/json",
                                    "Access-Control-Allow-Origin": "*",
                                    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
                                    "Access-Control-Allow-Headers": "*"
                                },
                                data: JSON.stringify({
                                    FormCode: r.FormCode,
                                    lastName: r.LastName,
                                    firstName: r.FirstName,
                                    email: r.Email,
                                    phoneNumber: r.phoneNumber,
                                    gender: r.gender,
                                    dateOfBirth: r.BirthDay,
                                    url: r.ReferrerUrl,
                                    medium: r.medium,
                                    gRecaptchaResponse: r.grecaptchaToken,
                                    product: r.product,
                                    priceRange: r.priceRange,

                                }),
                                success: function (data, textStatus, jqXHR) {
                                    if (jqXHR.status == 200) {
                                        var error_message = ''

                                        $("#jsSubmit").removeClass("loading").prop("disabled", !1)

                                        if (jqXHR.responseJSON == 'success') {
                                            $("#popupSuccess").fadeIn()
                                            document.getElementById("register-form").reset()
                                            return
                                        }

                                        if (jqXHR.responseJSON == 'invalidToken' || jqXHR.responseJSON == 'invalidData') {
                                            error_message = "Có lỗi xảy ra, vui lòng thử lại!"
                                        }
                                        if (jqXHR.responseJSON == 'duplicateEmail') {
                                            error_message = "Email này đã được sử dụng, vui lòng kiểm tra lại thông tin!"
                                        }
                                        if (jqXHR.responseJSON == 'duplicatePhone') {
                                            error_message = "Số điện thoại này đã được sử dụng, vui lòng kiểm tra lại thông tin!"
                                        }

                                        void Swal.fire({
                                            icon: "error",
                                            text: error_message,
                                            confirmButtonText: "Đồng ý"
                                        })

                                    }
                                },
                                error: function (jqXHR, textStatus, error) {
                                    void Swal.fire({
                                        icon: "error",
                                        text: "Có lỗi xảy ra, vui lòng thử lại!",
                                        confirmButtonText: "Đồng ý"
                                    })

                                    e("#jsSubmit").removeClass("loading").prop("disabled", !1);
                                }
                            })

                        }({
                            FormCode: formCode,
                            FirstName: e("#firstName").val(),
                            LastName: e("#lastName").val(),
                            BirthDay: e("#dateOfBirth").val(),
                            Email: e("#email").val(),
                            phoneNumber: e("#phoneNumber").val(),
                            ReferrerUrl: window.location.href,
                            grecaptchaToken: r,
                            gender: '',
                            formCode: 'default',
                            product: e('#productName').val(),
                            priceRange: e('#productRange').val(),
                            medium: window.location.search.replace('?', '')
                        })
                    })

            })

        } else {
            e("#jsSubmit").remove("loading").prop("disabled", false)
        }
    }),

        e("#popupSuccess .close-button, #popupSuccess .dimmer, #popupSuccess .cta--close-pu").on("click", function (r) {
            r.preventDefault(), e("#popupSuccess").fadeOut()
        })
});