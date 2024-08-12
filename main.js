let user=document.getElementById("ulLeft")
let posts=document.getElementById("ulRight")  
function postss(user_Id){
    let request=new XMLHttpRequest()
    request.open("GET","https://jsonplaceholder.typicode.com/posts?userId="+user_Id)
    request.responseType="json"
    request.send()
    request.onload=function(){
        let post=document.getElementById("right")
        let posts=request.response
        // console.log(posts)
        post.innerHTML=""
        posts.forEach(element => {
            let con=document.createElement("div")
            let tit=document.createElement("h1")
            let bod=document.createElement("p")
            con.appendChild(tit)
            con.appendChild(bod)
            post.appendChild(con)
            tit.innerHTML=element.title
            bod.innerHTML=element.body
            con.style.backgroundColor="white"
            con.style.width="98%"
            con.style.padding="20px"
            con.style.borderRadius="10px"
            con.style.marginBottom="15px"  
        });
}

}




function userss(){
    let request=new XMLHttpRequest()
    request.open("GET","https://jsonplaceholder.typicode.com/users")
    request.responseType="json"
    request.send()
    request.onload=function(){
    let user=document.getElementById("left")
    let users=request.response
    // console.log(posts)
    users.forEach(element=>{
        let main=document.createElement("div")
        let el=document.createElement("h2")
        let email=document.createElement("p")
        main.appendChild(el)
        main.appendChild(email)
        user.appendChild(main)
        el.innerHTML=element.name
        email.innerHTML=element.email
        main.style.backgroundColor="white"
        main.style.width="98%"
        main.style.padding="20px"
        main.style.borderRadius="60px"
        main.style.marginBottom="15px"  
        main.style.cursor="pointer"
        main.onclick=function(){
            postss(element.id)
        }

    })
}}
// postss(1)
userss()
// function clicked(id){
//     postss(id)
// }


