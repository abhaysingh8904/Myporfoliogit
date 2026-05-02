function toggleForm() {
  const formBox = document.getElementById("contactFormElement");
  formBox.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector("#contactFormElement form"); // ✅ target REAL form
  const toast = document.getElementById("toast");

  if (!form || !toast) {
    console.log("Form or toast not found!");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // we will send manually

    const data = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        "Accept": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        toast.classList.add("show");
        form.reset();

        setTimeout(() => {
          toast.classList.remove("show");
        }, 3000);
      } else {
        alert("Error sending message");
      }
    })
    .catch(() => {
      alert("Network error");
    });

  });

});
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const heroHeight = document.querySelector(".hero").offsetHeight;

  if (window.scrollY > heroHeight - 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


const projectData = {
  exam: {
    title: "Online Exam System",
    description: "Developed a backend-based Online Examination System using Spring Boot that provides role-based access for students and administrators The system includes secure user registration and login with JWT authentication, enabling students to attempt exams, submit answers, and view results in real time, while administrators manage the question bank. The application is designed as a real-world exam platform with stateless authentication, modular architecture, and automated result evaluation for accurate and efficient scoring.",
    github: "https://github.com/abhaysingh8904/online-examination-system.git"
  },

  insider: {
    title: "Insider Education",
    description: "Developed an AI-powered learning platform with an integrated chatbot using JavaScript and Google Gemini API. Implemented real-time messaging, file upload, emoji support, and dynamic UI rendering. Designed a responsive interface for subject-based learning and interactive user engagement.",
    github: "https://github.com/abhaysingh8904/Insiders.git"
  },

  spin: {
    title: "Spin Quest",
    description: "Developed a browser-based game collection “Spin Quest” featuring a spinning wheel game and a number guessing game using JavaScript. Implemented real-time user interaction, randomization logic, and dynamic UI updates to create an engaging gaming experience..",
    github: "https://github.com/abhaysingh8904/spin-quest.git"
  }
};

// OPEN MODAL
function openModal(key) {
  const modal = document.getElementById("projectModal");

  document.getElementById("modalTitle").innerText = projectData[key].title;
  document.getElementById("modalText").innerHTML = `
  ${projectData[key].description}

  <br><br>
  <a href="${projectData[key].github}" target="_blank" class="github-btn">
  🔗 View GitHub
</a>
`;

  modal.style.display = "flex";
}

// CLOSE MODAL
function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}

// CLOSE WHEN CLICK OUTSIDE
window.onclick = function(event) {
  const modal = document.getElementById("projectModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

function goToContact() {
  // scroll to footer
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });

  // wait for scroll, then open form
  setTimeout(() => {
    const form = document.getElementById("contactFormElement");
    form.classList.add("show");
  }, 600); // delay for smooth feel
}

function openAboutModal() {
  document.getElementById("aboutModal").style.display = "flex";
}

function closeAboutModal() {
  document.getElementById("aboutModal").style.display = "none";
}


function goToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}
//  const toggleBtn = document.getElementById("themeToggle");

//   if (toggleBtn) {

//     // load saved theme
//     if (localStorage.getItem("theme") === "dark") {
//       document.body.classList.add("dark");
//       toggleBtn.innerText = "☀️";
//     }

//     // toggle click
//     toggleBtn.addEventListener("click", () => {
//       document.body.classList.toggle("dark");

//       if (document.body.classList.contains("dark")) {
//         toggleBtn.innerText = "☀️";
//         localStorage.setItem("theme", "dark");
//       } else {
//         toggleBtn.innerText = "🌙";
//         localStorage.setItem("theme", "light");
//       }
//     });
//   }

