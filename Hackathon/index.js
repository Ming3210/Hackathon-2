let heroInfo = {
    name: "Minh Cường",
    job: "freelance react developer",
    imgUrl: "https://picsum.photos/200/300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro excepturi assumenda, culpa cupiditate, veritatis nobis rerum blanditiis necessitatibus dolorum amet sed voluptatum aspernatur impedit ducimus veniam dicta itaque ratione!",
  };
  
  let aboutMeInfo = {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi saepe nostrum illum voluptate repellat, praesentium provident accusantium impedit expedita consectetur voluptatibus nihil voluptatum incidunt ipsam magni ipsum mollitia. Aut, velit?",
    fullName: "Phạm Văn Minh",
    age: "29",
    languages: ["English", "Spanish"],
    phone: "+84 973712395",
    email: "cuongtm2@rikkeisoft.com",
    address: "Km10 Nguyễn Trãi, Hà Đông, Hà Nội",
    skills: [
      {
        id: 1,
        name: "Photoshop",
        percentage: 87,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      },
      {
        id: 2,
        name: "HTML",
        percentage: 80,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      },
      {
        id: 3,
        name: "PHP",
        percentage: 95,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      },
      {
        id: 4,
        name: "Javascript",
        percentage: 70,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      },
    ],
  };
  
  let projects = [
    {
      id: 1,
      imgUrl: "https://picsum.photos/300/300",
      projectName: "Auto Drive Project",
      subTitle: "3D Graphic design",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      date: "18-2-2022",
      client: "Symphony",
      techs: ["Angular", "React", "Jquery"],
      type: "Ecommerce",
      url: "www.project.com",
    },
    {
      id: 2,
      imgUrl: "https://picsum.photos/300/300",
      projectName: "Show Mania - Entertainment",
      subTitle: "Web design",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      date: "19-2-2023",
      client: "Cillian Murphy",
      techs: ["Angular", "Jquery"],
      type: "Entertainment",
      url: "www.project.com",
    },
    {
      id: 3,
      imgUrl: "https://picsum.photos/300/300",
      projectName: "WorldToday - Portal",
      subTitle: "Web design",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      date: "20-3-2023",
      client: "Tony Motana",
      techs: ["Angular", "Jquery", "Vue"],
      type: "Web-frontend Development",
      url: "www.project.com",
    },
    {
      id: 4,
      imgUrl: "https://picsum.photos/300/300",
      projectName: "Doctory - Healthcare",
      subTitle: "Web design",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      date: "31-1-2024",
      client: "Keira Knightly",
      techs: ["Angular", "Jquery", "Nodejs"],
      type: "Entertainment",
      url: "www.project.com",
    },
  ];
  let skillsList = [] || JSON.parse(localStorage.getItem("language")) 
let aboutME = document.querySelector('#about-me');
let lang = document.getElementsByClassName("name");

let data =  JSON.parse(localStorage.getItem("language")) ||[]


lang[0].onclick = function(){
    data.push(aboutMeInfo.skills[0])
    localStorage.setItem("language",JSON.stringify(data));
    // localStorage.setItem("language",JSON.stringify(aboutMeInfo.skills[0]));
}
lang[1].onclick = function(){
    data.push(aboutMeInfo.skills[1])
    localStorage.setItem("language2",JSON.stringify(data));
    // localStorage.setItem("language",JSON.stringify(aboutMeInfo.skills[1]));
}
lang[2].onclick = function(){
    data.push(aboutMeInfo.skills[2])
    localStorage.setItem("language3",JSON.stringify(data));
    // localStorage.setItem("language",JSON.stringify(aboutMeInfo.skills[2]));
}
lang[3].onclick = function(){
    data.push(aboutMeInfo.skills[3])
    localStorage.setItem("language4",JSON.stringify(data));
    // localStorage.setItem("language",JSON.stringify(aboutMeInfo.skills[3]));
}
// localStorage.clear()

let info = document.getElementsByClassName("section-centre")
let n = document.querySelector("#name")
let age = document.querySelector("#age")
let language = document.querySelector("#language")
let phone = document.querySelector("#phone")
let email = document.querySelector("#email")
let address = document.querySelector("#address")
let infoData
info.onclick = function(){
    infoData = heroInfo
    localStorage.setItem("user",JSON.stringify(infoData))
    // infoData = JSON.parse(localStorage.getItem("user"));
}
console.log(infoData)


localStorage.setItem("name",JSON.stringify(aboutMeInfo.fullName))
n.innerHTML = JSON.parse(localStorage.getItem("name"))

localStorage.setItem("age",JSON.stringify(aboutMeInfo.age))
age.innerHTML = JSON.parse(localStorage.getItem("age"))

localStorage.setItem("lang",JSON.stringify(aboutMeInfo.languages))
language.innerHTML = JSON.parse(localStorage.getItem("lang"))

localStorage.setItem("phone",JSON.stringify(aboutMeInfo.phone))
phone.innerHTML = JSON.parse(localStorage.getItem("phone"))

localStorage.setItem("email",JSON.stringify(aboutMeInfo.email))
email.innerHTML = JSON.parse(localStorage.getItem("email"))

localStorage.setItem("address",JSON.stringify(aboutMeInfo.address))
address.innerHTML = JSON.parse(localStorage.getItem("address"))

let date = document.getElementsByClassName("date")
let client = document.getElementsByClassName("client")
let tech = document.getElementsByClassName("tech")

let arrD =[]
localStorage.setItem("date0",JSON.stringify(project.date[0]))
arrD[0].innerHTML = JSON.parse(localStorage.getItem("date0"))
localStorage.setItem("date1",JSON.stringify(project.date[1]))
arrD[1].innerHTML = JSON.parse(localStorage.getItem("date1"))
localStorage.setItem("date2",JSON.stringify(project.date[2]))
arrD[2].innerHTML = JSON.parse(localStorage.getItem("date2"))
localStorage.setItem("date3",JSON.stringify(project.date[3]))
arrD[3].innerHTML = JSON.parse(localStorage.getItem("date3"))
localStorage.setItem("date4",JSON.stringify(poject.date[4]))
arrD[4].innerHTML = JSON.parse(localStorage.getItem("date4"))
localStorage.setItem("date5",JSON.stringify(project.date[5]))
arrD[5].innerHTML = JSON.parse(localStorage.getItem("date5"))

let arrC =[]
localStorage.setItem("c0",JSON.stringify(project.client[0]))
arrC[0].innerHTML = JSON.parse(localStorage.getItem("c0"))
localStorage.setItem("c1",JSON.stringify(project.client[1]))
arrC[1].innerHTML = JSON.parse(localStorage.getItem("c1"))
localStorage.setItem("c2",JSON.stringify(project.client[2]))
arrC[2].innerHTML = JSON.parse(localStorage.getItem("c2"))
localStorage.setItem("c3",JSON.stringify(project.client[3]))
arrC[3].innerHTML = JSON.parse(localStorage.getItem("c3"))
localStorage.setItem("c4",JSON.stringify(project.client[4]))
arrC[4].innerHTML = JSON.parse(localStorage.getItem("c4"))
localStorage.setItem("c5",JSON.stringify(project.cliente[5]))
arrC[5].innerHTML = JSON.parse(localStorage.getItem("c5"))

let arrT =[]
localStorage.setItem("t0",JSON.stringify(project.techs[0]))
arrT[0].innerHTML = JSON.parse(localStorage.getItem("t0"))
localStorage.setItem("t1",JSON.stringify(project.techs[1]))
arrT[1].innerHTML = JSON.parse(localStorage.getItem("t1"))
localStorage.setItem("t2",JSON.stringify(project.techs[2]))
arrT[2].innerHTML = JSON.parse(localStorage.getItem("t2"))
localStorage.setItem("t3",JSON.stringify(project.techs[3]))
arrT[3].innerHTML = JSON.parse(localStorage.getItem("t3"))
localStorage.setItem("t4",JSON.stringify(project.techs[4]))
arrT[4].innerHTML = JSON.parse(localStorage.getItem("t4"))
localStorage.setItem("t5",JSON.stringify(project.techs[5]))
arrT[5].innerHTML = JSON.parse(localStorage.getItem("t5"))