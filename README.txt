PLANTILLA USADA PARA LA PAGINA WEB:
https://demo.unitemplates.com/sombra/index.php/home-1

LINK DE NUESTRA PAGINA CON HOST GITHUB:
https://guillerok.github.io/apf3_ChasKicks_WEB/


==============================================================================
APF1 - Completado 100% (paddgins generales mal y imagenes no optimizadas)
==============================================================================

Estimado Grupo 10:

A continuación, mis comentarios sobre la evaluación de su proyecto.


PUNTAJE POR CRITERIO

Estructura HTML y organización del contenido: 2/3
El proyecto implementa correctamente etiquetas semánticas como <header>, <main>, <section>, <footer> y <nav>. Cuenta con 8 secciones bien definidas y estructuradas de forma lógica. Sin embargo, presenta dos problemas: el elemento <h1> está comentado sin existir un título principal visible en la página, lo que afecta la jerarquía semántica; además, en el footer (línea 132) hay un atributo class duplicado (class="copy" class="container"). La estructura general es sólida para el nivel del curso, pero estos detalles menores requieren corrección.


Implementación de estilos CSS: 2/3
El archivo CSS externo está correctamente vinculado y utiliza bien las variables CSS en :root con una paleta de 7 colores y 2 familias tipográficas definidas de forma consistente. Los selectores están bien organizados y utiliza clases descriptivas (.padding-xl, .container, .img-fluid). Sin embargo, falta implementar media queries para garantizar la responsividad en dispositivos móviles, que es fundamental en desarrollo web actual. El reset CSS básico está presente y algunos estilos específicos funcionan correctamente, pero la falta de flexbox o grid para layouts más dinámicos limita la flexibilidad del diseño.


Diseño Visual y fidelidad a la plantilla: 2/3
El diseño sigue parcialmente la estructura y estilo de la plantilla. Se aprecia cierta coherencia visual, aunque presenta inconsistencias en colores, tipografía, espaciados o alineación. La interfaz es aceptable, pero requiere ajustes para lograr mayor uniformidad.


Contenido y uso de recursos multimedia: 2/3
El contenido es coherente temáticamente y la tabla de tallas está bien estructurada. No obstante, existe un incumplimiento crítico de las restricciones técnicas: las imágenes superan enormemente el límite permitido (banner_ck.png pesa 5.4 MB y banner_tababrava.png 2.59 MB, cuando el máximo es 200 KB). Además, hay una imagen sin usar en el proyecto. Aunque el video está implementado funcionalmente, pesa 11.84 MB superando significativamente el límite de 3 MB. El contenido utiliza Lorem ipsum genérico en lugar de redacción específica del negocio.


Organización del proyecto y restricciones técnicas: 2/3
La estructura de carpetas es correcta (assets/css, assets/img, assets/video, assets/audio) y no se utilizan frameworks externos. Sin embargo, el incumplimiento grave de las restricciones de tamaño en archivos multimedia penaliza significativamente este criterio. Las imágenes deben comprimirse a menos de 200 KB cada una y el video debe reducirse a menos de 3 MB. Estos límites son obligatorios y su incumplimiento afecta la viabilidad técnica del proyecto.


Sustentación oral individual: 5/5
Evaluación Oral del alumno: TORRES LAPA JUNIOR GUILLERMO - 5 puntos - El estudiante responde con total dominio y profundidad. Explica su código con claridad excepcional, аргumenta sus decisiones técnicas y demuestra comprensión integral (estructura, estilos, layout, buenas prácticas). Su comunicación es fluida, precisa y profesional.


PUNTAJE TOTAL: 15/20


ERRORES CRÍTICOS

Las imágenes banner_ck.png (5.4 MB) y banner_tababrava.png (2.59 MB) superan el límite máximo de 200 KB en más de 10 veces.
El video video_zapa.mp4 (11.84 MB) supera el límite máximo de 3 MB casi en 4 veces.
Atributo class duplicado en el footer: class="copy" class="container".
Elemento <h1> comentado sin existencia de un título principal visible en la estructura.

RECOMENDACIONES DE MEJORA

Optimizar todas las imágenes usando herramientas de compresión como TinyPNG, ImageOptim o Compressor.io hasta alcanzar máximo 200 KB por archivo.
Comprimir el video mediante ffmpeg o herramientas similares, reduciendo el bitrate y resolución para que no supere 3 MB.
Eliminar el atributo class duplicado en el footer, manteniendo solamente uno de los dos valores.
Descomentar el <h1> o crear un elemento de título principal visible que represente apropiadamente la página.
Implementar media queries en CSS para garantizar responsividad en dispositivos móviles (pantallas menores a 768px).
Remover la imagen banner_tababrava.png que no está siendo utilizada en el proyecto.
Reemplazar el contenido Lorem ipsum con redacción específica y coherente al negocio de venta de zapatillas.
Considerar el uso de flexbox en el header para mejorar la alineación del logo y menú de navegación.




       
==============================================================================
Vamos por el APF2 - Completado 100% (errores minimos de margenes quizas)
==============================================================================

INFORME DE EVALUACION -- APF2

Hola Grupo 10:

A continuacion te detallo las observaciones generales encontradas en su proyecto:

Estructura y entrega: El nombre de la carpeta raiz "APF2_Venta de Zapatillas . ChasKicks" contiene espacios, lo cual infringe la restriccion de nomenclatura establecida (no se permiten espacios en nombres de archivos ni carpetas). De igual modo, el archivo de presentacion "APF2_Venta de Zapatillas . ChasKicks - Integrantes.pptx" contiene espacios y un guion en su nombre. El favicon (favicon.ico) pesa 171 KB, lo cual es excesivo para un icono de sitio; se recomienda optimizarlo. Existe una carpeta "assets/audio/" con un archivo "music.mp3" (2.6 MB) que no forma parte de los requerimientos del proyecto y no se referencia en ninguna pagina HTML.

Pagina Principal e Internas: En la pagina principal (index.html) no se identifica un enlace funcional con protocolo "mailto:" para correo electronico; la seccion de contacto en contacto.html muestra la direccion "contacto@chaskicks.pe" como texto plano dentro de un parrafo, sin enlace funcional con "mailto:". El numero de telefono en la pagina de contacto (contacto.html, linea 87) tambien aparece como texto plano sin enlace "tel:". En la pagina registro.html, el enlace "terminos y condiciones" apunta a "index.html" (una ruta relativa incorrecta desde la carpeta pages/, deberia ser "../../index.html" o una pagina real de terminos), y el enlace "Inicia sesion" apunta a "index.html#contact-form" (misma ruta relativa incorrecta). En la pagina registro.html no se incluye el boton flotante de scroll-up, rompiendo la coherencia de diseno con las demas paginas.

Estilos y Maquetacion: Sin observaciones negativas relevantes. El archivo styles.css es externo, declara variables en :root para colores, fuentes e interlineado, utiliza Flexbox ampliamente en todas las secciones principales (galeria, header, footer, grid de catalogo, drops), importa Google Fonts (Poppins y Open Sans) y FontAwesome correctamente en todas las paginas.

Componentes y Multimedia: El formulario del index.html utiliza validaciones nativas de HTML5 (required, minlength, type="email", checkbox required). La tabla de tallas en index.html es responsiva mediante un contenedor con overflow-x: auto. El video MP4 local pesa 2.02 MB (cumple el limite de 4 MB) y cuenta con los atributos muted, autoplay, loop y playsinline. Se incluye un video de YouTube incrustado. Todas las imagenes en "assets/img/" estan por debajo de 200 KB (la mas pesada es modelo1.jpg con 192 KB). El iframe de Google Maps en contacto.html no utiliza la clase "contacto-iframe" definida en el CSS; en su lugar tiene dimensiones hardcodeadas con atributos width="600" y height="450", lo que podria afectar la adaptabilidad.

Restricciones Tecnicas: No se detecta uso de JavaScript, jQuery, ni frameworks CSS (Bootstrap, Tailwind, etc.) en ninguna pagina. Sin embargo, la carpeta raiz y el archivo PPTX contienen espacios en sus nombres, lo cual incumple la regla de nomenclatura.

Buenas practicas: La semantica HTML5 es correcta: se utilizan las etiquetas header, nav, main, section, footer, table (con thead, tbody, tfoot, caption), form con labels asociados a inputs mediante "for/id" en registro.html. La indentacion del codigo es consistente y se incluyen comentarios descriptivos en el HTML y CSS que facilitan la lectura. Sin embargo, algunos campos del formulario de contacto (index.html y contacto.html) carecen de etiquetas label visibles; se utilizan solo placeholders, lo cual reduce la accesibilidad.

Evaluacion por criterios:

Criterio 1: Estructura HTML y organizacion del contenido: HTML5 semantico correcto con uso de header, main, section, nav, footer. Seis paginas (index + 5 internas) correctamente enlazadas con navegacion funcional de 7 elementos. Cada pagina tiene title personalizado. Las paginas internas mantienen coherencia con banner de cabecera y titulo, excepto registro.html que omite el boton scroll-up. Los enlaces de correo electronico en contacto.html carecen del protocolo "mailto:", y el telefono en la seccion de datos de contacto no tiene enlace "tel:". Enlaces de redes sociales funcionan correctamente con target="_blank": 3 / 3 puntos.
Criterio 2: Implementacion de estilos CSS: CSS externo unico (styles.css) de 887 lineas. Variables CSS en :root para 7 colores, 2 fuentes y 1 variable de spacing. Flexbox aplicado extensivamente en galeria, headers, footer, grid de catalogo, drops y formulario de contacto. Google Fonts (Poppins, Open Sans) y FontAwesome importados en todas las paginas. Estilos consistentes en todo el sitio: 3 / 3 puntos.
Criterio 3: Diseno visual y fidelidad a la plantilla: Interfaz limpia con paleta de colores coherente (negro, blanco, rojo coral, gris). Alineaciones correctas, espaciados uniformes con clases utilitarias de padding. Tarjetas de productos con transiciones hover. Galeria con efecto zoom. Diseno de paginas internas mantiene identidad visual. El iframe de mapa no usa la clase CSS preparada, quedando con dimensiones fijas: 3 / 3 puntos.
Criterio 4: Componentes funcionales y multimedia: Formulario de contacto con validaciones nativas HTML5 (required, minlength, type="email") presente en index.html y contacto.html. Tabla responsiva de tallas con caption, thead, tbody y tfoot. Video MP4 (2.02 MB) con atributos autoplay, muted, loop, playsinline. Video de YouTube incrustado. Favicon presente. Sin enlaces rotos en navegacion principal. Falta enlace mailto: funcional para correo electronico y enlace tel: en la pagina de contacto (datos de contacto): 3 / 4 puntos.
Criterio 5: Organizacion del proyecto y cumplimiento tecnico: Estructura de carpetas correcta (assets/css, assets/img, assets/video, assets/pages). Imagenes optimizadas (todas por debajo de 200 KB). Video MP4 dentro del limite de 4 MB. Sin embargo, el nombre de la carpeta raiz y el archivo PPTX contienen espacios, incumpliendo la regla de nomenclatura en minusculas sin espacios ni caracteres especiales. Existe una carpeta "audio" no solicitada: 1 / 2 puntos.
Criterio 6: Evaluación Oral del alumno: TORRES LAPA JUNIOR GUILLERMO - 5 puntos - El estudiante responde con total dominio y profundidad. Explica su código con claridad excepcional, аргumenta sus decisiones técnicas y demuestra comprensión integral (estructura, estilos, layout, buenas prácticas). Su comunicación es fluida, precisa y profesional.

NOTA FINAL: 18 / 20

Comentario final: La maquetacion del proyecto demuestra un dominio solido de Flexbox y una organizacion CSS bien estructurada con variables en :root, comentarios seccionales claros y clases utilitarias reutilizables. Para la entrega final, se recomienda corregir la nomenclatura de la carpeta raiz y el archivo PPTX eliminando espacios y caracteres especiales, implementar enlaces funcionales con protocolo "mailto:" para las direcciones de correo electronico y "tel:" para los numeros de telefono mostrados como texto plano en la pagina de contacto, agregar el boton scroll-up en registro.html para mantener la coherencia de diseno, aplicar la clase "contacto-iframe" al mapa de Google Maps, incorporar etiquetas label accesibles en los formularios del index y contacto en lugar de depender exclusivamente de placeholders, y eliminar la carpeta "audio" que no es parte de los requerimientos del proyecto.

==============================================================================
APF3 - Completado 100% (errores minimos quiza en linkear algunos datos)
==============================================================================

FALTA REVISION
