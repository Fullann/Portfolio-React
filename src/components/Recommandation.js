import React, { useState, useEffect } from 'react';

import './Recommendations.css';

const Recommendations = ({ listRecommandation }) => {
    const [importedImages, setImportedImages] = useState([]);

    useEffect(() => {
        // Fonction pour importer dynamiquement les images
        const importImages = async () => {
            const importedImagesArray = await Promise.all(
                listRecommandation.map(async (item) => {
                    try {
                        const imageModule = await import(`../${item.src}`);
                        return {
                            name: item.name,
                            linkedin: item.linkedin,
                            image: imageModule.default,
                            designation:item.designation,
                            content:item.content,
                        };

                    } catch (error) {
                        console.error(`Erreur lors de l'import de l'image ${item.src}: ${error}`);
                        return null;
                    }
                })
            );
            // Filtrer les images importées avec succès
            setImportedImages(importedImagesArray.filter((item) => item !== null));
        };

        importImages();
    }, [listRecommandation]);
    return (
        <div className="recommendations-container">
            <div className="grid-container">
                {importedImages.map((rec, index) => (
                    <div key={`rec-${index}`} className="cardRecommandation">
                        <blockquote className="quote">
                            <div className="quote-content">
                                <div className="flex-row">
                                    <a style={{textDecoration: 'none'}} href={rec.linkedin} target="_blank" rel="noreferrer">
                                        <cite className="cite">
                                            <div className="image-container">
                                                <img className="profile-image" src={rec.image} alt={rec.name} />
                                            </div>
                                            <span className="profile-info">
                                                <strong className="profile-name">{rec.name}</strong>
                                                
                                            </span>
                                            
                                        </cite>
                                    </a>
                                   
                                </div>
                                <p className="purple"> {rec.designation}</p>
                                <div className="content">
                                    <svg className="quote-icon" fill="currentColor" viewBox="0 0 32 32">
                                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                    </svg><br></br>
                                    <p className="quote-text">{rec.content}</p>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recommendations;
