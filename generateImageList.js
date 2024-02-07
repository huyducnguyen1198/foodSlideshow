const fs = require('fs');
const path = require('path');

const imagesDirectory = './photo/'; // Path to your images folder
const outputFilePath = './imageList.js'; // Output file containing the list of images

fs.readdir(imagesDirectory, (err, files) => {
    if (err) {
        console.error('Error reading the images directory:', err);
        return;
    }

    // Filter out files to include only images (if necessary)
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

    // Create a JS file content that exports the array of images
    const fileContent = `const imageList = ${JSON.stringify(imageFiles)};\nexport default imageList;`;

    // Write the JS file
    fs.writeFile(outputFilePath, fileContent, err => {
        if (err) {
            console.error('Error writing the image list file:', err);
        } else {
            console.log('Image list file generated successfully.');
        }
    });
});
