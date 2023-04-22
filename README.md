# Prueba técnica para programador junior en Node.js📄

## Información sobre la API desplegado en Railway 

Framework
* NestJS

Base de datos
* MongoDB

Plataforma de despliegue
* Railway

URL de la API
* https://pruebakamaytech-production.up.railway.app/

## Pruebas realizadas en POSTMAN de las operaciones CRUD de la API.

### 1. GET /users: Obtener todos los documentos de la colección.

* URL: https://pruebakamaytech-production.up.railway.app/users

RESULTADO
![image](https://user-images.githubusercontent.com/34387442/233806166-032bde9f-dc77-4ed8-9ab4-00e45caa38bd.png)

### 2. GET /users/🆔 Obtener un documento específico de la colección según su _id.
Aquí se debe ingresar el id para obtener una colección especifica.

* URL https://pruebakamaytech-production.up.railway.app/users/USERID

RESULTADO
![image](https://user-images.githubusercontent.com/34387442/233806359-5e8aef3c-0f44-42f8-be20-a166f5736f36.png)

### 3. POST /users: Insertar un nuevo documento en la colección.
Para poder insertar una nuevo documento necesitamos un body que en este caso es un JSON con la nueva información.

```json
{
    "name": "Diego Hernan Uyaguari Guillen",
    "email": "diego@gmail.com",
    "age": "35"
}
```

Una vez ingresa la información de forma correcta se creará el nuevo documento.

RESULTADO

![image](https://user-images.githubusercontent.com/34387442/233806459-baed171a-aa42-4fdc-838d-418cd8e45bac.png)

### 4. PUT /users/🆔 Actualizar un documento específico de la colección según su _id.

Para realizar la actualización se necesita de dos parámetros uno es el id especifico del documneto que se desea modificar y a su vez la información en formato JSON para modificar el documento seleccionada.

* RUL https://pruebakamaytech-production.up.railway.app/users?userID=USER_ID

```json
{
    "name": "Veronica Gabriela Redrovan Cedillo",
    "email": "veronica@hotmail.com",
    "age": "26"
}
```
RESULTADO

![image](https://user-images.githubusercontent.com/34387442/233806714-e9b86fa5-2c8d-4519-8f45-53db8d1b6ea8.png)

Para verificar que el cambio se realizó correctamente podemos listar nuestros documentos o buscar por el id.

### 5. DELETE /users/🆔 Eliminar un documento específico de la colección según su _id.

Parta finalizar tenemos el servicio para eliminar un documento mediante el id de usuario.

*URL https://pruebakamaytech-production.up.railway.app/users?userID=USRID

RESULTADO

![image](https://user-images.githubusercontent.com/34387442/233806775-23ecf6f7-7467-4b24-881b-5670f293ed3a.png)
