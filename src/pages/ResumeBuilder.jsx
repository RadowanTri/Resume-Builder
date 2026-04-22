import {
  ArrowLeftIcon,
  User,
  FileText,
  GraduationCap,
  Briefcase,
  FolderIcon,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Share2Icon,
  EyeIcon,
  DownloadIcon,
  EyeOffIcon
} from "lucide-react";

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { dummyResumeData } from "../assets/assets";
import PersonInfoForm from "../Components/PersonInfoForm";
import ResumePreview from "../Components/ResumePreview";
import TemplateSelector from "../Components/TemplateSelector";
import ColorPicker from "../Components/ColorPicker";
import ProfessionalSummaryForm from '../Components/ProfessionalSummaryForm';
import ExperienceForm from "../Components/ExperienceForm";
import EducationForm from "../Components/EducationForm";
import ProjectForm  from "../Components/ProjectForm";
import SkillsForm from "../Components/SkillsForm";

const ResumeBuilder = () => {
  const { resumeId } = useParams();

  const sections = [
    { id: "personal", name: "Personal Info", icon: User },
    { id: "summary", name: "Summary", icon: FileText },
    { id: "experience", name: "Experience", icon: Briefcase },
    { id: "education", name: "Education", icon: GraduationCap },
    { id: "projects", name: "Projects", icon: FolderIcon },
    { id: "skills", name: "Skills", icon: Sparkles },
  ];

  const [resumeData, setResumeData] = useState({
    _id: "",
    title: "",
    personal_info: {},
    professional_summary: "",
    experience: [],
    education: [],
    projects: [],
    skills: [],
    template: "classic",
    accent_color: "#3B82F6",
    public: false,
  });

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [removeBackground, setRemoveBackground] = useState(false);

  const activeSection = sections[activeSectionIndex] || sections[0];

  const loadExistingResume = () => {
    const resume = dummyResumeData.find(
      (item) => item._id === resumeId
    );

    if (!resume) return;

    setResumeData(resume);
    document.title = resume.title;
  };

  useEffect(() => {
    if (resumeId) {
      loadExistingResume();
    }
  }, [resumeId]);
const changeResumeVisibility = async () => {
  setResumeData({
    ...resumeData,
    public: !resumeData.public,
  });
};

const handleShare = () => {
  const frontendUrl = window.location.href.split("/app/")[0];
  const resumeUrl = frontendUrl + "/view/" + resumeId;

  if (navigator.share) {
    navigator.share({
      url: resumeUrl,
      text: "My Resume",
    });
  } else {
    alert("Share not supported on this browser.");
  }
};
const downloadResume = ()=>{
window.print();
}
  return (
    <div>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link
          to="/app"
          className="inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all"
        >
          <ArrowLeftIcon className="size-4" />
          Back to Dashboard
        </Link>
      </div>

      {/* Layout */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* LEFT PANEL */}
          <div className="relative lg:col-span-5 rounded-lg overflow-hidden">

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 relative">

              {/* Progress Background */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200" />

              {/* Progress Fill */}
              <div
                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-green-500 to-green-600 transition-all duration-500"
                style={{
                  width: `${(activeSectionIndex / (sections.length - 1)) * 100}%`,
                }}
              />
            {/* Scrion navigation */}
             <div className="flex justify-between items-center mb-6 border-b border-gray-300 py-2">

                {/* Left (section info placeholder) */}
                <div className="flex items-center gap-2">
                <TemplateSelector
                  selectedTemplate={resumeData.template}
                  onChange={(template) =>
                    setResumeData((prev) => ({ ...prev, template }))
                  }
                />
                <ColorPicker
                  selectedColor={resumeData.accent_color}
                  onChange={(color) =>
                    setResumeData((prev) => ({
                      ...prev,
                      accent_color: color,
                    }))
                  }
                />
              </div>

                {/* Buttons */}
                <div className='flex items-center'>
                    {activeSectionIndex !== 0 && (
                    <button onClick={()=> setActiveSectionIndex ((prevIndex) => Math.
                    max (prevIndex - 1, 0))} className='flex items-center gap-1 p-3
                    rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50
                    transition-all' disabled={activeSectionIndex === 0}>
                    <ChevronLeft className="size-4"/> Previous
                    </button>
                    )}

                    {/* Next */}
                    <button
                    onClick={() =>
                        setActiveSectionIndex((prev) =>
                        Math.min(prev + 1, sections.length - 1)
                        )
                    }
                    className={`flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all ${
                        activeSectionIndex === sections.length - 1 ? "opacity-50" : ""
                    }`}
                    disabled={activeSectionIndex === sections.length - 1}
                    >
                    Next <ChevronRight className="size-4" />
                    </button>

                </div>
            </div>

              {/* Content */}
              <div className="space-y-6">
                {activeSection.id === "personal" && (
                  <PersonInfoForm
                    data={resumeData.personal_info || {}}
                    onChange={(data) =>
                      setResumeData((prev) => ({
                        ...prev,
                        personal_info: data,
                      }))
                    }
                    removeBackground={removeBackground}
                    setRemoveBackground={setRemoveBackground}
                  />
                )}
                {activeSection.id === "summary" && (
                  <ProfessionalSummaryForm
                    data={resumeData?.professional_summary}
                    onChange={(data) =>
                      setResumeData((prev) => ({
                        ...prev,
                        professional_summary: data,
                      }))
                    }
                    setResumeData={setResumeData}
                  />
                )}
                {activeSection.id === "experience" && (
                <ExperienceForm
                  data={resumeData.experience}
                  onChange={(data) =>
                    setResumeData((prev) => ({ ...prev, experience: data }))
                  }
                />
              )}
               {activeSection.id === "education" && (
                <EducationForm
                  data={resumeData.education}
                  onChange={(data) =>
                    setResumeData((prev) => ({ ...prev, education: data }))
                  }
                />
              )}
{activeSection.id === "projects" && (
                <ProjectForm
                  data={resumeData.projects || []}
                  onChange={(data) =>
                    setResumeData((prev) => ({ ...prev, projects: data }))
                  }
                />
              )}
              {activeSection.id === "skills" && (
                <SkillsForm
                  data={resumeData.skills || []}
                  onChange={(data) =>
                    setResumeData((prev) => ({ ...prev, skills: data }))
                  }
                />
              )}
              </div>
              <button 
                onClick={() =>
                  setActiveSectionIndex((prev) =>
                    Math.min(prev + 1, sections.length - 1)
                  )
                }
                disabled={activeSectionIndex === sections.length - 1}
                className={`bg-gradient-to-br from-green-100 to-green-200 text-green-600 ring-1 ring-green-300 hover:ring-green-400 transition-all rounded-md px-6 py-2 mt-6 text-sm ${activeSectionIndex === sections.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Save Changes
              </button>

            </div>
          </div>

          {/* RIGHT PANEL review */}
          <div className="lg:col-span-7 mt-6">
            <div className="relative w-full">
              <div className="absolute bottom-3 left-0 right-0 flex items-center justify-end gap-2">
                {resumeData.public && (
                  <button onClick={handleShare} className="flex items-center p-2 px-4 gap-2 text-xs bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 rounded-lg ring-1 ring-blue-300 hover:ring transition-colors">
                    <Share2Icon className="size-4" />
                    Share
                  </button>
                )}
                <button onClick={changeResumeVisibility} className="flex items-center p-2 px-4 gap-2 text-xs bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600 ring-1 ring-purple-300 rounded-lg hover:ring transition-colors">
                {resumeData.public ? (
                  <EyeIcon className="size-4" />
                ) : (
                  <EyeOffIcon className="size-4" />
                )}

                {resumeData.public ? "Public" : "Private"}
              </button>
              <button onClick={downloadResume} className="flex items-center gap-2 px-6 py-2 text-xs bg-gradient-to-br from-green-100 to-green-200 text-green-600 rounded-lg ring-1 ring-green-300 hover:ring transition-colors">
                <DownloadIcon className="size-4" />
                Download
              </button>
              </div>
            </div>
            <ResumePreview 
                data={resumeData} 
                template={resumeData.template}
                accentColor={resumeData.accent_color}
                classes="min-h-[500px]"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;