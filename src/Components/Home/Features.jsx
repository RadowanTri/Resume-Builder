import React from 'react';
import { features } from '../../assets/features.js';

const Features = () => {
  return (
    <div id="features" className="px-4 md:px-16 lg:px-24 xl:px-30 pb-10">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="group relative bg-gradient-to-b from-white to-slate-50/50 border border-slate-100/50 shadow-sm hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2 hover:border-green-200/80 rounded-3xl p-8 backdrop-blur-sm transition-all duration-500 overflow-hidden"
          >
            {/* Background accent */}
            <div className="absolute top-0 -right-12 w-32 h-32 bg-gradient-to-br from-green-500/5 to-green-600/5 rounded-3xl blur-xl -translate-x-8 translate-y-4 group-hover:translate-x-0 group-hover:transform transition-all duration-700"></div>
            
            <div className="relative w-20 h-20 flex items-center justify-center rounded-3xl bg-white/80 shadow-xl ring-3 ring-green-500/20 backdrop-blur-xl mb-8 group-hover:scale-[1.15] group-hover:shadow-2xl group-hover:ring-green-400/40 group-hover:bg-white transition-all duration-700 border border-white/50">
              <span className="text-3xl drop-shadow-lg font-bold">{f.icon}</span>
            </div>
            
            <h3 className="font-semibold text-slate-900 text-xl mb-3 leading-tight group-hover:text-green-600 transition-all duration-500">
              {f.title}
            </h3>
            
            <p className="text-slate-600 text-base leading-relaxed font-medium group-hover:text-slate-700 transition-all duration-400">
              {f.desc}
            </p>
            
            {/* Subtle shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -skew-x-12"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
