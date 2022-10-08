# BeduBackend

## Como trabajar las ramas?
1. Tienes que ser invitado a trabajar al repositorio
2. Clonas el repositorio, te recomiendo que lo hagas a traves de SSH[^1].
3. Creas tu rama, nombrala con tu nombre, ejemplo: `git checkout -b roge`
4. No olvides dejar mensajes descriptivos en el commit
5. Toda nueva funcionalidad tiene que incluir su respectiva prueba
6. Se tiene que trabajar con Test Driven Development[^2].

## Merge o Pull request?
**PULL REQUEST a test** esto para evitar subir codigo experimental a Master

## Hice Pull request a Main, que puedo hacer?
Se revisa la solicitud y se aprueba segun sea el caso

## Se implementara CI/CD?
Para este trabajo no

## Como creo la prueba?
Para crear las pruebas de tu funcionalidad utiliza la herramienta [K6](https://k6.io/docs/getting-started/installation/) 

## Como utilizo K6?
Creas un script de Javascript y al inicio agregas `import http from 'k6/http'`

Agregas la configuracion de los resultados `export const options = {
summaryTrendStats: ["avg", "min", "med", "max", "p(25)", "p(75)", "p(95)"]
}`

Despues escribes `export default function () {}`

Y trabajas dentro de las llaves, todo el codigo se escribe en Javascript asi que
no considero que haya alguna dificultad en ello

## Puedo tener multiples pruebas en un solo script?
Si, y es lo que te recomiendo, ya en las historias de usuario trabajaremos el CRUD completo

## Como trabajaremos sin que choquen las funcionalidades?
Trabajaremos como microservicios[^3] para evitar los conflictos de codigo, generar un monilito y que el backned sea escalable de manera horizontal

## Issues o Trello?
Puedes consultar directamente Trello ya que ahi mismo te redirige al issue que trabajes

## Como esta constituida la base de datos?
El prototipo es el siguiente:
![Diagrama](/diagrams/ERDDiagram1.png)

[^1]: Para clonar con SSH debes ya tener configurada tu clave publica SSH de tu equipo y esta debe estar en tu cuenta https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/github-clone-with-ssh-keys

[^2]: Se refiere a que primero se programa la prueba de la funcionalidad antes que la misma funcionalidad, asi al terminar la funcionalidad, la prueba debera ser exitosa. [Mas info](https://www.paradigmadigital.com/dev/tdd-como-metodologia-de-diseno-de-software/)

[^3]: Este concepto se refiere a que existen APIs dedicadas a un unico proceso de negocio. [Mas info](https://microservices.io/)


