 $(document).ready(function() {
    // Get the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    
    // Get the value of srckey from the URL
    const srckeyValue = urlParams.get('srckey');
    
    // Set the value of srckey to the hidden input field in the form
    $('#srckeyInput').val(srckeyValue);
});
function mytime() {
    $("#btnSubmit").removeAttr("disabled");
}

function SubmitForm() {
    $("#btnSubmit").attr("disabled", "disabled");
    setTimeout(mytime, 4000);
    var jsFormData = $("#contact-form").serialize();
    $.ajax({
        type: "POST",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSdgVuNsFI_3_8tMUNJPcjYcvLerIRRPi3CA1FTTc3pQgaY_tg/formResponse",
        data: jsFormData,
        async: false,
        dataType: "xml",
        success: function (data) {
            SuccessResponse();
        }
    });
    SuccessResponse();
};

function SuccessResponse() {
    $('#btnSubmit').attr("disabled", true);
    $("#contact-form :input").attr('disabled', true);
    window.location.href = 'thanks.html';// Open the thanks page after successful submission
};

function validateForm() {
    $("#contact-form").validate();
};
$().ready(function () {
    // validate the comment form when it is submitted
    $("#contact-form").validate({
        rules: {
            "entry.710811246": {
                required: true,
                digits: true
            }
        }
    });
});