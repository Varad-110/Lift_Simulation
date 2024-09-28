const generateBtn = document.getElementById('generate_btn');
const numLiftinput = document.getElementById('no_lifts');
const numFloorsinput = document.getElementById('no_floors');
const simulation = document.getElementById('simulation');

let numLifts , numFloors;
generateBtn.addEventListener('click', () => {
    numLifts = numLiftinput.value;
    numFloors = numFloorsinput.value;
    simulation.innerHTML = `Number of Lifts: ${numLifts}<br>Number of Floors :${numFloors}`;
})