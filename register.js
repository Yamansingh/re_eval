function register(){
    let form = document.getElementById("register")
    let age =  form.age.value
    let name = form.name.value
    let user_name = form.user_name.value
    let pass = form.pass.value

    let register_details = {
        age,
        name,
        user_name,
        pass
    }
    let arr ;
    arr = localStorage.getItem('register')
    if(arr == null){
        arr = []
    }
    else{
        arr = JSON.parse(localStorage.getItem('register'))
    }
    arr.push(register_details)
    localStorage.setItem('register',JSON.stringify(arr))
}