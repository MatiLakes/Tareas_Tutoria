const usuario = {
    nombre: 'Matias',
    apellido: 'Lagos',
    direccion: {
        calle: 'Parque residencial, Hualpen',
        numero: '1',
        ciudad: 'Concepcion'
    },
    contactos: {
        email: 'matiaslagos@gmail.com',
        redesSociales: {
            linkedin: '@matias',
        }
    },

    intereses: ['Juegos', 'Musica', 'Deporte', 'Computador']


};

const {nombre, apellido, direccion: {ciudad}} = usuario;
const [primeriInteres] = usuario.intereses;
const {email} = usuario.contactos;
const {linkedin} = usuario.contactos.redesSociales;
const {direccion: {calle: calleUsuario, numero: numeroUsuario }} = usuario;


console.log(nombre);
console.log(apellido);
console.log(ciudad);
console.log(primeriInteres);
console.log(email);
console.log(linkedin);
console.log(calleUsuario);
console.log(numeroUsuario);
