let jobs = [];
let currentPage = 1;
const jobsPerPage = 5;

// Fetch jobs from JSON file
fetch("jobs.json")
  .then((response) => response.json())
  .then((data) => {
    jobs = data; // Store jobs in global variable
    displayJobs(jobs);

    // Handle pagination
    document.querySelector(".prev").addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        displayJobs(jobs);
      }
    });

    document.querySelector(".next").addEventListener("click", () => {
      if (currentPage * jobsPerPage < jobs.length) {
        currentPage++;
        displayJobs(jobs);
        scrollToTop();
      }
    });

    function scrollToTop() {
      const targetPosition = 590; // Adjust this value for custom scroll position (in pixels)
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }

    // Handle search and filtering
    document.querySelector(".search-button").addEventListener("click", () => {
      const searchBox = document
        .querySelector(".search-box")
        .value.toLowerCase();
      const category = document.querySelector(".category").value.toLowerCase();
      const companyCategory = document
        .querySelector(".company-category")
        .value.toLowerCase();
      const sortCategory = document.querySelector(".sort-category").value;

      // Filter jobs based on search inputs
      let filteredJobs = jobs.filter((job) => {
        const matchesSearch =
          job.title.toLowerCase().includes(searchBox) ||
          job.company.toLowerCase().includes(searchBox) ||
          job.location.toLowerCase().includes(searchBox);

        const matchesCategory =
          category === "all job category" ||
          job.category.toLowerCase() === category;

        const matchesCompany =
          companyCategory === "all" ||
          job.companyCategory.toLowerCase() === companyCategory;

        return matchesSearch && matchesCategory && matchesCompany;
      });

      // Sort filtered jobs
      if (sortCategory === "title") {
        filteredJobs.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortCategory === "location") {
        filteredJobs.sort((a, b) => a.location.localeCompare(b.location));
      } else if (sortCategory === "period") {
        filteredJobs.sort((a, b) => new Date(a.period) - new Date(b.period));
      }

      // Reset to the first page and display filtered jobs
      currentPage = 1;
      displayJobs(filteredJobs);
    });
  })
  .catch((error) => console.error("Error loading job data:", error));

// Function to display jobs
function displayJobs(jobsToDisplay) {
  const jobContent = document.querySelector(".job-content");
  const paginationInfo = document.querySelector(".page-number");

  // Calculate jobs to display
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const paginatedJobs = jobsToDisplay.slice(startIndex, endIndex);

  // Clear previous jobs
  jobContent.innerHTML = "";

  // Render jobs
  paginatedJobs.forEach((job) => {
    const jobItem = document.createElement("div");
    jobItem.classList.add("job-item");

    // Create job header with title and button
    const header = document.createElement("div");
    header.classList.add("job-header");
    header.style.display = "flex";
    header.style.justifyContent = "space-between";
    header.style.alignItems = "center";

    const jobTitle = document.createElement("h2");
    jobTitle.textContent = job.title;

    const applyButton = document.createElement("a");
    applyButton.href = "#apply";
    applyButton.classList.add("apply-button");
    applyButton.textContent = "Apply Job";

    header.appendChild(jobTitle);
    header.appendChild(applyButton);

    // Add company and location
    const company = document.createElement("p");
    company.innerHTML = `<strong>Company:</strong> ${job.company}`;
    const location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${job.location}`;

    // Create a container for tasks and qualifications
    const taskQualContainer = document.createElement("div");
    taskQualContainer.classList.add("task-qual-container");

    // Add tasks
    const tasksDiv = document.createElement("div");
    tasksDiv.classList.add("tasks");
    const taskHeader = document.createElement("p");
    taskHeader.textContent = "Tugas & Tanggung Jawab:";
    const taskList = document.createElement("ul");
    job.tasks.forEach((task) => {
      const taskItem = document.createElement("li");
      taskItem.textContent = task;
      taskList.appendChild(taskItem);
    });
    tasksDiv.appendChild(taskHeader);
    tasksDiv.appendChild(taskList);

    // Add qualifications
    const qualificationsDiv = document.createElement("div");
    qualificationsDiv.classList.add("qualifications");
    const qualificationHeader = document.createElement("p");
    qualificationHeader.textContent = "Qualifications:";
    const qualificationList = document.createElement("ul");
    job.qualifications.forEach((qualification) => {
      const qualItem = document.createElement("li");
      qualItem.textContent = qualification;
      qualificationList.appendChild(qualItem);
    });
    qualificationsDiv.appendChild(qualificationHeader);
    qualificationsDiv.appendChild(qualificationList);

    // Append tasks and qualifications to the container
    taskQualContainer.appendChild(tasksDiv);
    taskQualContainer.appendChild(qualificationsDiv);

    // Append elements to job item
    jobItem.appendChild(header);
    jobItem.appendChild(company);
    jobItem.appendChild(location);
    jobItem.appendChild(taskQualContainer);

    jobContent.appendChild(jobItem);
  });

  // Update pagination info
  paginationInfo.textContent = `Page ${currentPage}`;
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}
