function a(){
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    if(email == "admin@email.com" && senha == "123456Zz"){
        window.location.href = "./menu-admin.html";
    }else{
        alert("Acesso negado")
        
    }
}
