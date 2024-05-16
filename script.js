//your JS code here. If required.
function Select_and_Remove() {
            var selectElement = document.getElementById('colorSelect');
            var selectedItem = selectElement.options[selectElement.selectedIndex].value;
	document.getElementById(selectedItem).remove();
}

document.getElementById("select_remove").addEventListener("click",Select_and_Remove);