const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const modal = document.querySelector('.modal');
const closeMenu = document.querySelector('.close-menu');
const modalbackground = document.querySelector('.modal-background');
const container = document.querySelector('.container');
const contentupdate = document.querySelector('.content-updating-container');
const slides = document.querySelector('.slide-control');
const heading = document.querySelector('.heading');
const about = document.querySelector('.about');
const home = document.querySelector('.home');
const descriptionImage = document.querySelector('.description-images');
const crew = document.querySelector('.crew');
const destination = document.querySelector('.destination');
const technology = document.querySelector('.technology');
const selectedoption = document.querySelector('.selected-option');
const img = document.createElement('img');
const listdestinationcontainer = document.createElement('ul');
listdestinationcontainer.setAttribute('class',"destination-list");
const listdestination = document.createElement('li');
const destinationlink = document.createElement('a');
const menulist = document.querySelectorAll('.nav-list li');
const role = document.querySelector('.role');
const homeexplore = document.querySelector('.home-explore');
const div = document.createElement('div');
// if(window.screen.width<500) {
//     modal.style.display = "none";
//     modalbackground.style.display = "none";
// }



menu.addEventListener('click',()=>{
    modal.classList.toggle('modal-toggle');
    modalbackground.classList.toggle('modal-background-toggle');
    container.classList.toggle('container-toggle');
})

closeMenu.addEventListener('click',()=>{
    modal.classList.toggle('modal-toggle');
    modalbackground.classList.toggle('modal-background-toggle');
    container.classList.toggle('container-toggle');
})

home.addEventListener('click',()=>{
    body.setAttribute('class','');
    heading.classList.add('space');
    role.classList.remove('homerole');
    if(window.screen.width>500){
        modal.classList.remove('modal-toggle');
        modalbackground.classList.remove('modal-background-toggle');
        container.classList.remove('container-toggle');
    }else {
        modal.classList.toggle('modal-toggle');
        modalbackground.classList.toggle('modal-background-toggle');
        container.classList.toggle('container-toggle');
    }
    if(contentupdate.classList.contains('reverse')){
    contentupdate.classList.remove('reverse');
    }
    if(role.hasChildNodes()){
        while(role.hasChildNodes()){
            role.lastElementChild.remove();
        }
    }
    // if(role.childElementCount){
    //     for(let i =0; i<role.childElementCount; i++) {
    //         role.children[i].remove();
    //     }
    // }

    // if(slides.childElementCount){
    //     for(let i =0; i<slides.childElementCount; i++) {
    //         slides.children[i].remove();
    //     }
    // }
    if(slides.hasChildNodes()){
        while(slides.hasChildNodes()) {
            slides.lastChild.remove();
        }
    }
    if(descriptionImage.contains(img)){
        descriptionImage.lastElementChild.remove();
       }

    if(role.hasChildNodes()) {
        role.lastElementChild.remove();
    }
    // if(slides.contains(listdestinationcontainer)){
    //     listdestinationcontainer.remove();
    // }
    descriptionImage.style.border = "none";
    descriptionImage.style.backgroundColor = "white";
    homeexplore.style.display="block";
    homeexplore.style.color = "black";
    selectedoption.textContent = "";
    slides.textContent = "SO, YOU WANT TO TRAVEL TO";
    heading.textContent = "SPACE";
    about.textContent = "Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax bacause we'll give you truly out of this world experience.";
    role.textContent = "";

})

destination.addEventListener('click',()=>{
    body.setAttribute('class','');
    heading.classList.remove('space');
    role.classList.add('homerole');
    if(window.screen.width>500){
        modal.classList.remove('modal-toggle');
        modalbackground.classList.remove('modal-background-toggle');
        container.classList.remove('container-toggle');
    }else {
        modal.classList.toggle('modal-toggle');
        modalbackground.classList.toggle('modal-background-toggle');
        container.classList.toggle('container-toggle');
    }
    body.classList.add('destination');
    contentupdate.classList.add('reverse');
    descriptionImage.style.backgroundColor = "transparent";
    if(role.childElementCount){
        for(let i =0; i<role.childElementCount; i++) {
            role.children[i].remove();
        }
    }
    slides.textContent='';
    selectedoption.textContent='';
    heading.textContent='';
    about.textContent="";
    role.textContent="";
    fetch('data.json')
    .then(response=>{
        return response.json();
    })
    .then(result=>{
        if(listdestinationcontainer.hasChildNodes()) {
            while(listdestinationcontainer.hasChildNodes()) {
                listdestinationcontainer.lastElementChild.remove();
            }
        }
        for(let i =0; i<result["destinations"].length; i++) {
            const listdestination = document.createElement('li');
            const destinationlink = document.createElement('a');
            destinationlink.textContent = `${result["destinations"][i]["name"]}`;
            listdestination.appendChild(destinationlink)
            listdestinationcontainer.appendChild(listdestination);
        }
        if(listdestinationcontainer.classList.contains('destination-list-more')){
            listdestinationcontainer.classList.remove('destination-list-more');
        }
        slides.appendChild(listdestinationcontainer);
        let listitems = document.querySelectorAll(".destination-list li");
        selectedoption.textContent = `01 PICK YOUR DESTINATION`;
       heading.textContent = `${result["destinations"][0]["name"]}`;
       about.textContent = `${result["destinations"][0]["description"]}`;
       homeexplore.style.display = "none";
       if(descriptionImage.contains(img)){
        img.setAttribute('src',`${result["destinations"][0]["images"]["png"]}`);
       }else{
        descriptionImage.appendChild(img);
        img.setAttribute('src',`${result["destinations"][0]["images"]["png"]}`);
       }
       const imagerotation = document.querySelector('.description-images img');
       let distance = document.createElement('div');
    let travel = document.createElement('div');
    let distancechild1 = document.createElement('p');
    let distancechild2 = document.createElement('h2');
    let travelchild1 = document.createElement('p');
    let travelchild2 = document.createElement('h2');
    distancechild1.textContent = `AVG. DISTANCE`;
    distancechild2.textContent = `${result["destinations"][0]["distance"]}`;
    travelchild1.textContent = `EST. TRAVEL TIME`;
    travelchild2.textContent = `${result["destinations"][0]["travel"]}`;
    for(let i = 0; i<listitems.length;i++) {
        listitems[i].addEventListener('click',()=>{
       heading.textContent = `${result["destinations"][i]["name"]}`;
       about.textContent = `${result["destinations"][i]["description"]}`;
       img.setAttribute('src',`${result["destinations"][i]["images"]["png"]}`);
       distancechild2.textContent = `${result["destinations"][i]["distance"]}`;
       travelchild2.textContent = `${result["destinations"][i]["travel"]}`;
        });
    }
    distance.appendChild(distancechild1);
    distance.appendChild(distancechild2);
    travel.appendChild(travelchild1);
    travel.appendChild(travelchild2);
    role.appendChild(distance);
    role.appendChild(travel);
    })
})

crew.addEventListener('click',()=>{
    role.classList.add('crewjustify');
    body.setAttribute('class','');
    heading.classList.remove('space');
    role.classList.remove('homerole');
    if(window.screen.width>500){
        modal.classList.remove('modal-toggle');
        modalbackground.classList.remove('modal-background-toggle');
        container.classList.remove('container-toggle');
    }else {
        modal.classList.toggle('modal-toggle');
        modalbackground.classList.toggle('modal-background-toggle');
        container.classList.toggle('container-toggle');
    }
    body.classList.add('crew');
    contentupdate.classList.remove('reverse');
    descriptionImage.style.backgroundColor = "transparent";
    slides.textContent='';
    selectedoption.textContent='';
    heading.textContent='';
    about.textContent="";
    // body.style.backgroundImage="url('./assets/crew/background-crew-mobile.jpg')";
    if(role.hasChildNodes()){
        while(role.hasChildNodes()){
            role.lastElementChild.remove();
        }
    }
    // if(role.childElementCount){
    //     for(let i =0; i<role.childElementCount; i++) {
    //         role.children[i].remove();
    //     }
    // }
    descriptionImage.style.border = "none";
    role.textContent="";
    fetch('data.json')
    .then(response=>response.json())
    .then(result=>{
        if(listdestinationcontainer.hasChildNodes()) {
            while(listdestinationcontainer.hasChildNodes()) {
                listdestinationcontainer.lastElementChild.remove();
            }
        }
        for(let i =0; i<result["crew"].length; i++) {
            const listdestination = document.createElement('li');
            const destinationlink = document.createElement('a');
            destinationlink.textContent = "";
            listdestination.appendChild(destinationlink)
            listdestinationcontainer.appendChild(listdestination);
        }
        listdestinationcontainer.classList.add('destination-list-more')
        homeexplore.style.display="none";
        if(slides.hasChildNodes()){
            while(slides.hasChildNodes()){
                slides.lastElementChild.remove();
            }
            slides.textContent="";
        }
        selectedoption.textContent = `02 PICK YOUR CREW`;
        slides.textContent = `${result["crew"][0]["role"]}`;
       heading.textContent = `${result["crew"][0]["name"]}`;
       about.textContent = `${result["crew"][0]["bio"]}`;
       
       role.appendChild(listdestinationcontainer);
       if(descriptionImage.contains(img)){
        img.setAttribute('src',`${result["crew"][0]["images"]["png"]}`);

       }else{
        descriptionImage.appendChild(img);
        img.setAttribute('src',`${result["crew"][0]["images"]["png"]}`);
       }
       let listitems = document.querySelectorAll(".destination-list li");
       for(let i = 0; i<listitems.length;i++) {
        listitems[i].style.color = "grey";
        listitems[i].addEventListener('click',(e)=>{
            slides.textContent = `${result["crew"][i]["role"]}`;
       heading.textContent = `${result["crew"][i]["name"]}`;
       about.textContent = `${result["crew"][i]["bio"]}`;
       img.setAttribute('src',`${result["crew"][i]["images"]["png"]}`);       
       for(let j = 0; j<listitems.length; j++) {
        if(j==i){
            listitems[j].style.color="white";
        }else {
            listitems[j].style.color = "grey";
        }
       }
        });
    }
    })
})

technology.addEventListener('click',()=>{
    body.setAttribute('class','');
    heading.classList.remove('space');
    role.classList.remove('homerole');
    if(window.screen.width>500){
        modal.classList.remove('modal-toggle');
        modalbackground.classList.remove('modal-background-toggle');
        container.classList.remove('container-toggle');
    }else {
        modal.classList.toggle('modal-toggle');
        modalbackground.classList.toggle('modal-background-toggle');
        container.classList.toggle('container-toggle');
    }

    body.classList.add('technology');
    contentupdate.classList.add('reverse');

    descriptionImage.style.backgroundColor = "transparent";
    // body.style.backgroundImage="url('./assets/technology/background-technology-mobile.jpg')";
    if(role.hasChildNodes()){
        while(role.hasChildNodes()){
            role.lastElementChild.remove();
        }
    }
    // if(role.childElementCount){
    //     for(let i =0; i<role.childElementCount; i++) {
    //         role.children[i].remove();
    //     }
    // }
    slides.textContent='';
    selectedoption.textContent='';
    heading.textContent='';
    about.textContent="";
    role.textContent="";
    fetch('data.json')
    .then(response=>response.json())
    .then(result=>{
        if(listdestinationcontainer.hasChildNodes()) {
            while(listdestinationcontainer.hasChildNodes()) {
                listdestinationcontainer.lastElementChild.remove();
            }
        }
        for(let i =0; i<result["technology"].length; i++) {
            const listdestination = document.createElement('li');
            const destinationlink = document.createElement('a');
            destinationlink.textContent = `${i+1}`;
            listdestination.classList.add('circle');
            listdestination.appendChild(destinationlink);
            listdestinationcontainer.appendChild(listdestination);
        }
        if(slides.hasChildNodes()){
            while(slides.hasChildNodes()){
                slides.lastElementChild.remove();
            }
            slides.textContent="";
        }
        selectedoption.textContent = "03 SPACE LAUNCH 101";
        slides.appendChild(listdestinationcontainer);
       heading.textContent = `${result["technology"][0]["name"]}`;
       about.textContent = `${result["technology"][0]["description"]}`;
       homeexplore.style.display = "none";
       if(descriptionImage.contains(img)){
        img.setAttribute('src',`${result["technology"][0]["images"]["portrait"]}`);

       }else{
        descriptionImage.appendChild(img);
        if(window.screen.width>=500){
        img.setAttribute('src',`${result["technology"][0]["images"]["landscape"]}`);
        }else{
            img.setAttribute('src',`${result["technology"][0]["images"]["portrait"]}`);
        }
       }
       let listitems = document.querySelectorAll(".destination-list li");
       for(let i = 0; i<listitems.length;i++) {
        listitems[i].addEventListener('click',()=>{
       heading.textContent = `${result["technology"][i]["name"]}`;
       about.textContent = `${result["technology"][i]["description"]}`;
       if(window.screen.width<500){
        img.setAttribute('src',`${result["technology"][i]["images"]["portrait"]}`);
        }else{
            img.setAttribute('src',`${result["technology"][i]["images"]["landscape"]}`);
        }

        });
    }
    })
})

