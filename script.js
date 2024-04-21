let countHours = 0;
let countMinutes = 0;

let hours = document.getElementById("input-hours");
let minutes = document.getElementById("input-minutes");

function increaseHour() {
  countHours = (countHours + 1) % 24; // Esto asegura que después de 23, vuelva a 0.
  hours.value = countHours.toString().padStart(2, "0"); // Asegura formato de dos dígitos.
}

function decreaseHour() {
  countHours = (countHours - 1 + 24) % 24;
  hours.value = countHours.toString().padStart(2, "0");
}

function increaseMinute() {
  countMinutes = (countMinutes + 1) % 60;
  minutes.value = countMinutes.toString().padStart(2, "0");
}

function decreaseMinute() {
  countMinutes = (countMinutes - 1 + 60) % 60;
  minutes.value = countMinutes.toString().padStart(2, "0");
}

function cancel() {
  hours.value = "00";
  minutes.value = "00";

  countHours = 0;
  countMinutes = 0;
}

function save() {
  const newAlarm = document.createElement("div");
  document.getElementById("alarms_box").appendChild(newAlarm);
  newAlarm.id = "alarm_set";
  document.getElementById("alarm_set").classList.add("alarm-set");
  document.getElementById("alarm_set").style.display = "flex";
  document.getElementById("alarm_set").style.justifyContent = "center";

  const newAlarmHours = document.createElement("h2");
  newAlarm.appendChild(newAlarmHours);
  newAlarmHours.id = "alarm-set-hours";
  document.getElementById("alarm-set-hours").classList.add("alarm-set-h2");
  document.getElementById("alarm-set-hours").textContent = countHours
    .toString()
    .padStart(2, "0");

  const newAlarmSeparator = document.createElement("span");
  newAlarm.appendChild(newAlarmSeparator);
  newAlarmSeparator.id = "alarm-set-separator";
  newAlarmSeparator.textContent = ":";
  document.getElementById("alarm-set-separator").classList.add("alarm-set-h2");

  const newAlarmMinutes = document.createElement("h2");
  newAlarm.appendChild(newAlarmMinutes);
  newAlarmMinutes.id = "alarm-set-minutes";
  document.getElementById("alarm-set-minutes").textContent = countMinutes
    .toString()
    .padStart(2, "0");
  document.getElementById("alarm-set-minutes").classList.add("alarm-set-h2");

  document.getElementById("alarm-set-hours").textContent = hours.value; //Esta linea de codigo hace que se guarde el valor ingresado mediante el teclado al input.
  document.getElementById("alarm-set-minutes").textContent = minutes.value;

  cancel();

  document.getElementById("alarms_box").appendChild(newAlarm);
}

// estas lineas de codigo que siguen es practica
let test = 0;
while (test < 5) {
  console.log("X");
  test++;
}
