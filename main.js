const tablinks = document.querySelectorAll(".tab-links");
const tabcontents = document.querySelectorAll(".tab-contents");
tablinks.forEach((tab , index) => {
    tab.addEventListener('click' , () => {
        tablinks.forEach(at => {at.classList.remove('active-link')})
        tabcontents.forEach(t =>{ t.classList.remove('active-tab')})
        tablinks[index].classList.add('active-link')
        console.log(tablinks , tab)
        tabcontents[index].classList.add('active-tab')
    })
})
// function opentab(tabname){
//     for(tablink of tablinks){
//         tablink.classList.remove("active-link");
//     }
//     for(tabcontent of tabcontents){
//         tabcontent.classList.remove("active-tab");
//     }
//     event.currentTarget.classList.add("active-link");
//     document.getElementById(tabname).classList.add("active-tab");
// }