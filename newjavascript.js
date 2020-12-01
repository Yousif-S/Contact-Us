function Contact_valid()
{
  var User = document.Contact.Username.value;  
  var eml = document.Contact.email.value; 
  var massge = document.Contact.Massege.value;
  var valid = true; 
  
  if(User === "")
  {
      valid=false;
      euser.style.visibility = "visible";
     username.style.border ="1px solid red";
  }
  else
  {
     euser.style.visibility = "hidden";
     username.style.border ="1px solid green";
  }
  
  
    if(eml === "")
  {
      valid=false;
      Email.style.visibility = "visible";
      email.style.border ="1px solid red";
  }
  else
  {
     Email.style.visibility = "hidden";
  email.style.border ="1px solid green";
  }
  
  if(massge === "")
  {
      valid=false;
      EMass.style.visibility = "visible";
      Textarea.style.border ="1px solid red";
  }
  else
  {
     EMass.style.visibility = "hidden";
     Textarea.style.border ="1px solid green";
  
  }
  
  if(valid)
  {

      return true;
  }
  else
  {
      return false;
  }
}
