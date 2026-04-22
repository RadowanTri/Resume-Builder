import React from 'react';

const CallToAction = () => {
  return (
    <div id="cta" className="px-4 md:px-16 lg:px-24 xl:px-30">
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
          <a
            href="/app"
            className="bg-white text-green-700 font-semibold rounded-full px-10 h-12 flex items-center hover:bg-green-50 active:scale-95 transition-all shadow-md"
          >
            Create my resume — it's free
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
          <a
            href="/Resume-Builder/login"
            className="border border-white/50 text-white rounded-full px-8 h-12 flex items-center hover:bg-white/10 active:scale-95 transition-all"
          >
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;