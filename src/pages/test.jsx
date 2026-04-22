import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const companiesLogo = [
    {
      logo: (
        <svg className="h-7 w-auto max-w-xs" width="128" height="42" viewBox="0 0 128 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H27.7325V14H13.8663L0 0ZM0 14H13.8663L27.7325 28H0V14ZM0 28H13.8663V42L0 28Z" fill="#90A1B9"/>
          <path d="M43.3801 11.0446H54.5901V14.6412H47.6231V19.6392H54.5901V23.1564H47.6231V29.5559H43.3801V11.0446ZM56.8949 16.8094H60.9025V19.4804C61.1118 18.5625 61.5401 17.8579 62.1859 17.3647C62.8482 16.8529 63.5835 16.598 64.386 16.598C64.8054 16.598 65.1549 16.6339 65.4334 16.7037V20.4591C65.0337 20.4104 64.6315 20.3842 64.2287 20.3797C63.1286 20.3797 62.3001 20.7403 61.7405 21.4634C61.1829 22.1687 60.9025 23.2262 60.9025 24.6373V29.5559H56.8968V16.8094H56.8949Z" fill="#90A1B9"/>
        </svg>
      ),
    },
    {
      logo: (
        <svg className="h-7 w-auto max-w-xs" width="143" height="32" viewBox="0 0 143 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M77.6225 10.3042H80.8137V19.1813C80.8137 23.6873 78.3304 26.2717 74.0042 26.2717C69.723 26.2717 67.2621 23.7322 67.2621 19.3049V10.3154H70.4534V19.2038C70.4534 21.8332 71.7456 23.2378 74.0492 23.2378C76.3527 23.2378 77.6225 21.8669 77.6225 19.3161V10.3042Z" fill="#90A1B9"/>
        </svg>
      ),
    },
    {
      logo: (
        <svg className="h-7 w-auto max-w-xs" width="131" height="28" viewBox="0 0 131 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.2707 0H0V13.3H13.2707V0Z" fill="#90A1B9"/>
          <path d="M27.9383 0H14.6676V13.3H27.9383V0Z" fill="#90A1B9"/>
          <path d="M13.2707 14.7H0V28H13.2707V14.7Z" fill="#90A1B9"/>
          <path d="M27.9383 14.7H14.6676V28H27.9383V14.7Z" fill="#90A1B9"/>
        </svg>
      ),
    },
  ];

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M21.17 8H12V2.83"/>
        </svg>
      ),
      title: "AI-Powered Content",
      desc: "Our AI writes compelling bullet points tailored to your experience and target role — no more staring at a blank page.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
        </svg>
      ),
      title: "Beautiful Templates",
      desc: "Choose from dozens of recruiter-approved templates designed to pass ATS systems and impress hiring managers.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
        </svg>
      ),
      title: "One-Click Editing",
      desc: "Tweak every section instantly with our real-time editor. Drag, drop and customise to match your personal brand.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
      ),
      title: "Instant PDF Export",
      desc: "Download a pixel-perfect PDF in seconds. Share a link or print directly — your resume always looks flawless.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      ),
      title: "ATS Optimisation",
      desc: "Paste a job description and we instantly highlight missing keywords and suggest improvements to boost your match score.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: "Multiple Versions",
      desc: "Create tailored versions of your resume for different roles and industries, all stored safely in your dashboard.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah K.",
      role: "Software Engineer at Google",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
      text: "I spent weeks trying to write my resume. With TRI, I had a polished, ATS-optimised resume in under 20 minutes. Got three callbacks the following week!",
      stars: 5,
    },
    {
      name: "James T.",
      role: "Product Manager at Stripe",
      avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      text: "The AI content suggestions are genuinely impressive. It rephrased my bullet points to sound far more impactful without losing my voice.",
      stars: 5,
    },
    {
      name: "Priya M.",
      role: "UX Designer at Figma",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      text: "Beautiful templates and effortless customisation. My resume finally looks as good as the work in my portfolio. Worth every penny.",
      stars: 5,
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* ───────── Navbar ───────── */}
      <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-30 text-sm">
        <a href="#">
          <img src="./logo.svg" alt="Logo" className="h-16 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
          <a href="#" className="hover:text-green-600 transition">Home</a>
          <a href="#features" className="hover:text-green-600 transition">Features</a>
          <a href="#testimonials" className="hover:text-green-600 transition">Testimonials</a>
          <a href="#cta" className="hover:text-green-600 transition">Contact</a>
        </div>

        <div className="flex gap-2">
          <Link
            to="/app?state=register"
            className="hidden md:block px-6 py-2 bg-green-500 hover:bg-green-700 active:scale-95 transition-all rounded-full text-white"
          >
            Get started
          </Link>
          <Link
            to="/app?state=login"
            className="hidden md:block px-6 py-2 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900"
          >
            Login
          </Link>
        </div>

        <button onClick={() => setMenuOpen(true)} className="md:hidden active:scale-90 transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" className="lucide lucide-menu">
            <path d="M4 5h16M4 12h16M4 19h16" />
          </svg>
        </button>
      </nav>

      {/* ───────── Mobile Menu ───────── */}
      <div
        className={`fixed inset-0 z-[100] bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <a href="/" className="text-white">Home</a>
        <a href="/products" className="text-white">Products</a>
        <a href="/stories" className="text-white">Stories</a>
        <a href="/pricing" className="text-white">Pricing</a>
        <button
          onClick={() => setMenuOpen(false)}
          className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-green-600 hover:bg-green-700 transition text-white rounded-md flex"
        >
          X
        </button>
      </div>

      {/* ───────── Hero Section ───────── */}
      <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">
        <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 bg-green-300 blur-[100px] opacity-30"></div>

        {/* Avatars + Stars */}
        <div className="flex items-center mt-24">
          <div className="flex -space-x-3 pr-3">
            {[
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
              "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
              "https://randomuser.me/api/portraits/men/75.jpg",
            ].map((src, i) => (
              <img key={i} src={src} alt={`user${i}`} className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition" style={{ zIndex: i + 1 }} />
            ))}
          </div>
          <div>
            <div className="flex">
              {Array(5).fill(0).map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star text-transparent fill-green-600" aria-hidden="true">
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-700">Used by 10,000+ users</p>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-semibold max-w-5xl text-center mt-4 md:leading-[70px]">
          Land your dream job with{" "}
          <span className="bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent text-nowrap">
            TRI AI-powered{" "}
          </span>{" "}
          resumes..
        </h1>

        <p className="max-w-md text-center text-base my-7">
          Create, edit and download professional resumes with AI-powered assistance.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <a href="/" className="bg-green-500 hover:bg-green-600 text-white rounded-full px-9 h-12 m-1 ring-offset-2 ring-1 ring-green-400 flex items-center transition-colors">
            Get started
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-1 size-4" aria-hidden="true">
              <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
          <button className="flex items-center gap-2 border border-slate-400 hover:bg-green-50 transition rounded-full px-7 h-12 text-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video size-5" aria-hidden="true">
              <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
              <rect x="2" y="6" width="14" height="12" rx="2"></rect>
            </svg>
            <span>Try demo</span>
          </button>
        </div>

        <p className="py-6 text-slate-600 mt-14">Trusting by leading brands, including</p>

        <div className="flex flex-wrap justify-between max-sm:justify-center gap-6 max-w-3xl w-full mx-auto py-4" id="logo-container">
          {companiesLogo.map((company, index) => (
            <div key={index} className="flex items-center justify-center">
              {company.logo}
            </div>
          ))}
        </div>
      </div>

      {/* ───────── Features Section ───────── */}
      <div id="features" className="px-4 md:px-16 lg:px-24 xl:px-40 py-24">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-green-600 bg-green-50 border border-green-200 rounded-full px-4 py-1 mb-4">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 max-w-2xl mx-auto leading-tight">
            Everything you need to get hired faster
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-base">
            From blank page to boardroom-ready in minutes — TRI handles the heavy lifting so you can focus on your next opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative bg-white border border-slate-100 rounded-2xl p-7 hover:border-green-200 hover:shadow-lg hover:shadow-green-50 transition-all duration-300"
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-green-50 text-green-600 mb-5 group-hover:bg-green-100 transition-colors">
                {f.icon}
              </div>
              <h3 className="font-semibold text-slate-800 text-lg mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ───────── Stats Banner ───────── */}
      <section className="bg-green-600 py-16 px-4 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-white">
          {[
            { value: "10K+", label: "Resumes Created" },
            { value: "94%", label: "Interview Rate" },
            { value: "50+", label: "Templates" },
            { value: "4.9★", label: "Average Rating" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="text-green-100 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── Testimonials Section ───────── */}
      <section id="testimonials" className="px-4 md:px-16 lg:px-24 xl:px-40 py-24">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-green-600 bg-green-50 border border-green-200 rounded-full px-4 py-1 mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 max-w-2xl mx-auto leading-tight">
            Real people, real results
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-base">
            Thousands of job seekers have already landed interviews at top companies using TRI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-2xl p-8 flex flex-col gap-5 hover:shadow-md hover:border-green-100 transition-all duration-300">
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array(t.stars).fill(0).map((_, s) => (
                  <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-transparent fill-green-500">
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
                  </svg>
                ))}
              </div>
              {/* Quote */}
              <p className="text-slate-600 text-sm leading-relaxed flex-1">"{t.text}"</p>
              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <img src={t.avatar} alt={t.name} className="size-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-slate-800">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── CTA Section ───────── */}
      <div id="cta" className="px-4 md:px-16 lg:px-24 xl:px-40 py-24">
        <div className="relative overflow-hidden bg-gradient-to-br from-green-600 to-green-700 rounded-3xl px-8 md:px-16 py-20 text-center text-white max-w-5xl mx-auto">
          {/* Decorative blobs */}
          <div className="absolute -top-16 -right-16 size-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-16 -left-16 size-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-white/20 rounded-full px-4 py-1 mb-6">
            Get Started Today
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold max-w-2xl mx-auto leading-tight mb-6">
            Your dream job is one resume away
          </h2>
          <p className="text-green-100 max-w-md mx-auto mb-10 text-base">
            Join over 10,000 professionals who trust TRI to tell their story. Free to start — no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/app?state=register"
              className="bg-white text-green-700 font-semibold rounded-full px-10 h-12 flex items-center hover:bg-green-50 active:scale-95 transition-all shadow-md"
            >
              Create my resume — it's free
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
            <Link
              to="/app?state=login"
              className="border border-white/50 text-white rounded-full px-8 h-12 flex items-center hover:bg-white/10 active:scale-95 transition-all"
            >
              Sign in
            </Link>
          </div>

          <p className="text-green-200 text-xs mt-6">No credit card required · Cancel anytime · GDPR compliant</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;