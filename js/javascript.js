function ChangeBoxSize(){	 
	var widthInput = document.getElementById("width-input");
  var heightInput = document.getElementById("height-input");
  var widthValue = parseInt(widthInput.value);
  var heightValue = parseInt(heightInput.value);
  document.getElementById('box1').style.height = heightValue + "px";
  document.getElementById('box1').style.width = widthValue + "px";
}

function ChangeBorderWidth(){	 
	var bwidthInput = document.getElementById("bwidth-input");
  var bwidthValue = parseInt(bwidthInput.value);
  document.getElementById('box1').style.borderWidth = bwidthValue + "px";
}
