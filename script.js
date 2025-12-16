const closeButton1 = document.getElementById('closeButton1');
const closeButton2 = document.getElementById('closeButton2');
const closeButton3 = document.getElementById('closeButton3');

const main = document.getElementById('Section1');
const mySkills = document.getElementById('Section2');
const construct = document.getElementById('Section3');

const aboutMe = document.getElementById('aboutMe');
const skills = document.getElementById('skills');
const contact=document.getElementById('contact');
const exp = document.getElementById('exp');
const proj = document.getElementById('proj');

const myContact=document.querySelector('.contact');

closeButton1.addEventListener('click', function () {
    main.style.display= 'none';
    aboutMe.style.display = 'flex';
})
closeButton2.addEventListener('click', function () {
    mySkills.style.display= 'none';
    skills.style.display = 'flex';
})
closeButton3.addEventListener('click', function () {
    construct.style.display= 'none';
})
contact.addEventListener('click', function () {
    myContact.style.display= 'flex';
})
skills.addEventListener('click', function () {
    mySkills.style.display= 'flex';
})
aboutMe.addEventListener('click', function () {
    main.style.display= 'block';
})
proj.addEventListener('click', function () {
    construct.style.display= 'flex';
})
exp.addEventListener('click', function () {
    construct.style.display= 'flex';
})