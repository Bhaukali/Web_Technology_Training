
// Onlcik Event of ADD

var entry = document.getElementById("entry");
entry.addEventListener("click", dd); 
var row = 1;
var t;
var T = 0;

// Calling of dd() function for backend funtioning

function dd(){

// Getting the values of Dropdown Menu ID'd

		var c = document.getElementById("itemlist").value;
		var q = document.getElementById("count").value;
		var a = document.getElementById("itemlist").selectedIndex;
		var b = document.getElementById("count").selectedIndex;

// Condition for printing Price and Total Price in the Table

		if(a != 0 && b != 0)
		{
			if(c == "Idli Sambar")
			{	
				document.getElementById("Price").value = "Rs " + 30;
				t = 30 * b;
				document.getElementById("Total_Price").value = "Rs " + (30 * b);
			}
			else if(c == "Masala Dosa")
			{
				document.getElementById("Price").value = "Rs " + 60;
				t = 60 * b;
				document.getElementById("Total_Price").value = "Rs " + (60 * b);
			}
			else if(c == "Rava Dosa")
			{
				document.getElementById("Price").value = "Rs " + 70;
				t = 70 * b;
				document.getElementById("Total_Price").value = "Rs " + (70 * b);
			}
			else if(c == "Pulao")
			{
				document.getElementById("Price").value = "Rs " + 80;
				t = 80 * b;
				document.getElementById("Total_Price").value = "Rs " + (80 * b);
			}
			else if(c == "Vada")
			{
				document.getElementById("Price").value = "Rs " + 20;
				t = 20 * b;
				document.getElementById("Total_Price").value = "Rs " + (20 * b);
			}


// Getting Values in the Table and inserting new rows with data in the Table

			var display = document.getElementById("display");

			var newRow = display.insertRow(row);


			var cell1 = newRow.insertCell(0);
			var cell2 = newRow.insertCell(1);
			var cell3 = newRow.insertCell(2);
			var cell4 = newRow.insertCell(3);
			var cell5 = newRow.insertCell(4);

			cell1.innerHTML = row;
			cell2.innerHTML = c;
			cell3.innerHTML = document.getElementById("Price").value;
			cell4.innerHTML = q;
			cell5.innerHTML = document.getElementById("Total_Price").value

// Calculating Grand Total and getting the same in the Table

			T = T + t;

			var lastRow = display.rows[ display.rows.length - 1 ];
			
			var lastCell = lastRow.cells[lastRow.cells.length-1];

			lastCell.innerHTML = "Rs " + T;

			row++;

// Condition for displaying window alert in case of a non acceptable values from dropdown menu

		}else{
			if(a == 0 && b != 0) 
			{
				window.alert("Please select one of the cusine");
			} else if(b == 0 && a != 0)
			{
				window.alert("Please select the quantity of cusine you want");
			}else{
				window.alert("Please select the cusine along with the qunatity");
			}
		}

}
