const usernames = {
  github: "hh-beep",
  youtube: "CursoemVídeo",
  instagram: "hquepanta",
  facebook: "henrique.pantaleao.144",
  twitter: "hh_beep"
}
const urls = {
  github: `https://github.com/${usernames.github}`,
  youtube: `https://www.youtube.com/c/${usernames.youtube}`,
  instagram: `https://www.instagram.com/${usernames.instagram}`,
  facebook: `https://www.facebook.com/${usernames.facebook}`,
  twitter: `https://twitter.com/${usernames.twitter}`
}

/*const arrayItens = document.querySelectorAll(".link")
arrayItens.forEach(a => {
  a.addEventListener("click", () => {
    let attribute = a.getAttribute("id")
    a.href = `${urls[attribute]}`
  })
})*/






function getGitInfo() {
  const url = `https://api.github.com/users/${usernames.github}`
  fetch(url)
  .then (response => response.json())
  .then(data => {
    document.getElementById("userName").textContent = data.name;
    document.getElementById("userImage").src = data.avatar_url;
    document.querySelector(".gitName").textContent = data.login;
    document.querySelector(".text").textContent = data.bio;
    document.getElementById("github").href = `${urls.github}`
  })
}
getGitInfo()