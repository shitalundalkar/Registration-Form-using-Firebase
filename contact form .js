const firebaseConfig = {
    apiKey: "AIzaSyCCcDCB2JP414OWKqqDJwKT6nheZVwRW38",
    authDomain: "contactform-629cc.firebaseapp.com",
    databaseURL: "https://contactform-629cc-default-rtdb.firebaseio.com",
    projectId: "contactform-629cc",
    storageBucket: "contactform-629cc.appspot.com",
    messagingSenderId: "852041724453",
    appId: "1:852041724453:web:e504b4c71caf0fd5cb05cc"
  };

  firebase.initializeApp(firebaseConfig);

  var contactFormDB = firebase.database().ref("contactForm")

document.getElementById("contactForm").addEventListener('submit',submitForm);

function submitForm(e){ 
   e.preventDefault();

   var name= getElementVal('name');
   var emailid = getElementVal('emailid');
   var msgContent =  getElementVal('msgContent');

   saveMessages(name , emailid , msgContent);

   document.querySelector('.alert').computedStyleMap.display = "block";
   document.getElementById("contactForm").reset();
}
const saveMessages = (name, emailid , msgContent) => {
  var newContactForms = contactFormDB.push();

  newContactForms.set({
    name : name,
    emailid : emailid,
    msgContent : msgContent,
  });
};


const getElementVal = (id) => { 
  return document.getElementById(id).value;
};