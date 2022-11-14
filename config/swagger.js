const swaggerOptions = {
    definition: {
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
        security: [
          {
            bearerAuth: []
          }
        ]
        
      },

    apis: ["./routes/user.js","./routes/suspecies.js","./routes/service.js","./routes/pet.js","./routes/brand.js","./routes/appointment.js","./routes/client.js","./routes/species.js",]
    
}

export{swaggerOptions}