let apiURL;

/**
 * Establece URL
 *
 * @param {string} song
 * @return {object} resJson
 */
exports.getLyrics = (song) => {
    if (!song) return {error: true, message: 'Ingrese la canción a buscar'};
    apiURL = `https://api.lxndr.live/lyrics/?song=${song}`;
    fetch(apiURL)
        .then((res) => res.json())
        .then((resJson) => {
            return resJson;
        })
        .catch((error) => {
            return {error: true, message: error};
        });
};
