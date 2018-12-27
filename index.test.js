const validate = require('./index')

test('Valida pessoa', () => {

  const pessoa = {
    'lol': 'lol'
  }

  expect(
    validate.validatePessoa(pessoa)
  ).toEqual(false)

})