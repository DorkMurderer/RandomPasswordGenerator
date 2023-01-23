 const btnEl = document.getElementById("btn");
 const inputEl = document.getElementById("input");
 const copyEl = document.getElementById("copy")
 const alertEl = document.getElementById("alert-container")

 btnEl.addEventListener("click", () => {
    createPassword()
 })

 copyEl.addEventListener("click", () => {
      copyPassword()
      if(inputEl.value){
        btnEl.style.visibility = "hidden"
        alertEl.classList.remove("active")
        setTimeout(() => {
             alertEl.classList.add("active")
             btnEl.style.visibility = "visible"
        }, 1500) 
     
      }
 })


 function createPassword(){
    const chars = "123456789abcdefghijklmnopqrstuvwxyz!@#$%^&ABCDEFGHIJKLMNOPQRSTUQWXYZ";
    const passwordLength = 14;
    let password = ""
    for (let index = 0; index < passwordLength; index++) {
      const randomNum = Math.floor(Math.random() * chars.length)
      password += chars.substring(randomNum, randomNum + 1)  
  }

  inputEl.value = password;
  alertEl.innerText = password +  " copied"

 }


 function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value)

 }

