function storeData() {
  localStorage.setItem("name", "amit");
  localStorage.setItem("token", "kjasbguihabsj");

  //session

  sessionStorage.setItem("name", "kunal");


    var user = {
        id:1,
        name:"ajay"
    }

    //localStorage.setItem("user",user)
    localStorage.setItem("user",JSON.stringify(user))


}

function removeData() {
  localStorage.removeItem("name")
  // localStorage.removeItem("token")
  //sessionStorage.removeItem("name")
  //sessionStorage.clear()
  ///localStorage.clear()
}


function getData(){


        var name = localStorage.getItem("name")
        console.log("name...",name)

        var name =sessionStorage.getItem("name")
        console.log("name...",name)


        //get Object


        var userStr = localStorage.getItem("user")
        console.log("user str..",userStr)
        console.log(userStr[0])

        var user = JSON.parse(userStr)
        console.log("user...",user)
        console.log(user.name)


}