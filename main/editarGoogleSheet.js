const {client_email, private_key} = require("./key.json")
const { GoogleSpreadsheet } = require('google-spreadsheet');
const editarTabela = async () => {
    const document = new GoogleSpreadsheet('1_ARfixKCTYCLliZFI4nOM6HRO3gLbZvNdxUdUupy0B0')
    document.useServiceAccountAuth({ client_email, private_key })
    await document.loadInfo()
    const sheet = document.sheetsById[0]
    await sheet.loadHeaderRow()
    sheet.headerValues = ['Matricula', 'Aluno', 'Faltas', 'P1', 'P2', 'P3', 'Situação', 'Nota para Aprovação Final']
  
    const rows = await sheet.getRows()
    
    const alunosLinha = rows.splice(2)
  
    const totalAulas = parseInt(String(rows[0]._rawData).split(': ')[1], 10)
  
    const rawStudentData = alunosLinha.map((row) => {
      const rawData = row._rawData
      console.log(rawData);
      return {
        Matricula: parseInt(rawData[0], 10),
        Nome: rawData[1],
        Faltas: parseInt(rawData[2], 10),
        P1: parseInt(rawData[3], 10),
        P2: parseInt(rawData[4], 10),
        P3: parseInt(rawData[5], 10),
        Status: '',
        NotaParaFinal: 0
      }
    })
  
    const calculatedStudents = rawStudentData.map((student) => {
      if (student.Faltas > totalAulas / 4) {
        student.Status = 'Reprovado por Falta'
        return student
      }
      const media = (student.P1 + student.P2 + student.P3) / 3
      if (media < 50) {
        student.Status = 'Reprovado por Nota'
        return student
      }
      if (media >= 70) {
        student.Status = 'Aprovado'
        return student
      }
      const notaAprovacaoFinal = 100 - media
      student.NotaParaFinal = Math.ceil(notaAprovacaoFinal)
      student.Status = 'Exame Final'
      return student
    })
    
    for (const [index, studentRow] of alunosLinha.entries()) {
      if (parseInt(studentRow.Matricula) === calculatedStudents[index].Matricula) {
        studentRow.Situação = calculatedStudents[index].Status
        studentRow['Nota para Aprovação Final'] = calculatedStudents[index].NotaParaFinal
        await studentRow.save()
        console.log(studentRow)
      }
    }
    console.log(calculatedStudents)
  }
  
  module.exports = {
    editarTabela
  }