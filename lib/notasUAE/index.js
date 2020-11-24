let apiURL;

/**
 * Establece URL
 *
 * @param {string} cedula
 * @param {string} periodo
 * @return {object} resJson
 */
exports.getNotas = (ced, periodo) => {
    if (!ced) return {error: true, message: 'Ingrese cédula'};
    apiURL = `http://api.lxndr.live:3000/notas?ced=${ced}`;
    if (periodo) {
        const regex1 = /^[2][0][0-9]{2}\-[2][0][0-9]{2}?$/;
        if (!regex1.test(periodo)) {
            const regex2 = /^[1-2][0-9]\-[1-2][0-9]?$/;
            if (regex2.test(periodo)) {
                lectivo = `20${periodo[0]}${periodo[1]}-20${periodo[3]}${periodo[4]}`;
                apiURL = `http://api.lxndr.live:3000/notas?ced=${ced}&alectivo=${periodo}`;
            }
            else {
                apiURL = `http://api.lxndr.live:3000/notas?ced=${ced}`;
            }
        }
    }
    fetch(apiURL)
        .then((res) => res.json())
        .then((resJson) => {
            return resJson;
        })
        .catch((error) => {
            return {error: true, message: error};
        });
};
