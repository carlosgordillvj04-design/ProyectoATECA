$(function () {
    const inputDate = $("#fecha")

    const hoy = new Date().toISOString().split("T")[0]

    inputDate.attr("min", hoy)

    $(document).on('click', '.btn-reservar', function () {
        const fecha = $("#fecha").val()
        if (fecha != "") {
            alert($(this).val() + " <-> " + fecha)
            const elemento = $(`table tr:nth-child(${$(this).val()})`)
            console.log(elemento);
            elemento.find("span").addClass("reservado").html("reservado")
            $(this).html("cancelar")
        } else {
            alert("Debes elegir una fecha")
        }
    })

    $(".btn-verReservas").on('click', function () {
        alert("Click this!")
    })

})