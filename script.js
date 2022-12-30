function submitForm(){

    let fullname1 = document.getElementById('fullname').Value;
    let lastname1 = document.getElementById('lastname').value;
    let email1 = document.getElementById('email').value;
    let reason1 = document.getElementById('reason').value;
    
    if(fullname1 != null && lastname1 != null && email1 != null && reason1 != null){
        alert("Form Submitted Sucessfully")
    }else{
        alert("All Fields are required")
    }
}