import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarComponent from '../components/Navbar';
import Core from '../components/Cores';
import HashtagsSection from '../components/HashtagsSection';
import Footer from '../components/footer';

const HomePage = () => {
    const location = useLocation();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    
    const { image, title, description, link, hashtag } = location.state || {};

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/get-core-data');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (!image) {
            fetchData();
        } else {
            setLoading(false);
        }
    }, [image]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const displayData = { image, title, description, link, hashtag } || data;

    return (
        <>
            <NavbarComponent />
            <HashtagsSection />
            <Core />
            {displayData && displayData.image && (
                <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
                    <div className="frame w-full h-64 border-2 border-gray-300 flex items-center justify-center">
                        <img
                            src={displayData.image}
                            alt="Submitted"
                            className="object-contain w-full h-full"
                        />
                    </div>
                    <div className="p-4 border-t border-gray-200">
                        <h3 className="text-xl font-bold mb-2">{displayData.title}</h3>
                        <p className="text-gray-700 mb-2">{displayData.description}</p>
                        <a href={displayData.link} className="text-blue-500 hover:underline">{displayData.link}</a>
                        <div className="text-gray-600 mt-2">#{displayData.hashtag}</div>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
};

export default HomePage;
