import React, { useState } from 'react';

const CreateCore = () => {
    const [coreTitle, setCoreTitle] = useState('');
    const [coreDescription, setCoreDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleTitleChange = (e) => {
        setCoreTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setCoreDescription(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!coreTitle || !coreDescription) {
            setErrorMessage('Both title and description are required.');
            return;
        }

        const newCore = {
            title: coreTitle,
            description: coreDescription,
        };

        console.log('New Core:', newCore);

        setCoreTitle('');
        setCoreDescription('');
        setErrorMessage('');
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Create a New Core</h2>
            {errorMessage && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                    {errorMessage}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="coreTitle" className="block text-gray-700 font-medium mb-2">Core Title</label>
                    <input
                        type="text"
                        id="coreTitle"
                        value={coreTitle}
                        onChange={handleTitleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter core title"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="coreDescription" className="block text-gray-700 font-medium mb-2">Core Description</label>
                    <textarea
                        id="coreDescription"
                        value={coreDescription}
                        onChange={handleDescriptionChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter core description"
                        rows="4"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Create Core
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateCore;
