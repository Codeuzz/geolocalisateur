const geoBtn = document.getElementById("geo-btn")
const resultParagraph = document.getElementById("result-paragraph");

const findHuman = (event) => {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const accuracy = position.coords.accuracy;
        
        const message = `Latitude: ${latitude}, Longitude: ${longitude}, Accuracy: ${accuracy} meters`;
        console.log(message);
        fetch(`https://api-adresse.data.gouv.fr/reverse/?lon=${longitude}&lat=${latitude}`)
        .then(res => res.json())
        .then(data => {
            resultParagraph.textContent = `
            Adresse : ${data.features[0].properties.name}, Code Postal : ${data.features[0].properties.postcode}`
            console.log(data)
        
        })
    }, (error) => {
        console.error('Error getting location:', error);
    });
}

geoBtn.addEventListener('click', findHuman)