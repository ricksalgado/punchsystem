// connect
const inputName = document.querySelector('#name');
const punchInBtn = document.querySelector('#punchin');
const punchOutBtn = document.querySelector('#punchout');
const now = new Date();
const date = now.toLocaleDateString();
const time = now.toLocaleTimeString();


// functions
function getLocation(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            callback(latitude, longitude);
        }, (error) => {
            console.error(`Error to take the location ${error.message}`);
            callback(null);
        });
    } else {
        console.error('Geolocation is not supported by your browser');
        callback(null);

    }
}


function getCurrentDateTime() {
    return { date, time };
}

function sheetUpdate(employeeName, date, time) {
    fetch('https://api.sheetmonkey.io/form/4zJFSXmt6xq7gLgUFnPFrm') {
        method: 'POST';
        headers: {
            `Employee`: `${employeeName}`,
            `Time`: `${time}`,
            `Date`: `${date}`,
        }
        body: JSON.stringify(employeeName, date, time),
    }
};
// get the input


// button
punchInBtn.addEventListener('click', (e) => {
    e.preventDefault();
    getCurrentDateTime()
    const employeeName = inputName.value;

    console.log(employeeName, date, time);

    if (employeeName.trim() === "") {
        console.log("Field name is empty, please entry a valid name.");
        alert('Field name is empty, please entry a valid name.')
    } else {
        console.log(`Punched in: ${employeeName}`);
    }


})

punchOutBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const employeeName = inputName.value;

    if (employeeName.trim() === "") {
        console.log("Field name is empty, please entry a valid name.");
        alert('Field name is empty, please entry a valid name.')
    } else {
        console.log(`Punched in: ${employeeName}`);
    }
})