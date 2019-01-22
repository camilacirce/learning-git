function obterDados(dia, mes, ano) {
  var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  var dataExata = new Date(ano, mes - 1, dia);
  var ageDifMs = Date.now() - dataExata.getTime();
  var ageDate = new Date(ageDifMs);
  return {
    nomeDoMes: meses[mes - 1],
    idade: Math.abs(ageDate.getUTCFullYear() - 1970)
  };
}