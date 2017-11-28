 var config = {
    apiKey: "AIzaSyCr8rv4DOWN_L5oJoaEMHRysAXyCTj6mXI",
    authDomain: "trainstation-6a9c0.firebaseapp.com",
    databaseURL: "https://trainstation-6a9c0.firebaseio.com",
    projectId: "trainstation-6a9c0",
    storageBucket: "",
    messagingSenderId: "201938784073"
  };
  
  firebase.initializeApp(config);

 var database = firebase.database();

$("#add-train-btn").on("click", function(event){
	event.preventDefault();

var train = $("#trainName").val().trim();
var dest = $("#destination").val().trim();
var fTrain = $("#firstTrainTime").val().trim();
var frequent = $("#frequency").val().trim();

var newTrain = {
	trainName : train,
	destination : dest,
	firstTrain : fTrain,
	frequency : frequent,
};

database.ref().push(newTrain);

console.log(newTrain.trainName);
console.log(newTrain.destination);
console.log(newTrain.firstTrain);
console.log(newTrain.frequency);

$("#trainName").val("");
$("destination").val("");
$("#firstTrainTime").val("");
$("frequency").val("");

});

database.ref().on("child_added", function(snapshot){



var train = snapshot.val().trainName;
var dest = snapshot.val().destination;
var fTrain = snapshot.val().firstTrain;
var frequent = snapshot.val().frequency;

$("#trainTable > tbody").append("<tr><td>" + train + "</td><td>" + dest + "</td><td>" + fTrain + "</td><td>" + frequent + "</td></tr>");
})

