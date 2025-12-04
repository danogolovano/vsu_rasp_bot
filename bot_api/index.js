const button = document.querySelector('#submit');
const course = document.querySelector('#course');
const group = document.querySelector('#group');
const subGroup = document.querySelector('#sub-group');
const day = document.querySelector('#day');

button.addEventListener('click', async event => {
    event.preventDefault();
    let response = await fetch(
        `https://platovd.ru/api/schedule/8577039621:AAHJZlrrJiotowSdvHW6kKgWwiN4ct-8yBA/${course.value}/${group.value}/${subGroup.value}/${day.value}`,
        {
            method: 'POST',
            headers: {}
            }
    )

    let data = await response.json();
    displaySchedule(data)
})

function displaySchedule(data) {
    const outputDiv = document.querySelector('#output');
    outputDiv.innerHTML = '';
    let h = document.createElement("h2");
    h.innerText = data.day;
    outputDiv.appendChild(h);
    console.log(data.schedule)
    for (const [time, lesson] of Object.entries(data.schedule)) {
        let p = document.createElement("p")
        p.innerText = `${time} - ${lesson}`
        outputDiv.appendChild(p)
    }
}