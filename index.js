
const allProjects = [
  {cat:'ecom',icon:'ti-shopping-bag',cls:'e1',title:'StyleCart – Fashion Store',desc:'Shopify store with custom theme, 200+ products, and integrated Razorpay payment gateway.',tags:['Shopify','Liquid','SEO'],badge:'Live'},
  {cat:'ecom',icon:'ti-device-laptop',cls:'e2',title:'TechZone – Electronics',desc:'WooCommerce store with advanced filtering, live chat, and automated order tracking.',tags:['WordPress','WooCommerce','PHP'],badge:'Live'},
  {cat:'ecom',icon:'ti-leaf',cls:'e3',title:'GreenBasket – Organic Foods',desc:'Custom React + Node.js store with subscription model and delivery scheduling.',tags:['React','Node.js','MongoDB'],badge:'Live'},
  {cat:'web',icon:'ti-layout-dashboard',cls:'u1',title:'SaaS Analytics Dashboard',desc:'Real-time analytics dashboard with charts, role-based access, and CSV export.',tags:['React','D3.js','Firebase'],badge:'Completed'},
  {cat:'web',icon:'ti-building',cls:'u2',title:'Corporate Website – FinTech',desc:'Multi-page corporate site with animations, blog CMS, and contact automation.',tags:['Next.js','Tailwind','Sanity'],badge:'Live'},
  {cat:'design',icon:'ti-palette',cls:'u1',title:'Mobile App UI – HealthTrack',desc:'Complete UI design for a health tracking app. 40+ screens, design system included.',tags:['Figma','Prototyping','iOS'],badge:'Design'},
  {cat:'design',icon:'ti-browser',cls:'e2',title:'SaaS Landing Page Redesign',desc:'Conversion-focused redesign that increased sign-ups by 45%.',tags:['Figma','HTML/CSS','A/B Test'],badge:'Design'},
  {cat:'marketing',icon:'ti-chart-bar',cls:'e3',title:'Google Ads Campaign – Retail',desc:'Managed ₹2L/month ad budget. Achieved 3.5x ROAS in 60 days.',tags:['Google Ads','Analytics','SEO'],badge:'Campaign'},
  {cat:'marketing',icon:'ti-mail',cls:'u2',title:'Email Marketing – EdTech',desc:'Automated drip campaigns with 42% open rate, 5x industry average.',tags:['Mailchimp','Automation','Copywriting'],badge:'Campaign'},
  {cat:'btech',icon:'ti-school',cls:'u1',title:'Smart Attendance System',desc:'IoT-based attendance system using RFID + web dashboard. Grade: A+',tags:['Arduino','Node.js','MySQL'],badge:'A+ Grade'},
  {cat:'btech',icon:'ti-brain',cls:'e1',title:'ML Crop Disease Detector',desc:'Deep learning model to detect crop diseases from images. 92% accuracy.',tags:['Python','TensorFlow','Flask'],badge:'A Grade'},
  {cat:'btech',icon:'ti-device-mobile',cls:'e3',title:'Hospital Management App',desc:'Full-stack web app for hospital patient, doctor, and appointment management.',tags:['React','Node.js','PostgreSQL'],badge:'A+ Grade'},
  {cat:'automation',icon:'ti-robot',cls:'u2',title:'CRM Workflow Automation',desc:'Zapier workflows to sync leads from 5 sources to CRM, saving 15 hrs/week.',tags:['Zapier','HubSpot','Sheets'],badge:'Live'},
  {cat:'automation',icon:'ti-settings',cls:'e2',title:'Invoice Auto-Generator',desc:'Python script to auto-generate and email monthly invoices for a consulting firm.',tags:['Python','SMTP','PDF'],badge:'Live'},
];

function renderProjects(filter){
  const c=document.getElementById('projects-container');
  const list=filter==='all'?allProjects:allProjects.filter(p=>p.cat===filter);
  c.innerHTML=list.map(p=>`
    <div class="project-card">
      <div class="project-thumb ${p.cls}"><i class="ti ${p.icon}" style="color:var(--gold)"></i><span class="project-badge">${p.badge}</span></div>
      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project-tags">${p.tags.map(t=>`<span class="ptag">${t}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');
}
renderProjects('all');

function filterProjects(f,btn){
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderProjects(f);
}

const SHEET_ENDPOINT = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
const SUCCESS_MESSAGE = '✅ Message sent! Sagar will get back to you within 24 hours.';
const ERROR_MESSAGE = '⚠️ Unable to send your message right now. Please try again later.';

function showPage(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  window.scrollTo(0,0);
}

function scrollToSection(id){
  showPage('home');
  setTimeout(()=>{
    const el=document.getElementById(id);
    if(el)el.scrollIntoView({behavior:'smooth',block:'start'});
  },50);
}

function toggleFaq(btn){
  const ans=btn.nextElementSibling;
  const icon=btn.querySelector('i');
  const open=ans.classList.contains('open');
  document.querySelectorAll('.faq-a').forEach(a=>a.classList.remove('open'));
  document.querySelectorAll('.faq-q i').forEach(i=>i.style.transform='');
  if(!open){ans.classList.add('open');icon.style.transform='rotate(180deg)';}
}

function submitForm(){
  const name=document.getElementById('f-name').value.trim();
  const email=document.getElementById('f-email').value.trim();
  const phone=document.getElementById('f-phone').value.trim();
  const service=document.getElementById('f-service').value;
  const budget=document.getElementById('f-budget').value;
  const msg=document.getElementById('f-msg').value.trim();
  if(!name||!email||!service||!msg){
    alert('Please fill in all required fields.');
    return;
  }

  const payload = {
    name,
    email,
    phone,
    service,
    budget,
    message: msg,
    timestamp: new Date().toISOString()
  };

  const submitBtn = document.querySelector('.submit-btn');
  submitBtn.disabled = true;
  submitBtn.innerHTML = 'Sending...';
  document.getElementById('success-msg').style.display = 'none';

  fetch(SHEET_ENDPOINT, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  })
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.text();
  })
  .then(() => {
    showSuccess(SUCCESS_MESSAGE);
    clearForm();
  })
  .catch(error => {
    console.error('Sheet submit error:', error);
    showSuccess(ERROR_MESSAGE);
  })
  .finally(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Send Message <i class="ti ti-send" style="margin-left:6px"></i>';
  });
}

function clearForm(){
  document.getElementById('f-name').value='';
  document.getElementById('f-email').value='';
  document.getElementById('f-phone').value='';
  document.getElementById('f-service').value='';
  document.getElementById('f-budget').value='';
  document.getElementById('f-msg').value='';
}

function showSuccess(text){
  const msg = document.getElementById('success-msg');
  msg.textContent = text;
  msg.style.display = 'block';
}
