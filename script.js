
const inputMaps = document.getElementById('inputMaps')
const buttonMaps = document.getElementById('buttonMaps')


buttonMaps.addEventListener('click', () => {
    const inputValueMaps = convertInputValueInEncodeURI(inputMaps.value)
    convertSrcEmbedForInputUser(inputValueMaps)
})

function convertInputValueInEncodeURI(inputValue) {
    return encodeURI(inputValue)
}

function convertSrcEmbedForInputUser(inputValueMaps) {
    const stringConvert = `https://maps.google.com/maps?q=${inputValueMaps}&t=&z=13&ie=UTF8&output=embed`
    if (document.getElementById('gmap_canvas')) {

        document.getElementById('gmap_canvas').src = stringConvert

    }
}