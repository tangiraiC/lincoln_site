
<template>
  <div class="max-w-4xl mx-auto p-8 text-white">
    <!-- Header -->
    <header class="mb-8">
      <h1 class="text-3xl font-bold mb-2">LINCOLN TANGIRAI CHANAKIRA</h1>
      <div class="text-white">
        <p>Silver Spring, MD | 202-807-8569 | LC1122a@American.edu</p>
        <p>
          <a href="https://linkedin.com/in/tangirai" class="text-white hover:underline">linkedin.com/in/tangirai</a> |
          <a href="https://github.com/tangiraiC" class="text-white hover:underline">github.com/tangiraiC</a>
        </p>
      </div>
    </header>

    <br/>

    <!-- Education Section -->
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4 border-b-2 border-gray-300">EDUCATION</h2>
      <div class="mb-4">
        <div class="flex justify-between">
          <h3 class="font-semibold">American University, Kogod School of Business</h3>
          <span>Washington, DC</span>
        </div>
        <div class="flex justify-between text-white">
          <p>Master of Science in Analytics | GPA: 3.2</p>
          <p>Expected Graduation: August 2026</p>
        </div>
      </div>
      <div>
        <div class="flex justify-between">
          <h3 class="font-semibold">University of Zimbabwe</h3>
          <span>Harare, Zimbabwe</span>
        </div>
        <div class="flex justify-between text-white">
          <p>Bachelor of Science in Business Studies and Computing Science | GPA: 3.4</p>
          <p>Graduated November 2022</p>
        </div>
      </div>
    </section>

    <br/>

    <!-- Professional Experience -->
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4 border-b-2 border-gray-300">PROFESSIONAL EXPERIENCE</h2>
      <div class="mb-6">
        <div class="flex justify-between">
          <h3 class="font-semibold">Airlinepros International</h3>
          <span>Aug 2023 - Aug 2024</span>
        </div>
        <p class="italic mb-2">Airlines Sales, Reservations & Marketing | Harare, Zimbabwe</p>
        <ul class="list-disc pl-5">
          <li>Developed an ERP system using Python Django and SQL to streamline ticket issuance</li>
          <li>Prepared financial reports using Sage Pastel, QuickBooks, and Microsoft Excel</li>
          <li>Managed airline reservations and ticketing systems (Galileo, Amadeus, KIU, Crane Pax)</li>
        </ul>
      </div>
      <div>
        <div class="flex justify-between">
          <h3 class="font-semibold">Angeliana Travel and Tours</h3>
          <span>Apr 2020 - Aug 2023</span>
        </div>
        <p class="italic mb-2">Travel & Digital Marketing Consultant | Harare, Zimbabwe</p>
        <ul class="list-disc pl-5">
          <li>Developed company website using JavaScript (Vue.js), enhancing customer accessibility</li>
          <li>Created visual content for social media using Photoshop, increasing user engagement</li>
        </ul>
      </div>
    </section>

    <br/>

    <!-- Projects Section -->
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4 border-b-2 border-gray-300">PROJECTS & TECHNICAL EXPERIENCE</h2>
      <div class="space-y-4">
        <div>
          <h3 class="font-semibold">World Bank Hackathon - Poverty Alleviation Analysis</h3>
          <ul class="list-disc pl-5">
            <li>Developed interactive visualization dashboard using JavaScript and Python for World Bank's Geospatial Poverty Portal</li>
            <li>Analyzed spatial inequalities using SPID and GSAP databases to identify poverty patterns</li>
            <li>Created dynamic country-specific visualizations for cross-country poverty comparisons</li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold">AU Analytics Datathon (3rd Position)</h3>
          <ul class="list-disc pl-5">
            <li>Led team using R to analyze and optimize metro ridership and infrastructure performance</li>
            <li>Delivered actionable recommendations to improve infrastructure performance</li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold">Django Customer Relations Management Tool</h3>
          <ul class="list-disc pl-5">
            <li>Built Django CRM with CRUD operations for streamlined customer data management</li>
            <li>Implemented user authentication and search functionality</li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold">Statistical Analysis Project</h3>
          <ul class="list-disc pl-5">
            <li>Conducted statistical analysis on wage disparities using R and hypothesis testing</li>
            <li>Applied visualization techniques to evaluate equity in professional sports salaries</li>
          </ul>
        </div>
      </div>
    </section>

    <br/>

    <!-- Skills Section -->
    <section>
      <h2 class="text-2xl font-bold mb-4 border-b-2 border-gray-300">TECHNICAL SKILLS</h2>
      <ul class="list-disc pl-5">
        <li>Programming Languages: Python (Django, Flask, Fast API), JavaScript, SQL, R</li>
        <li>Data Analysis & Visualization: MS Excel, Tableau, Power BI, Statistical Analysis</li>
        <li>Skills: Database Management, API Development, Data Pipeline Engineering</li>
        <li>Languages: English (Fluent), Shona (Native)</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
// Component is purely presentational, no reactive data or methods needed
</script>
