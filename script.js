const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const ulPointer = document.querySelector("ul");

showTheseVehicles(vehicles, ulPointer);

// Chat-GPT kommentarer; forstår det sgu stadig ikke helt haha
function showTheseVehicles(arr, targetElement) {
  arr.forEach((each) => {
    targetElement.innerHTML += `<li>${each.type}</li>`;
    targetElement.innerHTML += `<li>${each.fuel || "N/A"}</li>`; // Replace undefined or empty with 'N/A'
    targetElement.innerHTML += `<li>${each.passengers || "N/A"}</li>`; // Replace undefined or empty with 'N/A'
    targetElement.innerHTML += `<li>${each.stops ? each.stops.join(", ") : "Check rejseplanen.dk"}</li>`; // Replace undefined or empty with 'Check rejseplanen.dk'
    targetElement.innerHTML += `<li>${each.ownedBy || "N/A"}</li>`; // Replace undefined or empty with 'N/A'
    targetElement.innerHTML += `<li>${each.isElectric ? "Yes" : "No"}</li>`; // Display 'Yes' or 'No' for boolean
    targetElement.innerHTML += `<li>${each.isTandem ? "Yes" : "No"}</li>`; // Display 'Yes' or 'No' for boolean
  });
}

const electricUL = document.querySelector(".electricUL");
const electricVehicles = vehicles.filter((vehicle) => vehicle.isElectric);
console.log(electricVehicles);

showTheseVehicles(electricVehicles, electricUL);

const manyPassengeredUL = document.querySelector(".manyPassengeredUL");
const manyPassengerVehicles = vehicles.filter((vehicle) => vehicle.passengers > 2);
console.log(manyPassengerVehicles);

showTheseVehicles(manyPassengerVehicles, manyPassengeredUL);

const ownedByJonasUL = document.querySelector(".ownedByJonasUL");
const ownedByJonas = electricVehicles.filter((vehicle) => vehicle.ownedBy === "Jonas");
console.log(ownedByJonas);

showTheseVehicles(ownedByJonas, ownedByJonasUL);

const rybreadUL = document.querySelector(".rybreadVehicles");
const rybreadVehicles = vehicles.filter((vehicle) => vehicle.fuel === "Rugbrød" && vehicle.passengers > 1);
console.log(rybreadVehicles);

showTheseVehicles(rybreadVehicles, rybreadUL);

/***** Stive knapper! *****/
const allUL = document.querySelectorAll(".ul");

function hideAllUL() {
  allUL.forEach((ul) => {
    ul.style.display = "none";
  });
}

hideAllUL();

/* All vehicles */

const showAll = document.querySelector(".showAll");
const allVehiclesUL = document.querySelector(".allVehiclesUL");

showAll.addEventListener("mousedown", showAllUL);

function showAllUL() {
  hideAllUL();
  allVehiclesUL.style.display = "block";
}

showAllUL();

/* Electric vehicles */

const showElectric = document.querySelector(".showElectric");
const electricVehiclesUL = document.querySelector(".electricVehiclesUL");

showElectric.addEventListener("mousedown", showElectricUL);

function showElectricUL() {
  hideAllUL();
  electricVehiclesUL.style.display = "block";
}

/* Many-Passengered-hehicles */

const showManyPassengered = document.querySelector(".showManyPassengered");
const manyPassengeredVehiclesUL = document.querySelector(".manyPassengeredVehiclesUL");

showManyPassengered.addEventListener("mousedown", showManyPassengeredUL);

function showManyPassengeredUL() {
  hideAllUL();
  manyPassengeredVehiclesUL.style.display = "block";
}

/* Vehicles owned by Jonas */

const showOwnedByJonas = document.querySelector(".showOwnedByJonas");
const ownedByJonasVehiclesUL = document.querySelector(".ownedByJonasVehiclesUL");

showOwnedByJonas.addEventListener("mousedown", showOwnedByJonasUL);

function showOwnedByJonasUL() {
  hideAllUL();
  ownedByJonasVehiclesUL.style.display = "block";
}

/* Rybread-vehicles */

const showRybread = document.querySelector(".showRybread");
const rybreadVehiclesUL = document.querySelector(".rybreadVehiclesUL");

showRybread.addEventListener("mousedown", showRybreadUL);

function showRybreadUL() {
  hideAllUL();
  rybreadVehiclesUL.style.display = "block";
}
