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
Un Root en donde el administrador encuentre un boton para 
	-> Agregar torres: 
			{Name: "'TORRE_EJEMPLO2",
 			id: 14,
 			_id: new ObjectId("6348750639302e4d96a922f2"),
 			__v: 0
			}
	-
		-> Agregar Apartamentos:
			{_id: new ObjectId("634869970a8478628a3099e5"),
  			Propietario: 'Diego Dimitroff',
  			Torre: '1B',
  			Aviso_cobro: true,
  			id: 1,
  			__v: 0
			}
	
ROUTES:

/add_torre/:name

Si agregan la ruta y el parametro con el nombre de la torre que quieran crear, la misma se creara y se guardara en la base de datos con el siguiente formato:
	EJEMPLO: /add_torre/TORRE_EJEMPLO2

			{Name: "'TORRE_EJEMPLO2",
 			id: 14,
 			_id: new ObjectId("6348750639302e4d96a922f2"),
 			__v: 0
			}
La idea es agregar aqui agregar una clave que tenga como valor todos los APARTAMENTOS que se agreguen con la siguiente ruta

//--------------------------------------------------------------------------------------------------------------------------------------------------------------//

/add_apartment
Si agregan la ruta, y en el BODY completan la info del apartamento, la misma se creara y se guardara en la base de datos con el siguiente formato:
			{_id: new ObjectId("634869970a8478628a3099e5"),
  			Propietario: 'Diego Dimitroff',
  			Torre: '1B',
  			Aviso_cobro: true,
  			id: 1,
  			__v: 0
			}

La idea es agregar aqui un ADD para vincular el apartamento creado con alguna de las TORRES creadas. 
//---------------------------------------------------------------------------------------------------------------------------------------------------------------//

Se que es un dato sensible pero lo adjunto igual por las dudas. 
 mongodb+srv://diegodimii:Supersonico1@cluster0.2hvpwkt.mongodb.net/fideicomiso?retryWrites=true&w=majority
