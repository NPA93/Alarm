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

function createAlarmsBox(itemId) {
  const newAlarmId = "alarm_set_" + itemId;
  const newAlarm = document.createElement("div");

  document.getElementById("alarms_box").appendChild(newAlarm);
  newAlarm.id = newAlarmId;
  document.getElementById(newAlarmId).classList.add("alarm-set");
  document.getElementById(newAlarmId).style.display = "flex";
  document.getElementById(newAlarmId).style.justifyContent = "center";
}

function createHoursItem(itemId) {
  const newAlarmId = "alarm_set_" + itemId;
  const newAlarmHoursId = "alarm-set-hours_" + itemId;

  const newAlarmHours = document.createElement("h2");
  newAlarmHours.id = newAlarmHoursId;
  document.getElementById(newAlarmId).appendChild(newAlarmHours);
  document.getElementById(newAlarmHoursId).classList.add("alarm-set-h2");
  document.getElementById(newAlarmHoursId).textContent = countHours
    .toString()
    .padStart(2, "0");
}

function createSeparatorItem(itemId) {
  const newAlarmId = "alarm_set_" + itemId;
  const newAlarmSeparatorId = "alarm-set-separator_" + itemId;

  const newAlarmSeparator = document.createElement("span");
  newAlarmSeparator.id = newAlarmSeparatorId;
  document.getElementById(newAlarmId).appendChild(newAlarmSeparator);
  document.getElementById(newAlarmSeparatorId).textContent = ":";
  document.getElementById(newAlarmSeparatorId).classList.add("alarm-set-h2");
}

function createMinutesItem(itemId) {
  const newAlarmId = "alarm_set_" + itemId;
  const newAlarmMinutesId = "alarm-set-minutes_" + itemId;

  const newAlarmMinutes = document.createElement("h2");
  newAlarmMinutes.id = newAlarmMinutesId;
  document.getElementById(newAlarmId).appendChild(newAlarmMinutes);
  document.getElementById(newAlarmMinutesId).textContent = countMinutes
    .toString()
    .padStart(2, "0");
  document.getElementById(newAlarmMinutesId).classList.add("alarm-set-h2");
}

function save() {
  const totalAlarms = document.getElementsByClassName("alarm-set").length;

  createAlarmsBox(totalAlarms);
  createHoursItem(totalAlarms);
  createSeparatorItem(totalAlarms);
  createMinutesItem(totalAlarms);

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
