// ==UserScript==
// @name        SiscadGradesEdit
// @namespace   SiscadGrades.siscad
// @description Auxilia o lançamento de notas no Siscad - via @RenanMarks
// @include     https://siscad.ufms.br/titan.php?toSection=5&toAction=edit*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==
var buttonHandler = function () {
  var column = $('#notas tbody tr td:nth-child(' + this.value + ') input.inputType');
  var notasCSV = prompt('Informe notas separadas por espaços');
  notasCSV = notasCSV.split(' ');
  console.log(notasCSV);
  column.each(function (i, e) {
    $(e).val(notasCSV[i]);
  });
}
var cabecalhos = $('td.cabecalho[id$=\'prova\']');
cabecalhos.each(function (i, e) {
  var text = $(e).text().trim();
  $(e).html($('<button style="padding: 0;" type="button" value="' + (i + 5) + '" id="csv' + i + '">' + text + '</button>'));
  $('#csv' + i).on('click', buttonHandler);
});