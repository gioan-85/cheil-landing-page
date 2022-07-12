import './css/style.scss'

jQuery(document).ready(function ($) {
  let $FirstName = $('#firstName'),
    $LastName = $('#lastName'),
    $BirthDay = $('#dateOfBirth'),
    $Email = $('#email'),
    $Phone = $('#phoneNumber'),
    $Policy = $('#policy'),
    $ReceiveEmail = $('#receiveEmail')

  const o = '.form-submit__group'
  const spanErrorText = '.form-submit__error span'
  const sitekey = '6Lealo4gAAAAABbhvQqHjXlINIDAg2WLdc8pgQer'

  const i =
    'https://vn-2022-da-gcdm-registration-campaign-11447-stg.azurewebsites.net/api/User/insertUser'
  const formCode = 'da_gcdm_registration'

  $('#reCaptchaV2, #jsSubmit').data('sitekey', sitekey)

  function isNumber (e) {
    var r = e.which ? e.which : event.keyCode
    return !(r > 31 && (r < 48 || r > 57))
  }

  function isChecked (checkbox) {
    checkbox.is(':checked')
      ? checkbox.parents(o).removeClass('has-error')
      : checkbox.parents(o).addClass('has-error')

    return checkbox.is(':checked') ? true : false
  }

  function validateName (name) {
    name
      .parents(o)
      .find('.errorMsg__1')
      .show()

    if (name.val() && Number(name.val().length) > 1) {
      if (allCharactersSame(name.val())) {
        name
          .parents(o)
          .find('span')
          .hide()
        name
          .parents(o)
          .find('.errorMsg__2')
          .show()
        name.parents(o).addClass('has-error')
        return false
      } else {
        name.parents(o).removeClass('has-error')
        return true
      }
    } else {
      name
        .parents(o)
        .find('.errorMsg__1')
        .show()
      name.parents(o).addClass('has-error')
      return false
    }
  }

  function allCharactersSame (s) {
    let n = s.length
    for (let i = 1; i < n; i++) if (s[i] != s[0]) return false
    return true
  }

  function validateEmail (email) {
    let isEmail = /\S+@\S+\.\S+/.test(email.val())

    email.val() && isEmail
      ? email.parents(o).removeClass('has-error')
      : email.val()
      ? $Email
          .parents(o)
          .addClass('has-error')
          .find(spanErrorText)
          .text('Email không đúng định dạng')
      : email
          .parents(o)
          .addClass('has-error')
          .find(spanErrorText)
          .text('Vui lòng nhập email')
    return isEmail
  }

  function ValidateDate (date) {
    let isDate = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/.test(
      date.val()
    )

    date.val() && isDate
      ? date.parents(o).removeClass('has-error')
      : date.val()
      ? date
          .parents(o)
          .addClass('has-error')
          .find(spanErrorText)
          .text('Ngày sinh không đúng định dạng')
      : date
          .parents(o)
          .addClass('has-error')
          .find(spanErrorText)
          .text('Vui lòng nhập ngày sinh')
    return isDate
  }

  function validatePhoneNumber (phone) {
    let $PhoneNumber = phone.val()

    if ($PhoneNumber) {
      if ($PhoneNumber.length <= 9) {
        phone
          .parents(o)
          .addClass('has-error')
          .find(spanErrorText)
          .text('Số điện thoại không đúng định dạng')
        return false
      }
      if ('0' === $PhoneNumber.substring(0, 1))
        $PhoneNumber = $PhoneNumber.substring(1, $PhoneNumber.length)
      else {
        '840' === $PhoneNumber.substring(0, 3) &&
          ($PhoneNumber = $PhoneNumber.substring(3, $PhoneNumber.length))
        '84' === $PhoneNumber.substring(0, 2) &&
          ($PhoneNumber = $PhoneNumber.substring(2, $PhoneNumber.length))
      }
      phone.parents(o).removeClass('has-error')
      phone.val('84' + $PhoneNumber)
      return true
    } else {
      phone
        .parents(o)
        .addClass('has-error')
        .find(spanErrorText)
        .text('Vui lòng nhập số điện thoại')
      return false
    }
  }

  function validateForm () {
    let errorCount = 0

    validateName($FirstName) ? true : errorCount++
    validateName($LastName) ? true : errorCount++
    validateEmail($Email) ? true : errorCount++
    ValidateDate($BirthDay) ? true : errorCount++
    validatePhoneNumber($Phone) ? true : errorCount++
    console.log(errorCount)
    return errorCount
  }

  $FirstName.alphanum({
    allowSpace: true,
    allowUpper: true,
    allowNumeric: false,
    allowOtherCharSets: true
  })

  $FirstName.alphanum({
    allowSpace: true,
    allowUpper: true,
    allowNumeric: false,
    allowOtherCharSets: true
  })

  $FirstName.on('focusout', function () {
    validateName($FirstName)
  })

  $LastName.on('focusout', function () {
    validateName($LastName)
  })

  $Email.on('focusout', function () {
    validateEmail($Email)
  })

  $BirthDay.on('focusout', function () {
    ValidateDate($BirthDay)
  })

  $BirthDay.keyup(function () {
    $BirthDay.mask('00/00/0000')
  })

  $Phone.on('focusout', function () {
    validatePhoneNumber($Phone)
  })

  $Policy.on('change', function () {
    isChecked($Policy)
  })

  $ReceiveEmail.on('change', function () {
    isChecked($ReceiveEmail)
  })

  $('#jsSubmit').click(function (l) {
    l.preventDefault()
    var d = validateForm()
    let p = window.location.href

    if (d > 0) return

    $('#jsSubmit')
      .addClass('loading')
      .prop('disabled', true)

    var captchaResponse = grecaptcha.getResponse()
    if (captchaResponse.length > 0) {
      $('#jsSubmit')
        .addClass('loading')
        .prop('disabled', true)

      $('.recaptcha-message').slideUp()
      $.ajax({
        url: i,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': '*'
        },
        data: JSON.stringify({
          FormCode: formCode,
          lastName: $LastName.val(),
          firstName: $FirstName.val(),
          email: $Email.val(),
          phoneNumber: $Phone.val(),
          gender: '',
          dateOfBirth: $BirthDay.val(),
          url: window.location.href,
          medium: window.location.search.replace('?', ''),
          gRecaptchaResponse: captchaResponse
        }),
        success: function (data, textStatus, jqXHR) {
          console.log(data)
          console.log(jqXHR)
          if (jqXHR.status == 200) {
            var error_message = ''

            $('#jsSubmit')
              .removeClass('loading')
              .prop('disabled', !1)

            if (jqXHR.responseJSON == 'success') {
              $('#popupSuccess').fadeIn()
              document.getElementById('register').reset()
              general_tag()
              return
            }

            if (
              jqXHR.responseJSON == 'invalidToken' ||
              jqXHR.responseJSON == 'invalidData'
            ) {
              error_message = 'Có lỗi xảy ra, vui lòng thử lại!'
            }
            if (jqXHR.responseJSON == 'duplicateEmail') {
              error_message =
                'Email này đã được sử dụng, vui lòng kiểm tra lại thông tin!'
            }
            if (jqXHR.responseJSON == 'duplicatePhone') {
              error_message =
                'Số điện thoại này đã được sử dụng, vui lòng kiểm tra lại thông tin!'
            }

            void Swal.fire({
              icon: 'error',
              text: error_message,
              confirmButtonText: 'Đồng ý'
            })
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          void Swal.fire({
            icon: 'error',
            text: 'Có lỗi xảy ra, vui lòng thử lại!',
            confirmButtonText: 'Đồng ý'
          })

          $('#jsSubmit')
            .removeClass('loading')
            .prop('disabled', !1)
        }
      })
    } else {
      $('.recaptcha-message').slideDown()
    }
    // grecaptcha.ready(function () {
    //   grecaptcha
    //     .execute(secretKey, {
    //       action: 'submit'
    //     })
    //     .then(function (r) {
    //       !(function (r) {
    //         $.ajax({
    //           url: i,
    //           method: 'POST',
    //           headers: {
    //             'content-type': 'application/json',
    //             'Access-Control-Allow-Origin': '*',
    //             'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    //             'Access-Control-Allow-Headers': '*'
    //           },
    //           data: JSON.stringify({
    //             FormCode: r.FormCode,
    //             lastName: r.LastName,
    //             firstName: r.FirstName,
    //             email: r.Email,
    //             phoneNumber: r.phoneNumber,
    //             gender: r.gender,
    //             dateOfBirth: r.BirthDay,
    //             url: r.ReferrerUrl,
    //             medium: r.medium,
    //             gRecaptchaResponse: r.grecaptchaToken
    //           }),
    //           success: function (data, textStatus, jqXHR) {
    //             console.log(data)
    //             console.log(jqXHR)
    //             if (jqXHR.status == 200) {
    //               var error_message = ''

    //               $('#jsSubmit')
    //                 .removeClass('loading')
    //                 .prop('disabled', !1)

    //               if (jqXHR.responseJSON == 'success') {
    //                 $('#popupSuccess').fadeIn()
    //                 document.getElementById('register').reset()
    //                 general_tag()
    //                 return
    //               }

    //               if (
    //                 jqXHR.responseJSON == 'invalidToken' ||
    //                 jqXHR.responseJSON == 'invalidData'
    //               ) {
    //                 error_message = 'Có lỗi xảy ra, vui lòng thử lại!'
    //               }
    //               if (jqXHR.responseJSON == 'duplicateEmail') {
    //                 error_message =
    //                   'Email này đã được sử dụng, vui lòng kiểm tra lại thông tin!'
    //               }
    //               if (jqXHR.responseJSON == 'duplicatePhone') {
    //                 error_message =
    //                   'Số điện thoại này đã được sử dụng, vui lòng kiểm tra lại thông tin!'
    //               }

    //               void Swal.fire({
    //                 icon: 'error',
    //                 text: error_message,
    //                 confirmButtonText: 'Đồng ý'
    //               })
    //             }
    //           },
    //           error: function (jqXHR, textStatus, errorThrown) {
    //             void Swal.fire({
    //               icon: 'error',
    //               text: 'Có lỗi xảy ra, vui lòng thử lại!',
    //               confirmButtonText: 'Đồng ý'
    //             })

    //             $('#jsSubmit')
    //               .removeClass('loading')
    //               .prop('disabled', !1)
    //           }
    //         })
    //       })({
    //         FormCode: formCode,
    //         FirstName: $FirstName.val(),
    //         LastName: $Last.val(),
    //         BirthDay: $BirthDay.val(),
    //         Email: $Emai.val(),
    //         phoneNumber: $Phone.val(),
    //         ReferrerUrl: window.location.href,
    //         grecaptchaToken: r,
    //         gender: '',
    //         medium: window.location.search.replace('?', '')
    //       })
    //     })
    // })
  })

  $(
    '#popupSuccess .close-button, #popupSuccess .dimmer, #popupSuccess .cta--close-pu'
  ).on('click', function (r) {
    r.preventDefault()
    $('#popupSuccess').fadeOut()
  })
})
