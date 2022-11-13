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

    apis: [
      "./routes/medicines.js",
      "./routes/user.js",
      "./routes/subspecies.js",
      "./routes/service.js",
      "./routes/pet.js",
      "./routes/brand.js",
      "./routes/appointment.js",
      "./routes/customer.js",
      "./routes/specie.js",
    ]
    
}

export{swaggerOptions}