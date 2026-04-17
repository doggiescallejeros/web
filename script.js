const productos = [
  {
    id: 'especial',
    nombre: 'Doggie Especial',
    precio: 2800,
    ingredientes: 'Tocineta, ensalada de repollo, cebolla, chile dulce y salsas al gusto.',
    tags: ['clasico', 'tocineta', 'completo', 'premium'],
    descripcion: 'Ideal para quien busca un hot dog completo, clásico y con buen sabor.'
  },
  {
    id: 'sencillo',
    nombre: 'Doggie Sencillo',
    precio: 2100,
    ingredientes: 'Ensalada de repollo, papa crujiente y salsas al gusto.',
    tags: ['economico', 'clasico', 'simple'],
    descripcion: 'Una opción tradicional, práctica y accesible.'
  },
  {
    id: 'hawaiano',
    nombre: 'Doggie Hawaiano',
    precio: 2800,
    ingredientes: 'Tocineta salteada, piña natural, papa crujiente, mozzarella fundido y salsas al gusto.',
    tags: ['dulce', 'tocineta', 'queso', 'premium'],
    descripcion: 'Perfecto para quienes disfrutan el contraste entre dulce y salado.'
  },
  {
    id: 'cheese-bacon',
    nombre: 'Doggies Cheese Bacon',
    precio: 2800,
    ingredientes: 'Mozzarella fundido, orégano, tocineta con cebolla salteada, papa crujiente y salsas al gusto.',
    tags: ['queso', 'tocineta', 'premium', 'intenso'],
    descripcion: 'Excelente para amantes del queso y la tocineta.'
  },
  {
    id: 'mexicano',
    nombre: 'Doggie Mexicano',
    precio: 2500,
    ingredientes: 'Chilly (carne y frijoles), salsa cheddar, queso fresco, natilla, jalapeños opcionales y salsas al gusto.',
    tags: ['picante', 'queso', 'intenso', 'diferente'],
    descripcion: 'La mejor elección si te gustan los sabores fuertes y el picante.'
  },
  {
    id: 'steak',
    nombre: 'Doggies Steak',
    precio: 2800,
    ingredientes: 'Carne de res, cebolla, chile salteados, mozzarella fundido, papa crujiente y salsas al gusto.',
    tags: ['carne-res', 'queso', 'premium', 'fuerte'],
    descripcion: 'Recomendado para quienes quieren una opción más abundante con carne de res.'
  },
  {
    id: 'combo',
    nombre: 'Combo Doggies',
    precio: 2500,
    ingredientes: 'Doggie Tico (repollo y papa crujiente) + refresco de la casa + salsas al gusto.',
    tags: ['combo', 'economico', 'clasico'],
    descripcion: 'Muy buena opción para quien quiere comida y bebida en un solo pedido.'
  },
  {
    id: 'italiano',
    nombre: 'Doggie Italiano',
    precio: 2500,
    ingredientes: 'Salsa de pizza, tomate cherry, orégano y mozzarella fundido.',
    tags: ['queso', 'diferente', 'italiano'],
    descripcion: 'Ideal si prefieres sabores tipo pizza.'
  },
  {
    id: 'tico',
    nombre: 'Doggie Tico',
    precio: 1900,
    ingredientes: 'Repollo, papa crujiente y salsas al gusto.',
    tags: ['economico', 'clasico', 'simple'],
    descripcion: 'La alternativa más económica y tradicional del menú.'
  },
  {
    id: 'taco-marite',
    nombre: 'Taco Marité',
    precio: 1900,
    ingredientes: 'Dos tacos tipo flauta, carne mechada de res, pico de gallo especial, repollo y salsa de tomate/mayonesa.',
    tags: ['carne-res', 'economico', 'diferente'],
    descripcion: 'Para clientes que quieren algo distinto al hot dog.'
  }
];

const preguntas = [
  {
    id: 'presupuesto',
    titulo: '¿Cuál es tu presupuesto?',
    descripcion: 'Esto nos ayuda a recomendarte opciones acordes a tu bolsillo.',
    opciones: [
      { valor: 'bajo', texto: 'Menos de ₡2000' },
      { valor: 'medio', texto: 'Entre ₡2000 y ₡2500' },
      { valor: 'alto', texto: 'Más de ₡2500' }
    ]
  },
  {
    id: 'hambre',
    titulo: '¿Qué tanto apetito tienes hoy?',
    descripcion: 'Queremos saber si buscas algo ligero o más cargado.',
    opciones: [
      { valor: 'poco', texto: 'Poco' },
      { valor: 'normal', texto: 'Normal' },
      { valor: 'mucho', texto: 'Mucho' }
    ]
  },
  {
    id: 'picante',
    titulo: '¿Te gusta el picante?',
    descripcion: 'Esto influye bastante en la recomendación.',
    opciones: [
      { valor: 'si', texto: 'Sí, me encanta' },
      { valor: 'no', texto: 'No, prefiero evitarlo' }
    ]
  },
  {
    id: 'dulce',
    titulo: '¿Te gustan sabores dulces como piña?',
    descripcion: 'Ideal para saber si una mezcla tipo hawaiana te puede gustar.',
    opciones: [
      { valor: 'si', texto: 'Sí' },
      { valor: 'no', texto: 'No' }
    ]
  },
  {
    id: 'queso',
    titulo: '¿Quieres queso en tu orden?',
    descripcion: 'Tenemos varias opciones con mozzarella y cheddar.',
    opciones: [
      { valor: 'si', texto: 'Sí, con queso' },
      { valor: 'no', texto: 'No es necesario' }
    ]
  },
  {
    id: 'tocineta',
    titulo: '¿Te gusta la tocineta?',
    descripcion: 'Algunas recomendaciones resaltan mucho este ingrediente.',
    opciones: [
      { valor: 'si', texto: 'Sí' },
      { valor: 'no', texto: 'No' }
    ]
  },
  {
    id: 'combo',
    titulo: '¿Quieres una opción con bebida incluida?',
    descripcion: 'Así podemos priorizar combos si es lo que buscas.',
    opciones: [
      { valor: 'si', texto: 'Sí, quiero combo' },
      { valor: 'no', texto: 'No, solo comida' }
    ]
  },
  {
    id: 'compraPrevia',
    titulo: '¿Qué te gustó la última vez o cuál pedirías de nuevo?',
    descripcion: 'Usamos esta información como historial de compra previa.',
    opciones: [
      { valor: 'ninguna', texto: 'Es mi primera compra' },
      { valor: 'clasico', texto: 'Algo clásico' },
      { valor: 'picante', texto: 'Algo picante' },
      { valor: 'queso', texto: 'Algo con queso' },
      { valor: 'diferente', texto: 'Algo diferente' }
    ]
  }
];

let pasoActual = 0;
const respuestas = {};

// navegación principal
const mainPage = document.getElementById('mainPage');
const demoPage = document.getElementById('demoPage');
const btnIrDemo = document.getElementById('btnIrDemo');
const btnVolverInicioTop = document.getElementById('btnVolverInicioTop');
const btnVolverInicioResultado = document.getElementById('btnVolverInicioResultado');

// demo
const tituloPregunta = document.getElementById('tituloPregunta');
const descripcionPregunta = document.getElementById('descripcionPregunta');
const contenedorOpciones = document.getElementById('contenedorOpciones');
const textoPaso = document.getElementById('textoPaso');
const textoPorcentaje = document.getElementById('textoPorcentaje');
const barraProgreso = document.getElementById('barraProgreso');
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');
const btnVerResultado = document.getElementById('btnVerResultado');
const pantallaEncuesta = document.getElementById('pantallaEncuesta');
const pantallaResultado = document.getElementById('pantallaResultado');
const menuLista = document.getElementById('menuLista');
const btnReiniciar = document.getElementById('btnReiniciar');

function irADemo() {
  mainPage.classList.add('oculto');
  demoPage.classList.remove('oculto');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function volverAInicio() {
  demoPage.classList.add('oculto');
  mainPage.classList.remove('oculto');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function mostrarMenu() {
  menuLista.innerHTML = productos.map(producto => `
    <div class="menu-item">
      <div class="menu-item-top">
        <strong>${producto.nombre}</strong>
        <span class="precio">₡${producto.precio}</span>
      </div>
      <p>${producto.ingredientes}</p>
    </div>
  `).join('');
}

function renderizarPregunta() {
  const pregunta = preguntas[pasoActual];
  tituloPregunta.textContent = pregunta.titulo;
  descripcionPregunta.textContent = pregunta.descripcion;
  textoPaso.textContent = `Pregunta ${pasoActual + 1} de ${preguntas.length}`;

  const porcentaje = Math.round(((pasoActual + 1) / preguntas.length) * 100);
  textoPorcentaje.textContent = `${porcentaje}%`;
  barraProgreso.style.width = `${porcentaje}%`;

  const respuestaActual = respuestas[pregunta.id];

  contenedorOpciones.innerHTML = '';
  pregunta.opciones.forEach(opcion => {
    const button = document.createElement('button');
    button.className = 'opcion';

    if (respuestaActual === opcion.valor) {
      button.classList.add('seleccionada');
    }

    button.textContent = opcion.texto;
    button.onclick = () => seleccionarOpcion(pregunta.id, opcion.valor);
    contenedorOpciones.appendChild(button);
  });

  btnAnterior.disabled = pasoActual === 0;
  btnSiguiente.disabled = !respuestaActual;

  if (pasoActual === preguntas.length - 1) {
    btnSiguiente.classList.add('oculto');
    btnVerResultado.classList.remove('oculto');
    btnVerResultado.disabled = !respuestaActual;
  } else {
    btnSiguiente.classList.remove('oculto');
    btnVerResultado.classList.add('oculto');
  }
}

function seleccionarOpcion(idPregunta, valor) {
  respuestas[idPregunta] = valor;
  renderizarPregunta();
}

function siguientePregunta() {
  if (pasoActual < preguntas.length - 1) {
    pasoActual++;
    renderizarPregunta();
  }
}

function anteriorPregunta() {
  if (pasoActual > 0) {
    pasoActual--;
    renderizarPregunta();
  }
}

function puntuarProducto(producto, respuestasUsuario) {
  let score = 0;
  const razones = [];

  if (respuestasUsuario.presupuesto === 'bajo') {
    if (producto.precio <= 2000) score += 4;
    if (producto.tags.includes('economico')) score += 3;
  }

  if (respuestasUsuario.presupuesto === 'medio') {
    if (producto.precio >= 2000 && producto.precio <= 2500) score += 4;
  }

  if (respuestasUsuario.presupuesto === 'alto') {
    if (producto.precio > 2500) score += 4;
    if (producto.tags.includes('premium')) score += 2;
  }

  if (respuestasUsuario.hambre === 'mucho') {
    if (producto.tags.includes('premium') || producto.tags.includes('combo') || producto.tags.includes('fuerte')) {
      score += 4;
      razones.push('buscas una opción más contundente');
    }
  }

  if (respuestasUsuario.hambre === 'poco') {
    if (producto.tags.includes('simple') || producto.tags.includes('economico')) {
      score += 2;
      razones.push('prefieres algo más sencillo');
    }
  }

  if (respuestasUsuario.picante === 'si' && producto.tags.includes('picante')) {
    score += 7;
    razones.push('te gusta el picante');
  }

  if (respuestasUsuario.picante === 'no' && producto.tags.includes('picante')) {
    score -= 3;
  }

  if (respuestasUsuario.dulce === 'si' && producto.tags.includes('dulce')) {
    score += 6;
    razones.push('te gustan las combinaciones dulces y saladas');
  }

  if (respuestasUsuario.dulce === 'no' && producto.tags.includes('dulce')) {
    score -= 2;
  }

  if (respuestasUsuario.queso === 'si' && producto.tags.includes('queso')) {
    score += 5;
    razones.push('quieres una opción con queso');
  }

  if (respuestasUsuario.queso === 'no' && producto.tags.includes('queso')) {
    score -= 2;
  }

  if (respuestasUsuario.tocineta === 'si' && producto.tags.includes('tocineta')) {
    score += 5;
    razones.push('te gusta la tocineta');
  }

  if (respuestasUsuario.tocineta === 'no' && producto.tags.includes('tocineta')) {
    score -= 2;
  }

  if (respuestasUsuario.combo === 'si' && producto.tags.includes('combo')) {
    score += 7;
    razones.push('quieres bebida incluida');
  }

  if (respuestasUsuario.combo === 'no' && producto.tags.includes('combo')) {
    score -= 1;
  }

  if (respuestasUsuario.compraPrevia === 'clasico' && producto.tags.includes('clasico')) {
    score += 4;
    razones.push('sueles preferir sabores clásicos');
  }

  if (respuestasUsuario.compraPrevia === 'picante' && producto.tags.includes('picante')) {
    score += 4;
    razones.push('tu historial apunta a sabores picantes');
  }

  if (respuestasUsuario.compraPrevia === 'queso' && producto.tags.includes('queso')) {
    score += 4;
    razones.push('tu historial apunta a productos con queso');
  }

  if (respuestasUsuario.compraPrevia === 'diferente' && producto.tags.includes('diferente')) {
    score += 4;
    razones.push('te gusta probar algo distinto');
  }

  if (producto.id === 'taco-marite' && respuestasUsuario.hambre === 'mucho') score += 2;
  if (producto.id === 'especial' && respuestasUsuario.presupuesto === 'alto') score += 2;
  if (producto.id === 'sencillo' && respuestasUsuario.presupuesto === 'medio') score += 2;
  if (producto.id === 'tico' && respuestasUsuario.presupuesto === 'bajo') score += 2;
  if (producto.id === 'italiano' && respuestasUsuario.compraPrevia === 'diferente') score += 2;

  return {
    ...producto,
    score,
    razones
  };
}

function generarPerfilCliente(respuestasUsuario) {
  const frases = [];

  if (respuestasUsuario.presupuesto === 'bajo') frases.push('presupuesto ajustado');
  if (respuestasUsuario.presupuesto === 'medio') frases.push('presupuesto medio');
  if (respuestasUsuario.presupuesto === 'alto') frases.push('mayor disposición de gasto');
  if (respuestasUsuario.hambre === 'mucho') frases.push('mucho apetito');
  if (respuestasUsuario.picante === 'si') frases.push('gusto por el picante');
  if (respuestasUsuario.queso === 'si') frases.push('preferencia por queso');
  if (respuestasUsuario.tocineta === 'si') frases.push('interés por tocineta');
  if (respuestasUsuario.combo === 'si') frases.push('interés en combo');

  return frases.length
    ? `Perfil detectado: ${frases.join(', ')}.`
    : 'Perfil detectado: cliente general.';
}

function mostrarResultado() {
  const ranking = productos
    .map(producto => puntuarProducto(producto, respuestas))
    .sort((a, b) => b.score - a.score);

  const principal = ranking[0];
  const alternativas = ranking.slice(1, 3);

  document.getElementById('nombreRecomendado').textContent = principal.nombre;
  document.getElementById('precioRecomendado').textContent = `Precio: ₡${principal.precio}`;
  document.getElementById('ingredientesRecomendado').textContent = `Ingredientes principales: ${principal.ingredientes}`;

  const razonTexto = principal.razones.length
    ? `Te recomendamos este producto porque ${[...new Set(principal.razones)].join(', ')}.`
    : 'Te recomendamos este producto porque se ajusta mejor al patrón general de tus respuestas.';

  document.getElementById('motivoRecomendado').textContent = razonTexto;
  document.getElementById('perfilCliente').textContent = generarPerfilCliente(respuestas);

  const alternativasContenedor = document.getElementById('alternativas');
  alternativasContenedor.innerHTML = alternativas.map(item => `
    <div class="alt-item">
      <h4>${item.nombre} - ₡${item.precio}</h4>
      <p>${item.descripcion}</p>
    </div>
  `).join('');

  pantallaEncuesta.style.display = 'none';
  pantallaResultado.classList.add('visible');
}

function reiniciarDemo() {
  Object.keys(respuestas).forEach(key => delete respuestas[key]);
  pasoActual = 0;
  pantallaEncuesta.style.display = 'block';
  pantallaResultado.classList.remove('visible');
  renderizarPregunta();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

btnIrDemo.addEventListener('click', irADemo);
btnVolverInicioTop.addEventListener('click', volverAInicio);
btnVolverInicioResultado.addEventListener('click', volverAInicio);

btnSiguiente.addEventListener('click', siguientePregunta);
btnAnterior.addEventListener('click', anteriorPregunta);
btnVerResultado.addEventListener('click', mostrarResultado);
btnReiniciar.addEventListener('click', reiniciarDemo);

mostrarMenu();
renderizarPregunta();