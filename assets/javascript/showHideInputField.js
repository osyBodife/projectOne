function popUpFunction() {
    var popup = document.getElementById("Popup");
    popup.classList.toggle("show");
}

function popUpPwdFunction() {
    var poppwdinfo = document.getElementById("Poppwd");
    poppwdinfo.classList.toggle("show");
}


function showHideInputEmailField(name) {
	if(name == "" || name == null){      
        document.getElementById("emailDiv").style.display = 'none';
    } else{
		
	document.getElementById("emailDiv").style.display = 'block';
	}
}


function showHideInputConfirmEmailField(name) {
	if(email == "" || email == null){      
        document.getElementById("confirmEmailDiv").style.display = 'none';
    } else{
		
	document.getElementById("confirmEmailDiv").style.display = 'block';
	}
}
   
   
function showHideInputPhoneField(name) {
	if(confirmEmail == "" || confirmEmail == null){      
        document.getElementById("phoneDiv").style.display = 'none';
    } else{
		
	document.getElementById("phoneDiv").style.display = 'block';
	}
}
 

   
function showHideInputAddressField(name) {
	if(phone == "" || phone == null){      
        document.getElementById("addressDiv").style.display = 'none';
    } else{
		
	document.getElementById("addressDiv").style.display = 'block';
	}
}


  
function showHideInputCityField(name) {
	if(address == "" || address == null){      
        document.getElementById("cityDiv").style.display = 'none';
    } else{
		
	document.getElementById("cityDiv").style.display = 'block';
	}
}


function showHideInputZipField(name) {
	if(city == "" || city == null){      
        document.getElementById("zipDiv").style.display = 'none';
    } else{		
	document.getElementById("zipDiv").style.display = 'block';
	}
}


function showHideInputCountryField(name) {
	if(zip == "" || zip == null){      
        document.getElementById("countryDiv").style.display = 'none';
    } else{		
	document.getElementById("countryDiv").style.display = 'block';
	}
}



function showHideInputPwdField(name) {
	if(state == "" || state == null){      
        document.getElementById("pwdDiv").style.display = 'none';
    } else{		
	document.getElementById("pwdDiv").style.display = 'block';
	}
}

function showHideInputCmfPwdField(name) {
	if(password == "" || password == null){      
        document.getElementById("confrimPwdDiv").style.display = 'none';
    } else{		
	document.getElementById("confrimPwdDiv").style.display = 'block';
	}
}

function bsaAmlFunction() {
    var x = document.getElementById("bsa_aml1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function bsaAmlSupportFunction() {
    var x = document.getElementById("bsa_aml2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function bsaAmlCTRFunction() {
    var x = document.getElementById("bsa_aml3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function bsaAmlCIPFunction() {
    var x = document.getElementById("bsa_aml4");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function bsaAmlVCIFunction() {
    var x = document.getElementById("bsa_aml5");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function bsaAmlDVMFunction() {
    var x = document.getElementById("bsa_aml6");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function bsaAmlWMARFunction() {
    var x = document.getElementById("bsa_aml7");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function bsaAmlCBRFunction() {
    var x = document.getElementById("bsa_aml8");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function bsaAmlRRRPFunction() {
    var x = document.getElementById("bsa_aml9");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function bsaAmlSPDMLFunction() {
    var x = document.getElementById("bsa_aml10");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function bsaAmlRURFunction() {
    var x = document.getElementById("bsa_aml11");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function bsaAmlRUSIFunction() {
    var x = document.getElementById("bsa_aml12");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function bsaAmlACRFunction() {
    var x = document.getElementById("bsa_aml13");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function bsaAmlVEPFunction() {
    var x = document.getElementById("bsa_aml14");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function bsaAmlOIRFunction() {
    var x = document.getElementById("bsa_aml15");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function bsaAmlCDDFunction() {
    var x = document.getElementById("bsa_aml16");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function bsaAmlBSAGRFunction() {
    var x = document.getElementById("bsa_aml17");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function bsaAmlNBFIFunction() {
    var x = document.getElementById("bsa_aml18");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function bsaAmlMSBFunction() {
    var x = document.getElementById("bsa_aml19");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function bsaAmlPPOMFunction() {
    var x = document.getElementById("bsa_aml20");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function bsaAmlWTRRFunction() {
    var x = document.getElementById("bsa_aml21");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function bsaAmlOEBRFunction() {
    var x = document.getElementById("bsa_aml22");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function bsaAmlMRBSAFunction() {
    var x = document.getElementById("bsa_aml23");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function bsaAmlTFCFunction() {
    var x = document.getElementById("bsa_aml24");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function bsaAmlITWRFunction() {
    var x = document.getElementById("bsa_aml25");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

 function showHideMainMenu() {
    var x = document.getElementById("tiger");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}


function CheckPasswordStrength(password) {
        var password_strength = document.getElementById("password_strength");
 
        //TextBox left blank.
        if (password.length == 0) {
            password_strength.innerHTML = "";
            return;
        }
 
        //Regular Expressions.
        var regex = new Array();
        regex.push("[A-Z]"); //Uppercase Alphabet.
        regex.push("[a-z]"); //Lowercase Alphabet.
        regex.push("[0-9]"); //Digit.
        regex.push("[$@$!%*#?&]"); //Special Character.
 
        var passed = 0;
 
        //Validate for each Regular Expression.
        for (var i = 0; i < regex.length; i++) {
            if (new RegExp(regex[i]).test(password)) {
                passed++;
            }
        }
 
        //Validate for length of Password.
        if (passed > 2 && password.length > 8) {
            passed++;
        }
 
        //Display status.
        var color = "";
        var strength = "";
        switch (passed) {
            case 0:
            case 1:
                strength = "Very Weak";
                color = "red";
                break;
            case 2:
                strength = "Very Weak";
                color = "red";
                break;
            case 3:
            case 4:
                strength = "Weak";
                color = "red";
                break;
            case 5:
                strength = "Good to Go";
                color = "darkgreen";
                break;
        }
        password_strength.innerHTML = strength;
        password_strength.style.color = color;
    };

