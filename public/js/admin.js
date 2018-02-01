$(document).ready(function() {

    $("#addItem").submit(function(e) {
        e.preventDefault();

        var item = $('#item').val();
        var price = $("#price").val();
        var discount = $("#discount").val();

        $.post('/admin/additem', {
            item: item,
            price: price,
            discount: discount 
        }).done(response => {
            if(response.ok == true) {
                alert(response.message);
                window.location.reload();
            } else {
                alert("couldn't add a new item");
            }
        })
    });

})