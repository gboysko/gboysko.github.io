function createSvgOverlay(elm, num) {
    // Create the SVG element
    const svgElm = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'svg'
    );

    // Set the attributes
    svgElm.setAttribute('viewBox', '0 0 200 200');
    svgElm.setAttribute('version', 1.1);

    // Create the circle child element
    const circleElm = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'circle'
    );

    // Set the attributes
    circleElm.setAttribute('cx', 175);
    circleElm.setAttribute('cy', 25);
    circleElm.setAttribute('r', 10);
    circleElm.setAttribute('fill', 'red');
    circleElm.setAttribute('stroke', 'white');
    circleElm.setAttribute('stroke-width', 1.5);

    // Add the circle to the SVG element
    svgElm.appendChild(circleElm);

    // Create the TEXT element
    const textElm = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'text'
    );

    // Set the attibutes
    textElm.setAttribute('x', 175);
    textElm.setAttribute('y', 25 + 10 / 2);
    textElm.setAttribute('fill', 'white');
    textElm.setAttribute('font-size', 15);
    textElm.setAttribute('font-family', 'Arial');
    textElm.setAttribute('text-anchor', 'middle');
    textElm.appendChild(document.createTextNode(num));

    // Add the Text element to the SVG
    svgElm.appendChild(textElm);

    // Get the parent DIV
    const parent = elm.parentElement;

    // Create an SVG element in the parent AFTER the element
    parent.appendChild(svgElm);
}

function createThumbnails(elm) {
    // Look for our two data attributes...
    const imagePath = elm.dataset.imagepath;
    const imageFiles = elm.dataset.imagefiles.split(',');

    // Loop through the list of images and construct our containing DOM elements
    for (const ix in imageFiles) {
        // Get our index as a number
        const index = Number(ix);

        // Get our image file name
        const imageFile = imageFiles[index];

        // Construct full image path
        const fullPath = `${imagePath}/${imageFile}`;

        // Create our top-level anchor
        const aElm = document.createElement('a');

        // Set attributes
        aElm.setAttribute('data-fancybox', 'lightbox');
        aElm.setAttribute('href', fullPath);

        // Add the anchor tag to our parent
        elm.appendChild(aElm);

        // Create a DIV inside it...
        const divElm = document.createElement('div');

        // Set Attributes
        divElm.setAttribute('class', 'img-overlay-wrap');

        // Add the DIV to the anchor
        aElm.appendChild(divElm);

        // Create an image inside it...
        const imgElm = document.createElement('img');

        // Set attributes
        imgElm.setAttribute('src', fullPath);
        imgElm.setAttribute('width', 200);
        imgElm.setAttribute('title', `Candidate #${index + 1}`);

        // Add the IMAGE to the DIV
        divElm.appendChild(imgElm);

        // Add an overlay
        createSvgOverlay(imgElm, index+1);
    }
}
