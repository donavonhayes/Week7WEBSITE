// Week 10 Assignment
// Jair Alcon

// I hard coded some data for testing purposes
const carList = [
	{
		id: 0,
		make: "Ford",
		model: "Fiesta",
		year: "2015"
	},
	{
		id: 1,
		make: "Geo",
		model: "Metro",
		year: "1992"
	},
	{
		id: 2,
		make: "Toyota",
		model: "Celica All-Trac Turbo",
		year: "1993"
	}
];


$(document).ready(function () {
	$("#form-make-input").focus();
});

$(() => {
	
	renderInventoryList()
})

const $vehiclesContainer = $("#vehicles-container");

function renderInventoryList() {
	$vehiclesContainer.empty()
	$vehiclesContainer.append(carList.map(car => renderCar(car)))
}


function renderCar(carParam) {

	return $("<tr/>").append(
		$("<td/>").text(carParam.id + 1).attr("id", `${carParam.id}`),
		$("<td/>").text(carParam.make),
		$("<td/>").text(carParam.model),
		$("<td/>").text(carParam.year),
		$("<td/>").addClass("d-grid gap-2 d-md-flex justify-content-md").append(
			$("<button>").addClass("btn btn-primary me-4").text("Edit").on("click", () => onStartVehicleEdit(carParam.id)),
			$("<button/>").addClass("btn btn-danger me-4")/*.attr("id", `${carParam.id}`)*/.text("Delete").on("click", () => onDeleteButtonClick(carParam.id))			
		)
	)
}


const carModal = new bootstrap.Modal('#car-edit-modal');
const $carModalTitle = $("#car-modal-title");
const $formMakeInput = $("#form-make-input");
const $formModelInput = $("#form-model-input");
const $formYearInput = $("#form-year-input");
const $modalMakeInput = $("#modal-make-input");
const $modalModelInput = $("#modal-model-input");
const $modalYearInput = $("#modal-year-input");

const $addCarId = $("#id")

let editCarId = null;

function onSaveVehicle() {
	console.log('saving data inside of this function')
	if (editCarId === null) {

		carList.push({
			//* https://stackoverflow.com/questions/64926946/add-an-autoincrementing-number-in-an-object-to-the-push
			//* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
			//  using optional chaining operator (?)
			id: carList.length ? carList[carList.length - 1].id + 1 : 0,
			make: $formMakeInput.val(),
			model: $formModelInput.val(),
			year: $formYearInput.val()
		});
		console.log('This is the added ID:', carList.length ? carList[carList.length - 1].id + 1 : 0);
		console.log('This is the added Make:', $formMakeInput.val());
		console.log('This is the added Model:', $formModelInput.val());
		console.log('This is the added Year:', $formYearInput.val());
		$formMakeInput.val('');
		$formModelInput.val('');
		$formYearInput.val('');

		let index = -1;
		console.log('Added this vehicle to table:', carList.at(index));
	}
	else {
\		const car = carList.find(car => car.id === editCarId);
\		car.make = $modalMakeInput.val();
		car.model = $modalModelInput.val();
		car.year = $modalYearInput.val();
		console.log('Car values were changed to:', car)
	}

]	renderInventoryList();
	carModal.hide();
}

function onStartVehicleEdit(vehicleId) {
	console.log('starting Edit process with ID:', vehicleId);
]	const car = carList.find(car => car.id === vehicleId);
	console.log('We are editing:', car)
]	carModal.show();
\]	$carModalTitle.text("Edit: " + car.make + ' ' + car.model + ' ' + car.year);
]	$modalMakeInput.val(car.make),
	$modalModelInput.val(car.model),
	$modalYearInput.val(car.year)
]	editCarId = car.id;
	console.log(editCarId);
}

function onDeleteButtonClick(carId) {
	console.log('we are inside the delete function', (carId))
	const indexToDelete = carList.findIndex(car => car.id === carId)
\	let index = 1;
	console.log('Deleting this vehicle from table:', carList.at(index));
\	carList.splice(indexToDelete, 1);
	renderInventoryList();
	// IF YOU'RE USING AN API: also let the backend know
	// fetch("http://localhost:3001/products/" + carId, { method: "DELETE" })
}

]$("#add").click(function () {
	$formMakeInput.focus();
});

$(document).ready(() => {
	$('.vehicle-form').on('submit', () => {

		return false;
	});
});
$('.vehicle-form').keypress((e) => {

	if (e.which === 13) {
		onSaveVehicle();
		console.log('Form Successfully Submitted');
	}
	$("#form-make-input").focus();
})

