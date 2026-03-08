const LEAD_CONFIG = {
  whatsappNumber: "601116688339",
  teamEmail: "butansolar@gmail.com",
  emailEndpoint: "https://formsubmit.co/ajax/butansolar@gmail.com"
};

const BILL_BANDS = {
  "Below RM10,000": {
    system: "35 - 70 kWp",
    savings: "RM2.5k - RM6k / month",
    annual: "RM30k - RM72k / year"
  },
  "RM10,000 - RM25,000": {
    system: "70 - 160 kWp",
    savings: "RM6k - RM12k / month",
    annual: "RM72k - RM144k / year"
  },
  "RM25,000 - RM50,000": {
    system: "180 - 320 kWp",
    savings: "RM10k - RM22k / month",
    annual: "RM120k - RM264k / year"
  },
  "RM50,000 - RM100,000": {
    system: "320 - 700 kWp",
    savings: "RM22k - RM46k / month",
    annual: "RM264k - RM552k / year"
  },
  "Above RM100,000": {
    system: "700 kWp - 1.5 MWp",
    savings: "RM46k - RM100k+ / month",
    annual: "RM552k - RM1.2m+ / year"
  }
};

const CLIENTS = [
  { name: "IKON Connaught", sector: "Mall + Office", logo: "" },
  { name: "BONIA Warehouse", sector: "Industrial Warehouse", logo: "" },
  { name: "Carlo Rino Warehouse", sector: "Warehouse", logo: "" },
  { name: "Dasher Office", sector: "Office + Cafe", logo: "" },
  { name: "DSS BHD Nilai", sector: "Warehouse", logo: "" },
  { name: "DSS BHD Puchong", sector: "Warehouse", logo: "" },
  { name: "Micro CTRL", sector: "Industrial + Office", logo: "" },
  { name: "Eng Beng Manufacturing", sector: "Factory", logo: "" },
  { name: "ePARK Residence", sector: "Residential Blocks", logo: "" },
  { name: "Integrated Formway", sector: "Factory", logo: "" },
  { name: "Integrated Plastic Kogyo", sector: "Factory", logo: "" },
  { name: "JYC Battery A", sector: "Industrial", logo: "" },
  { name: "JYC Battery B", sector: "Industrial", logo: "" },
  { name: "VES Industrial", sector: "Industrial", logo: "" },
  { name: "Biotek Abadi", sector: "Industrial", logo: "" },
  { name: "Wheelcorp Premium", sector: "Commercial", logo: "" }
];

const TESTIMONIALS = [
  {
    quote: "The EPCC team handled design to commissioning smoothly. Our post-install utility trend is materially lower and reporting was clear throughout.",
    name: "Facility Manager",
    role: "IKON Connaught"
  },
  {
    quote: "We chose an outright model for long-term savings. The delivery timeline was disciplined and the payback assumptions were practical.",
    name: "Operations Lead",
    role: "BONIA Warehouse"
  },
  {
    quote: "Zero CapEx made the decision easier. We reduced monthly electricity OPEX immediately without heavy upfront capital allocation.",
    name: "Finance Director",
    role: "Integrated Formway"
  },
  {
    quote: "System output tracking and support response have been dependable. The project improved cost certainty for our factory operations.",
    name: "Plant Engineer",
    role: "Eng Beng Manufacturing"
  },
  {
    quote: "The team prepared a realistic savings model before execution. Handover documentation and compliance coordination were well managed.",
    name: "Project Coordinator",
    role: "DSS BHD"
  },
  {
    quote: "From technical survey to final energization, communication was efficient. The project now contributes measurable monthly bill relief.",
    name: "Managing Director",
    role: "Micro CTRL"
  }
];

const PROJECTS = [
  {
    name: "IKON Connaught",
    type: "Mall + Office",
    location: "Kuala Lumpur",
    model: "Outright",
    size: "185.73 kWp",
    beforeBill: "RM54,500 / month",
    afterBill: "RM31,900 / month",
    projectCost: "RM770,000",
    payback: "2.8 - 3.4 years",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "BONIA Warehouse",
    type: "Industrial Warehouse",
    location: "Selangor",
    model: "Outright",
    size: "75 kWp",
    beforeBill: "RM21,700 / month",
    afterBill: "RM12,900 / month",
    projectCost: "RM300,000",
    payback: "2.9 - 3.5 years",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Carlo Rino Warehouse",
    type: "Warehouse",
    location: "Selangor",
    model: "Outright",
    size: "83.025 kWp",
    beforeBill: "RM24,200 / month",
    afterBill: "RM14,300 / month",
    projectCost: "RM337,000",
    payback: "2.9 - 3.6 years",
    image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Dasher Office",
    type: "Commercial Office + Cafe",
    location: "Kuala Lumpur",
    model: "Outright",
    size: "52.5 kWp",
    beforeBill: "RM15,600 / month",
    afterBill: "RM9,100 / month",
    projectCost: "RM214,000",
    payback: "2.8 - 3.5 years",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Eng Beng Manufacturing",
    type: "Factory",
    location: "Malaysia",
    model: "Outright",
    size: "999 kWp",
    beforeBill: "RM286,000 / month",
    afterBill: "RM166,500 / month",
    projectCost: "RM3,980,000",
    payback: "2.8 - 3.4 years",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "ePARK Residence",
    type: "2 Residential Blocks",
    location: "Malaysia",
    model: "Zero CapEx @ RM0.475",
    size: "237.39 kWp",
    beforeBill: "RM68,900 / month",
    afterBill: "RM50,600 / month",
    projectCost: "RM0 upfront",
    payback: "Immediate OPEX savings",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Integrated Formway",
    type: "Factory",
    location: "Malaysia",
    model: "Zero CapEx @ RM0.475",
    size: "172.2 kWp",
    beforeBill: "RM49,300 / month",
    afterBill: "RM36,700 / month",
    projectCost: "RM0 upfront",
    payback: "Immediate OPEX savings",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Integrated Plastic Kogyo",
    type: "Factory",
    location: "Malaysia",
    model: "Zero CapEx @ RM0.475",
    size: "92.25 kWp",
    beforeBill: "RM26,600 / month",
    afterBill: "RM19,400 / month",
    projectCost: "RM0 upfront",
    payback: "Immediate OPEX savings",
    image: "https://images.unsplash.com/photo-1586528116493-0f20f9fe5fd3?auto=format&fit=crop&w=1200&q=80"
  }
];

function formatWhatsappMessage(companyName, billRange, estimate) {
  return [
    "Hello Butan Solar,",
    "",
    "I would like a Commercial/Industrial Solar proposal.",
    `Company Name: ${companyName}`,
    `Monthly Bill Range: ${billRange}`,
    `Estimated System Size: ${estimate.system}`,
    `Estimated Savings: ${estimate.savings}`,
    "Interested Models: EPCC / Outright / Zero CapEx",
    "Campaign Code: 2bob2butan",
    "",
    "Please contact me for site assessment and detailed ROI."
  ].join("\n");
}

function getEstimateByBillRange(billRange) {
  return BILL_BANDS[billRange] || BILL_BANDS["RM25,000 - RM50,000"];
}

function renderClients() {
  const topTrack = document.getElementById("client-track-top");
  const bottomTrack = document.getElementById("client-track-bottom");
  if (!topTrack || !bottomTrack) return;

  const toChip = (client) => `
    <article class="client-chip">
      ${client.logo ? `<img class="client-logo" src="${client.logo}" alt="${client.name} logo">` : client.name}
      <span>${client.sector}</span>
    </article>
  `;

  const duplicated = CLIENTS.concat(CLIENTS);
  const shifted = CLIENTS.slice(4).concat(CLIENTS.slice(0, 4)).concat(CLIENTS.slice(4).concat(CLIENTS.slice(0, 4)));

  topTrack.innerHTML = duplicated.map(toChip).join("");
  bottomTrack.innerHTML = shifted.map(toChip).join("");
}

function renderTestimonials() {
  const testimonialGrid = document.getElementById("testimonial-grid");
  if (!testimonialGrid) return;

  testimonialGrid.innerHTML = TESTIMONIALS.map((item) => `
    <article class="testimonial-card reveal">
      <p class="testimonial-quote">"${item.quote}"</p>
      <div class="testimonial-meta">
        <p class="testimonial-name">${item.name}</p>
        <p class="testimonial-role">${item.role}</p>
      </div>
    </article>
  `).join("");
}

function renderProjects() {
  const projectGrid = document.getElementById("project-grid");
  if (!projectGrid) return;

  projectGrid.innerHTML = PROJECTS.map((project) => `
    <article class="project-card reveal">
      <div class="project-visual" style="background-image: url('${project.image}')">
        <span class="project-tag">${project.model}</span>
      </div>
      <div class="project-body">
        <h3>${project.name}</h3>
        <p class="project-meta">${project.type} | ${project.location} | ${project.size}</p>
        <div class="metric-grid">
          <div class="metric">
            <small>Before Bill</small>
            <strong>${project.beforeBill}</strong>
          </div>
          <div class="metric">
            <small>After Bill</small>
            <strong>${project.afterBill}</strong>
          </div>
          <div class="metric">
            <small>Project Cost</small>
            <strong>${project.projectCost}</strong>
          </div>
          <div class="metric">
            <small>ROI / Payback</small>
            <strong>${project.payback}</strong>
          </div>
        </div>
      </div>
    </article>
  `).join("");
}

function bindEstimatorPreview() {
  const billRangeEl = document.getElementById("bill-range");
  const estimateDisplay = document.getElementById("estimate-display");
  if (!billRangeEl || !estimateDisplay) return;

  billRangeEl.addEventListener("change", () => {
    const estimate = getEstimateByBillRange(billRangeEl.value);
    estimateDisplay.innerHTML = `
      <p class="estimate-label">Typical outcome for ${billRangeEl.value || "selected bill range"}</p>
      <h4>Estimated ${estimate.system} system</h4>
      <p>Potential monthly savings: ${estimate.savings}</p>
    `;
  });
}

async function sendLeadEmail(payload) {
  try {
    const response = await fetch(LEAD_CONFIG.emailEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        _subject: `New Solar Lead - ${payload.companyName}`,
        _template: "table",
        Company: payload.companyName,
        "Monthly Bill Range": payload.billRange,
        "Estimated System": payload.system,
        "Estimated Savings": payload.savings,
        "Campaign Code": "2bob2butan",
        Source: "Butan Solar Landing Page"
      })
    });

    return response.ok;
  } catch (error) {
    return false;
  }
}

function bindLeadForm() {
  const leadForm = document.getElementById("solar-lead-form");
  const companyNameEl = document.getElementById("company-name");
  const billRangeEl = document.getElementById("bill-range");
  const statusEl = document.getElementById("form-status");

  if (!leadForm || !companyNameEl || !billRangeEl || !statusEl) return;

  leadForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const companyName = companyNameEl.value.trim();
    const billRange = billRangeEl.value;

    if (!companyName || !billRange) {
      statusEl.textContent = "Please complete both required fields.";
      return;
    }

    const estimate = getEstimateByBillRange(billRange);
    const message = formatWhatsappMessage(companyName, billRange, estimate);
    const waLink = `https://wa.me/${LEAD_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

    statusEl.textContent = "Preparing your WhatsApp draft and notifying our team...";

    const emailSent = await sendLeadEmail({
      companyName,
      billRange,
      system: estimate.system,
      savings: estimate.savings
    });

    statusEl.textContent = emailSent
      ? "Opening WhatsApp now. Email notification sent to Butan Solar team."
      : "Opening WhatsApp now. If email alert fails, we still receive your WhatsApp request.";

    window.open(waLink, "_blank", "noopener,noreferrer");
    leadForm.reset();
  });
}

function bindRevealAnimations() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.16
  });

  elements.forEach((el) => observer.observe(el));
}

renderClients();
renderTestimonials();
renderProjects();
bindEstimatorPreview();
bindLeadForm();
bindRevealAnimations();
