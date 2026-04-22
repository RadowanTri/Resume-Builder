import React from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Linkedin,
  Globe,
} from "lucide-react";

const PersonInfoForm = ({
  data = {},
  onChange,
  removeBackground,
  setRemoveBackground,
}) => {
  const fields = [
    { key: "full_name", label: "Full Name", icon: User, type: "text", required: true },
    { key: "email", label: "Email Address", icon: Mail, type: "email", required: true },
    { key: "phone", label: "Phone Number", icon: Phone, type: "tel" },
    { key: "location", label: "Location", icon: MapPin, type: "text" },
    { key: "profession", label: "Profession", icon: Briefcase, type: "text" },
    { key: "linkedin", label: "LinkedIn Profile", icon: Linkedin, type: "url" },
    { key: "website", label: "Personal Website", icon: Globe, type: "url" },
  ];

  const handleChange = (key, value) => {
    if (typeof onChange === "function") {
      onChange({
        ...data,
        [key]: value,
      });
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900">
        Personal Information
      </h3>
      <p className="text-sm text-gray-600">
        Get Start with the personal information
      </p>

      {/* IMAGE UPLOAD */}
      <div className="flex items-center gap-4 mt-5">
        <label htmlFor="image-upload" className="cursor-pointer">
          {data.image ? (
            <img
              src={
                typeof data.image === "string"
                  ? data.image
                  : URL.createObjectURL(data.image)
              }
              alt="user"
              className="w-16 h-16 rounded-full object-cover ring ring-slate-300 hover:opacity-80 transition"
            />
          ) : (
            <div className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-700">
              <User className="size-10 p-2.5 border rounded-full" />
              upload user image
            </div>
          )}
        </label>

        <input
          type="file"
          id="image-upload"
          accept="image/*"
          hidden
          onChange={(e) =>
            handleChange("image", e.target.files[0])
          }
        />

        {/* REMOVE BG TOGGLE */}
        {data.image instanceof File && (
          <div className="flex flex-col text-sm">
            <p>Remove Background</p>

            <label className="relative inline-flex items-center cursor-pointer mt-1">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={removeBackground}
                onChange={() =>
                  setRemoveBackground((prev) => !prev)
                }
              />

              <div className="w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-600 transition"></div>

              <span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
            </label>
          </div>
        )}
      </div>

      {/* DYNAMIC FIELDS */}
      {fields.map((field) => {
        const Icon = field.icon || User;

        return (
          <div key={field.key} className="space-y-1 mt-5">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <Icon className="size-4" />
              {field.label}
              {field.required && (
                <span className="text-red-500">*</span>
              )}
            </label>

            <input
              type={field.type}
              value={data?.[field.key] || ""}
              onChange={(e) =>
                handleChange(field.key, e.target.value)
              }
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
              placeholder={`Enter your ${field.label.toLowerCase()}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PersonInfoForm;