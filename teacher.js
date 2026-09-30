let teachers = JSON.parse(localStorage.getItem("teachersList")) || [
    {
        name: "Sir Ahmed Khan",
        email: "ahmed@gmail.com",
        course: "MERN Stack",
        expertise: "React & Node",
        experience: "6 Years",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
    },
    {
        name: "Ms. Ayesha Malik",
        email: "ayesha@gmail.com",
        course: "Web Design",
        expertise: "UI/UX & Figma",
        experience: "4 Years",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop"
    }
];

function renderTeachers() {
    let gridContainer = document.getElementById("teachersGrid");
    gridContainer.innerHTML = "";

    teachers.forEach((teacher, index) => {
        gridContainer.innerHTML += `
            <div class="teacher-card">
                <div class="teacher-img-box">
                    <img src="${teacher.image}" alt="${teacher.name}">
                </div>
                <div class="teacher-info">
                    <h3>${teacher.name}</h3>
                    <p class="teacher-email">✉️ ${teacher.email}</p>
                    <div class="teacher-meta">
                        <span>📚 <strong>Course:</strong> ${teacher.course}</span>
                        <span>⭐ <strong>Exp:</strong> ${teacher.experience}</span>
                    </div>
                    <div class="teacher-expertise">
                        <span class="badge-custom">Expertise: ${teacher.expertise}</span>
                    </div>
                </div>
                <!-- Delete Button -->
                <button class="btn-delete" onclick="deleteTeacher(${index})" title="Delete Teacher">🗑️</button>
            </div>
        `;
    });
}

// --- Teacher Delete Function ---
function deleteTeacher(index) {
    if (confirm("Kya aap waqai is teacher ko delete karna chahte hain?")) {
        teachers.splice(index, 1); // Array me se item remove hoga
        localStorage.setItem("teachersList", JSON.stringify(teachers)); // LocalStorage update hogi
        renderTeachers(); // Screen refresh hogi
    }
}

function addTeacher() {
    let name = document.getElementById("teacherName").value;
    let email = document.getElementById("teacherEmail").value;
    let course = document.getElementById("teacherCourse").value;
    let expertise = document.getElementById("teacherExpertise").value;
    let experience = document.getElementById("teacherExperience").value;
    let image = document.getElementById("teacherImage").value;

    if (!name || !email || !course) {
        alert("Please fill in the required fields!");
        return;
    }

    let defaultImg = image.trim() !== "" ? image : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

    teachers.push({ name, email, course, expertise, experience, image: defaultImg });
    localStorage.setItem("teachersList", JSON.stringify(teachers));

    renderTeachers();

    // Clear inputs & close modal
    document.getElementById("teacherName").value = "";
    document.getElementById("teacherEmail").value = "";
    document.getElementById("teacherCourse").value = "";
    document.getElementById("teacherExpertise").value = "";
    document.getElementById("teacherExperience").value = "";
    document.getElementById("teacherImage").value = "";

    let modalElement = document.getElementById('addTeacherModal');
    let modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
}

window.onload = function() {
    renderTeachers();
};