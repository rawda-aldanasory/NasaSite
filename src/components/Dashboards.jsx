import React from 'react';
import { Grid, Card, CardMedia } from '@mui/material';

// Import images from the assets folder
import img1 from '../assets/data-1.jpg';
import img2 from '../assets/data-2.jpg';
import img3 from '../assets/data-2.jpg';
import img4 from '../assets/data-4.jpg';
import img5 from '../assets/data-5.jpg';
import img6 from '../assets/data-6.jpg';
import img7 from '../assets/data-7.jpg';

const ImageGallery = () => {
    // Array of images
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
    ];

    // Description for each image
    const descriptions = [
        "Analyze rainfall and maximum/minimum temperature data for the past 51 years across 36 districts and 4 subdivisions of the state.",
        "The dashboard displays the total rainfall trend over time, the distribution of rainfall by intensity, and information on the rainiest and driest districts.",
        "The dashboard displays the average temperature trends for maximum (Tmax) and minimum (Tmin) temperatures, the distribution of Tmax, and information on the hottest and coolest districts.",
        "Interactive dashboard for exploring subdivision-wise rainfall in Maharashtra",
        "Users can view the occurrence of heat waves and the percentage of Tmax status in summer (normal, above normal, and below normal).",
        "Focusing on the years 2019 and 2015. It highlights the highest and lowest monsoon years, the yearly monsoon status, and the yearly average monsoons.",
        "provides a summary of the non-monsoon performance in Maharashtra, focusing on the period from 1973 to 2023."
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-4">Look here at how the climate has affected the city of Maharashtra over the years.</h1>
            <Grid container spacing={2}>
                {/* First Image (Full Width) */}
                <Grid item xs={12}>
                    <div className="relative group">
                        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardMedia
                                component="img"
                                height="300"
                                image={images[0]} // First image
                                alt="data-1"
                                className="transition-transform duration-300 transform group-hover:scale-105 group-hover:blur-sm"
                            />
                        </Card>
                        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white p-2 rounded shadow-md">
                                <span className="text-black">{descriptions[0]}</span>
                                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full mt-1">
                                    <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>

                {/* Next Images (Two Side by Side) */}
                {images.slice(1).map((image, index) => (
                    <Grid item xs={12} sm={6} md={6} key={index}>
                        <div className="relative group">
                            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={image}
                                    alt={`data-${index + 2}`}
                                    className="transition-transform duration-300 transform group-hover:scale-105 group-hover:blur-sm"
                                />
                            </Card>
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white p-2 rounded shadow-md">
                                    <span className="text-black">{descriptions[index + 1]}</span>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full mt-1">
                                        <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ImageGallery;
