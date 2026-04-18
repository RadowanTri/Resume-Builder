import React from "react";

const SectionTItle = ({ icon, iconTitle, title, description }) => {
  return (
    <div className="text-center mt-6 text-slate-700">

      {/* Badge */}
      {(icon || iconTitle) && (
        <div className="inline-flex">
          <div className="flex items-center gap-2 text-sm text-green-600 bg-green-400/10 rounded-full px-6 py-1.5">
            {icon && icon}
            {iconTitle && <span>{iconTitle}</span>}
          </div>
        </div>
      )}

      {/* Title */}
      {title && (
        <h2 className="text-3xl sm:text-4xl font-medium mt-2">
          {title}
        </h2>
      )}

      {/* Description */}
      {description && (
        <p className="max-w-2xl mx-auto mt-3 text-slate-500">
          {description}
        </p>
      )}

    </div>
  );
};

export default SectionTItle;