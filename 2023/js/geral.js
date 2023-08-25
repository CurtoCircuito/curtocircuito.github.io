idm = "pt-br";

mq = window.matchMedia("(max-width: 767px)");
tamimg = (mq.matches) ? `c-` : ``;
cormenu = (mq.matches) ? `var(--bg-cor)` : `var(--font-cor2)`;

meses = ["Janeiro", "Fevereiro", "MarÃ§o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

mesestres = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];

hoje = new Date();

endereco = '';
enderecof = '';
enderecofoto = `https://musaeum.hrn.one/autores/`;

function trata(a) {
  var b = a.toLowerCase();
  var c = b.replace(/à|á|â|ã/g, "a");
  var d = c.replace(/è|é|ê|ẽ/g, "e");
  var e = d.replace(/ì|í|î|ĩ/g, "i");
  var f = e.replace(/ò|ó|ô|õ/g, "o");
  var g = f.replace(/ù|ú|û|ũ/g, "u");
  var h = g.replace(/ç/g, "c");
  h = h.replace(/\(|\)|\-|\{|\}|\[|\]/g, "");
  return h;
}

function trata2(a) {
  var b = trata(a);
  var c = b.replace(/ /g, "-");
  return c;
}

function npagina(a,titulo,url) {
  /* let stateObj = { foo: a };
  history.pushState(stateObj, titulo, url);
  document.title = titulo; */
  tnpagina();
}

function tnpagina(){
    if(mq.matches){
            desmostra('div-lis');
  }
  scroll(0,0);
}

window.onpopstate = function(event) {
    var onde = window.location.href;
    window.location.href=onde;
}


function escreve(a,b) {
   var da = (b) ? b : "div-conteudo";
  document.getElementById(da).innerHTML = a;
}


function mostra(a,b){
    document.getElementById(a).style.display = "inline";
    if(b){
      document.getElementById(b).href = `javascript:desmostra('${a}','${b}')`;
    }
}

function desmostra(a,b){
    document.getElementById(a).style.display = "none";
    if(b){
      document.getElementById(b).href = `javascript:mostra('${a}','${b}')`;
    }
}

function mostramenu(){
  mostra('menu-cima-praticas');
  var mudar = document.getElementById('bt-menu');
  mudar.setAttribute('onclick', 'desmostramenu()');
  scroll(0,0);
}

function desmostramenu(){
  desmostra('menu-cima-praticas');
  var mudar = document.getElementById('bt-menu');
  mudar.setAttribute('onclick', 'mostramenu()');
}

function atvlink(a) {
  var b = a.replace(';a;','<a href="');
  var c = b.replace(';m;',' target="_blank" >');
  var d = c.replace(';d;','</a>');
  return d;
}

function mostrafiltro() {
    document.getElementById('acervo-div-filtro').style.display = "inline";
}

function escreveano() {
  var anohoje = new Date();
  if (anohoje.getFullYear() > 2023) {
    document.getElementById('datarodape').innerHTML = "/ " + anohoje.getFullYear();
  }
}

function chamaget(pg,funcao) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      funcao(this.responseText);
    }
  };
  xhttp.open("GET", pg, true);
  xhttp.send();
}

function chamapost(pg,parametros,funcao) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      funcao(this.responseText);
    }
  };
  xhttp.open("POST", pg, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(parametros);
}
