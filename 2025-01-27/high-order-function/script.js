import { studentGrades } from "./data.js";

const studentList= document.getElementById('students-list');
const UniqueStudents =[...new Set(studentGrades.map((stu)=>stu.name))];

UniqueStudents.forEach((name) =>{
    const listItem=document.createElement('li');
    listItem.innerHTML =`<a href="#" data-name="${name}">${name}</a>`
    studentList.appendChild(listItem);
});

document.querySelectorAll("#students-list a").forEach((link) =>{
    link.addEventListener("click", function (e){
        e.preventDefault();
        const name =this.dataset.name;
        showStudentsDetail(name);
    });
});

function showStudentsDetail(name){
    const detailSection =document.getElementById("students-details");
    const studentName =document.getElementById("students-name");
    const studentSuject = document.getElementById("students-subject");
    const totalGrade = document.getElementById("total-grade");

    const studentEntries = studentGrades.filter((stu)=> stu.name === name);

    studentName.textContent = `${name}'s Grade Details`;
    studentSuject.innerHTML = studentEntries.map((entry)=>{
        return `<tr><td>${entry.subject}</td><td>${entry.grade}</td></tr>`;
    })
    .join("");

    const totalMarks = studentEntries.reduce(
      (sum, entry) => sum + entry.grade,
      0
    );
    totalGrade.textContent = `Total Grade: ${totalMarks}`;
  
    document.querySelector("#students-list").style.display = "none";
    detailSection.style.display = "block";
  
}
    document.getElementById("back-button").addEventListener("click", () => {
    document.getElementById("students-details").style.display = "none";
    document.querySelector("#students-list").style.display = "block";
  });