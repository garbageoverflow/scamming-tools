document.addEventListener('dragstart', (event) => {
	console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
	var start_x = event.clientX;
	var start_y = event.clientY;
});

document.addEventListener('dragend', (e) => {
	console.log(`Mouse X: ${e.clientX}, Mouse Y: ${e.clientY}`);
	var end_x = e.clientX;
	var end_y = e.clientY;
})