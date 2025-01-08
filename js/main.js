// connect
const inputName = document.querySelector('input #name');
const punchInBtn = document.querySelector('#punchin');
const punchOutBtn = document.querySelector('#punchout');
// const sheetUpdate = fetch('https://api.sheetmonkey.io/form/4zJFSXmt6xq7gLgUFnPFrm') {
//     method: 'POST',

// }

// get the input


// button
punchInBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(`Punched in ${inputName}`)
})

// punchOutBtn.addEventListener('click', (e) =>{
//     console.log(`Punched out ${inputName}`)
// })

// functions