import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ResumePreview from '../Components/ResumePreview';
import { dummyResumeData } from '../assets/assets';
import { ArrowBigLeftIcon } from 'lucide-react';

const Preview = () => {
    const { resumeId } = useParams();
    const [resumeData, setResumeData] = useState(null);
       const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     if (resumeId) {
    //         const resume = dummyResumeData.find(item => item._id === resumeId);
    //         if (resume) {
    //             setResumeData(resume);
    //         }
    //     }
    // }, [resumeId]);

    // if (!resumeData) {
    //     return (
    //         <div className="flex items-center justify-center min-h-screen">
    //             <p className="text-gray-500">Loading...</p>
    //         </div>
    //     );
    // }
    const loadResume = async () => {
    setResumeData(
      dummyResumeData.find((resume) => resume._id === resumeId) || null
    );
    setIsLoading(false)
  };

  useEffect(() => {
    loadResume();
  }, []);

    // return (
    //     <div className="min-h-screen bg-gray-100 py-8">
    //         <ResumePreview 
    //             data={resumeData} 
    //             template={resumeData.template || 'classic'}
    //             accentColor={resumeData.accent_color || '#3B82F6'}
    //             classes="max-w-4xl mx-auto"
    //         />
    //     </div>
    // );
    return resumeData ? (
    <div className="bg-slate-100">
        <div className='max-w-3x1 mx-auto py-10'>
            <ResumePreview data={resumeData} template={resumeData.
            template} accentColor={resumeData.accent_color}
            classes='py-4 bg-white'/>
        </div>
    </div>
    ) : (
    <div>
  {isLoading ? (
    <Loader />
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-center text-6xl text-slate-400 font-medium">
        Resume not found
      </p>

      <a
        href="/"
        className="mt-6 bg-green-500 hover:bg-green-600 text-white rounded-full px-6 h-9 m-1 ring-offset-1 ring-1 ring-green-400 flex items-center transition-colors"
      >
        <ArrowLeftIcon className="mr-2 size-4" />
        go to home page
      </a>
    </div>
  )}
</div>
    );
};

export default Preview;