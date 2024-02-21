
// Función para obtener la dirección IP
export default function obtenerDireccionIP(callback) {
    // Inicializar un objeto RTCPeerConnection
    var pc = new RTCPeerConnection();

    // Crear una función de retorno de llamada que será ejecutada cuando se encuentren los candidatos ICE
    function handleCandidate(candidate) {
        // Verificar si es una dirección IP válida
        var ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/;
        var match = ipRegex.exec(candidate);
        if (match) {
            callback(match[1]); // Llamar a la función de retorno de llamada con la dirección IP encontrada
        }
    }

    // Agregar una función de retorno de llamada para los eventos de icecandidate
    pc.onicecandidate = function(event) {
        if (event.candidate) {
            handleCandidate(event.candidate.candidate);
        }
    };

    // Crear una oferta y establecer la descripción local
    pc.createOffer().then(function(offer) {
        return pc.setLocalDescription(offer);
    }).catch(function(error) {
        console.error("Error al crear la oferta: ", error);
    });
}
