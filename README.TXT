Una pagina principal, de acceso publico en donde el usuario se pueda loguear como cliente o como administrador.

EL ADMINISTRADOR: 

pagina principal: 

Lista de clientes que tienen un inmueble
	->Podra seleccinar entre cada uno de ellos para 
					-> ver su estado de cuenta (si adeuda o no pagos)
					-> Enviar mensajes privados

Cuadro de mensajes
	->a un cliente en particular
	->a todos los clientes en general


EL CLIENTE:
Ver sus pagos: facturas
Ver sus proximos vencimientos
Boton de mensajes al Administrador

-------------------------------------------------------------------------------------------------------------
ACTUALIZACION HECHA 13-10-2022

Logica de la funcionalidad: 


	
ROUTES:
//--------------------------------------------------------------------------------------------------------------------------------------------------------------//
SOBRE LAS TORRES:

/add_torre/:name

Si agregan la ruta y el parametro con el nombre de la torre que quieran crear, la misma se creara y se guardara en la base de datos con el siguiente formato:
	EJEMPLO: /add_torre/Torre2


LO QUE SE GUARDA EN LA DBS:
{
    "Name": "Torre2",
    "id": 2,
    "apartamentos": [],
    "_id": "6349e0372bb2a88ff6d02a98",
    "__v": 0
}

/getTorres
Esta ruta devuelve todas las torres existentes con su respectivo contenido (en caso de tener apartamentos agregados se mostrara con los mismos como contenido,
caso contrario se mostrara un array sin contenido)

EJEMPLO DE LO QUE DEVUELVE LA RUTA:
{"_id":"6349e0372bb2a88ff6d02a98",
"Name":"Torre2",
"id":2,
"apartamentos":[
	{"Propietario":"Caro",
	"Aviso_cobro":"false",
	"id":1,"Torre":"Torre2"},
	{"Propietario":"Diego",
	"Aviso_cobro":"false",
	"id":2,"Torre":"Torre2"},
	{"Propietario":"Juan Ejemplo",
	"Aviso_cobro":"false",
	"id":1,"Torre":"Torre2"}],
"__v":0}



//--------------------------------------------------------------------------------------------------------------------------------------------------------------//

/add_apartment
Si agregan la ruta, y en el BODY completan la info del apartamento, la misma se creara y se guardara en la base de datos con el siguiente formato:
{
"Propietario": "Diego",
"Torre": "Torre2",
"Aviso_cobro": false,
}

LO QUE SE GUARDA EN LA DBS:
{
    "Propietario": "Diego",
    "Torre": "Torre2",
    "Aviso_cobro": false,
    "id": 2,
    "_id": "6349e1732bb2a88ff6d02aa4",
    "__v": 0
}


/getApartment
Esta ruta devuelve todas los apartamentos existentes con su respectivo contenido 
(en caso de tener apartamentos agregados se mostrara con los mismos como contenido,
caso contrario se mostrara un array sin contenido)

EJEMPLO DE LO QUE DEVUELVE LA RUTA:
[{"_id":"63504aed00802ed2c6412f27",
"Propietario":"Juan Ejemplo",
"Torre":"Torre2",
"Aviso_cobro":false,
"id":1,"__v":0}]

//---------------------------------------------------------------------------------------------------------------------------------------------------------------//


DEPLOY HEROKU
https://condominios-app.herokuapp.com/


Se que es un dato sensible pero lo adjunto igual por las dudas. 
 mongodb+srv://diegodimii:Supersonico1@cluster0.2hvpwkt.mongodb.net/fideicomiso?retryWrites=true&w=majority
