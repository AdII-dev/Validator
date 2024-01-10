$(function(){
  
    const validClass = "is-valid";
    const invalidClass = "is-invalid";

    //elemek összegyűjtögetése
    let $button = $('form button');
    let $checkbox = $('input#ASZF');
    let $username = $('input#username');
    let $password = $('input#password');
    let $passwordAgain = $('input#passwordAgain');

    let $alert = $('div.alert ul');
    let $alertFieldList = $('div.alert url');
    let $succesText = $('div#succesText');
    let $form = $('form');

    $button.click(function(event){
        //üres tömb a hiba üzeneteknek
        let invalidFields = [];
        //böngésző alapértelmezett működését el kell akasztani
        event.preventDeFault();
        //ellenőrizzük a mezőket
        let username = $username.val();
        console.log(username);
        //Jelszó ellenőrzés
        let $password = $password.val();
        if(password.length <= 6){
            //Hibás kitöltés
            invalidFields.push('Felhasználó név');
            $username.removeClass(validClass);
            $username.addClass(invalidClass);
        }
        
        if(username.length == 0){
            //Hibás kitöltés
            invalidFields.push('Felhasználó név');
            $username.removeClass(validClass);
            $username.addClass(invalidClass);
        }
        else{
            //Ha jól van kitöltve
            $username
        }
    
    })
})