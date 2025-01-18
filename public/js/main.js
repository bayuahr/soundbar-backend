$(document).ready(function() {

    function initAjaxSelect2(
        selector,
        url,
        placeholder,
        options = {},
        data = function (params) {
            var query = {
                search: params.term,
                limit: 10,
                page: params.page || 1
            };

            return query;
        }) {
        var config = options;
        config.theme = "bootstrap-5",
        config.placeholder = placeholder;
        config.ajax = {
            url: url,
            data: data,
            type: 'post',
            dataType: 'json',
            delay: 250,
            processResults : function (data, params) {
                params.page = params.page || 1;

                return {
                    results: data.results,
                    pagination: {
                        more: (params.page * 10) < data.count_filtered
                    }
                };
            },
        };
        selector.select2(config);
    }

    $('.toggle-show-password').click(function() {
        let passwordInput = $(this).siblings('input')
        let currentInputType = passwordInput.attr('type')

        if (currentInputType == 'password') {
            passwordInput.attr('type', 'text')
            $(this).attr('src', '/client-images/icon/eye-slash.svg')
        } else {
            passwordInput.attr('type', 'password')
            $(this).attr('src', '/client-images/icon/eye.svg')
        }
    })

    $('.select2').each(function() {
        var config = {};
        var ajaxUrl = $(this).data('ajax-url');
        var placeholder = "Pilih Data";
        config.width = '400px';
        if ($(this).is('[data-placeholder]')) {
            placeholder = $(this).data('placeholder');
        }
        if ($(this).is('[data-width]')) {
            config.width = $(this).data('width');
        }
        if ($(this).is('[data-dropdown-parent]')) {
            var dropdownParent = $(this).data('dropdown-parent');
            config.dropdownParent = $(`${dropdownParent}`);
        }

        initAjaxSelect2($(this), ajaxUrl, placeholder, config);
    });

    // Rupiah Formatter
    var rupiah = $('.rupiah');
    rupiah.each(function(index, obj) {
        let text = $(obj).text()
        let formattedText = formatRupiah(text, 'Rp. ')
        $(obj).text(formattedText)
    })
    rupiah.on('keyup', function(e){
        // tambahkan 'Rp.' pada saat form di ketik
        // gunakan fungsi formatRupiah() untuk mengubah angka yang di ketik menjadi format angka
        $(this).val = formatRupiah(this.value, 'Rp. ')
    })

    $('.input-checkbox-switch').change(function() {
        let inputLabel = $(this).siblings('label')
        let dataIfChecked = $(this).data('checked')
        let dataIfUnchecked = $(this).data('unchecked')

        if (this.checked) {
            inputLabel.text(dataIfChecked)
        } else {
            inputLabel.text(dataIfUnchecked)
        }
    })

    $('.input-numeric').keyup(function() {
        changeNonNumerikInputElement($(this))
    })

})

function changeNonNumerikInputElement(element) {
    let value = element.val()
    if (!/^\d+$/.test(value)) {
        element.val(parseInt(value.replace(/[^\d]/g, ''), 10))
    }
}

function changeNonNumerikInputValue(value) {
    if (!/^\d+$/.test(value)) {
        return parseInt(value.replace(/[^\d]/g, ''), 10)
    }
    return value
}

function slugify(content) {
    return content. toLowerCase(). replace(/ /g,'-'). replace(/[^\w-]+/g,'');
}

function convertSlugToCapitalize(slug) {
    var words = slug.split('-');

    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }

    return words.join(' ');
}

function ucWords(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}

function deleteData(callback, params) {
    Swal.fire({
        title: 'Are you sure?',
        text: params.text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3a57e8',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete!',
        cancelButtonText: 'Cancel',
    }).then((result) => {
        if (result.value) {
            callback();
        }
    });
}

function showPopup(callback, params, action) {
    Swal.fire({
        title: 'Are you sure?',
        text: params.text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3a57e8',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Yes!',
        cancelButtonText: 'Cancel',
    }).then((result) => {
        if (result.value) {
            callback();
        }
    });
}

function popup( content = {}, callback, option = {}) {
    Swal.fire({
        title: content.title,
        text: content.text,
        icon: content.icon,
        showCancelButton: true,
        confirmButtonText: content.confirmButtonText,
        cancelButtonText: content.cancelButtonText
    }).then((result) => {
        if (result.isConfirmed) {
            // Panggil fungsi untuk melakukan AJAX request menghapus permission
            callback();
        }
    });
}

function formAjax(urlOrForm, method, option = {}, params){
    if (urlOrForm instanceof jQuery && urlOrForm.is('form')) {
        urlOrForm = urlOrForm.attr('action');
        method = urlOrForm.attr('method').toUpperCase();
        params= form.serialize();
    }
    // var form = $('#' + form_id);
    $('.text-error').empty();

    $.ajax({
        type: method,
        url: urlOrForm,
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') // Tambahkan CSRF token jika menggunakan Laravel
        },
        data: params,
        dataType: 'json',
        success: function(response) {
            if(response.redirectUrl){
                window.location.href = response.redirectUrl;
            } else {
                window.location.reload();
            }
        },
        error: function(xhr) {
            if (xhr.responseJSON && xhr.responseJSON.errors) {
                $.each(xhr.responseJSON.errors, function(field, messages) {
                    $('#' + field + '-error').empty();
                    var errorHtml = '<div class="text-danger">' + messages[0] + '</div>';
                    $('#' + field + '-error').append(errorHtml);
                });
            }
        }
    });
}

function formatRupiah(angka, prefix){
    var number_string = angka.replace(/[^,\d]/g, '').toString(),
    split   		= number_string.split(','),
    sisa     		= split[0].length % 3,
    rupiah     		= split[0].substr(0, sisa),
    ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if(ribuan){
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}

function generateRandomString(length = 8) {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:<>,.?/~"
    let password = ""

    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length)
        password += charset.charAt(randomIndex)
    }

    return password
}
