let currentPage = 1;
const jobsPerPage = 5;

// Fetch jobs from JSON file
fetch("jobs.json")
  .then((response) => response.json())
  .then((jobs) => {
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
      }
    });
  })
  .catch((error) => console.error("Error loading job data:", error));

// Function to display jobs
function displayJobs(jobs) {
  const jobContent = document.querySelector(".job-content");
  const paginationInfo = document.querySelector(".page-number");

  // Calculate jobs to display
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const jobsToDisplay = jobs.slice(startIndex, endIndex);

  // Clear previous jobs
  jobContent.innerHTML = "";

  // Render jobs
  jobsToDisplay.forEach((job) => {
    const jobItem = document.createElement("div");
    jobItem.classList.add("job-item");

    // Create job header with title and button
    const header = document.createElement("div");
    header.classList.add("job-header");
    header.style.display = "flex";
    header.style.justifyContent = "space-between";
    header.style.alignItems = "center";

    const jobTitle = document.createElement("h3");
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

    // Add tasks
    const taskList = document.createElement("ul");
    job.tasks.forEach((task) => {
      const taskItem = document.createElement("li");
      taskItem.textContent = task;
      taskList.appendChild(taskItem);
    });

    // Add qualifications
    const qualificationList = document.createElement("ul");
    const qualificationHeader = document.createElement("p");
    qualificationHeader.textContent = "Qualifications:";
    job.qualifications.forEach((qualification) => {
      const qualItem = document.createElement("li");
      qualItem.textContent = qualification;
      qualificationList.appendChild(qualItem);
    });

    // Append elements to job item
    jobItem.appendChild(header);
    jobItem.appendChild(company);
    jobItem.appendChild(location);
    jobItem.appendChild(taskList);
    jobItem.appendChild(qualificationHeader);
    jobItem.appendChild(qualificationList);

    jobContent.appendChild(jobItem);
  });

  // Update pagination info
  paginationInfo.textContent = `Page ${currentPage}`;
}
