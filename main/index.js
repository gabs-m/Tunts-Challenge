const { editarTabela } = require('./editarGoogleSheet');

(async function () {
  try {
    await editarTabela()
    console.log('OK');
  } catch (error) {
    console.error(error)
  }
})()