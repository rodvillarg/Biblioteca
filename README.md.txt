1. Express manda los rechazos de un handler async directo al middleware de errores, sin try/catch en cada ruta. 
¿Qué tendrían que agregar en cada ruta si esto no fuera así?

Si esto no fuera asi tendriamos que poner un try/catch en cada ruta manualmente, y en el catch agregar 
next(err) para que los errores puedan llegar hasta el middleware.


2. ¿Por qué el servicio no lanza directamente un 409 en vez de EjemplarPrestadoError?

Porque el EjemplarPrestadoError es una regla de negocio, el service no sabe nada de http.

3. Si mañana agregaran una app móvil que también consume esta API, 
¿qué archivos de esta práctica tendrían que tocar?

Creo que ningun archivo, el service y el repo ya regresan un json entonces podrian comunicarse con cualquier cosa.