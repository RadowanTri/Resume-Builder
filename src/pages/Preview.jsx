import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ResumePreview from '../Components/ResumePreview';
import { dummyResumeData } from '../assets/assets';

const Preview = () => {
    const { resumeId } = useParams();
    const [resumeData, setResumeData] = useState(null);

    useEffect(() => {
        if (resumeId) {
            const resume = dummyResumeData.find(item => item._id === resumeId);
            if (resume) {
                setResumeData(resume);
            }
        }
    }, [resumeId]);

    if (!resumeData) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-gray-500">Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <ResumePreview 
                data={resumeData} 
                template={resumeData.template || 'classic'}
                accentColor={resumeData.accent_color || '#3B82F6'}
                classes="max-w-4xl mx-auto"
            />
        </div>
    );
};

export default Preview;