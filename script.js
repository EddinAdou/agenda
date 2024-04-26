document.querySelector('.add').addEventListener('click', function() {
    var eventTitle = prompt('Entrez le titre de l\'événement');
    var eventTime = prompt('Entrez l\'heure de l\'événement');

    var eventDiv = document.createElement('div');
    eventDiv.classList.add('event');

    var titleP = document.createElement('p');
    titleP.classList.add('title');
    titleP.textContent = eventTitle;

    var timeP = document.createElement('p');
    timeP.classList.add('time');
    timeP.textContent = eventTime;

    eventDiv.appendChild(titleP);
    eventDiv.appendChild(timeP);

    document.querySelector('.num-dates').appendChild(eventDiv);
});

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var date = new Date();
        alert('Date : ' + date.toDateString() + ', Heure : ' + date.toLocaleTimeString() + ', Latitude : ' + position.coords.latitude + ', Longitude : ' + position.coords.longitude);
    });
} else {
    alert('La géolocalisation n\'est pas prise en charge par ce navigateur.');
}