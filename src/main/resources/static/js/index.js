let pesel = document.getElementById("PESEL");
let zipCode = document.getElementById("zip");

pesel.addEventListener("focusout", validatePESEL);
pesel.addEventListener("focusin", test);
// zipCode.addEventListener("onfocus", test);

function removeSelection() {
}

function test() {
    pesel.getS
}

function validatePESEL() {
    if (pesel.value.length != 11) {
        pesel.classList.add("wrong-input");
    } else {
        pesel.classList.remove("wrong-input");
    }
}

function validateZip() {
    if (zipCode.value.length != 6) {
        zipCode.classList.add("wrong-input");
    } else {
        zipCode.classList.remove("wrong-input");
    }
}

function validateGlass(glass) {
    var regex = new RegExp("");
    var regex = new RegExp("e");
    var regex = new RegExp("e");
    var regex = new RegExp("e");
    var isValid = regex.test(glass);
}

jQuery.extend(jQuery.expr[':'], {
    focusable: function (el, index, selector) {
        return $(el).is('a, button, :input, [tabindex]');
    }
});

$(document).on('keydown', ':focusable', function (e) {
    if (e.which == 13) {
        e.preventDefault();
        // Get all focusable elements on the page
        var $canfocus = $(':focusable');
        var index = $canfocus.index(this) + 1;
        if (index >= $canfocus.length) index = 0;
        $canfocus.eq(index).focus();
    }
});