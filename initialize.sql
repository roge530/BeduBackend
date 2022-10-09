--Creacion de usuarios
--Todos los registros en la tabla usuarios llevan como password: usuario
insert into usuarios (nombre, apellido_paterno, apellido_materno, usuario, email, tipo_usuario, "createdAt", "updatedAt", password) 
values 
 ('admin', 'admin', 'admin', 'admin', 'admin@mail.com', 2, '01/01/2022', '01/01/2022', '$2a$08$C3aZszLN.NP5lMRxU2ICL.bY5gGo2HWfbobO0luVwyKmlBxcaBAoC'),
 ('vet', 'vet', 'vet', 'vet', 'vet@mail.com', 1, '01/01/2022', '01/01/2022', '$2a$08$C3aZszLN.NP5lMRxU2ICL.bY5gGo2HWfbobO0luVwyKmlBxcaBAoC'),
 ('asistente', 'asistente', 'asistente', 'asistente', 'asistente@gmail.com', 0, '01/01/2022', '01/01/2022', '$2a$08$C3aZszLN.NP5lMRxU2ICL.bY5gGo2HWfbobO0luVwyKmlBxcaBAoC'),
 ('Tory', 'Kaaskooper', 'Lace', 'tlace2', 'tlace2@slideshare.net', 1, '01/01/2022', '07/20/2022', '$2a$08$C3aZszLN.NP5lMRxU2ICL.bY5gGo2HWfbobO0luVwyKmlBxcaBAoC'),
 ('Midge', 'Kleehuhler', 'Edgler', 'medgler3', 'medgler3@barnesandnoble.com', 0, '08/30/2021', '04/10/2022', '$2a$08$C3aZszLN.NP5lMRxU2ICL.bY5gGo2HWfbobO0luVwyKmlBxcaBAoC'),
 ('Ber', 'Giacomuzzi', 'Iston', 'biston4', 'biston4@creativecommons.org', 1, '08/26/2021', '12/11/2021', '$2a$08$C3aZszLN.NP5lMRxU2ICL.bY5gGo2HWfbobO0luVwyKmlBxcaBAoC'),
 ('Gertruda', 'Challace', 'Thursfield', 'gthursfield5', 'gthursfield5@sfgate.com', 0, '09/03/2022', '04/15/2022', '$2a$08$C3aZszLN.NP5lMRxU2ICL.bY5gGo2HWfbobO0luVwyKmlBxcaBAoC'),
 ('Lotty', 'MacGiolla', 'Friatt', 'lfriatt6', 'lfriatt6@theatlantic.com', 0, '10/06/2021', '09/06/2022', '$2a$08$C3aZszLN.NP5lMRxU2ICL.bY5gGo2HWfbobO0luVwyKmlBxcaBAoC'),
 ('Cristobal', 'Pethrick', 'Rubenov', 'crubenov7', 'crubenov7@indiatimes.com', 1, '11/09/2021', '11/19/2021', '$2a$08$C3aZszLN.NP5lMRxU2ICL.bY5gGo2HWfbobO0luVwyKmlBxcaBAoC'),
 ('Brock', 'Lurcock', 'Pawsey', 'bpawsey8', 'bpawsey8@columbia.edu', 0, '05/26/2022', '06/08/2022', '$2a$08$C3aZszLN.NP5lMRxU2ICL.bY5gGo2HWfbobO0luVwyKmlBxcaBAoC')




 --Creacion de clientes
 --Todos los registros en la tabla clientes llevan como password: cliente
 insert into clientes (nombre, apellido_paterno, apellido_materno, email, "createdAt", "updatedAt", password) 
values
('usuario', 'usuario', 'usuario', 'usuario@example.com', '01/01/2020', '01/01/2022', '$2y$08$k1jwZsZNt91w6c86s6YE1uwthDVw1JOy.QOeGAzXYVrzjuiGETTv.'),
('Lea', 'Toombs', 'Rapport', 'lrapport0@berkeley.edu', '09/12/2022', '09/09/2021', '$2y$08$k1jwZsZNt91w6c86s6YE1uwthDVw1JOy.QOeGAzXYVrzjuiGETTv.'),
('Prent', 'Oak', 'McCombe', 'pmccombe1@oakley.com', '07/21/2022', '09/24/2022', '$2y$08$k1jwZsZNt91w6c86s6YE1uwthDVw1JOy.QOeGAzXYVrzjuiGETTv.'),
('Greggory', 'Brindle', 'Merrgan', 'gmerrgan2@admin.ch', '03/14/2022', '09/24/2022', '$2y$08$k1jwZsZNt91w6c86s6YE1uwthDVw1JOy.QOeGAzXYVrzjuiGETTv.'),
('Glynnis', 'Baison', 'Guyon', 'gguyon3@google.de', '08/08/2022', '01/03/2022', '$2y$08$k1jwZsZNt91w6c86s6YE1uwthDVw1JOy.QOeGAzXYVrzjuiGETTv.'),
('Nolie', 'Pavluk', 'Cockrem', 'ncockrem4@google.com', '03/15/2022', '09/04/2021', '$2y$08$k1jwZsZNt91w6c86s6YE1uwthDVw1JOy.QOeGAzXYVrzjuiGETTv.'),
('Tandy', 'Hopkyns', 'Brailsford', 'tbrailsford5@biglobe.ne.jp', '11/20/2021', '11/02/2021', '$2y$08$k1jwZsZNt91w6c86s6YE1uwthDVw1JOy.QOeGAzXYVrzjuiGETTv.'),
('Thacher', 'Bickerstaff', 'Noar', 'tnoar6@wp.com', '01/16/2022', '01/21/2022', '$2y$08$k1jwZsZNt91w6c86s6YE1uwthDVw1JOy.QOeGAzXYVrzjuiGETTv.'),
('Malory', 'Dorward', 'Johansson', 'mjohansson7@joomla.org', '09/01/2022', '08/28/2022', '$2y$08$k1jwZsZNt91w6c86s6YE1uwthDVw1JOy.QOeGAzXYVrzjuiGETTv.'),
('Brenda', 'Real', 'Udall', 'budall8@photobucket.com', '09/05/2021', '04/15/2022', '$2y$08$k1jwZsZNt91w6c86s6YE1uwthDVw1JOy.QOeGAzXYVrzjuiGETTv.'),
('Kelcy', 'Lanchbery', 'Poure', 'kpoure9@china.com.cn', '11/01/2021', '04/26/2022', '$2y$08$k1jwZsZNt91w6c86s6YE1uwthDVw1JOy.QOeGAzXYVrzjuiGETTv.')


--creacion de especies
insert into especies (especie, "createdAt", "updatedAt")
values
('Perro', '01/01/2022', '01/01/2022'), ('Gato', '01/01/2022', '01/01/2022'), ('Hamster', '01/01/2022', '01/01/2022'), ('Iguana', '01/01/2022', '01/01/2022')

--creacion de subespecies 
insert into subespecies (subespecie, "createdAt", "updatedAt", "especieId")
values
('Mestizo', '01/01/2022', '01/01/2022', 1),
('Labrador', '01/01/2022', '01/01/2022', 1),
('Dálmata', '01/01/2022', '01/01/2022', 1),
('Chihuahua', '01/01/2022', '01/01/2022', 1),
('Xoloitzcuintle', '01/01/2022', '01/01/2022', 1),
('Mestizo', '01/01/2022', '01/01/2022', 2),
('Persa', '01/01/2022', '01/01/2022', 2),
('Siamés', '01/01/2022', '01/01/2022', 2),
('Hamster', '01/01/2022', '01/01/2022', 3),
('Iguana', '01/01/2022', '01/01/2022', 4)


--creacion de mascotas
insert into mascota (nombre, "especieId", "subespecieId", tamanio, peso, "createdAt", "updatedAt", "clienteId")
values
('Tomasa', 1, 1, 'Mediana', 22.5, '01/01/2022', '01/01/2022', 1),
('Hilal', 2, 6, 'Mediana', 10, '01/01/2022', '01/01/2022', 1),
('Cheetara', 2, 6, 'Mediana', 10, '01/01/2022', '01/01/2022',1),
('Bruno', 1, 3, 'Grande', 25, '01/01/2022', '01/01/2022', 2),
('Coco', 1, 5, 'Mediano', 18, '01/01/2022', '01/01/2022', 3),
('Bruno', 1, 2, 'Grande', 24, '01/01/2022', '01/01/2022', 4),
('Loki', 4, 10, 'Normal', 0.3, '01/01/2022', '01/01/2022', 5),
('Oliver', 3, 9, 'Normal', 0.2, '01/01/2022', '01/01/2022', 6)


--creacion de servicios
insert into servicios (tipo, precio, "createdAt", "updatedAt")
values
('Servicio grooming p/perro', 500, '01/01/2022', '01/01/2022'),
('Servicio grooming p/gato', 500, '01/01/2022', '01/01/2022'),
('Corte de uñas', 120, '01/01/2022', '01/01/2022'),
('Croqueta p/cachorro perro (1kg)', 59, '01/01/2022', '01/01/2022'),
('Croqueta p/adulto perro (1kg)', 55, '01/01/2022', '01/01/2022'),
('Croqueta p/adulto gato (1kg)', 69, '01/01/2022', '01/01/2022'),
('Croqueta p/cachorro gato (1kg)', 79, '01/01/2022', '01/01/2022'),
('Vacuna antirrábica', 199, '01/01/2022', '01/01/2022'),
('Arena p/gato (5kg)', 399, '01/01/2022', '01/01/2022'),
('Consulta veterinario', 299, '01/01/2022', '01/01/2022')


--creacion de marcas
insert into marcas (nombre, "createdAt", "updatedAt")
values
('Sin marca', '01/01/2022', '01/01/2022'),
('Diamond', '01/01/2022', '01/01/2022'),
('Pal perro', '01/01/2022', '01/01/2022'),
('Pal gato', '01/01/2022', '01/01/2022'),
('Pal hamster', '01/01/2022', '01/01/2022')

--creacion de citas
insert into cita (fecha, "createdAt", "updatedAt", "mascotaId", "clienteId", "usuarioId")
values
('01/01/2022', '01/01/2022', '01/01/2022', 1, 1, 2),
('01/01/2022', '01/01/2022', '01/01/2022', 1, 1, 2),
('01/01/2022', '01/01/2022', '01/01/2022', 2, 1, 2),
('01/01/2022', '01/01/2022', '01/01/2022', 2, 1, 2),
('01/01/2022', '01/01/2022', '01/01/2022', 3, 1, 3),
('01/01/2022', '01/01/2022', '01/01/2022', 3, 1, 3),
('01/01/2022', '01/01/2022', '01/01/2022', 4, 2, 3),
('01/01/2022', '01/01/2022', '01/01/2022', 6, 4, 3)


insert into cita_detalles (fecha, cantidad, "createdAt", "updatedAt", "citaId", "servicioId")
values
('01/01/01', 15, '01/01/01', '01/01/01', 1, 5),
('01/01/01', 1, '01/01/01', '01/01/01', 1, 1),
('01/01/01', 1, '01/01/01', '01/01/01', 2, 8),
('01/01/01', 1, '01/01/01', '01/01/01', 3, 9),
('01/01/01', 5, '01/01/01', '01/01/01', 3, 6),
('01/01/01', 1, '01/01/01', '01/01/01', 4, 3),
('01/01/01', 1, '01/01/01', '01/01/01', 4, 9),
('01/01/01', 1, '01/01/01', '01/01/01', 5, 10),
('01/01/01', 1, '01/01/01', '01/01/01', 6, 2),
('01/01/01', 1, '01/01/01', '01/01/01', 6, 9)