Trabajo realizado en moalidad Pasantia para NO COUNTRY - EQUIPO SELECCIONADO:

AVANCES REALIZADOS:
1. Se levanta el server.js con un puerto pre definido en 8080. En este caso se podra asignar el puerto que requiera las necesidades del usuario
en el archivo .env como PORT=
2. Ya desde el comienzo se pretende una aplicacion escalable en base de datos, aplicandose un factory.js que da la oportunidad de levantar el 
servidor agregando un parametro de nombra "mongo" o "file", respectivamente para utilizar como base de datos mongo o filesistemn (y pudiendose
agregar cuantas DBS se pretendan, en un futuro/ escalabilidad).
3. Se crearon los MODELOS a trabajar: 
    ADMINISTRADOR, APARTAMENTE, AVISO_COBRO, 
    BANCO-CONDOMINIO, CUOTA, FORMA_PAGO, MORA, NOTICIA, 
    PAGO, PERSONA,    PROPIETARIO, ROL, TORRE, USUARIO.
4. La base de datos se activa a travez de factory.js 
5. Se crean las diferentes ramas de trabajo en git: 
    master- carolina/eslint
    dev   - Diego
6. Modalidad de trabajo: Cada integrante del Back va a crear su propiea rama de trabajo y segun la division de tareas, se realizara merge a la
rama dev para purgar errores y finalmente hacer correspondiente merge en master.
