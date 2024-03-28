const apiURL = "https://api.github.com/users/";

const main = document.querySelector(".main");

const getUser = async (username) => {
  const response = await fetch(apiURL + username);
    // console.log(response);
  const data = await response.json();
    // console.log(data);
    if (data.message) {
        const card = `<div class="card">${data.message}</div>`
         main.innerHTML = card;
        return;
    }
  const card = `
<div class="card">
            <div class="profilePic">
            <img src=${data.avatar_url} alt="" height="85px" width="85px">
            </div>
            <div class="profileInfo">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>

                <ul class="info">
                    <li>${data.followers} <strong>Followers</strong></li>
                    <li>${data.following} <strong>Folowing</strong></li>
                    <li>${data.public_repos} <strong>Repos</strong></li>
                </ul>

                <div id="repos">
                    
                </div>
            </div>
        </div>
`;
  main.innerHTML = card;

  getRepos(username);
};

getRepos = async (username) => {
  const repos = document.querySelector("#repos");
  const response = await fetch(apiURL + username + "/repos");
  //   console.log(response);
  const data = await response.json();
  //   console.log(data);
  data.forEach((elem) => {
    // console.log(elem);
    const item = document.createElement("a");
    item.classList.add("repo");
    item.href = elem.html_url;
    item.innerText = elem.name;
    item.target = "_blank"
    repos.appendChild(item);
  });
};

// below all three function to search username

const input = document.querySelector("input")
input.addEventListener(
    "keyup" ,
    (event) =>{
        // console.log(event.key)
        if (event.key == "Enter") {
            // console.log(input.value)
             getUser(input.value);
        }
          return false;
    }
)

const onSubmit = () => {
  if ((input.value != "")) {
    getUser(input.value);
  }
  return false;
};

let search = document.querySelector(".img").querySelector("img");
search.addEventListener("click",()=>{ 
    onSubmit();
})

// getUser("sujeetadarshi");
