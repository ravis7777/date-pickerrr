document.getElementById('appointmentForm').onsubmit = function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Fetch the date and time values
  var date = document.getElementById('datePicker').value;
  var time = document.getElementById('timePicker').value;

  // Do something with these values, such as storing them or sending to a server
  console.log('Date selected:', date);
  console.log('Time selected:', time);

  // Add your chatbot integration code here
  // For example, sending data to chatbot's backend
};
document.getElementById('appointmentForm').onsubmit = function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Fetch the values
  var date = document.getElementById('datePicker').value;
  var time = document.getElementById('timePicker').value;
  var doctor = document.getElementById('doctorPicker').value;

  // Do something with these values, such as storing them or sending to a server
  console.log('Date selected:', date);
  console.log('Time selected:', time);
  console.log('Doctor selected:', doctor);
  // Add your chatbot integration code here
  // For example, sending data to chatbot's backend
  };
