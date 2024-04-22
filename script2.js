// Function to fetch team members from the JSON file
async function fetchTeamMembers(query) {
    try {
        const response = await fetch('team_members.json'); // Fetch JSON file
        if (!response.ok) {
            throw new Error('Failed to fetch team members');
        }
        const data = await response.json(); // Parse JSON data
        const teamMembers = data.teamMembers; // Get array of team members
        // Filter team members based on the query (team or player name)
        const filteredTeamMembers = teamMembers.filter(member =>
            member.name.toLowerCase().includes(query.toLowerCase()) ||
            member.country.toLowerCase().includes(query.toLowerCase())
        );
        return filteredTeamMembers; // Return filtered team members
    } catch (error) {
        console.error(error);
        return []; // Return an empty array in case of error
    }
}

// Function to display search results
async function searchTeam() {
    const query = document.getElementById('search-input').value.trim();
    if (!query) {
        alert('Please enter a search query');
        return;
    }

    const teamMembers = await fetchTeamMembers(query); // Fetch filtered team members
    displaySearchResults(teamMembers); // Display search results
}

// Function to display search results in the HTML
function displaySearchResults(teamMembers) {
    console.log(teamMembers); // Log the data to the console
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Clear previous results
    if (teamMembers.length === 0) {
        resultsContainer.innerHTML = 'No results found.';
    } else {
        const list = document.createElement('ul');
        teamMembers.forEach(member => {
            const item = document.createElement('li');
            item.innerHTML = `
                <img src="${member.image}" alt="${member.name}">
                <div>
                    <h3>${member.name}</h3>
                    <p><strong>Position:</strong> ${member.position}</p>
                    <p><strong>Age:</strong> ${member.age}</p>
                    <p><strong>Country:</strong> ${member.country}</p>
                </div>
            `;
            list.appendChild(item);
        });
        resultsContainer.appendChild(list);
    }
}

 // Function to fetch and display all team members
    async function displayTeamMembers() {
        try {
            const response = await fetch('team_members.json'); // Fetch JSON file
            if (!response.ok) {
                throw new Error('Failed to fetch team members');
            }
            const data = await response.json(); // Parse JSON data
            const teamMembers = data.teamMembers; // Get array of team members

            const teamMembersContainer = document.getElementById('team-members');
            // Clear any existing team members
            teamMembersContainer.innerHTML = '';

            // Create HTML elements for each team member and append them to the container
            teamMembers.forEach(member => {
                const memberElement = document.createElement('div');
                memberElement.classList.add('team-member');
                memberElement.innerHTML = `
                    <h3>${member.name}</h3>
                    <p>Position: ${member.position}</p>
                    <p>Age: ${member.age}</p>
                    <p>Country: ${member.country}</p>
                `;
                teamMembersContainer.appendChild(memberElement);
            });
        } catch (error) {
            console.error(error);
        }
    }

    // Call the displayTeamMembers function to initially display all team members
    displayTeamMembers();



 $(document).ready(function() {
        $('.menu-icon').click(function() {
            $('.nav-links').slideToggle(); // Toggle visibility of the navigation links
        });
    });

