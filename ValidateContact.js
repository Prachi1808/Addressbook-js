/**
 * Regex pattern for the data
 */
 const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
 const addressRegex = RegExp("^[a-zA-z0-9#,]{4,}$");
 const cityStateRegex = RegExp("^[a-zA-z]{4,}$");
 const zipRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
 const phoneNumberRegex = RegExp("^[0-9]{2}[-]{1}[0-9]{10}$");
 const emailRegex = RegExp(
   "^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$"
 );
 
 /**
  * Class contact where we have defined the constructor and the getter and setter
  * We are setting the value if the regex pattern matches.
  */
 class Contact {
   /**
    * Constructor
    * @param  {...any} param - above mentioned fields.
    */
   constructor(...params) {
     this.firstName = params[0];
     this.lastName = params[1];
     this.city = params[2];
     this.state = params[3];
     this.zip = params[4];
     this.phoneNumber = params[5];
     this.email = params[6];
   }
   /**
    * Getters for all fields
    */
   get firstName() {
     return this._firstName;
   }
 
   get lastName() {
     return this._lastName;
   }
 
   get city() {
     return this._city;
   }
 
   get state() {
     return this._state;
   }
 
   get zip() {
     return this._zip;
   }
 
   get phoneNumber() {
     return this._phoneNumber;
   }
 
   get email() {
     return this._email;
   }
   /**
    * Setters for all fields
    */
   set firstName(firstName) {
     if (nameRegex.test(firstName)) this._firstName = firstName;
     else throw "**** FIRST NAME is Incorrect ****";
   }
 
   set lastName(lastName) {
     if (nameRegex.test(lastName)) this._lastName = lastName;
     else throw "**** LAST NAME is Incorrect ****";
   }
 
   set address(address) {
     if (addressRegex.test(address)) this._address = address;
     else throw "**** ADDRESS is Incorrect ****";
   }
 
   set city(city) {
     if (cityStateRegex.test(city)) this._city = city;
     else throw "**** CITY is Incorrect ****";
   }
 
   set state(state) {
     if (cityStateRegex.test(state)) this._state = state;
     else throw "**** STATE is Incorrect ****";
   }
 
   set zip(zip) {
     if (zipRegex.test(zip)) this._zip = zip;
     else throw "**** ZIP is Incorrect ****";
   }
 
   set phoneNumber(phoneNumber) {
     if (phoneNumberRegex.test(phoneNumber)) this._phoneNumber = phoneNumber;
     else throw "**** PHONE NUMBER is Incorrect ****";
   }
 
   set email(email) {
     if (emailRegex.test(email)) this._email = email;
     else throw "**** EMAIL ADDRESS is Incorrect ****";
   }
   /**
    * To String Method
    * @returns - Contact object in String form.
    */
   toString() {
     return (
       "First Name : " +
       this.firstName +
       ", Last Name : " +
       this.lastName +
       ", City : " +
       this.city +
       ", State : " +
       this.state +
       ", Zip : " +
       this.zip +
       ", Phone Number : " +
       this.phoneNumber +
       ", Email : " +
       this.email
     );
   }
 }
 /**
  * Creating new contact object.
  */
 let contact = new Contact(
   "Prachi",
   "Mohanty",
   "Phulbani",
   "Odisha",
   762001,
   "91-8675347655",
   
   "prachimohanty.1808@gmail.com"
 );
 console.log(contact.toString());