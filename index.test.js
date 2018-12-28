const validate = require('./index')

test('Valida pessoa', () => {

  const pessoa = {
    'lol': 'lol'
  }

  expect(
    validate.validatePessoa(pessoa)
  ).toEqual(false)

})

test('Valida pessoa invalida', () => {

  expect(
    validate.validatePessoa(null)
  ).toEqual(false)

})

test('Valida nome pessoa', () => {

  const pessoa = { name:  "Pedro" }

  expect(
    validate.validatePessoa(pessoa)
  ).toEqual(false)

})

test('Valida nome && cpf pessoa', () => {

  const pessoa = { name:  "Pedro", cpf: "123" }

  expect(
    validate.validatePessoa(pessoa)
  ).toEqual(false)

})

test('Valida nome && cpf pessoa', () => {

  const pessoa = { name:  "Pedro", cpf: "1234567", telefonesFixos: ['123456789'] }

  expect(
    validate.validatePessoa(pessoa)
  ).toEqual(true)

})

test('Valida nome && cpf & telefonesFixos como string pessoa', () => {

  const pessoa = { name:  "Pedro", cpf: "1234567", telefonesFixos: '123456789' }

  expect(
    validate.validatePessoa(pessoa)
  ).toEqual(false)

})

test('Valida nome && cpf & telefonesFixos como vazio', () => {

  const pessoa = { name:  "Pedro", cpf: "1234567", telefonesFixos: [] }

  expect(
    validate.validatePessoa(pessoa)
  ).toEqual(false)

})

test('Valida nome && cpf pessoa & telefone invalido', () => {

  const pessoa = { name:  "Pedro", cpf: "1234567", telefonesFixos: ['1'] }

  expect(
    validate.validatePessoa(pessoa)
  ).toEqual(false)

})