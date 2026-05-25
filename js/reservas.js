$(function () {
    const inputDate = $("#fecha")

    const hoy = new Date().toISOString().split("T")[0]

    inputDate.attr("min",hoy)

    $(document).on('click', '.btn-reservar', function () {
        const fecha = $("#fecha").val()
        if ( fecha != "" ) {
            alert($(this).val() + " <-> " + fecha)
        }else {
            alert("Debes elegir una fecha")
        }
    })

})