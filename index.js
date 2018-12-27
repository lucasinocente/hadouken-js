function validatePessoa (pessoa) {

  if (pessoa != null)	{

    if (pessoa.cpf != null) {

      if (pessoa.name != null) 	{

        if (pessoa.telefonesFixos != null) {

          pessoa.telefonesFixos.forEach(function (telefone) {

            if (telefone != null) {

              if (telefone != "") {
                  validate = false
                  return validate
              } else {
                if (telefone.length < 7) {
                  validate = false
                  return validate
                }
              }

            } else {

              validate = false
              return validate

            }

          })

        }
      }
    }

  }

  validate = true

  return validate

}

module.exports = {
	validatePessoa
}