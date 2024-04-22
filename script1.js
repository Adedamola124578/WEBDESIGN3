// JavaScript for slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}


const pollForm = document.getElementById('poll-form');
const pollResults = document.getElementById('poll-results');

pollForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const selectedPlayer = document.querySelector('input[name="favorite_player"]:checked');
    if (selectedPlayer) {
        const playerName = selectedPlayer.value;
        showPollResults(playerName);
    }
});

function showPollResults(playerName) {
    pollResults.innerHTML = `
        <h3>Thank you for voting!</h3>
        <p>Your favorite player is: ${playerName}</p>
    `;
    pollResults.style.display = 'block';
}


// Function to fetch top headlines from the JSON file
async function fetchTopHeadlines() {
    try {
        const response = await fetch('top_headlines.json'); // Fetch JSON file
        if (!response.ok) {
            throw new Error('Failed to fetch top headlines');
        }
        const data = await response.json(); // Parse JSON data
        const topHeadlines = data.topHeadlines; // Get array of top headlines
        return topHeadlines; // Return top headlines array
    } catch (error) {
        console.error(error);
        return []; // Return an empty array in case of error
    }
}

// JavaScript for fetching and displaying top headlines
        async function fetchTopHeadlines() {
            try {
                const response = await fetch('top_headlines.json'); // Fetch JSON file
                if (!response.ok) {
                    throw new Error('Failed to fetch top headlines');
                }
                const data = await response.json(); // Parse JSON data
                console.log('Fetched data:', data); // Log fetched data
                const topHeadlines = data.topHeadlines; // Get array of top headlines
                return topHeadlines; // Return top headlines array
            } catch (error) {
                console.error(error);
                return []; // Return an empty array in case of error
            }
        }

       async function displayTopHeadlines() {
    const topHeadlines = await fetchTopHeadlines(); // Fetch top headlines data
    const headlinesContainer = document.querySelector('#top-headlines .container');
    
    // Clear any existing headlines
    headlinesContainer.innerHTML = '';

    if (topHeadlines.length === 0) {
        // Display a message if no headlines are available
        headlinesContainer.innerHTML = '<p>No headlines available</p>';
    } else {
        // Create a div for "Top Headlines" tag and append it to the container
        const topHeadlinesTag = document.createElement('div');
        topHeadlinesTag.classList.add('headline');
        topHeadlinesTag.innerHTML = '<h3>Top Headlines</h3>';
        headlinesContainer.appendChild(topHeadlinesTag);

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


// JavaScript for generating the league table
function generateLeagueTable(teams) {
    const tableBody = document.querySelector('#league-table tbody');
    tableBody.innerHTML = ''; // Clear existing rows
    
    teams.forEach(team => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${team.name}</td>
            <td>${team.played}</td>
            <td>${team.won}</td>
            <td>${team.drawn}</td>
            <td>${team.lost}</td>
            <td>${team.points}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Example data for the league table
const teams = [
    { name: 'LOYOLA', played: 10, won: 7, drawn: 2, lost: 1, points: 23 },
    { name: 'UTSA', played: 10, won: 6, drawn: 3, lost: 1, points: 21 },
    { name: 'UIC', played: 10, won: 6, drawn: 3, lost: 1, points: 21 },
    // Add more teams as needed
];

generateLeagueTable(teams);

// JavaScript for handling the soccer quiz
const quizQuestions = [
    {
        question: 'Who won the FIFA World Cup in 2018?',
        options: ['France', 'Brazil', 'Germany', 'Argentina'],
        answer: 'France'
    },
    {
        question: 'Which player has won the most Ballon d\'Or awards?',
        options: ['Lionel Messi', 'Cristiano Ronaldo', 'Pelé', 'Diego Maradona'],
        answer: 'Lionel Messi'
    },
    {
        question: 'Who is the all-time leading goal scorer in the UEFA Champions League?',
        options: ['Lionel Messi', 'Cristiano Ronaldo', 'Raúl', 'Robert Lewandowski'],
        answer: 'Cristiano Ronaldo'
    },
    {
        question: 'Which country has won the most Copa América titles?',
        options: ['Brazil', 'Argentina', 'Uruguay', 'Chile'],
        answer: 'Uruguay'
    },
    {
        question: 'Who is the fastest player to reach 100 Premier League goals?',
        options: ['Alan Shearer', 'Thierry Henry', 'Sergio Agüero', 'Mohamed Salah'],
        answer: 'Mohamed Salah'
    }
];

const quizContainer = document.getElementById('soccer-quiz');

quizQuestions.forEach((question, index) => {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.textContent = `Question ${index + 1}: ${question.question}`;
    
    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('options');
    
    question.options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.classList.add('option');
        optionButton.textContent = option;
        optionButton.addEventListener('click', () => checkAnswer(option, question.answer));
        optionsContainer.appendChild(optionButton);
    });
    
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsContainer);
});

function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        alert('Correct!');
    } else {
        alert('Incorrect!');
    }
}


$(document).ready(function() {
        $('.menu-icon').click(function() {
            $('.nav-links').slideToggle(); // Toggle visibility of the navigation links
        });
    });


    


