const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "API Veterinaria"
        },
    },

    apis: ["./routes/cita.js"]
    
}

export{swaggerOptions}