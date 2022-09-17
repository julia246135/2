$(document).ready(function() {

            $('#estado').click(function(e) {


                    e.preventDefault()

                    let dados = $('#cidade').val()
                    let status = $(this).attr('status')

                    if (option == 'SP' {

                            $('#estado').append('SAO PAULO')
                            $('#estado').attr('data-status', '2')

                        } else {

                            $('#estado').append('MANAUS')
                            $('#estado').attr('data-status', '1')
                        }

                        $.ajax({
                            type: 'GET',
                            dataType: 'JSON',
                            assync: true,

                            success: function(dados) {
                                $('#estado').val(dados.estados)
                                $('#cidade').val(dados.cidades)
                            }
                        })
                    })
            })