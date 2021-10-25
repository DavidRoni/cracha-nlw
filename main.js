const linksSocialMedia ={
  github: 'rndvd',
  youtube: 'neymarjr',
  facebook: 'neymarjr',
  instagram:'neymarjr',
  twitter: 'neymarjr',
}

function changeSocialMediaLinks(){
 for(let li of socialLinks.children){
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}` 
  }
}
  changeSocialMediaLinks()

  function getGitHubProfileInfos(){
   const url = `https://api.github.com/users/${linksSocialMedia.github}`
  
  fetch (url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    bio.textContent = data.bio
    linkProfile.href = data.html_url
    userPhoto.src = data.avatar_url
    userLogin.textContent = data.login
  })
}
  getGitHubProfileInfos()