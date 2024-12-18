// Sample job data with tasks for each job
const jobs = [
  {
    title: "Kepala Departemen Strategi SDM",
    company: "Bahana Group",
    location: "Jakarta",
    tasks: [
      "Mengkoordinasikan dan mengusulkan rancangan program kerja departemen untuk dapat terkonsolidasi di dalam usulan Rencana Kerja dan Anggaran Perusahaan (RKAP) Divisi termasuk kajian perubahan faktor-faktor eksternal guna memastikan keselarasan program kerja antar unit fungsional.",
      "Mereviu dan mengusulkan draft kebijakan dan panduan terhadap pelaksanaan aktivitas Strategi SDM serta mengidentifikasi area perbaikan strategis untuk memastikan perbaikan kinerja yang berkesinambungan",
      "Mengatur dan memastikan ketersediaan kebijakan dan strategi pengelolaan SDM di IFG, meliputi rekrutmen, remunerasi, pengembangan karyawan, manajemen kinerja, manajemen talenta, pengelolaan karir, employee value proposition, hubungan industrial, program pensiun dan pengakhiran hubungan kerja",
      "Mengatur dan memonitor implementasi inisiatif strategi pengembangan manajemen SDM untuk jangka pendek dan jangka panjang dan menjustifikasi area perbaikan strategis untuk memastikan perbaikan kinerja yang berkesinambungan",
      "Mereviu proses dan analisis pengembangan organisasi meliputi kajian struktur organisasi dan perencanaan kebutuhan karyawan yang selaras dengan kebutuhan Perusahaan",
      "Mengkoordinasikan dan mengarahkan penyelarasan kebijakan dan strategi pengelolaan SDM Induk Perusahaan kepada Anak Perusahaan untuk memastikan sinergi strategi IFG secara keseluruhan",
      "Menerapkan pembinaan dan pengawasan langsung terhadap karyawan-karyawan di dalam Departemen Strategi SDM termasuk kebutuhan pelatihan untuk menjaga efektivitas dan efisiensi karyawan dalam melakukan perannya.",
      "Mengatur dan memonitor risiko dan tata kelola di unit kerja Strategi SDM untuk memastikan risiko di unit dan tata kelola kerja telah sesuai dengan ketentuan dan peraturan yang berlaku.",
    ],
    qualifications: [
      "Minimal S-1 Diutamakan Jurusan: Psikologi/Ekonomi/Manajemen/Teknik Industri",
      "Memiliki pengalaman kerja minimal 7 tahun di bidang Sumber Daya Manusia, termasuk minimal 3 tahun di posisi manajerial",
      "Memiliki pengalaman kerja sebagai pengelola SDM di Jasa Keuangan atau Konsultan Sumber Daya Manusia",
      "Lebih disukai jika memiliki sertifikasi di Bidang Sumber Daya Manusia",
    ],
  },
  {
    title: "Officer Perencanaan Keuangan",
    company: "Bahana Group",
    location: "Jakarta",
    tasks: [
      "Melaksanakan rencana program kerja Divisi Keuangan Perusahaan terkait perencanaan keuangan perusahaan;",
      "Menyusun penyusunan RKAP Perusahaan secara konsolidasi dan stand-alone",
      "Menyusun pedoman Pengelolaan Anggaran dan Evaluasi Anggaran beserta kertas kerjanya",
      "Melakukan penyiapan bahan/materi RUPS perusahaan terkait RKAP perusahaan",
      "Mendukung, menyediakan dan menyiapkan data/laporan Kepala Divisi Keuangan Perusahaan terkait evaluasi kinerja, evaluasi program kerja dan keberjalanan usaha dari Anak Perusahaan",
      "Berpartisipasi dalam melakukan riset dan olah pikir dengan output kertas kerja, memorandum, laporan narasi, dan presentasi kepada pemangku kepentingan",
      "Memiliki pengetahuan mengenai ERP dan sistem budget control & monitoring",
      "Melaksanakan PDCA dan continous improvement untuk setiap aspek pekerjaan",
      "Bertanggung jawab kepada Kepala Departemen Perencanaan Keuangan.",
    ],
    qualifications: [
      "Pendidikan Strata-I atau Strata-II, diutamakan di bidang keuangan, akuntansi, atau manajemen bisnis",
      "Pengalamaan kerja 2-7 tahun dalam bidang keuangan dan/atau anggaran",
      "Memiliki pemahaman baik atas konsep akuntansi manajemen perusahaan, anggaran, dan evaluasi kinerja dan akuntansi keuangan",
      "Memiliki kemampuan untuk bekerja secara mandiri dengan arahan dan panduan umum",
      "Memiliki kemampuan dalam menerjemahkan analisis ke dalam materi presentasi dan laporan dengan baik",
      "Memiliki kemampuan dalam manajemen projek, bekerja secara terstruktur, baik secara mandiri maupun dalam tim dengan arahan umum",
      "Memiliki kemampuan komunikasi bisnis (verbal dan tertulis) yang baik dalam Bahasa Indonesia dan Inggris Bersedia dan memiliki kemampuan untuk beradaptasi dengan perubahan bisnis dan organisasi yang cepat",
    ],
  },
  {
    title: "Marketing Specialist",
    company: "Company B",
    location: "Los Angeles",
    tasks: [
      "Plan marketing campaigns",
      "Analyze market trends",
      "Collaborate with design team",
    ],
    qualifications: [
      "Bachelor's degree in Marketing",
      "2+ years of experience",
      "Strong analytical skills",
    ],
  },
  {
    title: "Marketing Specialist",
    company: "Company B",
    location: "Los Angeles",
    tasks: [
      "Plan marketing campaigns",
      "Analyze market trends",
      "Collaborate with design team",
    ],
    qualifications: [
      "Bachelor's degree in Marketing",
      "2+ years of experience",
      "Strong analytical skills",
    ],
  },
  {
    title: "Marketing Specialist",
    company: "Company B",
    location: "Los Angeles",
    tasks: [
      "Plan marketing campaigns",
      "Analyze market trends",
      "Collaborate with design team",
    ],
    qualifications: [
      "Bachelor's degree in Marketing",
      "2+ years of experience",
      "Strong analytical skills",
    ],
  },
  {
    title: "Marketing Specialist",
    company: "Company B",
    location: "Los Angeles",
    tasks: [
      "Plan marketing campaigns",
      "Analyze market trends",
      "Collaborate with design team",
    ],
    qualifications: [
      "Bachelor's degree in Marketing",
      "2+ years of experience",
      "Strong analytical skills",
    ],
  },
  {
    title: "Marketing Specialist",
    company: "Company B",
    location: "Los Angeles",
    tasks: [
      "Plan marketing campaigns",
      "Analyze market trends",
      "Collaborate with design team",
    ],
    qualifications: [
      "Bachelor's degree in Marketing",
      "2+ years of experience",
      "Strong analytical skills",
    ],
  },
  {
    title: "Marketing Specialist",
    company: "Company B",
    location: "Los Angeles",
    tasks: [
      "Plan marketing campaigns",
      "Analyze market trends",
      "Collaborate with design team",
    ],
    qualifications: [
      "Bachelor's degree in Marketing",
      "2+ years of experience",
      "Strong analytical skills",
    ],
  },
  {
    title: "Marketing Specialist",
    company: "Company B",
    location: "Los Angeles",
    tasks: [
      "Plan marketing campaigns",
      "Analyze market trends",
      "Collaborate with design team",
    ],
    qualifications: [
      "Bachelor's degree in Marketing",
      "2+ years of experience",
      "Strong analytical skills",
    ],
  },
  {
    title: "Marketing Specialist",
    company: "Company B",
    location: "Los Angeles",
    tasks: [
      "Plan marketing campaigns",
      "Analyze market trends",
      "Collaborate with design team",
    ],
    qualifications: [
      "Bachelor's degree in Marketing",
      "2+ years of experience",
      "Strong analytical skills",
    ],
  },
  // Add more job data as needed
];

let currentPage = 1;
const jobsPerPage = 5;

function displayJobs() {
  const jobContent = document.querySelector(".job-content");
  const paginationInfo = document.querySelector(".page-number");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  // Calculate the range of jobs to display
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const jobsToDisplay = jobs.slice(startIndex, endIndex);

  // Clear previous job listings
  jobContent.innerHTML = "";

  // Display jobs
  jobsToDisplay.forEach((job) => {
    const jobItem = document.createElement("div");
    jobItem.classList.add("job-item");

    // Create the header container for title and apply button
    const header = document.createElement("div");
    header.classList.add("job-header");
    header.style.display = "flex"; // Make it a flex container
    header.style.justifyContent = "space-between"; // Space between title and button
    header.style.alignItems = "center"; // Vertically align title and button

    // Add job title
    const jobTitle = document.createElement("h3");
    jobTitle.textContent = job.title;

    // Add apply button
    const applyButton = document.createElement("a");
    applyButton.href = "#apply";
    applyButton.classList.add("apply-button");
    applyButton.textContent = "Apply Job";

    // Append job title and button to the header
    header.appendChild(jobTitle);
    header.appendChild(applyButton);

    // Add job details (company, location)
    const company = document.createElement("p");
    company.innerHTML = `<strong>Company:</strong> ${job.company}`;

    const location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${job.location}`;

    // Add bullet points for job tasks
    const taskList = document.createElement("ul");
    job.tasks.forEach((task) => {
      const taskItem = document.createElement("li");
      taskItem.textContent = task;
      taskList.appendChild(taskItem);
    });

    // Add bullet points for job qualifications
    const qualificationHeading = document.createElement("p");
    qualificationHeading.textContent = "Qualifications:";
    qualificationHeading.style.fontWeight = "bold";

    const qualificationList = document.createElement("ul");
    job.qualifications.forEach((qualification) => {
      const qualificationItem = document.createElement("li");
      qualificationItem.textContent = qualification;
      qualificationList.appendChild(qualificationItem);
    });

    // Add all elements to the job item
    jobItem.appendChild(header); // Job title and apply button
    jobItem.appendChild(company);
    jobItem.appendChild(location);
    jobItem.appendChild(taskList); // Task list
    jobItem.appendChild(qualificationHeading); // "Qualifications" label
    jobItem.appendChild(qualificationList); // Qualification list

    // Append job item to the job content container
    jobContent.appendChild(jobItem);
  });

  // Update pagination info
  paginationInfo.textContent = `Page ${currentPage}`;

  // Disable buttons based on page number
  prevButton.classList.toggle("disabled", currentPage === 1);
  nextButton.classList.toggle(
    "disabled",
    currentPage * jobsPerPage >= jobs.length
  );
}

// Handle pagination button clicks
document.querySelector(".prev").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayJobs();
  }
});

document.querySelector(".next").addEventListener("click", () => {
  if (currentPage * jobsPerPage < jobs.length) {
    currentPage++;
    displayJobs();
  }
});

// Initialize job display
displayJobs();
