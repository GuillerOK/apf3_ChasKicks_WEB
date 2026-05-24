PLANTILLA USADA PARA LA PAGINA WEB:
https://demo.unitemplates.com/sombra/index.php/home-1

LINK DE NUESTRA PAGINA CON HOST GITHUB:
https://guillerok.github.io/ChasKicks-WEB/


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

FALTA REVISION 


*Estructura y organización del contenido*
El proyecto deberá incluir:
• Página principal: index.html
• Páginas internas enlazadas desde el menú de navegación.
La página principal deberá contener como mínimo:
• Header o cabecera.
• Barra superior con datos de contacto y redes sociales.
• Barra de navegación fija (sticky o fixed).
• Logo enlazado a index.html.
• Menú con mínimo cinco (5) enlaces funcionales.
• Banner principal o hero section.
• Sección de presentación.
• Sección de servicios o productos.
• Galería maquetada con Flexbox.
• Tabla HTML responsiva con información relacionada al tema.
• Formulario de contacto utilizando validaciones nativas HTML5.
• Inserción de:
       o Video MP4 (máx. 4 MB)
       o Video de YouTube relacionado al tema.
       o Footer con información de contacto y derechos reservados.
• Las páginas internas deberán incluir:
       o Imagen de fondo o banner de página.
       o Nombre o título de la página.
       o Diseño visual coherente con la página principal.



*Diseño y Presentación Visual*
• Debe utilizarse una hoja de estilos externa (styles.css).
• Se deberá evidenciar el uso de variables CSS mediante :root.
• Importar Google Fonts y FontAwesome.
• Aplicar Flexbox en las principales áreas de contenido.
• La interfaz debe mantener:
       o coherencia visual,
       o correcta alineación,
       o espaciados apropiados,
       o tipografías consistentes,
       o paleta cromática organizada.
• Las imágenes deberán:
       o estar optimizadas para web,
       o tener un tamaño máximo de 200 KB por imagen.
• El video MP4:
       o deberá tener un tamaño máximo de 4 MB,
       o reproducirse automáticamente,
       o estar en bucle,
       o y no contener audio.
