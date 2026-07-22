/* ============================================================
   app.js — نظام صفاء الذكي | كل السكربتات في ملف واحد
   يضم: الترجمة (AR/EN) + الثيم + اللودر + الريفيل + التايبورايتر +
        العدادات + مهارات الـ CV + فلتر المشاريع + التوست + فورم
        الطلب + الجسيمات + الكيرسر + التسجيل/الدخول (OTP) + الشات الحي
   ============================================================ */

/* ============================================================
   1) قاموس الترجمة AR/EN
   ============================================================ */
const translations = {
  "nav-home":       { ar:"الرئيسية",       en:"Home" },
  "nav-about":      { ar:"رحلتي",           en:"My Journey" },
  "nav-vision":     { ar:"رؤية المشروع",    en:"Vision" },
  "nav-services":   { ar:"الخدمات",         en:"Services" },
  "nav-projects":   { ar:"المشاريع",         en:"Projects" },
  "nav-pricing":    { ar:"الأسعار",          en:"Pricing" },
  "nav-cv":         { ar:"CV",               en:"CV" },
  "nav-form":       { ar:"طلب خدمة",        en:"Request Service" },
  "nav-contact":    { ar:"تواصل",            en:"Contact" },
  "nav-auth":       { ar:"حسابي",            en:"My Account" },

  "hero-welcome":   { ar:"منصة احترافية لتصميم المواقع والأنظمة الذكية",
                      en:"A professional platform for websites & smart systems" },
  "hero-animated":  { ar:"👋 أهلاً بيك في نظام صفاء الذكي",
                      en:"👋 Welcome to Safaa Smart System" },
  "theme-btn":      { ar:"🎨 تغيير اللون",  en:"🎨 Change Theme" },

  "home-h2":        { ar:"🚀 حلول رقمية احترافية",      en:"🚀 Professional Digital Solutions" },
  "home-p":         { ar:"نحوّل أفكارك إلى مواقع وأنظمة ذكية متكاملة، من أول فكرة على الورق وحتى نظام فعلي شغّال بيخدم عملاءك يوميًا.",
                      en:"We turn your ideas into complete, smart systems & websites — from the first sketch to a real system serving your customers daily." },
  "home-btn-proj":  { ar:"المشاريع 🔥",    en:"Projects 🔥" },
  "home-btn-form":  { ar:"اطلب خدمة 🚀",   en:"Request Service 🚀" },
  "home-btn-auth":  { ar:"إنشاء حساب / تسجيل الدخول 🔐", en:"Create Account / Login 🔐" },
  "home-stats-h":   { ar:"📊 أرقام تتكلم عن نفسها", en:"📊 Numbers that speak for themselves" },
  "home-stat-1":    { ar:"مشروع منجز", en:"Completed Projects" },
  "home-stat-2":    { ar:"عميل راضٍ", en:"Happy Clients" },
  "home-stat-3":    { ar:"سنوات خبرة", en:"Years of Experience" },
  "home-stat-4":    { ar:"دعم فني", en:"Support" },

  "about-h2":       { ar:"👤 رحلتي الإبداعية",    en:"👤 My Creative Journey" },
  "about-p1":       { ar:"أنا صفاء، طالبة علوم الحاسوب وأطور أنظمة حديثة. بدأت رحلتي بشغف حقيقي في عالم البرمجة منذ أول سطر كود كتبته، وتطورت خطوة بخطوة من تصميم صفحات ثابتة بسيطة إلى بناء أنظمة رقمية متكاملة تخدم أصحاب المشاريع والشركات الصغيرة والمتوسطة، بدءاً من فكرة المشروع وحتى قاعدة البيانات والواجهة النهائية.",
                      en:"I'm Safaa, a Computer Science student who builds modern systems. My journey started with a real passion for programming from the very first line of code, and evolved step by step from simple static pages to full integrated digital systems serving small and medium businesses — from the initial idea all the way to the database and final interface." },
  "about-p1b":      { ar:"على مدار رحلتي تعلّمت إن التصميم الجميل وحده ما يكفي، والأداء القوي وحده ما يكفي — لازم الاتنين يشتغلوا مع بعض عشان يطلع منتج رقمي حقيقي يقدر يخدم مستخدم حقيقي، ودا بالظبط اللي بحاول أوصله في كل مشروع بشتغل عليه.",
                      en:"Throughout my journey I learned that beautiful design alone isn't enough, and strong performance alone isn't enough — both have to work together to produce a real digital product that genuinely serves real users. That's exactly what I aim for in every project I work on." },
  "about-p2":       { ar:"هدفي دايمًا إني أقدّم حلول عملية، واضحة، وسهلة الاستخدام، تجمع بين التصميم الجميل والأداء القوي، مع اهتمام حقيقي بتفاصيل تجربة المستخدم من أول ثانية يدخل فيها للموقع.",
                      en:"My goal is always to deliver practical, clear, and easy-to-use solutions that combine beautiful design with powerful performance, with real attention to the user experience from the very first second they land on the site." },
  "about-copyright":{ ar:"© 2026 نظام صفاء الذكي — جميع الحقوق محفوظة. هذا المشروع من تصميم وتطوير صفاء كجزء من مشروع تخرج في علوم الحاسوب، ولا يجوز نسخ أو إعادة استخدام الكود أو المحتوى دون إذن كتابي.",
                      en:"© 2026 Safaa Smart System — All rights reserved. This project was designed and developed by Safaa as part of a Computer Science graduation project. Copying or reusing the code or content without written permission is not allowed." },

  "vision-h2":      { ar:"🧠 رؤية المشروع",   en:"🧠 Project Vision" },
  "vision-p":       { ar:"نظام ذكي لطلب الخدمات الرقمية بسهولة واحترافية، بيربط بين العميل ومقدّم الخدمة في مكان واحد: طلب، متابعة، تواصل مباشر، وتسليم — كله من نفس المنصة وبدون تعقيد.",
                      en:"A smart system for requesting digital services with ease and professionalism, connecting the client and the service provider in one place: request, tracking, direct communication, and delivery — all from the same platform, without complexity." },
  "vision-p2":      { ar:"الرؤية بعيدة المدى إن النظام يتحوّل لمنصة متكاملة تدير كل مراحل المشروع الرقمي، من أول استشارة أولية للعميل وحتى تسليم المنتج النهائي ومتابعة الصيانة بعد الإطلاق.",
                      en:"The long-term vision is for the system to evolve into a complete platform managing every stage of a digital project — from the client's first consultation to final delivery and post-launch maintenance." },

  "services-h2":         { ar:"💼 الخدمات",            en:"💼 Services" },
  "service-web":         { ar:"تصميم مواقع",            en:"Web Design" },
  "service-web-price":   { ar:"يبدأ من 120$",           en:"From $120" },
  "service-sys":         { ar:"أنظمة إدارة",            en:"Management Systems" },
  "service-sys-price":   { ar:"يبدأ من 180$",           en:"From $180" },
  "service-app":         { ar:"تطبيقات",                en:"Applications" },
  "service-app-price":   { ar:"يبدأ من 350$",           en:"From $350" },
  "service-data":        { ar:"تحليل بيانات",           en:"Data Analysis" },
  "service-data-price":  { ar:"يبدأ من 150$",           en:"From $150" },
  "service-auto":        { ar:"أتمتة الأنظمة",          en:"System Automation" },
  "service-auto-price":  { ar:"يبدأ من 200$",           en:"From $200" },
  "service-ai":          { ar:"ذكاء اصطناعي",           en:"Artificial Intelligence" },
  "service-ai-price":    { ar:"يبدأ من 400$",           en:"From $400" },
  "service-host":        { ar:"استضافة ودعم فني",       en:"Hosting & Tech Support" },
  "service-host-price":  { ar:"40$ / شهر",              en:"$40 / month" },
  "service-market":      { ar:"تسويق رقمي",             en:"Digital Marketing" },
  "service-market-price":{ ar:"90$ / شهر",              en:"$90 / month" },
  "service-uiux":        { ar:"تصميم UI/UX",            en:"UI/UX Design" },
  "service-uiux-price":  { ar:"يبدأ من 100$",           en:"From $100" },
  "service-security":    { ar:"أمن سيبراني",            en:"Cybersecurity" },
  "service-security-price": { ar:"يبدأ من 250$",        en:"From $250" },
  "service-api":         { ar:"تكامل API",              en:"API Integration" },
  "service-api-price":   { ar:"يبدأ من 160$",           en:"From $160" },
  "service-consult":     { ar:"استشارات تقنية",         en:"Tech Consulting" },
  "service-consult-price": { ar:"60$ / ساعة",           en:"$60 / hour" },

  "projects-h2":         { ar:"🔥 المشاريع",             en:"🔥 Projects" },
  "project-personal":    { ar:"موقع شخصي",               en:"Personal Website" },
  "project-personal-price":  { ar:"50$",                 en:"$50" },
  "project-warehouse":   { ar:"نظام مخازن",              en:"Warehouse System" },
  "project-warehouse-price": { ar:"180$",                en:"$180" },
  "project-service":     { ar:"تطبيق خدمات",             en:"Services App" },
  "project-service-price":   { ar:"300$",                en:"$300" },
  "project-dashboard":   { ar:"لوحة تحكم",               en:"Dashboard" },
  "project-dashboard-price": { ar:"200$",                en:"$200" },
  "project-school":      { ar:"نظام مدرسة كبيرة",        en:"Large School System" },
  "project-school-price":    { ar:"500$",                en:"$500" },
  "project-mobile":      { ar:"تطبيق موبايل",            en:"Mobile App" },
  "project-mobile-price":    { ar:"350$",                en:"$350" },
  "project-store":       { ar:"متجر إلكتروني",           en:"E-Commerce Store" },
  "project-store-price":     { ar:"220$",                en:"$220" },
  "project-booking":     { ar:"نظام حجوزات",             en:"Booking System" },
  "project-booking-price":   { ar:"240$",                en:"$240" },
  "project-delivery":    { ar:"تطبيق توصيل",             en:"Delivery App" },
  "project-delivery-price":  { ar:"300$",                en:"$300" },
  "project-attendance":  { ar:"نظام حضور وانصراف",       en:"Attendance System" },
  "project-attendance-price":{ ar:"220$",                en:"$220" },
  "project-elearning":   { ar:"منصة تعليمية",            en:"E-Learning Platform" },
  "project-elearning-price": { ar:"280$",                en:"$280" },
  "project-bot":         { ar:"بوت واتساب ذكي",          en:"Smart WhatsApp Bot" },
  "project-bot-price":       { ar:"150$",                en:"$150" },

  "journey-step-1":      { ar:"أول سطر كود",             en:"First line of code" },
  "journey-step-2":      { ar:"تصميم واجهات",            en:"UI Design" },
  "journey-step-3":      { ar:"أنظمة متكاملة",           en:"Full Systems" },
  "journey-step-4":      { ar:"نظام صفاء الذكي",         en:"Safaa Smart System" },

  "cv-h2":               { ar:"📄 الملف المهني",         en:"📄 Resume / CV" },
  "cv-name":             { ar:"👩‍💻 الاسم: صفاء",        en:"👩‍💻 Name: Safaa" },
  "cv-edu":              { ar:"🎓 علوم الحاسوب",         en:"🎓 Computer Science" },
  "cv-skills-label":     { ar:"💡 المهارات:",             en:"💡 Skills:" },
  "cv-tools-label":      { ar:"🛠️ الأدوات المستخدمة:",   en:"🛠️ Tools:" },
  "cv-exp-label":        { ar:"🎯 الخبرات:",              en:"🎯 Experience:" },
  "cv-lang-label":       { ar:"🌐 اللغات:",               en:"🌐 Languages:" },
  "cv-skill-1":          { ar:"HTML / CSS / JS / PHP",   en:"HTML / CSS / JS / PHP" },
  "cv-skill-2":          { ar:"UI/UX Design",             en:"UI/UX Design" },
  "cv-skill-3":          { ar:"System Development",       en:"System Development" },
  "cv-skill-4":          { ar:"قواعد البيانات (MySQL)",  en:"Databases (MySQL)" },
  "cv-skill-5":          { ar:"تحليل البيانات الأساسي", en:"Basic Data Analysis" },
  "cv-tool-1":           { ar:"Figma",                    en:"Figma" },
  "cv-tool-2":           { ar:"VS Code",                  en:"VS Code" },
  "cv-tool-3":           { ar:"Git / GitHub",             en:"Git / GitHub" },
  "cv-exp-1":            { ar:"تصميم وتطوير مواقع تعريفية وأنظمة إدارة",
                           en:"Designing & developing websites and management systems" },
  "cv-exp-2":            { ar:"بناء فورمات وطلبات خدمة تفاعلية",
                           en:"Building interactive forms and service requests" },
  "cv-exp-3":            { ar:"العمل على مشاريع تخرج وأنظمة طلابية",
                           en:"Working on graduation projects and student systems" },
  "cv-lang-1":           { ar:"العربية (اللغة الأم)",    en:"Arabic (Native)" },
  "cv-lang-2":           { ar:"الإنجليزية (جيد جدًا)",  en:"English (Very Good)" },
  "cv-copyright":        { ar:"© 2026 نظام صفاء الذكي — جميع الحقوق محفوظة.", en:"© 2026 Safaa Smart System — All rights reserved." },

  "form-h2":             { ar:"📋 طلب خدمة",             en:"📋 Service Request" },
  "form-name-lbl":       { ar:"الاسم الكامل",             en:"Full Name" },
  "form-name-ph":        { ar:"اكتب اسمك الكامل",        en:"Enter your full name" },
  "form-email-lbl":      { ar:"الإيميل",                  en:"Email" },
  "form-phone-lbl":      { ar:"رقم الهاتف",               en:"Phone Number" },
  "form-phone-ph":       { ar:"رقم الهاتف",               en:"Phone number" },
  "form-country-lbl":    { ar:"الدولة",                   en:"Country" },
  "form-country-ph":     { ar:"الدولة",                   en:"Country" },
  "form-service-lbl":    { ar:"نوع الخدمة",               en:"Service Type" },
  "form-opt-web":        { ar:"تصميم موقع",               en:"Web Design" },
  "form-opt-sys":        { ar:"نظام إدارة",               en:"Management System" },
  "form-opt-app":        { ar:"تطبيق",                    en:"Application" },
  "form-opt-ai":         { ar:"ذكاء اصطناعي",             en:"Artificial Intelligence" },
  "form-opt-data":       { ar:"تحليل بيانات",             en:"Data Analysis" },
  "form-opt-auto":       { ar:"أتمتة أنظمة",              en:"System Automation" },
  "form-pkg-lbl":        { ar:"اختر الباقة المناسبة",     en:"Choose a Package" },
  "form-extras-lbl":     { ar:"مميزات إضافية (اختياري)", en:"Extra Features (optional)" },
  "form-extra-host":     { ar:"استضافة",                  en:"Hosting" },
  "form-extra-domain":   { ar:"دومين",                    en:"Domain" },
  "form-extra-maint":    { ar:"صيانة شهرية",              en:"Monthly Maintenance" },
  "form-extra-support":  { ar:"دعم سريع 24 ساعة",        en:"24h Fast Support" },
  "form-details-lbl":    { ar:"تفاصيل المشروع",           en:"Project Details" },
  "form-details-ph":     { ar:"اكتب الهدف، الفكرة، الميزانية، والمدة المتوقعة",
                           en:"Write the goal, idea, budget, and expected timeline" },
  "form-notes-lbl":      { ar:"ملاحظات إضافية (اختياري)",en:"Additional Notes (optional)" },
  "form-notes-ph":       { ar:"أي ملاحظات إضافية",       en:"Any additional notes" },
  "form-stars-lbl":      { ar:"قيّم تجربتك معنا",        en:"Rate your experience" },
  "form-submit":         { ar:"إرسال الطلب 🚀",           en:"Submit Request 🚀" },

  "contact-h2":          { ar:"📞 تواصل معنا",            en:"📞 Contact Us" },
  "contact-intro":       { ar:"نسعد بتواصلك معنا لأي استفسار أو طلب خدمة جديدة.",
                           en:"We'd love to hear from you for any inquiry or new service request." },
  "contact-email":       { ar:"📧 البريد الإلكتروني: example@email.com",
                           en:"📧 Email: example@email.com" },
  "contact-wa":          { ar:"📱 واتساب: +249 000 000 000",
                           en:"📱 WhatsApp: +249 000 000 000" },
  "contact-site":        { ar:"🌐 الموقع: www.safaa-system.com",
                           en:"🌐 Website: www.safaa-system.com" },
  "contact-loc":         { ar:"📍 الموقع الجغرافي: السودان",
                           en:"📍 Location: Sudan" },
  "contact-hours":       { ar:"⏰ أوقات الاستجابة: من السبت إلى الخميس، 10 صباحًا - 8 مساءً",
                           en:"⏰ Response Hours: Saturday–Thursday, 10 AM – 8 PM" },

  "footer-brand":        { ar:"💎 نظام صفاء الذكي", en:"💎 Safaa Smart System" },
  "footer-tagline":      { ar:"منصة احترافية لتصميم المواقع وطلب الخدمات الرقمية بذكاء واحترافية.",
                           en:"A professional platform for web design and smart digital service requests." },
  "footer-links-h":      { ar:"روابط سريعة", en:"Quick Links" },
  "footer-contact-h":    { ar:"تواصل معنا", en:"Contact Us" },
  "footer-legal-h":      { ar:"قانوني", en:"Legal" },
  "footer-copyright":    { ar:"© 2026 نظام صفاء الذكي — جميع الحقوق محفوظة. تصميم وتطوير صفاء.",
                           en:"© 2026 Safaa Smart System — All rights reserved. Designed & developed by Safaa." },

  "auth-h2-register":    { ar:"👤 إنشاء حساب جديد", en:"👤 Create New Account" },
  "auth-h2-login":       { ar:"🔓 تسجيل الدخول", en:"🔓 Login" },
  "auth-tab-register":   { ar:"إنشاء حساب", en:"Register" },
  "auth-tab-login":      { ar:"تسجيل الدخول", en:"Login" },
  "auth-name-lbl":       { ar:"الاسم الكامل", en:"Full Name" },
  "auth-email-lbl":      { ar:"البريد الإلكتروني", en:"Email" },
  "auth-pass-lbl":       { ar:"كلمة المرور", en:"Password" },
  "auth-pass-confirm-lbl":{ ar:"تأكيد كلمة المرور", en:"Confirm Password" },
  "auth-register-btn":   { ar:"إنشاء الحساب ✅", en:"Create Account ✅" },
  "auth-login-btn":      { ar:"دخول 🚀", en:"Login 🚀" },
  "auth-skip":           { ar:"🏠 تخطي والذهاب للرئيسية", en:"🏠 Skip to Home" },

  "chat-title":          { ar:"💬 تواصل مباشر", en:"💬 Live Chat" },
  "chat-placeholder":    { ar:"اكتبي رسالتك...", en:"Type your message..." },
  "chat-empty":          { ar:"ابدئي المحادثة، هنرد عليكِ في أقرب وقت 👋", en:"Start the conversation, we'll reply soon 👋" },

  "nav-logout":          { ar:"تسجيل خروج 🚪", en:"Logout 🚪" },

  "home-why-h":          { ar:"✨ ليه تختارين نظام صفاء؟", en:"✨ Why Choose Safaa System?" },
  "home-why-1-t":        { ar:"⚡ تسليم سريع", en:"⚡ Fast Delivery" },
  "home-why-1-d":        { ar:"نلتزم بالمواعيد المتفق عليها من أول يوم للمشروع وحتى التسليم النهائي.",
                           en:"We stick to agreed timelines from day one of the project until final delivery." },
  "home-why-2-t":        { ar:"🎯 تصميم مخصص", en:"🎯 Custom Design" },
  "home-why-2-d":        { ar:"كل مشروع بنصممه من الصفر حسب هوية عملك، بدون قوالب جاهزة.",
                           en:"Every project is designed from scratch to fit your brand — no generic templates." },
  "home-why-3-t":        { ar:"🔒 أمان وموثوقية", en:"🔒 Security & Reliability" },
  "home-why-3-d":        { ar:"بياناتك وبيانات عملائك محمية بأحدث معايير الحماية والتشفير.",
                           en:"Your data and your clients' data are protected with the latest security & encryption standards." },
  "home-why-4-t":        { ar:"📈 دعم مستمر", en:"📈 Ongoing Support" },
  "home-why-4-d":        { ar:"مانسيبك بعد التسليم، متابعة ودعم فني مستمر لضمان استمرارية النظام.",
                           en:"We don't leave you after delivery — ongoing follow-up & support to keep your system running." },

  "home-testi-h":        { ar:"💬 آراء عملائنا", en:"💬 What Our Clients Say" },
  "home-testi-1-n":      { ar:"محمد أحمد — صاحب متجر إلكتروني", en:"Mohamed Ahmed — Online Store Owner" },
  "home-testi-1-t":      { ar:"تعامل احترافي جدًا والتسليم كان قبل الموعد. النظام سهل وسريع.",
                           en:"Very professional service, delivered ahead of schedule. The system is fast and easy to use." },
  "home-testi-2-n":      { ar:"سارة عبدالله — مديرة مشروع", en:"Sara Abdallah — Project Manager" },
  "home-testi-2-t":      { ar:"التصميم شكله راقي والتواصل كان واضح من أول خطوة للآخرة.",
                           en:"Elegant design and clear communication from the first step to the last." },
  "home-testi-3-n":      { ar:"عمر الطيب — صاحب مشروع صغير", en:"Omar Eltayeb — Small Business Owner" },
  "home-testi-3-t":      { ar:"النظام غيّر طريقة شغلي بالكامل، وفّر عليّ وقت كبير جدًا.",
                           en:"The system completely changed the way I work and saved me a huge amount of time." },

  "home-faq-h":          { ar:"❓ أسئلة شائعة", en:"❓ Frequently Asked Questions" },
  "home-faq-1-q":        { ar:"كم يستغرق تنفيذ المشروع؟", en:"How long does a project take?" },
  "home-faq-1-a":        { ar:"يعتمد على حجم المشروع، غالبًا بين أسبوع لموقع بسيط وحتى شهر لنظام متكامل.",
                           en:"It depends on the project size — usually one week for a simple site up to a month for a full system." },
  "home-faq-2-q":        { ar:"هل يوجد دعم بعد التسليم؟", en:"Is there support after delivery?" },
  "home-faq-2-a":        { ar:"أكيد، بنقدّم باقات صيانة ودعم فني شهري حسب احتياجك.",
                           en:"Of course — we offer monthly maintenance & support packages based on your needs." },
  "home-faq-3-q":        { ar:"كيف أطلب خدمة؟", en:"How do I request a service?" },
  "home-faq-3-a":        { ar:"من صفحة «طلب خدمة»، تعبّي التفاصيل ونتواصل معاكِ خلال ٢٤ ساعة.",
                           en:"Through the \"Request Service\" page — fill in the details and we'll reach out within 24 hours." },
  "home-faq-4-q":        { ar:"هل بياناتي آمنة عند التسجيل؟", en:"Is my data safe when I register?" },
  "home-faq-4-a":        { ar:"نعم، بنستخدم تشفير كلمات المرور وتأكيد عبر رمز يُرسل لبريدك الإلكتروني.",
                           en:"Yes — passwords are encrypted and registration is confirmed via a code sent to your email." },

  "contact-form-h":      { ar:"✉️ ارسلي لنا رسالة", en:"✉️ Send Us a Message" },
  "contact-name-lbl":    { ar:"الاسم", en:"Name" },
  "contact-email-lbl":   { ar:"البريد الإلكتروني", en:"Email" },
  "contact-msg-lbl":     { ar:"رسالتك", en:"Your Message" },
  "contact-send-btn":    { ar:"إرسال الرسالة 📩", en:"Send Message 📩" },

  "footer-privacy":      { ar:"سياسة الخصوصية", en:"Privacy Policy" },
  "footer-terms":        { ar:"شروط الاستخدام", en:"Terms of Use" },
  "footer-stats":        { ar:"الإحصائيات", en:"Statistics" },

  "stats-title":         { ar:"📊 صفحة الإحصائيات", en:"📊 Statistics" },
  "stats-intro":         { ar:"أرقام حقيقية تتحدّث عن نشاط نظام صفاء الذكي.", en:"Real numbers reflecting Safaa Smart System's activity." },
  "stats-projects":      { ar:"مشروع مُنجز", en:"Completed Projects" },
  "stats-clients":       { ar:"عميل", en:"Clients" },
  "stats-success":       { ar:"نسبة النجاح", en:"Success Rate" },

  "intro-eyebrow":       { ar:"SAY HELLO", en:"SAY HELLO" },
  "intro-h2":            { ar:"👋 مرحبًا، أنا صفاء – مطورة مواقع", en:"👋 Hi, I'm Safaa – Web Developer" },
  "intro-p":             { ar:"أصمم وأبني مواقع وأنظمة رقمية احترافية تخدم أصحاب المشاريع من أول فكرة وحتى منتج شغّال فعليًا.",
                           en:"I design and build professional websites and digital systems — from the first idea to a fully working product." },
  "intro-btn-projects":  { ar:"View Projects 🔥", en:"View Projects 🔥" },
  "intro-btn-contact":   { ar:"Contact Me 💬", en:"Contact Me 💬" },

  "stats-chart-visits":  { ar:"📈 الزيارات خلال آخر 7 أيام", en:"📈 Visits over the last 7 days" },
  "stats-chart-summary": { ar:"📊 ملخّص عام", en:"📊 Overview" },

  "track-h":             { ar:"📦 تتبع حالة طلبك", en:"📦 Track Your Order" },
  "track-intro":         { ar:"أدخلي بريدك الإلكتروني اللي استخدمتيه وقت الطلب لمتابعة حالته.",
                           en:"Enter the email you used when placing your request to check its status." },
  "track-email-ph":      { ar:"بريدك الإلكتروني", en:"Your email" },
  "track-btn":           { ar:"تتبع 🔍", en:"Track 🔍" },

  "privacy-h":           { ar:"🔒 سياسة الخصوصية", en:"🔒 Privacy Policy" },
  "terms-h":             { ar:"📜 شروط الاستخدام", en:"📜 Terms of Use" },
};

/* ============================================================
   2) محرك الترجمة
   ============================================================ */
let currentLang = localStorage.getItem("safaaLang") || "ar";

function applyLang(lang){
  currentLang = lang;
  localStorage.setItem("safaaLang", lang);

  const dir = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.dir  = dir;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.dataset.key;
    if (!translations[key]) return;
    const val = translations[key][lang];
    if (val === undefined) return;
    if (el.hasAttribute("placeholder")) {
      el.setAttribute("placeholder", val);
    } else {
      el.innerHTML = val;
    }
  });

  const btn = document.getElementById("langBtn");
  if (btn) btn.textContent = lang === "ar" ? "🌐 English" : "🌐 عربي";
}

function toggleLang(){
  applyLang(currentLang === "ar" ? "en" : "ar");
}

/* ============================================================
   3) الثيم (٥ سمات، منها وضع أبيض) + زر مخفي بالاختصار Alt+T
   ============================================================ */
const themeVariants = [
  { bg:"radial-gradient(circle at 15% 0%,rgba(139,92,246,.18),transparent 45%),radial-gradient(circle at 85% 10%,rgba(20,217,180,.12),transparent 40%),#080A14", light:false },
  { bg:"radial-gradient(circle at 15% 0%,rgba(255,126,95,.18),transparent 45%),radial-gradient(circle at 85% 10%,rgba(254,180,123,.12),transparent 40%),#1a0e0a", light:false },
  { bg:"radial-gradient(circle at 15% 0%,rgba(67,206,162,.18),transparent 45%),radial-gradient(circle at 85% 10%,rgba(24,90,157,.12),transparent 40%),#0a141e", light:false },
  { bg:"radial-gradient(circle at 15% 0%,rgba(142,68,173,.18),transparent 45%),radial-gradient(circle at 85% 10%,rgba(52,152,219,.12),transparent 40%),#0d0a1a", light:false },
  { bg:"", light:true }
];
let themeIndex = parseInt(localStorage.getItem('safaaThemeIndex') || '0', 10) || 0;

function applyThemeByIndex(i){
  const t = themeVariants[i % themeVariants.length];
  document.documentElement.classList.toggle('theme-light', t.light);
  document.body.style.background = t.light ? "" : t.bg;
}

function changeTheme(){
  applyThemeByIndex(themeIndex);
  localStorage.setItem('safaaThemeIndex', String(themeIndex));
  const user = getCurrentUser();
  if (user) {
    fetch('auth.php', { method:'POST', body:new URLSearchParams({ action:'save_theme', theme:String(themeIndex) }) }).catch(()=>{});
  }
  themeIndex = (themeIndex + 1) % themeVariants.length;
}

/* يطبّق آخر ثيم مختار وقت ما تفتح أي صفحة، ويحافظ على ظهور الزر السري لو اتكشف قبل كدا
   ولصاحب الحساب: يجيب تفضيله المحفوظ في الداتا (يشتغل من أي جهاز يدخل بيه) */
async function initTheme(){
  if (localStorage.getItem('safaaTheme') === 'light') document.documentElement.classList.add('theme-light');
  const savedIndex = localStorage.getItem('safaaThemeIndex');
  if (savedIndex !== null) applyThemeByIndex(parseInt(savedIndex, 10) || 0);
  if (localStorage.getItem('safaaThemeRevealed') === '1') {
    document.getElementById('secretBtn')?.classList.add('revealed');
  }
  const user = getCurrentUser();
  if (user) {
    try{
      const res = await fetch('auth.php', { method:'POST', body:new URLSearchParams({ action:'get_theme' }) });
      const data = await res.json();
      if (data.ok && data.theme !== null && data.theme !== undefined && data.theme !== '') {
        const idx = parseInt(data.theme, 10) || 0;
        applyThemeByIndex(idx);
        themeIndex = (idx + 1) % themeVariants.length;
        localStorage.setItem('safaaThemeIndex', String(idx));
      }
    }catch(e){ /* تجاهل */ }
  }
}

/* اختصار سرّي لإظهار/إخفاء زر تغيير الثيم: Alt + T */
document.addEventListener('keydown', (e) => {
  if (e.altKey && e.key.toLowerCase() === 't') {
    const btn = document.getElementById('secretBtn');
    if (!btn) return;
    btn.classList.toggle('revealed');
    const nowRevealed = btn.classList.contains('revealed');
    localStorage.setItem('safaaThemeRevealed', nowRevealed ? '1' : '0');
    if (nowRevealed && localStorage.getItem('safaaThemeFound') !== '1') {
      localStorage.setItem('safaaThemeFound', '1');
      showToast('🎉 لقيتِ الميزة السرية! جرّبي زر تغيير الألوان 🎨');
    }
  }
});

/* ============================================================
   4) تقييم النجوم (فورم الطلب)
   ============================================================ */
function rate(n){
  const ratingField = document.getElementById("rating");
  if (ratingField) ratingField.value = n;
  document.querySelectorAll(".stars span").forEach((s, i) => {
    s.classList.toggle("active", i < n);
  });
}

/* ============================================================
   5) شاشة اللودر
   ============================================================ */
function initLoader(){
  window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (!loader) return;
    setTimeout(() => {
      loader.classList.add('fade-out');
      setTimeout(() => loader.remove(), 700);
    }, 1400);
  });
}

/* ============================================================
   6) شريط تقدّم السكرول + ظهور زر الرجوع لفوق
   ============================================================ */
function initScrollBar(){
  window.addEventListener('scroll', () => {
    const bar = document.getElementById('scrollBar');
    if (bar) {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      bar.style.width = Math.min(pct, 100) + '%';
    }
    const topBtn = document.getElementById('topBtn');
    if (topBtn) topBtn.classList.toggle('visible', window.scrollY > 400);
  });
}

/* ============================================================
   7) الظهور التدريجي عند التمرير
   ============================================================ */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('revealed'), i * 60);
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

function initReveal(){
  document.querySelectorAll('.card, .service, .project, .price-card, .stats-box, .timeline-item, .skill-row, .why-card, .testi-card, .faq-item, .journey-wrap, .tl-step, .vision-card')
    .forEach(el => { el.classList.add('reveal'); revealObs.observe(el); });
}

/* ============================================================
   8) تأثير الآلة الكاتبة
   ============================================================ */
function typeWriter(el, texts, speed = 75, pause = 2200){
  let ti = 0, ci = 0, deleting = false;
  el.style.animation = 'none';
  function tick(){
    const full = texts[ti];
    if (!deleting) {
      el.textContent = full.slice(0, ++ci);
      if (ci === full.length) { deleting = true; setTimeout(tick, pause); return; }
    } else {
      el.textContent = full.slice(0, --ci);
      if (ci === 0) { deleting = false; ti = (ti + 1) % texts.length; }
    }
    setTimeout(tick, deleting ? speed / 2 : speed);
  }
  tick();
}

/* ============================================================
   9) العدادات المتحركة (لو فيه [data-count] بالصفحة)
   ============================================================ */
function countUp(el, target, duration = 2000){
  const suffix = el.dataset.suffix || '';
  let start = null;
  const ease = t => t < .5 ? 2*t*t : -1+(4-2*t)*t;
  function step(ts){
    if (!start) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    el.textContent = Math.floor(ease(p) * target) + suffix;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const countObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      countUp(e.target, parseInt(e.target.dataset.count));
      countObs.unobserve(e.target);
    }
  });
}, { threshold: 0.6 });

function initCounters(){
  document.querySelectorAll('[data-count]').forEach(el => countObs.observe(el));
}

/* ============================================================
   10) أشرطة مهارات الـ CV
   ============================================================ */
const skillObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(bar => {
        setTimeout(() => { bar.style.width = bar.dataset.pct + '%'; }, 200);
      });
      skillObs.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });

function initSkills(){
  const sec = document.getElementById('skills-section');
  if (sec) skillObs.observe(sec);
}

/* ============================================================
   11) فلتر المشاريع
   ============================================================ */
function filterProjects(cat){
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.querySelector(`[data-filter="${cat}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  // أي فلتر غير "الكل" يلغي التقسيم على صفحات ويعرض كل النتائج المطابقة
  document.querySelectorAll('.project.grid-paged-hidden').forEach(p => p.classList.remove('grid-paged-hidden'));
  document.getElementById('projectsLoadMoreWrap')?.setAttribute('hidden', '');

  document.querySelectorAll('.project').forEach(p => {
    const match = cat === 'all' || p.dataset.cat === cat;
    p.style.opacity    = match ? '1'    : '0';
    p.style.transform  = match ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)';
    p.style.pointerEvents = match ? 'auto' : 'none';
  });
}

/* ============================================================
   11-ب) تقسيم البطاقات على صفحات (عرض المزيد) — للمشاريع والخدمات
   ============================================================ */
function initGridPagination(cardSelector, pageSize, wrapId, btnLabel){
  const cards = Array.from(document.querySelectorAll(cardSelector));
  if (cards.length <= pageSize) return;

  cards.slice(pageSize).forEach(c => c.classList.add('grid-paged-hidden'));

  const grid = cards[0].closest('.grid');
  if (!grid) return;

  const wrap = document.createElement('div');
  wrap.className = 'load-more-wrap';
  wrap.id = wrapId;
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'load-more-btn';
  btn.textContent = btnLabel;
  btn.onclick = () => {
    cards.forEach(c => c.classList.remove('grid-paged-hidden'));
    wrap.setAttribute('hidden', '');
  };
  wrap.appendChild(btn);
  grid.insertAdjacentElement('afterend', wrap);
}

/* ============================================================
   12) إشعارات Toast
   ============================================================ */
function showToast(msg, type = 'success'){
  let wrap = document.getElementById('toast-wrap');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.id = 'toast-wrap';
    document.body.appendChild(wrap);
  }
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  t.innerHTML = msg;
  wrap.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.remove(), 450);
  }, 3800);
}

/* ============================================================
   13) إرسال فورم طلب الخدمة بالـ AJAX
   ============================================================ */
function initForm(){
  const form = document.querySelector('form[action="save.php"]');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('[data-key="form-submit"], button[type="submit"]');
    const orig = btn.innerHTML;
    btn.innerHTML = '<span class="spinner"></span> جارٍ الإرسال...';
    btn.disabled = true;
    try {
      const res  = await fetch('save.php', { method: 'POST', body: new FormData(form) });
      const text = await res.text();
      if (text.includes('✅')) {
        showToast('✅ تم إرسال الطلب بنجاح! سيتم التواصل معك قريباً.');
        form.reset();
        document.querySelectorAll('.stars span').forEach(s => s.classList.remove('active'));
      } else {
        showToast(text || '❌ حدث خطأ', 'error');
      }
    } catch {
      showToast('❌ تعذّر الإرسال، تحقق من الاتصال', 'error');
    } finally {
      btn.innerHTML = orig;
      btn.disabled  = false;
    }
  });
}

/* ============================================================
   14) خلفية الجسيمات المتحركة (Canvas)
   ============================================================ */
function initParticles(){
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, dots = [];

  function resize(){
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < 75; i++) {
    dots.push({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - .5) * .35,
      vy: (Math.random() - .5) * .35,
      a: Math.random() * .7 + .2,
    });
  }

  function draw(){
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < dots.length; i++) {
      const d = dots[i];
      d.x += d.vx; d.y += d.vy;
      if (d.x < 0) d.x = W; if (d.x > W) d.x = 0;
      if (d.y < 0) d.y = H; if (d.y > H) d.y = 0;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(20,217,180,${d.a * .55})`;
      ctx.fill();
      for (let j = i + 1; j < dots.length; j++) {
        const dx = d.x - dots[j].x, dy = d.y - dots[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(d.x, d.y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.strokeStyle = `rgba(20,217,180,${(1 - dist/110) * .12})`;
          ctx.lineWidth = .5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

/* ============================================================
   15) توهج مؤشر الفأرة
   ============================================================ */
function initCursor(){
  const glow = document.createElement('div');
  glow.id = 'cursorGlow';
  document.body.appendChild(glow);
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, .service, .project, .price-card').forEach(el => {
    el.addEventListener('mouseenter', () => glow.classList.add('big'));
    el.addEventListener('mouseleave', () => glow.classList.remove('big'));
  });
}

/* ============================================================
   16) الرجوع لأعلى
   ============================================================ */
function scrollToTop(){ window.scrollTo({ top: 0, behavior: 'smooth' }); }

/* ============================================================
   16-ب) قائمة الهمبرقر (نفتح/نقفل روابط التنقل)
   ============================================================ */
function toggleNav(){ /* القائمة أصبحت ثابتة وظاهرة دايمًا - ما محتاجين نخفيها */ }

function initNavMenu(){
  const links = document.getElementById('navLinks');
  if (!links) return;

  // إضافة زر الوضع الليلي/النهاري وزر البحث السريع جنب زر اللغة (بدون تكرارهم في كل صفحة HTML)
  const langBtn = document.getElementById('langBtn');
  if (langBtn && !document.getElementById('themeToggleBtn')){
    const themeBtn = document.createElement('button');
    themeBtn.id = 'themeToggleBtn';
    themeBtn.className = 'icon-btn';
    themeBtn.title = 'تبديل الوضع الليلي/النهاري';
    themeBtn.innerHTML = document.documentElement.classList.contains('theme-light') ? '☀️' : '🌙';
    themeBtn.onclick = toggleTheme;

    const searchBtn = document.createElement('button');
    searchBtn.id = 'searchTriggerBtn';
    searchBtn.className = 'icon-btn';
    searchBtn.title = 'بحث سريع (Ctrl+K)';
    searchBtn.innerHTML = '🔍';
    searchBtn.onclick = openSearch;

    langBtn.insertAdjacentElement('afterend', searchBtn);
    langBtn.insertAdjacentElement('afterend', themeBtn);
  }
}

/* ============================================================
   16-د) الوضع الليلي (ذهبي/داكن) والوضع الأبيض
   ============================================================ */
function toggleTheme(){
  const isLight = document.documentElement.classList.toggle('theme-light');
  localStorage.setItem('safaaTheme', isLight ? 'light' : 'dark');
  const btn = document.getElementById('themeToggleBtn');
  if (btn) btn.innerHTML = isLight ? '☀️' : '🌙';
}

/* ============================================================
   16-ه) شريط البحث السريع (Ctrl+K)
   ============================================================ */
const SEARCH_PAGES = [
  { label:'الرئيسية',        url:'index.html',    icon:'🏠' },
  { label:'الخدمات',          url:'services.html', icon:'💼' },
  { label:'المشاريع',         url:'projects.html', icon:'🔥' },
  { label:'CV',                url:'cv.html',        icon:'📄' },
  { label:'طلب خدمة',        url:'form.html',      icon:'📝' },
  { label:'تواصل معنا',       url:'contact.html',   icon:'📞' },
  { label:'حسابي',            url:'auth.html',      icon:'🔐' },
  { label:'الإحصائيات',       url:'stats.html',     icon:'📊' },
  { label:'سياسة الخصوصية',   url:'privacy.html',   icon:'🔒' },
  { label:'شروط الاستخدام',   url:'terms.html',     icon:'📋' },
];

function initSearchModal(){
  if (document.getElementById('searchOverlay')) return;
  const overlay = document.createElement('div');
  overlay.id = 'searchOverlay';
  overlay.innerHTML = `
    <div class="search-box">
      <input id="searchInput" placeholder="ابحثي عن صفحة... (مثال: خدمات، أسعار، تواصل)" autocomplete="off">
      <ul id="searchResults"></ul>
      <div class="search-hint">اضغطي <kbd>Ctrl</kbd> + <kbd>K</kbd> لفتح البحث في أي وقت — <kbd>Esc</kbd> للإغلاق</div>
    </div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeSearch(); });
  document.getElementById('searchInput').addEventListener('input', (e) => renderSearchResults(e.target.value));

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k'){
      e.preventDefault();
      overlay.classList.contains('open') ? closeSearch() : openSearch();
    }
    if (e.key === 'Escape') closeSearch();
  });
}

function openSearch(){
  const overlay = document.getElementById('searchOverlay');
  overlay.classList.add('open');
  renderSearchResults('');
  setTimeout(() => document.getElementById('searchInput')?.focus(), 50);
}
function closeSearch(){
  document.getElementById('searchOverlay')?.classList.remove('open');
}
function renderSearchResults(query){
  const list = document.getElementById('searchResults');
  const q = query.trim().toLowerCase();
  const matches = SEARCH_PAGES.filter(p => !q || p.label.toLowerCase().includes(q) || p.url.includes(q));
  list.innerHTML = matches.map(p => `<li><a href="${p.url}">${p.icon} ${p.label}</a></li>`).join('') ||
                    '<li style="padding:10px 12px;color:var(--muted);font-size:13px;">لا توجد نتائج</li>';
}

/* ============================================================
   16-ه‍-٢) إظهار/إخفاء كلمة المرور (صفحة تسجيل الدخول/إنشاء حساب)
   ============================================================ */
function initPassToggles(){
  document.querySelectorAll('input[type="password"]').forEach(inp => {
    if (inp.closest('.pass-field')) return;
    const field = document.createElement('div');
    field.className = 'pass-field';
    inp.parentNode.insertBefore(field, inp);
    field.appendChild(inp);

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'pass-toggle';
    btn.innerHTML = '👁️';
    btn.setAttribute('aria-label', 'إظهار كلمة المرور');
    btn.onclick = () => {
      const show = inp.type === 'password';
      inp.type = show ? 'text' : 'password';
      btn.innerHTML = show ? '🙈' : '👁️';
    };
    field.appendChild(btn);
  });
}

/* ============================================================
   16-و) اهتزاز حقول الإيميل عند إدخال خاطئ
   ============================================================ */
function initEmailShake(){
  document.querySelectorAll('input[type="email"]').forEach(inp => {
    const shake = () => {
      inp.classList.add('input-error');
      setTimeout(() => inp.classList.remove('input-error'), 500);
    };
    inp.addEventListener('blur', () => { if (inp.value && !inp.checkValidity()) shake(); });
    inp.addEventListener('invalid', (e) => { e.preventDefault(); shake(); });
  });
}

/* ============================================================
   16-ز) تسجيل الـ Service Worker (يخلي الموقع قابل للتثبيت كتطبيق)
   ============================================================ */
function initPWA(){
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

/* ============================================================
   16-ح) زر تثبيت واضح للتطبيق (بدل انتظار المتصفح)
   ============================================================ */
let deferredInstallPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  document.getElementById('installBtn')?.classList.add('ready');
});
window.addEventListener('appinstalled', () => {
  document.getElementById('installBtn')?.remove();
});

function initInstallButton(){
  if (document.getElementById('installBtn')) return;
  const btn = document.createElement('button');
  btn.id = 'installBtn';
  btn.title = 'ثبّتي التطبيق على جهازك';
  btn.innerHTML = '📲';
  btn.onclick = async () => {
    if (deferredInstallPrompt){
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
    } else {
      showToast('📲 من متصفحك: افتحي القائمة ⋮ واختاري "إضافة إلى الشاشة الرئيسية"');
    }
  };
  document.body.appendChild(btn);
}

/* ============================================================
   16-ط) وضع العرض التقديمي — يعرض المشروع كأنو فيلم قصير
   ============================================================ */
const PRESENTATION_SLIDES = [
  { icon:'💎', title:'نظام صفاء الذكي', text:'منصة احترافية لتصميم المواقع وطلب الخدمات الرقمية بذكاء واحترافية' },
  { icon:'👤', title:'رحلتي الإبداعية', text:'من أول سطر كود، وحتى بناء أنظمة رقمية متكاملة تخدم أصحاب المشاريع والشركات' },
  { icon:'🧠', title:'رؤية المشروع', text:'منصة ذكية توحّد الطلب والمتابعة والتواصل والتسليم في مكان واحد بدون تعقيد' },
  { icon:'💼', title:'12 خدمة احترافية', text:'من تصميم المواقع والتطبيقات، وصولاً للذكاء الاصطناعي والأمن السيبراني' },
  { icon:'🔥', title:'12 مشروع فعلي', text:'مواقع، أنظمة إدارة، وتطبيقات — بمعرض مصوّر وتصنيف حسب النوع' },
  { icon:'🔐', title:'حسابك بأمان', text:'تسجيل دخول بسيط وسريع بدون تعقيد، وحماية كاملة لبياناتك' },
  { icon:'📝', title:'اطلبي خدمتك بخطوة واحدة', text:'فورم بسيط، ونتواصل معاكِ خلال 24 ساعة' },
  { icon:'🚀', title:'جاهزين نبدأ؟', text:'تواصلي معنا الآن ونحوّل فكرتك لواقع رقمي' },
];
let presIndex = 0, presTimer = null, presPaused = false;

function initPresentTrigger(){
  if (document.getElementById('presentBtn')) return;
  const btn = document.createElement('button');
  btn.id = 'presentBtn';
  btn.title = 'عرض تقديمي';
  btn.innerHTML = '🎬';
  btn.onclick = openPresentation;
  document.body.appendChild(btn);
}

function buildPresentationDOM(){
  if (document.getElementById('presentOverlay')) return;
  const overlay = document.createElement('div');
  overlay.id = 'presentOverlay';
  overlay.innerHTML = `
    <div class="pres-progress" id="presProgress"></div>
    <button class="pres-close" id="presClose">✕</button>
    <div class="pres-slide" id="presSlide"></div>
    <div class="pres-controls">
      <button class="pres-btn" id="presNext">‹</button>
      <button class="pres-btn" id="presPlay">⏸️</button>
      <button class="pres-btn" id="presPrev">›</button>
    </div>
    <div class="pres-counter" id="presCounter"></div>`;
  document.body.appendChild(overlay);

  document.getElementById('presClose').onclick = closePresentation;
  document.getElementById('presNext').onclick = () => goToSlide(presIndex + 1);
  document.getElementById('presPrev').onclick = () => goToSlide(presIndex - 1);
  document.getElementById('presPlay').onclick = togglePresPlay;
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closePresentation(); });
  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape') closePresentation();
    if (e.key === 'ArrowLeft')  goToSlide(presIndex + 1);
    if (e.key === 'ArrowRight') goToSlide(presIndex - 1);
  });
}

function openPresentation(){
  buildPresentationDOM();
  presIndex = 0; presPaused = false;
  document.getElementById('presPlay').textContent = '⏸️';
  document.getElementById('presentOverlay').classList.add('open');
  renderPresSlide();
  scheduleNextSlide();
}
function closePresentation(){
  document.getElementById('presentOverlay')?.classList.remove('open');
  clearInterval(presTimer);
}
function renderPresSlide(){
  const slideEl = document.getElementById('presSlide');
  const s = PRESENTATION_SLIDES[presIndex];
  slideEl.classList.add('fading');
  setTimeout(() => {
    slideEl.innerHTML = `<span class="pres-icon">${s.icon}</span><h3 class="pres-title">${s.title}</h3><p class="pres-text">${s.text}</p>`;
    slideEl.classList.remove('fading');
  }, 220);
  document.getElementById('presCounter').textContent = `${presIndex + 1} / ${PRESENTATION_SLIDES.length}`;
  document.getElementById('presProgress').style.width = `${(presIndex / (PRESENTATION_SLIDES.length - 1)) * 100}%`;
}
function goToSlide(i){
  presIndex = (i + PRESENTATION_SLIDES.length) % PRESENTATION_SLIDES.length;
  renderPresSlide();
  scheduleNextSlide();
}
function scheduleNextSlide(){
  clearInterval(presTimer);
  if (presPaused) return;
  presTimer = setInterval(() => goToSlide(presIndex + 1), 4500);
}
function togglePresPlay(){
  presPaused = !presPaused;
  document.getElementById('presPlay').textContent = presPaused ? '▶️' : '⏸️';
  scheduleNextSlide();
}

/* ============================================================
   16-ج) بديل تلقائي لأي صورة ما بتتحمّل (رابط ميت / بدون إنترنت)
   ============================================================ */
function initImgFallback(){
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function onImgError(){
      if (this.dataset.fallbackApplied) return;
      this.dataset.fallbackApplied = '1';
      this.removeEventListener('error', onImgError);
      this.style.background = 'linear-gradient(135deg, rgba(20,217,180,0.18), rgba(139,92,246,0.18))';
      this.style.objectFit = 'cover';
      this.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">' +
        '<rect width="100%" height="100%" fill="#0d1424"/>' +
        '<text x="50%" y="50%" font-size="60" text-anchor="middle" dominant-baseline="middle">💎</text>' +
        '</svg>'
      );
    });
  });
}

/* ============================================================
   17) إنشاء حساب / تسجيل دخول (OTP)
   ============================================================ */
function switchAuthTab(tab){
  const tabR = document.getElementById('tabRegister');
  const tabL = document.getElementById('tabLogin');
  if (!tabR || !tabL) return;
  tabR.classList.toggle('active', tab==='register');
  tabL.classList.toggle('active', tab==='login');
  document.getElementById('registerStep1')?.classList.toggle('active', tab==='register');
  document.getElementById('loginStep')?.classList.toggle('active', tab==='login');
}

async function doRegister(e){
  e.preventDefault();
  const name    = document.getElementById('regName').value.trim();
  const email   = document.getElementById('regEmail').value.trim();
  const pass    = document.getElementById('regPass').value;
  const confirm = document.getElementById('regPassConfirm').value;
  const err     = document.getElementById('regError');
  err.classList.remove('show');

  if(pass !== confirm){ err.textContent='كلمتا المرور غير متطابقتين'; err.classList.add('show'); return false; }

  try{
    const res = await fetch('auth.php', {
      method:'POST',
      body:new URLSearchParams({ action:'register', name, email, password:pass, password_confirm:confirm })
    });
    const data = await res.json();
    if(!data.ok){ err.textContent = data.msg; err.classList.add('show'); return false; }
    localStorage.setItem('safaaUser', JSON.stringify({ name: data.name, email }));
    localStorage.setItem('safaaVisited', '1');
    showToast('✅ تم إنشاء الحساب بنجاح! أهلاً بيك ' + data.name);
    setTimeout(()=> location.href = 'index.html', 1200);
  }catch{
    err.textContent = 'تعذّر الاتصال بالسيرفر'; err.classList.add('show');
  }
  return false;
}

async function doLogin(e){
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const pass  = document.getElementById('loginPass').value;
  const err   = document.getElementById('loginError');
  err.classList.remove('show');

  try{
    const res = await fetch('auth.php', {
      method:'POST',
      body:new URLSearchParams({ action:'login', email, password:pass })
    });
    const data = await res.json();
    if(!data.ok){ err.textContent = data.msg; err.classList.add('show'); return false; }
    localStorage.setItem('safaaUser', JSON.stringify({ name: data.name, email }));
    localStorage.setItem('safaaVisited', '1');
    showToast('👋 أهلاً بيك، ' + data.name);
    setTimeout(()=> location.href = 'index.html', 1200);
  }catch{
    err.textContent = 'تعذّر الاتصال بالسيرفر'; err.classList.add('show');
  }
  return false;
}

/* ============================================================
   17-ب) حالة تسجيل الدخول في الواجهة (رابط الحساب في الـ nav + خروج)
   ============================================================ */
function getCurrentUser(){
  try{ return JSON.parse(localStorage.getItem('safaaUser') || 'null'); }
  catch{ return null; }
}

async function logoutUser(){
  try{ await fetch('auth.php', { method:'POST', body:new URLSearchParams({ action:'logout' }) }); }catch{}
  localStorage.removeItem('safaaUser');
  showToast('👋 تم تسجيل الخروج');
  setTimeout(()=> location.href = 'index.html', 800);
}

function updateAuthNav(){
  const user = getCurrentUser();
  const nav = document.querySelector('.nav');
  const link = document.querySelector('.nav a[href="auth.html"]');
  if (!link || !user || !nav) return;
  link.textContent = '👤 ' + user.name;
  link.removeAttribute('data-key');
  link.setAttribute('href', '#');
  link.addEventListener('click', (e) => { e.preventDefault(); logoutUser(); });
  link.title = translations['nav-logout'][currentLang];

  if (!document.getElementById('notifBell')) {
    const bell = document.createElement('button');
    bell.id = 'notifBell';
    bell.className = 'notif-bell';
    bell.type = 'button';
    bell.title = currentLang === 'ar' ? 'إشعاراتي' : 'My notifications';
    bell.textContent = '🔔';
    bell.addEventListener('click', () => {
      const msg = currentLang === 'ar'
        ? '🔔 هنا تلقي إشعارات قبول طلبك وردود الشات المباشر'
        : '🔔 You will find request-approval and live-chat reply notifications here';
      showToast(msg);
    });
    link.insertAdjacentElement('afterend', bell);
    refreshNotifBell();
  }
}

/* لو زائر جديد (أول مرة وما سجّل دخول)، نوديه لصفحة التسجيل قبل الرئيسية */
function firstVisitGate(){
  const path = location.pathname;
  const onIndex = path.endsWith('/index.html') || path === '/' || path.endsWith('/');
  if (!onIndex) return;
  const visited = localStorage.getItem('safaaVisited');
  const user = getCurrentUser();
  if (!visited && !user) {
    localStorage.setItem('safaaVisited', '1');
    location.href = 'auth.html?welcome=1';
  }
}

/* رسالة ترحيب لو الزائر اتوجّه تلقائيًا لصفحة التسجيل كأول زيارة */
function showWelcomeGateMessage(){
  if (new URLSearchParams(location.search).get('welcome') === '1') {
    setTimeout(() => showToast('👋 أهلاً بيك أول مرة! سجّلي حساب أو سجّلي دخولك، أو اضغطي «تخطي» للرئيسية مباشرة'), 600);
  }
}

/* ============================================================
   18) الشات الحي
   ============================================================ */
function formatChatTime(dateStr){
  if (!dateStr) return '';
  const d = new Date(dateStr.replace(' ', 'T'));
  if (isNaN(d.getTime())) return '';
  return d.toLocaleTimeString(currentLang === 'ar' ? 'ar-EG' : 'en-US', { hour:'2-digit', minute:'2-digit' });
}

function getChatSession(){
  let sid = localStorage.getItem('safaaChatSid');
  if (!sid) { sid = 'c_' + Date.now() + '_' + Math.random().toString(36).slice(2); localStorage.setItem('safaaChatSid', sid); }
  return sid;
}

function toggleChat(){
  const panel = document.getElementById('chatPanel');
  if (!panel) return;
  panel.classList.toggle('open');
  if (panel.classList.contains('open')) loadChat();
}

async function loadChat(){
  const sid = getChatSession();
  const body = document.getElementById('chatBody');
  if (!body) return;
  try{
    const res = await fetch('chat.php?action=fetch&sid=' + encodeURIComponent(sid));
    const data = await res.json();
    body.innerHTML = '';
    if (!data.messages || data.messages.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'chat-empty';
      empty.setAttribute('data-key', 'chat-empty');
      empty.textContent = translations['chat-empty'][currentLang];
      body.appendChild(empty);
      return;
    }
    data.messages.forEach(m => {
      const isAdmin = m.is_admin_reply == 1;
      const row = document.createElement('div');
      row.className = 'chat-msg-row ' + (isAdmin ? 'admin' : 'me');

      const avatar = document.createElement('div');
      avatar.className = 'chat-avatar';
      avatar.textContent = isAdmin ? '💎' : '🙂';

      const col = document.createElement('div');
      col.className = 'chat-msg-col';

      const bubble = document.createElement('div');
      bubble.className = 'chat-msg ' + (isAdmin ? 'admin' : 'me');
      bubble.textContent = m.message;

      const time = document.createElement('span');
      time.className = 'chat-time';
      time.textContent = formatChatTime(m.created_at);

      col.appendChild(bubble);
      col.appendChild(time);
      row.appendChild(avatar);
      row.appendChild(col);
      body.appendChild(row);
    });
    body.scrollTop = body.scrollHeight;
  }catch(e){ /* السيرفر مش متاح الآن — تجاهل بصمت */ }
}

async function sendChatMsg(){
  const input = document.getElementById('chatInput');
  if (!input) return;
  const msg = input.value.trim();
  if (!msg) return;
  input.value = '';
  try{
    await fetch('chat.php', {
      method:'POST',
      body:new URLSearchParams({ action:'send', sid:getChatSession(), message:msg })
    });
  }catch(e){ /* تجاهل */ }
  loadChat();
}

/* ============================================================
   20) تتبّع الزيارات (لوحة الإحصائيات) — نبضة صامتة بدون تأثير على الأداء
   ============================================================ */
function trackPageView(){
  try{
    const page = location.pathname.split('/').pop() || 'index.html';
    fetch('track.php', { method:'POST', body:new URLSearchParams({ page, sid:getChatSession() }) }).catch(()=>{});
  }catch(e){ /* تجاهل */ }
}

/* ============================================================
   21) نموذج تواصل معنا (contact.html)
   ============================================================ */
async function sendContactMsg(e){
  e.preventDefault();
  const name  = document.getElementById('cName')?.value.trim();
  const email = document.getElementById('cEmail')?.value.trim();
  const msg   = document.getElementById('cMessage')?.value.trim();
  const err   = document.getElementById('contactError');
  if (err) err.classList.remove('show');
  try{
    const res = await fetch('message.php', { method:'POST', body:new URLSearchParams({ name, email, message: msg }) });
    const data = await res.json();
    if (data.ok) {
      showToast(data.msg || '✅ تم الإرسال بنجاح');
      document.getElementById('contactForm')?.reset();
    } else if (err) {
      err.textContent = data.msg || 'حدث خطأ'; err.classList.add('show');
    }
  }catch(e2){
    if (err) { err.textContent = 'تعذّر الاتصال بالسيرفر'; err.classList.add('show'); }
  }
  return false;
}

/* ============================================================
   22) تتبع حالة الطلب (يُستخدم في stats.html)
   ============================================================ */
const statusLabel = {
  new:         { ar:'🆕 جديد',        en:'🆕 New' },
  in_progress: { ar:'⏳ قيد التنفيذ',  en:'⏳ In Progress' },
  done:        { ar:'✅ تم التسليم',   en:'✅ Delivered' },
  cancelled:   { ar:'❌ ملغي',        en:'❌ Cancelled' },
};

async function trackMyOrder(e){
  e.preventDefault();
  const email = document.getElementById('trackEmail')?.value.trim();
  const box   = document.getElementById('orderResults');
  if (!box) return false;
  box.innerHTML = '<p class="muted-note">⏳ جارِ البحث...</p>';
  try{
    const res  = await fetch('notify.php?action=orders&email=' + encodeURIComponent(email));
    const data = await res.json();
    if (!data.ok || !data.orders || data.orders.length === 0) {
      box.innerHTML = '<p class="muted-note">لا توجد طلبات مرتبطة بهذا البريد.</p>';
      return false;
    }
    box.innerHTML = data.orders.map(o => `
      <div class="order-row">
        <span class="order-service">${o.service}${o.package ? ' — ' + o.package : ''}</span>
        <span class="order-status status-${o.status}">${statusLabel[o.status]?.[currentLang] || o.status}</span>
      </div>`).join('');
  }catch(e2){
    box.innerHTML = '<p class="muted-note">تعذّر الاتصال بالسيرفر.</p>';
  }
  return false;
}

/* ============================================================
   22-ب) الرسوم البيانية (صفحة الإحصائيات) — Chart.js
   ============================================================ */
async function initStatsCharts(){
  const lineCanvas = document.getElementById('visitsChart');
  const barCanvas  = document.getElementById('summaryChart');
  if (!lineCanvas && !barCanvas) return;
  if (typeof Chart === 'undefined') return;

  let data;
  try{
    const res = await fetch('notify.php?action=chart');
    data = await res.json();
    if (!data.ok) return;
  }catch(e){ return; }

  const gridColor = getComputedStyle(document.documentElement).getPropertyValue('--line').trim() || '#2A2E45';
  const textColor = getComputedStyle(document.documentElement).getPropertyValue('--muted').trim() || '#9BA1BD';
  Chart.defaults.color = textColor;
  Chart.defaults.font.family = "'Tajawal', sans-serif";

  if (lineCanvas) {
    new Chart(lineCanvas, {
      type: 'line',
      data: {
        labels: data.days.map(d => d.date),
        datasets: [{
          label: currentLang === 'ar' ? 'الزيارات' : 'Visits',
          data: data.days.map(d => d.visits),
          borderColor: '#14D9B4',
          backgroundColor: 'rgba(20,217,180,0.15)',
          tension: 0.35, fill: true, pointBackgroundColor: '#8B5CF6', pointRadius: 4,
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: gridColor } },
          y: { beginAtZero: true, grid: { color: gridColor }, ticks: { precision: 0 } }
        }
      }
    });
  }

  if (barCanvas) {
    new Chart(barCanvas, {
      type: 'bar',
      data: {
        labels: currentLang === 'ar' ? ['الزوار', 'الرسائل', 'المستخدمين'] : ['Visitors', 'Messages', 'Users'],
        datasets: [{
          data: [data.visits, data.messages, data.users],
          backgroundColor: ['#14D9B4', '#8B5CF6', '#E4B463'],
          borderRadius: 8,
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false } },
          y: { beginAtZero: true, grid: { color: gridColor }, ticks: { precision: 0 } }
        }
      }
    });
  }
}

/* ============================================================
   23) جرس الإشعارات (لصاحب الحساب المسجّل دخول فقط)
   ============================================================ */
async function refreshNotifBell(){
  const user = getCurrentUser();
  const bell = document.getElementById('notifBell');
  if (!user || !bell) return;
  let count = 0;
  try{
    const chatRes  = await fetch('notify.php?sid=' + encodeURIComponent(getChatSession()));
    const chatData = await chatRes.json();
    count += chatData.unread || 0;

    const ordRes  = await fetch('notify.php?action=orders&email=' + encodeURIComponent(user.email));
    const ordData = await ordRes.json();
    if (ordData.ok && ordData.orders) {
      const seen = JSON.parse(localStorage.getItem('safaaSeenOrders') || '{}');
      const nowMap = {};
      ordData.orders.forEach(o => {
        nowMap[o.id] = o.status;
        if (seen[o.id] && seen[o.id] !== o.status && o.status !== 'new') count++;
        else if (!(o.id in seen) && o.status !== 'new') count++;
      });
      localStorage.setItem('safaaSeenOrders', JSON.stringify(nowMap));
    }
  }catch(e){ /* تجاهل */ }
  bell.querySelector('.notif-count')?.remove();
  if (count > 0) {
    const badge = document.createElement('span');
    badge.className = 'notif-count';
    badge.textContent = count > 9 ? '9+' : count;
    bell.appendChild(badge);
  }
}

setInterval(refreshNotifBell, 20000);
setInterval(() => {
  if (document.getElementById('chatPanel')?.classList.contains('open')) loadChat();
}, 5000);

/* ============================================================
   19) الإقلاع — كل حاجة تتشغل هنا مرة واحدة بس
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  firstVisitGate();
  applyLang(currentLang);
  initTheme();
  updateAuthNav();
  initLoader();
  initParticles();
  initReveal();
  initCounters();
  initSkills();
  initForm();
  initCursor();
  initScrollBar();
  initNavMenu();
  initImgFallback();
  initSearchModal();
  initEmailShake();
  initPWA();
  initInstallButton();
  initPresentTrigger();
  showWelcomeGateMessage();
  trackPageView();
  initPassToggles();
  initStatsCharts();
  initGridPagination('.project', 6, 'projectsLoadMoreWrap', currentLang === 'ar' ? 'عرض المزيد من المشاريع ⬇️' : 'Load more projects ⬇️');
  initGridPagination('.service', 6, 'servicesLoadMoreWrap', currentLang === 'ar' ? 'عرض المزيد من الخدمات ⬇️' : 'Load more services ⬇️');

  const animEl = document.querySelector('.animated-text');
  if (animEl) {
    const texts = currentLang === 'ar'
      ? ['👋 أهلاً بيك في نظام صفاء الذكي', '🚀 حلول رقمية احترافية', '💎 جودة عالية وأسعار مناسبة', '🧠 أنظمة ذكية تناسب طموحك']
      : ['👋 Welcome to Safaa Smart System', '🚀 Professional Digital Solutions', '💎 Top Quality, Competitive Prices', '🧠 Smart Systems for Your Ambitions'];
    typeWriter(animEl, texts);
  }

  document.querySelectorAll('.nav a').forEach(a => {
    a.addEventListener('mouseenter', () => a.style.letterSpacing = '.5px');
    a.addEventListener('mouseleave', () => a.style.letterSpacing = '');
  });
});
