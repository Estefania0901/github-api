function getGithubData(){
   var url ='https://api.github.com/users/Jastor11'
   fetch(url)
   .then(function(data){
       return data.json()
   })
   .then(function(json){
       var titleElement = document.getElementById('name')
       titleElement.innerHTML = json.name
       
       var usernameElement = document.getElementById('userName')
       usernameElement.innerHTML = json.login
       
       var locationElement = document.getElementById('location')
       locationElement.innerHTML = json.location
       
       var imgElement = document.getElementById('photo')
       imgElement.setAttribute('src',json.avatar_url)
       
       var bioElement = document.getElementById('bio')
       bioElement.innerHTML = json.bio
       
      
       console.log(json)
   })
}
getGithubData()