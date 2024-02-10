const dayStart = "07:30";
const dayEnd = "17:45";

function getNumberFromTime(time) {
  return parseInt(time.split(":").join(""));
}

function scheduleMeeting(startTime, durationMinutes) {
  let dStart = getNumberFromTime(dayStart);
  let dEnd = getNumberFromTime(dayEnd);
  let start = getNumberFromTime(startTime);

  console.log(
    start >= dStart && start <= dEnd && dEnd - start >= durationMinutes
  );
}

scheduleMeeting("7:00", 15); // false
scheduleMeeting("07:15", 30); // false
scheduleMeeting("7:30", 30); // true
scheduleMeeting("11:30", 60); // true
scheduleMeeting("17:00", 45); // true
scheduleMeeting("17:30", 30); // false
scheduleMeeting("18:00", 15); // false
