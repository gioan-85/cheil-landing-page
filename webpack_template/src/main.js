import "./css/style.scss";

const prodIds = [
    "AX34R3020WW/SV",
    "AX40R3020WU/SV",
    "AX40R3030WM/SV",
    "AX60R5080WD/SV",
    "DF60R8600CG/SV",
    "DV90M5200QW/SV",
    "DV90T7240BB/SV",
    "DV90T7240BH/SV",
    "DV90TA240AE/SV",
    "DV90TA240AX/SV",
    "MC35R8088LE/SV",
    "MG23K3515AS/SV",
    "MG23K3575AS/SV",
    "MG23T5018CE/SV",
    "MG23T5018CK/SV",
    "MG30T5018CK/SV",
    "MS23K3513AS/SV",
    "RB27N4010BU/SV",
    "RB27N4010S8/SV",
    "RB27N4170BU/SV",
    "RB27N4190BU/SV",
    "RB30N4010BU/SV",
    "RB30N4010S8/SV",
    "RB30N4170BU/SV",
    "RB30N4190BU/SV",
    "RB30N4190BY/SV",
    "RB33T307029/SV",
    "RB33T307055/SV",
    "RF48A4000B4/SV",
    "RF48A4010B4/SV",
    "RF48A4010M9/SV",
    "RF60A91R177/SV",
    "RS62R5001B4/SV",
    "RS62R5001M9/SV",
    "RS64R53012C/SV",
    "RS64R5301B4/SV",
    "RS64T5F01B4/SV",
    "RT19M300BGS/SV",
    "RT20HAR8DBU/SV",
    "RT22FARBDSA/SV",
    "RT22M4032BU/SV",
    "RT22M4032BY/SV",
    "RT22M4040DX/SV",
    "RT25M4032BU/SV",
    "RT29K5532BU/SV",
    "RT29K5532BY/SV",
    "RT32K5932BU/SV",
    "RT32K5932BY/SV",
    "RT32K5932S8/SV",
    "RT35K50822C/SV",
    "RT35K5982BS/SV",
    "RT35K5982DX/SV",
    "RT35K5982S8/SV",
    "RT38K50822C/SV",
    "RT38K5982BS/SV",
    "RT38K5982DX/SV",
    "RT38K5982SL/SV",
    "RT46K6885BS/SV",
    "RZ32T744535/SV",
    "VC18M2120SB/SV",
    "VC18M21M0VN/SV",
    "VC18M3110VB/SV",
    "VCC8835V37/XSV",
    "VCC8836V36/XSV",
    "VR05R5050WK/SV",
    "VR30T85513W/SV",
    "VS03R6523J1/SV",
    "VS15A6031R1/SV",
    "VS15R8544S1/SV",
    "WA10T5260BV/SV",
    "WA10T5260BY/SV",
    "WA11T5260BV/SV",
    "WA12T5360BV/SV",
    "WA12T5360BY/SV",
    "WA16R6380BV/SV",
    "WA22R8870GV/SV",
    "WA85T5160BY/SV",
    "WA90H4200SG/SV",
    "WA90T5260BY/SV",
    "WD10N64FR2X/SV",
    "WD11T734DBX/SV",
    "WD14TP44DSB/SV",
    "WD21T6500GV/SV",
    "WD95J5410AW/SV",
    "WD95K5410OX/SV",
    "WD95T4046CE/SV",
    "WD95T754DBX/SV",
    "WW10T634DLX/SV",
    "WW10TA046AE/SV",
    "WW10TP44DSB/SV",
    "WW10TP44DSH/SV",
    "WW10TP54DSB/SV",
    "WW10TP54DSH/SV",
    "WW12TP94DSB/SV",
    "WW80T3020WW/SV",
    "WW85T4040CE/SV",
    "WW85T4040CX/SV",
    "WW85T554DAW/SV",
    "WW85T554DAX/SV",
    "WW90T3040WW/SV",
    "WW90T634DLE/SV",
    "WW90T634DLN/SV",
    "WW90TP44DSB/SV",
    "WW90TP44DSH/SV",
    "WW90TP54DSB/SV",
    "WW90TP54DSH/SV",
    "WW95T4040CE/SV",
    "WW95TA046AX/SV"
]
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("blur", function(e){
        var val = this.value;
        !val ? this.closest(".form-submit__group").classList.add('has-error') : this.closest(".form-submit__group").classList.remove('has-error')
    })

    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { 
            return false; 
        }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                // b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i];
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}


function validateSeriNumber () {
    let error = null;
    $('.input-seri').each(function(i,e) {
        $(this).bind('blur', function(){
            !$(this).val() || $(this).val().length < 14 ? ($(this).closest('.form-submit__group').addClass('has-error'), error=true) : ($(this).closest('.form-submit__group').removeClass('has-error'), error=false)
        })
    })
    return error;
}

function validateProdId() {
    let error = null
    $('.input-prodId').each(function(i,e){
        error = !$(this).val() ? true : false
        autocomplete(e, prodIds)
    })
    return error
}

// add more prod infos
jQuery(document).ready(function (e) {
    const maximumProd = 10;
    const prodInfoTemp = $('.prod-info').clone();

    // function doData(json) {
    //     console.log(json.feed.entry)
    // }

    // doData();

    

    validateProdId();
    validateSeriNumber();

    $('#hero-banner-cta').click(function (e) {
        e.preventDefault()
        var scrollElement = $(this).data('scroll')
        if (scrollElement) {
            $('body, html').animate({
                scrollTop: $('.' + scrollElement).position().top
            }, 500)
        }
    })

    function addMoreProdInfo() {
        var product_wrapper = $('.prod-infos-wrapper');
        let product_info_length = parseInt($('.prod-info').length);
        if (product_info_length >= maximumProd)
            return;
        product_info_length++

        // capture prod info value
        let prodInfoCapture = []
        $('.prod-info').each(function(i,e) {
            let temp = {
                prodId : $(this).find('.input-prodId').val(),
                prodSeri: $(this).find('.input-seri').val()
            }
            prodInfoCapture.push(temp)
        })

        let ele = prodInfoTemp;
        ele.attr('data-id', product_info_length);
        ele.find('.prod-header span').text(product_info_length)
        product_wrapper.html(product_wrapper.html() + ele[0].outerHTML)

        //update prod info value
        $('.prod-info').each(function(i,e) {
            if (prodInfoCapture[i]) {
                $(this).find('.input-prodId').val(prodInfoCapture[i].prodId)
                $(this).find('.input-seri').val(prodInfoCapture[i].prodSeri)
            }
        })

        $('.cta--removeOne').fadeIn(300);

        validateProdId();
        validateSeriNumber();
    }

    $('.cta--addmore').click(function (e) {
        e.preventDefault()
        addMoreProdInfo()
    });

    $('.cta--removeOne').click(function(e) {
        e.preventDefault();
        if ($('.prod-info').length == 2) {
            $('.prod-info').eq(1).remove();
            $(this).fadeOut(300);
            return;
        } else {
            $('.prod-info').eq($('.prod-info').length - 1).remove();
        }
    })

    // $('input.input-prodId').keyup(function (){
    //     var selectList = $(this).data('select');
    //     var val = $(this).val().toUpperCase();
    //     let listProdIs = [];

    //     if (val == ''){
    //         $('#'+selectList).empty();
    //         return;
    //     }

    //     prodIds.forEach((e,i)=>{
    //         if (e.indexOf(val) != -1) {
    //             listProdIs.push(e)
    //         }
    //     });
    //     console.log(listProdIs.length)

    //     let content = '';
    //     console.log(content)
    //     listProdIs.forEach((e,i) =>{
    //         content += `<div value="${e}">${e}</div>`;
    //     })
    //     $('#'+selectList).html(content)
    // });

    // $('input.input-prodId').focus(function (){
    //     var selectList = $(this).data('select');
    //     $('#'+selectList).addClass('actived');
    // });

    // $('input.input-prodId').blur(function (){
    //     var selectList = $(this).data('select');
    //     $('#'+selectList).removeClass('actived');
    // });
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

    const i = `https://vn-2022-da-product-redemption-campaign-11473-${isQA ? 'stg':'prod'}.azurewebsites.net/api/User/insertUser`
    const formCode = (isQA ? '1' : '0') + 'da_gcdm_redemption'
    const googleSiteKey = '6Le63wsfAAAAAN4smYVhVuJpNZJZxhE1G438sWa4'

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
        let formOrder = '';
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
        console.log(d)

        $('.prod-info').each(function(i,e){
            let prodId = $(this).find('.input-prodId'),
                prodSeri = $(this).find('.input-seri'),
                o = '.form-submit__group';

            !prodId.val() ? (prodId.closest(o).addClass('has-error'), d++) : (prodId.closest(o).removeClass('has-error'))
            !prodSeri.val() || prodSeri.val().length < 14 ? (prodSeri.closest(o).addClass('has-error'), d++) : (prodSeri.closest(o).removeClass('has-error'))

            formOrder += prodId.val() + '::' + prodSeri.val() + (i < $('.prod-info').length - 1 ? ';' : '')
            console.log(formOrder)
            console.log(d)
        })

        if (d <= 0) {
            e("#jsSubmit").addClass("loading").prop("disabled", true)
            grecaptcha.ready(function () {
                grecaptcha.execute(googleSiteKey, {
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
                                    order: r.order
                                }),
                                success: function (data, textStatus, jqXHR) {
                                    if (jqXHR.status == 200) {
                                        var error_message = ''

                                        $("#jsSubmit").removeClass("loading").prop("disabled", !1)

                                        if (jqXHR.responseJSON == 'success') {
                                            $("#popupSuccess").fadeIn()
                                            document.querySelector('body').classList.add('showPU')
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
                            product: e('#productName').val(),
                            priceRange: e('#productRange').val(),
                            medium: window.location.search.replace('?', ''),
                            order: formOrder
                        })
                    })

            })

        } else {
            e("#jsSubmit").remove("loading").prop("disabled", false)
        }
    }),

        e("#popupSuccess .close-button, #popupSuccess .dimmer, #popupSuccess .cta--close-pu").on("click", function (r) {
            document.querySelector('body').classList.remove('showPU')
            r.preventDefault(), e("#popupSuccess").fadeOut()
        })
});