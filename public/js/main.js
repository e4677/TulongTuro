const toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", () => {
	document.body.classList.toggle("sidebar-closed");

	if (document.body.classList.contains("sidebar-closed")) {
		localStorage.setItem('sidebar', 'closed');
	} else {
		localStorage.setItem('sidebar', 'open');
	}
});

if (localStorage.getItem('sidebar') === 'closed') {	
	document.body.style.transition = 'none';
	document.body.style.offsetHeight;
	document.body.classList.add("sidebar-closed");

	setInterval(() => {
		document.body.style.transition = '';
	}, 600)
	
} else {
	document.body.classList.remove("sidebar-closed");
}
