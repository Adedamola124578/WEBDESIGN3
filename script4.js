 // Function to display top headlines in the HTML
async function displayTopHeadlines() {
    const topHeadlines = await fetchTopHeadlines(); // Fetch top headlines data
    const headlinesContainer = document.querySelector('#top-headlines .container');
    
    // Clear any existing headlines
    headlinesContainer.innerHTML = '';

    if (topHeadlines.length === 0) {
        // Display a message if no headlines are available
        headlinesContainer.innerHTML = '<p>No headlines available</p>';
    } else {
        // Create HTML elements for each headline and append them to the container
        topHeadlines.forEach(headline => {
            const headlineElement = document.createElement('div');
            headlineElement.classList.add('headline');
            headlineElement.innerHTML = `
                <h3>${headline.headline}</h3>
                <p>${headline.description}</p>
                <p><strong>Source:</strong> ${headline.source}</p>
                <p><strong>Date:</strong> ${headline.date}</p>
            `;
            headlinesContainer.appendChild(headlineElement);
        });
    }
}

// Call the displayTopHeadlines function to initially display the headlines
displayTopHeadlines();

