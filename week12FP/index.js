// Week 10 Assignment
// Jair Alcon

// I hard coded some data for testing purposes
const carList = [
	{
		id: 0,
		artist: "Drake",
		song: "Finesse",
		
	},
	{
		id: 1,
		artist: "Nicki Minaj",
		song: "Barbie World",
		
	},
	{
		id: 2,
		artist: "Ice Spice",
		song: "Princess Diana",
	}
];


$(document).ready(function () {
	$("#form-make-input").focus();
});

$(() => {
	
	renderPlaylist()
})

const $PlaylistContainer = $("#playlist-container");

function renderPlayList() {
	$playlistContainer.empty()
	$playlistContainer.append(songs.map(car => renderSongs(songs)))
}


function renderSongs(SongsParam) {

	return $("<tr/>").append(
		$("<td/>").text(songParam.id + 1).attr("id", `${songParam.id}`),
		$("<td/>").text(songParam.artist),
		$("<td/>").text(songParam.song),
		$("<td/>").addClass("d-grid gap-2 d-md-flex justify-content-md").append(
			$("<button>").addClass("btn btn-primary me-4").text("Edit").on("click", () => onStartPlaylistEdit(songParam.id)),
			$("<button/>").addClass("btn btn-danger me-4")/*.attr("id", `${songParam.id}`)*/.text("Delete").on("click", () => onDeleteButtonClick(songParam.id))			
		)
	)
}


const PlaylistModal = new bootstrap.Modal('#playlist-edit-modal');
const $PlaylistModalTitle = $("#playlist-modal-title");
const $formArtistInput = $("#form-artist-input");
const $formSongInput = $("#form-song-input");
const $modalArtistInput = $("#modal-artist-input");
const $modalSongInput = $("#modal-song-input");

const $addPlaylistId = $("#id")

let editplaylistId = null;

function onSavePlaylist() {
	console.log('saving data inside of this function')
	if (editPlaylistId === null) {

		PlaylistList.push({
			//* https://stackoverflow.com/questions/64926946/add-an-autoincrementing-number-in-an-object-to-the-push
			//* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
			//  using optional chaining operator (?)
			id: PlayList.length ? playList[playList.length - 1].id + 1 : 0,
			artist: $formartistInput.val(),
			song: $formsongInput.val(),
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

