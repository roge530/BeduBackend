const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.1',
        info: {
            version: "1.0.0",
            title: "API Veterinaria"
        },
        basePath: '/',
        components: {
          securitySchemes: {
            bearerAuth: {
              type: 'http',
              scheme: 'bearer',
              bearerFormat: 'JWT',
            }
          }
        },
        
      },

    apis: ["./routes/usuario.js","./routes/subespecie.js","./routes/servicio.js","./routes/mascota.js","./routes/marca.js","./routes/cita.js","./routes/cliente.js","./routes/especie.js",]
    
}

export{swaggerOptions}