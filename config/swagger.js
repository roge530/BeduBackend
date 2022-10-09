const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "API Veterinaria"
        },
    },

    apis: ["./routes/usuario.js","./routes/subespecie.js","./routes/servicio.js","./routes/mascota.js","./routes/marca.js","./routes/cita.js","./routes/cliente.js","./routes/especie.js",]
    
}

export{swaggerOptions}