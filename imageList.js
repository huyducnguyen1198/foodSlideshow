const imageList = ["Crispy Noodles.jpg","Egg Rolls.jpg","Fried Rice.jpg","Jumbo Shrimp.jpg","Pho.jpeg","Pork Chop.jpg","Potsticker.png","Spring Rolls.jpg","Tamarind Soup.jpg"];

imageList.forEach((image, index) => {
	imageList[index] = `./photo/${image}`;
});

// Export the image list
if (typeof module !== 'undefined' && module.exports) {
    module.exports = imageList;
}