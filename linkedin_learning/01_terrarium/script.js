function dragElement(terrariumElement) {
	let pos1 = 0, pos2 = 0
	let pos3 = 0, pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag;

	function pointerDrag(e) {
		e.preventDefault();
		console.log(e);
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onpointermove = elementDrag;
		document.onpointerup = stopElementDrag;
	}

	function elementDrag(e) {
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;

		terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + 'px';
		terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px';
	}

	function stopElementDrag() {
		document.onpointermove = null;
		document.onpointerup = null;
	}

}

dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));