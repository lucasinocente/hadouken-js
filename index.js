function validatePessoa (pessoa) {

  if (!pessoa)
    return false

  if (pessoa != null)	{

    if (!pessoa.name || !pessoa.cpf || !pessoa.telefonesFixos) {
      return false
    }

    if (pessoa.telefonesFixos != null) {

      if(!Array.isArray(pessoa.telefonesFixos) || !pessoa.telefonesFixos.length) {
        return false
      }

      pessoa.telefonesFixos.forEach(function (telefone) {

        if (telefone != null) {

          if (telefone != "") {
              return false
          }
          if (telefone.length < 7) {
            return false
          }

        } else {

          validate = false
          return validate

        }

      })

    }

  }

  validate = true

  return validate

}

module.exports = {
	validatePessoa
}