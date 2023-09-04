import React, { useState, useEffect } from 'react';

const WorkAt = ({ WorkAtlist }) => {
    const [importedImages, setImportedImages] = useState([]);

    useEffect(() => {
        // Fonction pour importer dynamiquement les images
        const importImages = async () => {
            const importedImagesArray = await Promise.all(
                WorkAtlist.map(async (item) => {
                    try {
                        const imageModule = await import(`../${item.src}`);
                        return {
                            name: item.name,
                            url: item.url,
                            image: imageModule.default,
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
    }, [WorkAtlist]);

    return (
        <div>
            {importedImages.map((item, index) => (
                <div key={index}>
                    <a className='link' href={item.url}>
                        <img src={item.image} alt={item.name} />
                    </a>
                </div>
            ))}
        </div>
    );
};

export default WorkAt;
