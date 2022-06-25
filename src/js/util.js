// if(localStorage.length != 0){
//     return;
// }

import { ServiceDB } from "./fakeDB.js";

class Login{
    constructor(){

    }
    static init(){
        const loginform = document.querySelector('.login-box__form');
        const mailBox = loginform.querySelector('.login-box__form__mail');
        const passwdBox = loginform.querySelector('.login-box__form__passwd');
        const submitBtn = loginform.querySelector('.login-box__form__submit');
        const sdb = new ServiceDB();
        submitBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            if(mailBox.value === '' || !mailBox.value.match(/[@]/) || passwdBox.value === ''){
                return;
            }
            for (const user of sdb.userDB) {
                if(mailBox.value.match(user.mail) && passwdBox.value.match(user.passwd)){
                    window.location.replace('../../pages/orders.html');
                }
                else{
                    console.log("nie ma takieg użytkownika");
                }
            }
        })
    }
};
Login.init();


