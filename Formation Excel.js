function AfficherCacher() {
	var x = document.getElementById("DivSolution");
	if (x.style.display === "none") {
		x.style.display = "block";
		// window.scrollTo(0, 0);
	} else {
	x.style.display = "none";
	// window.scrollTo(0, 0);
		}
	}


function CacherSolution() {
	var x = document.getElementById("DivSolution");
	x.style.display = "none";
	}