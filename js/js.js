//créer l'élément a
let elemA=document.createElement('a');
//changer l'attribut href de l'élément a
elemA.href='Form.html';
//créer un textNode
let linkLabel= document.createTextNode('Créer un compte client');
//ajouter le texte à l'élément a
elemA.appendChild(linkLabel);
//créer un élément li
let liElem = document.createElement('li');
//ajouter l'élément a à l'élément li
liElem.appendChild(elemA);
//rechercher l'élément ul et y ajouter l'élément li créé plus tôt
document.querySelector('#collapsibleNavbar ul').appendChild(liElem);

//créer l'élément a
let elemP=document.createElement('a');
//changer l'attribut href de l'élément a
elemP.href='panier.html';
//créer un textNode
let linkLabelPanier= document.createTextNode('Panier');
//ajouter le texte à l'élément a
elemP.appendChild(linkLabelPanier);
//créer un élément li
let liElemPanier = document.createElement('li');
//ajouter l'élément a à l'élément li
liElem.appendChild(elemP);
//rechercher l'élément ul et y ajouter l'élément li créé plus tôt
document.querySelector('#collapsibleNavbar ul').appendChild(liElemPanier);




const form= document.getElementById('form');
const firstName=document.getElementById('firstName');
const lastName=document.getElementById('lastName');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');
form.addEventListener('submit', e =>{
e.preventDefault();
validateInputs();
});
const setError =(element, message)=>{
const inputControl = element.parentElement;
const errorDisplay= inputControl.querySelector('.error');
errorDisplay.innerText= message;
inputControl.classList.add('error');
inputControl.classList.remove('success');


}
const setSuccess = element=>{
    const inputControl=element.parentElement;
const errorDisplay=inputControl.querySelector('.error');
errorDisplay.innerText='';
inputControl.classList.add('success');
inputControl.classList.remove('error');
};
const isValidEmail=email =>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLocaleLowerCase());
}
const validateInputs=()=>{
const firstNameValue = firstName.value.trim();
const lastNameValue = lastName.value.trim();
const emailValue = email.value.trim();
const passwordValue= password.value.trim()
const password2Value= password2.value.trim()
if (firstNameValue === ''){
    setError(firstName, 'last name is required');

}else{
    setSuccess(firstName);

}
if (lastNameValue === ''){
    setError(lastName, 'last name is required');

}else{
    setSuccess(lastName);

}
if (emailValue === ''){
    setError(email, 'email is required');

}else if(!isValidEmail(emailValue)){
    setError(email, 'provide a valid email adress');
}else {
    setSuccess(email);
}
  if (passwordValue===''){
    setError(password, 'password is required');

}else if(passwordValue.length<8){
    setError(password, 'password must be at least 8 characters');

}else{
    setSuccess(password);

  } 
  if (password2Value===''){
    setError(password2, 'please confirm your password');

}else if (password2Value !== passwordValue){
    setError(password2, "passwords doesn't match");
}else{
    setSuccess(password2)
}
function checkButton() {    
    var getSelectedValue = document.querySelector(   
        'input[name="gender"]:checked');   
        
    if(getSelectedValue != null) {   
        document.getElementById("disp").innerHTML   
            = getSelectedValue.value   
            + " gender is selected";   
    }   
    else {   
        document.getElementById("error").innerHTML   
            = "*You have not selected any gender";   
    }   
}    
}
;
