function log_in(){
    let form = document.getElementById("login_form")
    let name = form.name.value
    let password = form.pass.value
    let detail = {
        name,
        password
    }
    let arr;
    arr = localStorage.getItem('details')
    console.log(arr)
    if(arr == null){
        arr = []
    }
    else{
        arr = JSON.parse(localStorage.getItem('details'))
    }
   arr.push(detail)
   localStorage.setItem('details',JSON.stringify(arr))


}