lista = [];
listas = {
  "todos" : [],
  "antes" : [],
  "durante" : [],
  "depois" : []
};
lvalendo = "tudo",
listaprodutoras = {};
listaprogramas = {};
listaformato = {};
listaformato = {};
listaplataforma = {};
listahoras = 0;
npg = 15

ctx = ``;
chart = '';

inicioht = new Date(`2023-08-17T12:00:00-06:00`);
fimht = new Date(`2023-08-20T12:00:00-06:00`);

const listacores = ["97, 255, 136","255, 97, 97","97, 97, 255","255, 99, 132","255, 159, 64","255, 205, 86","75, 192, 192","54, 162, 235","153, 102, 255","251, 103, 207","211, 213, 017"];
console.log(listacores.length);


/*       FUNÇÕES       */

// gerais

function dinamicorespblog(indc,mnt,npg,div,pg,geral) {

  var txt = '';
  var min = pg * npg;
  var tam = indc.length;
  var max = (min + npg >  tam ? tam : (min + npg));
  if (!mq.matches) {
    var cont = 0;
    var col1 = '<div class="triplo" >';
    var col2 = '<div class="triplo" >';
    var col3 = '<div class="triplo" >';
    for(var i = min; i < max; i++) {
      var n = indc[i];
      var val = mnt(n);
      if(cont == 0) {
        col1 += val;
        cont = 1;
      }
      else if(cont == 1) {
        col2 += val;
        cont = 2;
      }
      else if(cont == 2) {
        col3 += val;
        cont = 0;
      }
    }
    col1 += '</div>';
    col2 += '</div>';
    col3 += '</div>';

    txt += col1 + col2 + col3;
  }

  else {
    for(var i = min; i < max; i++) {
      var n = indc[i];
      txt += mnt(n);
    }
  }
  var ver = Math.ceil(tam/npg);
  if(ver > 1) {
    txt += '<div class="central" style="margin: 20px 0;" >';
    for(var pgn = 0; pgn < ver; pgn++ ) {
      let pgclass = (pgn === pg) ? 'npg-atual' : 'npg-outro';
      txt += `<a href="javascript:dinamicorespblog(${geral},${npg},'${div}',${pgn},'${geral}')" class="${pgclass}" >${(pgn + 1)}</a>`;
    }

    txt += '</div>';
  }
  escreve(txt,div);
  scroll(0,0);
}


// tema

function mudatema(t){
  let muda = (t === `d`) ? `l` : `d`;
  let mudanome = (t === `d`) ? `light` : `dark`;
  document.getElementById(`div-conteudo`).className = `central-${t}`;
  let lk = document.getElementById(`lk-tema`);
  lk.href = `javascript:mudatema('${muda}')`;
  lk.innerHTML = `<svg  viewBox="0 0 200 200" style="width: 20px;" >${desenhatema(t)}`;
}

function desenhatema(t,cor){
  let txt = {
    "d" : "<defs      id= \"defs8893 \" /><sodipodi:namedview      id= \"namedview8891 \"      pagecolor= \"#ffffff \"      bordercolor= \"#000000 \"      borderopacity= \"0.25 \"      inkscape:showpageshadow= \"2 \"      inkscape:pageopacity= \"0.0 \"      inkscape:pagecheckerboard= \"0 \"      inkscape:deskcolor= \"#d1d1d1 \" /><inkscape:clipboard      min= \"8604.5839,2753.747 \"      max= \"8795.2214,2944.6376 \"      geom-min= \"8604.5839,2753.747 \"      geom-max= \"8795.2214,2944.6376 \" /><g      id= \"g8895 \"      transform= \"matrix(3.7795276,0,0,3.7795276,-8604.584,-2753.747) \"><path        id= \"path1171 \"        style= \"fill:var(--font-cor-menu);stroke-width:2.82592 \"        d= \"m 2301.7709,728.59555 a 2.9146259,2.9146259 0 0 0 -2.9147,2.91471 2.9146259,2.9146259 0 0 0 2.9147,2.91469 2.9146259,2.9146259 0 0 0 2.9144,-2.91469 2.9146259,2.9146259 0 0 0 -2.9144,-2.91471 z m -15.9144,6.44673 a 2.9146259,2.9146259 0 0 0 -1.9519,0.85164 2.9146259,2.9146259 0 0 0 0,4.12181 2.9146259,2.9146259 0 0 0 4.1219,3.2e-4 2.9146259,2.9146259 0 0 0 0,-4.12213 2.9146259,2.9146259 0 0 0 -2.17,-0.85164 z m 31.679,0.0644 a 2.9146259,2.9146259 0 0 0 -1.9518,0.85164 2.9146259,2.9146259 0 0 0 0,4.12181 2.9146259,2.9146259 0 0 0 4.1218,0 2.9146259,2.9146259 0 0 0 0,-4.12181 2.9146259,2.9146259 0 0 0 -2.17,-0.85164 z m -15.7068,2.99136 c -4.1211,-1.9e-4 -8.2162,1.69611 -11.1304,4.61003 -2.9143,2.91391 -4.6113,7.00932 -4.6115,11.13043 -1e-4,4.12137 1.6959,8.21717 4.6101,11.13143 2.9143,2.91424 7.0104,4.61022 11.1318,4.61002 4.1211,-2.4e-4 8.2163,-1.69682 11.1301,-4.61102 2.9139,-2.91421 4.6101,-7.00934 4.61,-11.13043 -3e-4,-4.12084 -1.6961,-8.21656 -4.61,-11.13043 -2.9138,-2.91387 -7.0093,-4.60979 -11.1301,-4.61003 z m 0,3.38932 a 12.351532,12.351532 0 0 1 12.3514,12.35147 12.351532,12.351532 0 0 1 -12.3514,12.35147 12.351532,12.351532 0 0 1 -12.3515,-12.35147 12.351532,12.351532 0 0 1 12.3515,-12.35147 z m 22.3259,9.44374 a 2.9146259,2.9146259 0 0 0 -2.9147,2.9147 2.9146259,2.9146259 0 0 0 2.9147,2.9147 2.9146259,2.9146259 0 0 0 2.9144,-2.9147 2.9146259,2.9146259 0 0 0 -2.9144,-2.9147 z m -44.6104,0.14172 a 2.9146259,2.9146259 0 0 0 -2.9147,2.91503 2.9146259,2.9146259 0 0 0 2.9147,2.91438 2.9146259,2.9146259 0 0 0 2.9144,-2.91438 2.9146259,2.9146259 0 0 0 -2.9144,-2.91503 z m 6.3621,15.68237 a 2.9146259,2.9146259 0 0 0 -1.9518,0.85164 2.9146259,2.9146259 0 0 0 0,4.12213 2.9146259,2.9146259 0 0 0 4.1218,0 2.9146259,2.9146259 0 0 0 2e-4,-4.12213 2.9146259,2.9146259 0 0 0 -2.1702,-0.85164 z m 31.5526,0.0541 a 2.9146259,2.9146259 0 0 0 -1.9522,0.85131 2.9146259,2.9146259 0 0 0 0,4.12214 2.9146259,2.9146259 0 0 0 4.1222,0 2.9146259,2.9146259 0 0 0 0,-4.12214 2.9146259,2.9146259 0 0 0 -2.17,-0.85131 z m -15.6013,6.46333 a 2.9146259,2.9146259 0 0 0 -2.9148,2.91471 2.9146259,2.9146259 0 0 0 2.9148,2.9147 2.9146259,2.9146259 0 0 0 2.9147,-2.9147 2.9146259,2.9146259 0 0 0 -2.9147,-2.91471 z \" /><path        style= \"fill:var(--font-cor-menu);stroke-width:10.2468 \"        d= \"m 2296.0448,764.97412 c -3.6575,-1.85174 -5.4707,-4.05135 -6.6963,-8.1237 -1.113,-3.6983 -0.5304,-7.01243 1.8517,-10.53287 6.0537,-8.9469 19.9851,-6.8205 23.0843,3.52342 1.078,3.59843 0.8563,5.68698 -0.9911,9.33013 -3.4448,6.7932 -10.5628,9.18796 -17.2486,5.80302 z \"        id= \"path8887 \" /></g></svg>",
  "l" : " <defs      id=\"defs3373\" /><sodipodi:namedview      id=\"namedview3371\"      pagecolor=\"#ffffff\"      bordercolor=\"#000000\"      borderopacity=\"0.25\"      inkscape:showpageshadow=\"2\"      inkscape:pageopacity=\"0.0\"      inkscape:pagecheckerboard=\"0\"      inkscape:deskcolor=\"#d1d1d1\" /><inkscape:clipboard      style=\"font-variation-settings:normal;opacity:1;vector-effect:none;fill:var(--font-cor-menu);fill-opacity:1;stroke-width:16.62988346;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;-inkscape-stroke:none;stop-color:#000000;stop-opacity:1\"      min=\"8881.8127,2755.3207\"      max=\"9062.2836,2940.2132\"      geom-min=\"8881.8127,2755.3207\"      geom-max=\"9062.2836,2940.2132\" /><g      id=\"g3375\"      transform=\"matrix(3.7795276,0,0,3.7795276,-8881.8128,-2755.3207)\"><path        id=\"path1067\"        style=\"fill:var(--font-cor-menu);stroke-width:4.39999\"        d=\"m 2373.2681,729.01204 v 5.1e-4 c -1.2121,7e-5 -2.4228,0.0952 -3.6199,0.27906 1.3942,1.46271 2.5493,3.13602 3.4225,4.95835 0.036,-0.002 0.072,-0.003 0.1075,-0.005 1.1554,2.51242 1.7554,5.24448 1.7591,8.00985 -1e-4,10.62099 -8.6099,19.23106 -19.2309,19.23138 -0.055,-0.002 -0.1099,-0.004 -0.1648,-0.007 0.083,0.009 -5.1961,-0.49101 -5.562,-0.60409 1.1875,3.70688 3.2402,7.13925 5.9935,9.89242 4.5276,4.5279 10.8915,7.16358 17.295,7.1639 6.4038,3.1e-4 12.7687,-2.63387 17.2972,-7.16184 4.5282,-4.52795 7.1636,-10.89331 7.1639,-17.29713 3e-4,-6.40425 -2.6356,-12.76813 -7.1639,-17.29662 -4.5285,-4.52848 -10.893,-7.16421 -17.2972,-7.1639 z m 5.8224,6.14536 c 7.9802,2.53503 13.403,9.94203 13.409,18.31516 -10e-5,10.62118 -8.6102,19.23134 -19.2314,19.23138 -5.381,-0.009 -10.5122,-2.27195 -14.1474,-6.23941 5.2025,-0.75283 10.1625,-3.19187 13.8828,-6.91172 4.5284,-4.52797 7.1636,-10.8933 7.1639,-17.29714 2e-4,-2.40366 -0.3735,-4.80091 -1.0769,-7.09827 z\"        sodipodi:nodetypes=\"cccccccccsssssscccccssc\" /></g></svg>"
  };

  return(txt[t]);
}

// CONF

function conf(){
  for(let e in episodios){
    listas['todos'].push(e);
    let datae = new Date(`${episodios[e].data}T12:00:00-06:00`);
    if(datae < inicioht){
      listas['antes'].push(e);
    }
    else if(datae > fimht){
      listas['depois'].push(e);
    }
    else{
      listas['durante'].push(e);
    }
  }
  pgconteudo(`todos`);
}

// CONTEUDO

function pgconteudo(ls){
  let titulo = {
    "todos" : "Todos",
    "antes" : "Antes do HackTown 2023",
    "durante" : "Durante do HackTown 2023",
    "depois" : "Depois do HackTown 2023"
  };
  let cont = 0;
  lista = [];
  listaprodutoras = {};
  listaprogramas = {};
  listaformatos = {};
  listaplataformas = {};
  listahoras = {
    "total" : 0,
    "programas" : 0,
    "produtoras" : 0,
    "plataformas" : 0,
    "episodios" : 0
  };
  lvalendo = ls;

  for(let i in listas[lvalendo]){
    let ep = listas[lvalendo][i];
    lista.push(ep);
    listahoras.total += episodios[ep].duracao;
    listahoras.episodios++;

    // produtoras
    for(let p in episodios[ep].produtoras){
      if(!listaprodutoras[episodios[ep].produtoras[p]]){
        listaprodutoras[episodios[ep].produtoras[p]] = {
          "tempo" : 0,
          "episodios" : []
        };
        listahoras.produtoras++;
      }
      listaprodutoras[episodios[ep].produtoras[p]].tempo += episodios[ep].duracao;
      listaprodutoras[episodios[ep].produtoras[p]].episodios.push(ep);
    }

    // plataformas
    for(let p in episodios[ep].plataformas){
      if(!listaplataformas[episodios[ep].plataformas[p]]){
        listaplataformas[episodios[ep].plataformas[p]] = {
          "tempo" : 0,
          "episodios" : []
        };
        listahoras.plataformas++;
      }
      listaplataformas[episodios[ep].plataformas[p]].tempo += episodios[ep].duracao;
      listaplataformas[episodios[ep].plataformas[p]].episodios.push(ep);
    }

    // Programas
    if(!listaprogramas[episodios[ep].programa]){
      listahoras.programas++;
      listaprogramas[episodios[ep].programa] = {
        "tempo" : 0,
        "episodios" : []
      }
    }
    listaprogramas[episodios[ep].programa].tempo += episodios[ep].duracao;
    listaprogramas[episodios[ep].programa].episodios.push(ep);

    // Formatos
    if(!listaformatos[episodios[ep].formato]){
      listaformatos[episodios[ep].formato] = {
        "tempo" : 0,
        "episodios" : []
      }
    }
    listaformatos[episodios[ep].formato].tempo += episodios[ep].duracao;
    listaformatos[episodios[ep].formato].episodios.push(ep);

  }
  lista.reverse();

  let txtfiltro = `<p><a href="javascript:esclista(listas['${lvalendo}'],'${titulo[ls]}')" ><h4>Todos (${listahoras.episodios})</h4></a></p>

  <h4>Por Plataforma</h4>`;

  let txtplataforma = `<table style="width: 100%;" >
  <tr>
    <th>Plataforma</th>
    <th>Episódios</th>
    <th>Horas</th>
  </tr>`;
  cont = 0;

  for(let p in listaplataformas){
    txtfiltro += `<p><a href="javascript:esclista(listaplataformas['${p}'].episodios,'Filtro pela plataforma ${p}')" >${p} (${listaplataformas[p].episodios.length})</a></p>`;

    let bg = `style="background: var(--bgt-cor);"`;

    if(cont === 0) {
      bg = '';
      cont = 1;
    }
    else {
      cont = 0;
    }

    txtplataforma += `<tr ${bg} >
      <td>${p}</td>
      <td>${listaplataformas[p].episodios.length}</td>
      <td>${ctempo(listaplataformas[p].tempo)}</td>
    </tr>`;
  }

  txtplataforma += `
</table>`;

  txtfiltro += `<h4>Por Produtora</h4>`;

  let txtprodutora = `<table style="width: 100%;" >
  <tr>
    <th>Produtora</th>
    <th>Episódios</th>
    <th>Horas</th>
  </tr>`;
  cont = 0;

  for(let p in listaprodutoras){
    txtfiltro += `<p><a href="javascript:esclista(listaprodutoras['${p}'].episodios,'Filtro pela produtora ${p}')" >${p} (${listaprodutoras[p].episodios.length})</a></p>`;

    let bg = `style="background: var(--bgt-cor);"`;

    if(cont === 0) {
      bg = '';
      cont = 1;
    }
    else {
      cont = 0;
    }

    txtprodutora += `<tr ${bg} >
      <td>${p}</td>
      <td>${listaprodutoras[p].episodios.length}</td>
      <td>${ctempo(listaprodutoras[p].tempo)}</td>
    </tr>`;
  }

  txtprodutora += `
  </table>`;

  txtfiltro += `<h4>Por Programa</h4>`;

  let txtprogramas = `<table style="width: 100%;" >
  <tr>
    <th>Programa</th>
    <th>Episódios</th>
    <th>Horas</th>
  </tr>`;
  cont = 0;

  for(let p in listaprogramas){
    txtfiltro += `<p><a href="javascript:esclista(listaprogramas['${p}'].episodios,'Filtro pelo programa ${p}')" >${p} (${listaprogramas[p].episodios.length})</a></p>`;

    let bg = `style="background: var(--bgt-cor);"`;

    if(cont === 0) {
      bg = '';
      cont = 1;
    }
    else {
      cont = 0;
    }

    txtprogramas += `<tr ${bg} >
      <td>${p}</td>
      <td>${listaprogramas[p].episodios.length}</td>
      <td>${ctempo(listaprogramas[p].tempo)}</td>
    </tr>`;
  }

  txtprogramas += `
  </table>`;

  txtfiltro += `<h4>Por Formato</h4>`;

  let txtformatos = `<table style="width: 100%;" >
  <tr>
    <th>Formato</th>
    <th>Episódios</th>
    <th>Horas</th>
  </tr>`;
  cont = 0;

  for(let p in listaformatos){
    txtfiltro += `<p><a href="javascript:esclista(listaformatos['${p}'].episodios,'Filtro pelo formato ${p}')" >${p} (${listaformatos[p].episodios.length})</a></p>`;
    let bg = `style="background: var(--bgt-cor);"`;

    if(cont === 0) {
      bg = '';
      cont = 1;
    }
    else {
      cont = 0;
    }

    txtformatos += `<tr ${bg} >
      <td>${p}</td>
      <td>${listaformatos[p].episodios.length}</td>
      <td>${ctempo(listaformatos[p].tempo)}</td>
    </tr>`;
  }

  txtformatos += `
  </table>`;


  let txt = `<h1 id="h-titulo"></h1>
  <h2>Programas</h2>
  <a href="javascript:mostra('div-filtro','lk-filtro')" id="lk-filtro" ><h3>${desfiltro('var(--d-cor5)','20px')} Filtrar</h3></a>
        <div class="corpo" id="div-filtro" style="display: none;" >
          ${txtfiltro}
        </div>
  <div class="corpo" id="div-episodios" ></div>
  <h2>Estatísticas</h2>
  <div class="corpo" style="background: var(--d-cor5);">
    <h3 style="color: #ffffff;" >Gerais</h3>
    <div class="triplo" >
      <span class="estatiticas-tx" style="color: #ffffff;" >mais de</span><br>
      <span class="estatiticas-hd" style="color: #ffffff;" >${Math.floor(listahoras.total/60)}</span><br>
      <span class="estatiticas-tx" style="color: #ffffff;" >horas de conteúdo</span>
    </div>
    <div class="triplo" >
      <span class="estatiticas-tx" style="color: #ffffff;" >com</span><br>
      <span class="estatiticas-hd" style="color: #ffffff;" >${listahoras.produtoras}</span><br>
      <span class="estatiticas-tx" style="color: #ffffff;" >produtoras envolvidas</span>
    </div>
    <div class="triplo" >
      <span class="estatiticas-tx" style="color: #ffffff;" >e</span><br>
      <span class="estatiticas-hd" style="color: #ffffff;" >${listahoras.episodios}</span><br>
      <span class="estatiticas-tx" style="color: #ffffff;" >episódios gravados</span>
    </div>
    <div class="triplo" >
      <span class="estatiticas-tx" style="color: #ffffff;" >em</span><br>
      <span class="estatiticas-hd" style="color: #ffffff;" >${listahoras.programas}</span><br>
      <span class="estatiticas-tx" style="color: #ffffff;" >programas</span>
    </div>
    <div class="triplo" >
      <span class="estatiticas-tx" style="color: #ffffff;" >para</span><br>
      <span class="estatiticas-hd" style="color: #ffffff;" >${listahoras.plataformas}</span><br>
      <span class="estatiticas-tx" style="color: #ffffff;" >plataformas</span>
    </div>
  </div>
  <h3>Por Plataforma</h3>
  <div class="corpo" >
    <div class="container" >
      ${txtplataforma}
    </div>
  </div>
  <h3>Por Formato</h3>
  <div class="corpo" >
    <div class="container" >
      ${txtformatos}
    </div>
  </div>
  <h3>Por Produtora</h3>
  <div class="corpo" >
    <div class="container" >
      ${txtprodutora}
    </div>
  </div>
  <h3>Por Programa</h3>
  <div class="corpo" >
    <div class="container" >
      ${txtprogramas}
    </div>
  </div>
  <h3>Visualizar por Gráfico</h3>
  <div class="corpo" >
    <div class="container" onchange="mntquadro()" >
    <input type="radio" id="rd-plataforma" name="radio-qual" value="plataforma" checked="checked" >
    <label for="rd-plataforma">por plataforma</label> |
    <input type="radio" id="rd-formato" name="radio-qual" value="formato"><label for="rd-formato">por formato</label> |
    <input type="radio" id="rd-produtora" name="radio-qual" value="produtora"><label for="rd-produtora">por produtora</label> |
    <input type="radio" id="rd-programa" name="radio-qual" value="programa"><label for="rd-programa">por programa</label><br>
      <input type="radio" id="rd-tempo" name="radio-por" value="tempo" checked="checked" > <label for="rd-tempo">por tempo (em minutos)</label> | <input type="radio" id="rd-episodio" name="radio-por" value="episodio">
      <label for="rd-episodio">por episódios</label><br>
      <canvas id="myChart"></canvas>
    </div>
  </div>
  `;

  escreve(txt);

  esclista(lista,titulo[ls]);
  mntquadro();
}

function esclista(listav,titulo){
  lista = listav;
  desmostra('div-filtro','lk-filtro');
  escreve(titulo,`h-titulo`);
  dinamicorespblog(lista,divepisodio,npg,'div-episodios',0,`lista,divepisodio`);
}

tamplat = '45px';

function ctempo(t){
  let pdu = Math.floor(t / 60);
  return `${pdu}h,${t - (pdu*60)}min`;
}

function divepisodio(e){
  let datae = new Date(`${episodios[e].data}T12:00:00-06:00`);
  let duracao = ctempo(episodios[e].duracao);
  let produtora = ``;
  for(let p in episodios[e].produtoras){
    produtora += `${episodios[e].produtoras[p]}; `;
  }
  let imgs = ``;

  if(episodios[e].plataformas.indexOf('YouTube') !== -1){
    imgs += `<label title="Youtube" >${desyoutube('var(--font-cor2)',tamplat)}</label>`;
  }
  if(episodios[e].plataformas.indexOf('Instagram') !== -1){
    imgs += `<label title="Instagram" >${desig('var(--font-cor2)',tamplat)}</label>`;
  }
  if(episodios[e].plataformas.indexOf('Facebook') !== -1){
    imgs += `<label title="Facebook" >${desfb('var(--font-cor2)',tamplat)}</label>`;
  }
  if(episodios[e].plataformas.indexOf('Spotify') !== -1){
    imgs += `<label title="Spotify" >${desspotify('var(--font-cor2)',tamplat)}</label>`;
  }

  return `<a href="${episodios[e].link}" target="_blank" rel="noopener noreferrer"><div class="celula-episodio" >
  <div class="celula-img" style="background: url('${episodios[e].img}'); background-repeat: no-repeat; background-position: center; background-size: cover;" ></div><br>
    <span class="celula-titulo" >${episodios[e].nome}</span>
    <p class="celula-data" >${datae.getDate()} de ${meses[datae.getMonth()]} de ${datae.getFullYear()}</p>
    <p class="celula-info" >Programa: <b>${episodios[e].programa}</b></p>
    <p class="celula-info" >Produção: <b>${produtora}</b></p>
    <p class="celula-info" >Duração: <b>${duracao}</b></p>
    <p class="celula-info" >Formato: <b>${episodios[e].formato}</b></p>
    <p>${imgs}</p>
  </div></a>`;
}

function mntquadro(){
  ctx = document.getElementById('myChart').getContext('2d');
     ctx.clearRect(0, 0, ctx.width, ctx.height);
     if(chart) {
       chart.destroy();
     }
  let rb1 = document.getElementsByName('radio-qual');
  let rb2 = document.getElementsByName('radio-por');
  let qualp = ``;
  let por = ``;

  for(let r in rb1){
    if(rb1[r].checked){
      qualp = rb1[r].value;
    }
  }
  for(let r in rb2){
    if(rb2[r].checked){
      por = rb2[r].value;
    }
  }

  let tipo = `bar`;
  let dados = {
    labels: [],
    datasets: [{
      label: '',
      data: [],
      backgroundColor: [],
      borderWidth: 1
    }]
  };
  let cor = 0;

  /*
  listaprodutoras = {};
  listaprogramas = {};
  listaformatos = {};
  listaplataformas = {};
  */

  if(qualp === 'formato'){
    tipo = `doughnut`;
    for(let p in listaformatos){
      dados.labels.push(p);
      if(por === 'tempo'){
        dados.datasets[0].data.push(listaformatos[p].tempo);
      }
      else {
        dados.datasets[0].data.push(listaformatos[p].episodios.length);
      }
      dados.datasets[0].backgroundColor.push(`rgba(${listacores[cor]},.5)`);
      if(cor === (listacores.length -1)){
        cor = 0;
      }
      else{
        cor++;
      }
    }
  }
  else if(qualp === 'plataforma'){
    for(let p in listaplataformas){
      dados.labels.push(p);
      if(por === 'tempo'){
        dados.datasets[0].data.push(listaplataformas[p].tempo);
      }
      else {
        dados.datasets[0].data.push(listaplataformas[p].episodios.length);
      }
      dados.datasets[0].backgroundColor.push(`rgba(${listacores[cor]},.5)`);
      if(cor === (listacores.length -1)){
        cor = 0;
      }
      else{
        cor++;
      }
    }
  }
  else if(qualp === 'produtora'){
    for(let p in listaprodutoras){
      dados.labels.push(p);
      if(por === 'tempo'){
        dados.datasets[0].data.push(listaprodutoras[p].tempo);
      }
      else {
        dados.datasets[0].data.push(listaprodutoras[p].episodios.length);
      }
      dados.datasets[0].backgroundColor.push(`rgba(${listacores[cor]},.5)`);
      if(cor === (listacores.length -1)){
        cor = 0;
      }
      else{
        cor++;
      }
    }
  }
  else if(qualp === 'programa'){
    for(let p in listaprogramas){
      dados.labels.push(p);
      if(por === 'tempo'){
        dados.datasets[0].data.push(listaprogramas[p].tempo);
      }
      else {
        dados.datasets[0].data.push(listaprogramas[p].episodios.length);
      }
      dados.datasets[0].backgroundColor.push(`rgba(${listacores[cor]},.5)`);
      if(cor === (listacores.length -1)){
        cor = 0;
      }
      else{
        cor++;
      }
    }
  }

  chart = new Chart(ctx, {
    type: tipo, //'doughnut',//'bar',
    data: dados,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}


// IMAGENS

function desig(cor,tam) {
  return `<svg  viewBox="0 0 512 512" width="${tam}" >
  <defs
       id="defs8209" /><sodipodi:namedview
       id="namedview8207"
       pagecolor="#ffffff"
       bordercolor="#000000"
       borderopacity="0.25"
       inkscape:showpageshadow="2"
       inkscape:pageopacity="0.0"
       inkscape:pagecheckerboard="0"
       inkscape:deskcolor="#d1d1d1" /><inkscape:clipboard
       min="1982.4496,2293.0796"
       max="2549.3788,2860.0087"
       geom-min="1982.4496,2293.0796"
       geom-max="2549.3788,2860.0087" /><g
       id="g8211"
       transform="matrix(3.7795276,0,0,3.7795276,-1982.4497,-2293.0796)"><rect
         style="fill:#ff00ff;fill-opacity:0;stroke-width:4.34818"
         id="rect3120"
         width="150"
         height="150"
         x="524.52313"
         y="606.71063" /><path
         style="fill:${cor};stroke-width:0.0750052"
         d="m 572.03447,741.64059 c -12.4212,-0.82811 -23.55764,-8.35117 -29.02463,-19.60716 -1.97854,-4.07362 -3.0847,-8.26772 -3.41239,-12.93842 -0.10486,-1.49455 -0.10486,-53.25935 0,-54.75389 0.16029,-2.28475 0.45344,-4.16538 0.97307,-6.24254 2.06996,-8.2745 7.18054,-15.56358 14.28773,-20.37819 5.22725,-3.54109 10.98483,-5.51107 17.32495,-5.92779 1.66185,-0.10923 53.01957,-0.10923 54.68144,0 8.09568,0.53211 15.47441,3.69628 21.45024,9.19836 3.79889,3.49772 6.87399,7.98113 8.76183,12.77441 1.37677,3.49575 2.11936,6.81589 2.37376,10.61325 0.10234,1.52764 0.10313,53.13465 0,54.67888 -0.65232,9.8477 -5.34281,18.85603 -13.01158,24.98939 -5.66561,4.53133 -12.32812,7.1173 -19.57637,7.59843 -1.35795,0.0901 -53.47345,0.0856 -54.8289,-0.005 z m 55.76358,-9.31709 c 5.30468,-0.73125 9.70654,-2.67975 13.63998,-6.03777 4.4346,-3.78588 7.51106,-9.23043 8.48464,-15.01557 0.35665,-2.11914 0.34236,-0.88736 0.34236,-29.51459 0,-29.01743 0.0181,-27.60648 -0.38336,-29.81462 -0.77564,-4.26595 -2.52103,-8.09146 -5.25297,-11.51332 -0.84538,-1.05884 -2.75553,-2.96899 -3.81434,-3.81434 -3.81792,-3.04813 -8.19767,-4.88686 -13.10595,-5.50218 -1.0102,-0.12664 -2.5891,-0.13415 -28.222,-0.13415 -25.91511,0 -27.19976,0.006 -28.202,0.13775 -4.94581,0.64879 -9.27892,2.47361 -13.05092,5.49616 -1.06359,0.85227 -2.97276,2.76265 -3.81434,3.81676 -3.12391,3.91279 -4.98267,8.42009 -5.53672,13.42596 -0.1472,1.32999 -0.1472,54.39896 0,55.72895 1.02358,9.24811 6.67339,16.99577 15.12647,20.74316 2.33044,1.03313 5.17494,1.78612 7.61304,2.01532 0.47441,0.0446 0.98069,0.0927 1.12508,0.10696 0.14438,0.0142 12.37963,0.021 27.18943,0.015 25.00416,-0.01 26.99365,-0.0198 27.8616,-0.13962 z m -29.66173,-18.32305 c -1.07384,-0.066 -2.44516,-0.19621 -3.14479,-0.29855 -5.41139,-0.79155 -10.49081,-2.8981 -14.78148,-6.13021 -1.43935,-1.08424 -2.16442,-1.71941 -3.56438,-3.12248 -5.27469,-5.28639 -8.44377,-11.95894 -9.27133,-19.52093 -0.17167,-1.56866 -0.17167,-4.85178 0,-6.42043 0.8131,-7.42984 3.88677,-14.00914 9.00836,-19.28273 5.42249,-5.58342 12.48936,-8.95351 20.32852,-9.69437 1.25467,-0.11858 4.37072,-0.11858 5.6254,0 7.8756,0.7443 14.96403,4.14002 20.40145,9.77331 9.48188,9.82347 11.7827,24.42158 5.77297,36.62815 -2.55309,5.18567 -6.59258,9.73396 -11.43802,12.87868 -4.39003,2.84918 -9.43267,4.5989 -14.6436,5.08113 -0.89878,0.0832 -3.59584,0.15129 -4.2931,0.10843 z m 4.12221,-9.36881 c 10.10727,-1.18786 18.24197,-8.8661 19.98472,-18.86329 0.26664,-1.52956 0.33224,-2.32926 0.33224,-4.05029 0,-1.72102 -0.0656,-2.52072 -0.33224,-4.05028 -0.65964,-3.78416 -2.27576,-7.37188 -4.68342,-10.3972 -0.77604,-0.97512 -2.65216,-2.85044 -3.61255,-3.61099 -3.32892,-2.63625 -7.11855,-4.23812 -11.42315,-4.82855 -1.6485,-0.22612 -4.35193,-0.22612 -6.00043,0 -5.31419,0.7289 -9.89782,3.0216 -13.54629,6.77576 -3.649,3.75472 -5.74961,8.23224 -6.41491,13.67359 -0.11828,0.96734 -0.11828,3.90801 0,4.87535 0.68562,5.60756 2.98957,10.36712 6.8091,14.06641 4.09808,3.96907 8.99649,6.12606 14.87723,6.55112 0.75325,0.0544 3.02369,-0.0258 4.0097,-0.14163 z m 30.98027,-50.67112 c -4.01066,-0.54494 -6.74402,-4.45982 -5.84761,-8.37532 0.59671,-2.60638 2.59269,-4.59422 5.26729,-5.24577 0.68495,-0.16686 2.27584,-0.16686 2.9608,0 1.77129,0.4315 3.27481,1.45231 4.24373,2.88126 0.919,1.35537 1.33045,3.00574 1.14843,4.60653 -0.29103,2.55932 -1.94766,4.74573 -4.31101,5.68967 -1.05927,0.42307 -2.37345,0.59149 -3.46163,0.44363 z"
         id="path8203" /></g></svg>`;
}

function desfb(cor,tam) {
  return `<svg  viewBox="0 0 512 512" width="${tam}" >
  <defs
     id="defs6196" /><sodipodi:namedview
     id="namedview6194"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1" /><inkscape:clipboard
     min="1025.5339,1276.7712"
     max="1592.463,1843.7003"
     geom-min="1025.5339,1276.7712"
     geom-max="1592.463,1843.7003" /><g
     id="g6198"
     transform="matrix(3.7795276,0,0,3.7795276,-1025.5339,-1276.7712)"><rect
       style="fill:#ff00ff;fill-opacity:0;stroke-width:4.34818"
       id="rect3120"
       width="150"
       height="150"
       x="271.33917"
       y="337.81238" /><path
       style="fill:${cor};stroke-width:0.234375"
       d="m 317.96608,416.72434 h 13.15383 v 54.15257 c 0,1.06922 0.86625,1.93547 1.93547,1.93547 h 22.30289 c 1.06922,0 1.93546,-0.86625 1.93546,-1.93547 v -53.89734 h 15.12164 c 0.98321,0 1.81055,-0.73781 1.92281,-1.71445 l 2.29665,-19.93617 c 0.063,-0.54844 -0.11062,-1.09781 -0.47766,-1.50937 -0.36726,-0.4118 -0.89297,-0.64758 -1.44469,-0.64758 h -17.41781 v -12.49712 c 0,-3.7671 2.02828,-5.6775 6.02953,-5.6775 0.57024,0 11.38828,0 11.38828,0 1.06922,0 1.93548,-0.86672 1.93548,-1.93546 v -18.29976 c 0,-1.06922 -0.86626,-1.93548 -1.93548,-1.93548 h -15.69491 c -0.11063,-0.006 -0.35649,-0.0143 -0.71884,-0.0143 -2.7232,0 -12.1889,0.53461 -19.66616,7.41329 -8.2847,7.62281 -7.13297,16.7496 -6.85782,18.3321 v 14.61375 h -13.8089 c -1.06922,0 -1.93547,0.86625 -1.93547,1.93547 v 19.68164 c 2.4e-4,1.06898 0.86648,1.9357 1.9357,1.9357 z"
       id="path2" /></g></svg>`;
}

function desyoutube(cor,tam) {
  return `<svg  viewBox="0 0 552 512" width="${tam}" >
  <defs
     id="defs8724" /><sodipodi:namedview
     id="namedview8722"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1" /><inkscape:clipboard
     min="3604.0254,4064.6171"
     max="4170.9546,4631.5462"
     geom-min="3604.0254,4064.6171"
     geom-max="4170.9546,4631.5462" /><g
     id="g8726"
     transform="matrix(3.7795276,0,0,3.7795276,-3604.0255,-4064.6171)"><rect
       style="fill:#ff00ff;fill-opacity:0;stroke-width:4.34818"
       id="rect3120"
       width="150"
       height="150"
       x="953.56506"
       y="1075.4299" /><path
       style="fill:${cor};stroke-width:0.0997614"
       d="m 1022.8686,1192.381 c -0.023,-0.02 -2.8923,-0.089 -6.3765,-0.1523 -8.6698,-0.1576 -11.326,-0.2501 -20.35133,-0.7087 -2.45068,-0.1245 -4.91641,-0.3248 -8.0807,-0.6561 -3.8696,-0.4052 -5.95149,-0.783 -7.5971,-1.3787 -0.81198,-0.2939 -1.24902,-0.5016 -2.52869,-1.2013 -1.45708,-0.7968 -3.46763,-2.6497 -4.60678,-4.2457 -1.8684,-2.6177 -2.60478,-4.9602 -3.41838,-10.874 -0.68748,-4.9973 -1.3345,-15.923 -1.344,-22.6958 -0.005,-3.4243 0.40401,-13.127 0.68518,-16.2611 0.0787,-0.8779 0.18924,-2.1574 0.24553,-2.8432 0.2593,-3.1588 0.94757,-7.5433 1.51903,-9.6769 1.24152,-4.6351 4.77931,-8.5836 9.24138,-10.314 2.04267,-0.7921 4.71231,-1.2174 10.99621,-1.7517 9.29325,-0.7901 33.31275,-1.3898 44.64325,-1.1145 2.6337,0.064 6.9532,0.1601 9.5989,0.2136 2.6457,0.053 5.8106,0.1432 7.0332,0.1993 7.1666,0.329 11.172,0.5561 13.0969,0.7428 3.3645,0.3263 5.5926,0.5618 5.7436,0.607 0.086,0.026 0.6026,0.1095 1.1473,0.1859 0.5446,0.077 1.436,0.2339 1.9809,0.3498 5.2248,1.1114 9.3522,4.6348 11.1112,9.4851 0.7612,2.0992 1.6709,7.0467 2.0177,10.9738 0.056,0.631 0.1692,1.9104 0.2521,2.8432 0.3144,3.5382 0.6928,12.433 0.6875,16.1614 0,1.8997 -0.254,9.5912 -0.3895,11.9215 -0.1325,2.2811 -0.227,3.5115 -0.5552,7.2327 -0.1347,1.5266 -0.584,5.0457 -0.7516,5.8859 -0.077,0.3841 -0.2104,1.0799 -0.2973,1.5463 -0.2511,1.3483 -0.6398,2.8732 -0.9663,3.791 -1.4164,3.9813 -4.6265,7.2473 -8.665,8.8159 -0.8693,0.3376 -2.7746,0.8197 -3.5839,0.9068 -0.3567,0.038 -0.8056,0.1092 -0.9976,0.1574 -0.4055,0.1018 -4.4055,0.519 -7.0831,0.7386 -4.1586,0.3412 -12.8992,0.7243 -19.4535,0.8527 -2.8806,0.056 -6.9977,0.1471 -9.1492,0.2015 -3.7417,0.095 -13.7174,0.1393 -13.8042,0.062 z m -5.1974,-24.5933 c 0.5477,-0.3234 1.236,-0.721 1.5295,-0.8836 0.5139,-0.2847 2.4022,-1.3689 6.4229,-3.6878 1.0443,-0.6023 2.1217,-1.2221 2.3942,-1.3773 1.0535,-0.6001 1.4988,-0.8565 1.6429,-0.9459 0.2855,-0.1771 6.5364,-3.7643 6.9334,-3.9787 0.2195,-0.1186 0.5786,-0.3278 0.7981,-0.4648 0.2195,-0.137 0.4663,-0.2794 0.5487,-0.3163 0.1579,-0.071 7.4247,-4.2503 7.6816,-4.4179 0.082,-0.054 0.3292,-0.1931 0.5486,-0.3097 0.2195,-0.1166 0.6612,-0.3697 0.9815,-0.5623 0.4766,-0.2866 0.5582,-0.3729 0.449,-0.4748 -0.074,-0.068 -1.3232,-0.8076 -2.7772,-1.6425 -1.454,-0.835 -2.8906,-1.6657 -3.1924,-1.846 -0.3017,-0.1803 -1.2894,-0.7531 -2.1947,-1.2728 -0.9053,-0.5196 -2.095,-1.2048 -2.6437,-1.5226 -1.259,-0.7292 -1.5874,-0.9169 -2.1449,-1.2256 -0.2469,-0.1368 -0.4938,-0.2829 -0.5487,-0.3247 -0.055,-0.042 -0.3242,-0.2006 -0.5985,-0.3529 -0.5743,-0.3189 -9.7009,-5.5844 -9.9263,-5.7269 -0.082,-0.052 -0.5088,-0.2978 -0.9477,-0.5462 -0.439,-0.2484 -0.9104,-0.5189 -1.0475,-0.6012 -0.6939,-0.4163 -4.9222,-2.8457 -4.9528,-2.8457 -0.02,0 -0.035,8.0806 -0.035,17.957 0,9.8764 0.019,17.9571 0.042,17.9571 0.023,0 0.4899,-0.2646 1.0376,-0.5879 z"
       id="path8718" /></g></svg>`;
}

function desspotify(cor,tam) {
  return `<svg  viewBox="0 0 2100 2100" width="${tam}" >
  <defs
     id="defs1" /><sodipodi:namedview
     id="namedview1"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1" /><inkscape:clipboard
     style="font-variation-settings:normal;opacity:1;vector-effect:none;fill:${cor};fill-opacity:1;stroke-width:7.74950551;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;-inkscape-stroke:none;stop-color:#000000;stop-opacity:1"
     min="-1835.9905,-2058.159"
     max="99.127553,-123.04094"
     geom-min="-1835.9905,-2058.159"
     geom-max="99.127553,-123.04094" /><g
     id="g1"
     transform="matrix(3.7795276,0,0,3.7795276,1835.9906,2058.1591)"><path
       style="fill:${cor};stroke-width:2.05039"
       d="m -247.13733,-33.122191 c -49.89998,-3.24944 -96.6761,-20.64318 -136.98812,-50.93918 -42.69446,-32.086489 -75.45553,-78.936929 -90.85763,-129.932209 -17.10282,-56.62634 -13.73299,-121.12611 9.11415,-174.44812 24.36519,-56.86487 66.97664,-101.94168 122.81263,-129.91813 64.99611,-32.56609 146.28724,-34.92487 213.36356,-6.19105 61.923648,26.52655 110.833158,75.90361 136.6939441,138.00066 25.6299899,61.54286 25.6353599,135.32054 0.0143,196.16913 -24.5259701,58.2478 -67.7841281,104.086005 -124.7212941,132.160099 -39.35727,19.40597 -83.97821,28.05866 -129.43153,25.0988 z m 127.29696,-136.062629 c 3.27797,-1.48834 6.69676,-4.80825 8.14341,-7.90786 1.70497,-3.65314 1.764,-9.77702 0.13615,-14.12728 -2.17096,-5.80177 -7.27785,-9.65425 -24.08722,-18.17071 -31.45429,-15.93628 -64.30403,-24.95946 -104.97902,-28.83569 -11.38843,-1.0853 -48.73329,-0.91344 -61.30558,0.28211 -18.9984,1.80662 -35.77497,4.31885 -55.33777,8.28656 -13.4812,2.73425 -16.93516,4.50589 -19.98804,10.25245 -1.28267,2.41442 -1.44095,3.3082 -1.44095,8.13703 0,4.83186 0.15769,5.72109 1.4431,8.13703 2.92364,5.49511 7.83198,8.55209 13.70968,8.53858 1.81078,-0.004 5.85575,-0.62796 8.98885,-1.38619 12.48297,-3.02102 35.0413,-6.5981 52.08261,-8.25874 12.2218,-1.191 30.42332,-1.69562 44.75849,-1.24091 43.21979,1.37096 82.24634,11.98973 117.18588,31.88522 3.28229,1.86903 7.06642,3.84685 8.40917,4.39517 3.33072,1.36011 9.30056,1.36655 12.2812,0.0123 z m 30.214276,-68.55206 c 10.466924,-4.79139 14.43687,-17.06857 9.136049,-28.25344 -2.383559,-5.02936 -5.962188,-8.15503 -15.443705,-13.4889 -39.33025,-22.12549 -82.91304,-35.86004 -130.31628,-41.0675 -31.29769,-3.43821 -64.72866,-3.25651 -93.6805,0.50913 -21.49786,2.79612 -50.95802,9.34421 -58.76966,13.06267 -3.59884,1.71311 -7.07892,5.27844 -8.85935,9.07635 -1.31767,2.81078 -1.44866,3.67872 -1.44866,9.5998 0,6.08747 0.0988,6.69739 1.52514,9.40504 3.40461,6.4635 9.27969,10.40835 16.107,10.81512 3.61302,0.21526 5.55832,-0.12486 17.36086,-3.03602 25.6544,-6.32767 41.9727,-8.73338 67.34054,-9.9276 20.25889,-0.95371 44.38926,0.2684 66.66368,3.37627 37.13659,5.18152 72.83399,17.02725 104.16523,34.56593 10.82842,6.06155 13.98153,7.22154 18.999181,6.98953 2.964198,-0.13696 4.938477,-0.58175 7.220475,-1.62638 z m 29.055905,-77.44658 c 6.759565,-1.55819 13.057973,-6.52136 16.108907,-12.69386 1.649624,-3.33741 2.016848,-4.73244 2.256407,-8.57189 0.509979,-8.17345 -1.827238,-15.17016 -6.767971,-20.2607 -2.881666,-2.96905 -5.568821,-4.74602 -14.107909,-9.32941 -56.206245,-30.16895 -132.921615,-46.32808 -213.353045,-44.94016 -29.74313,0.51324 -52.17275,2.60118 -77.31012,7.19671 -15.01127,2.74429 -35.16899,7.8496 -39.28673,9.95009 -6.3784,3.25369 -11.29642,9.32595 -12.75832,15.75276 -3.42609,15.06182 4.69597,28.32366 18.97095,30.97602 4.35876,0.8099 7.40422,0.38154 19.51091,-2.74423 12.39049,-3.19907 20.43828,-4.89401 32.00911,-6.74145 49.31018,-7.87306 108.12473,-6.50007 159.52692,3.72404 36.28772,7.21779 66.56525,17.54394 90.932875,31.01269 12.360865,6.83224 17.47019,8.23639 24.268016,6.66939 z"
       id="path1" /></g></svg>`;
}

function desfiltro(cor,tam){
  return txt = `<svg  viewBox="0 0 200 200" style="width: ${tam};" >
  <defs
     id="defs2355" /><sodipodi:namedview
     id="namedview2353"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1" /><inkscape:clipboard
     style="font-variation-settings:normal;opacity:1;vector-effect:none;fill:${cor};fill-opacity:1;stroke-width:10.87487244;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;-inkscape-stroke:none;paint-order:markers fill stroke;stop-color:#000000;stop-opacity:1"
     min="-314.21649,-69.429366"
     max="-186.8389,131.70939"
     geom-min="-314.21649,-69.429366"
     geom-max="-186.8389,131.70939" /><g
     id="g2357"
     transform="matrix(3.7795276,0,0,3.7795276,314.21649,69.429366)"><path
       id="path676"
       style="fill:${cor};fill-opacity:1;stroke-width:2.87731;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke"
       d="m -83.136446,-18.369853 12.81049,25.6209771 V 27.79395 l 7.898838,7.05416 0.137586,-27.5078169 12.855073,-25.7101461 z" /></g></svg>

`;
}
