# Ravenous

Ravenous is a web application that allows users to search for restaurants and view information about them using the Yelp API. Users can search for restaurants by location and category, view details of the restaurants, and filter the search results.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Search Restaurants**: Search for restaurants by location and category.
- **View Details**: View details such as address, rating, and reviews for each restaurant.
- **Filter Results**: Filter search results by best match, highest rated, or most reviewed.

## Technologies

- **React**: JavaScript library for building user interfaces.
- **Yelp API**: Used to fetch restaurant data.
- **HTML5 & CSS3**: Markup and styling for the application.
- **JavaScript (ES6+)**: Modern JavaScript features for logic and interactivity.

## Installation

Follow these steps to set up and run Ravenous on your local machine:

1. **Clone the repository**:

    ```sh
    git clone https://github.com/alvaro347/ravenous.git
    cd ravenous
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

3. **Start the development server**:

    ```sh
    npm start
    ```

4. **Open your browser**:

    Navigate to `http://localhost:3000` to see the application running.

## Usage

1. **Search for Restaurants**:

    Enter a location and a search term (e.g., "sushi", "pizza") in the search bar.

2. **Filter Results**:

    Use the filter options to sort the results by best match, highest rated, or most reviewed.

3. **View Restaurant Details**:

    Click on a restaurant to view more details such as the address, rating, and reviews.

## Project Structure

```sh
ravenous/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── App/
│ │ ├── Business/
│ │ ├── BusinessList/
│ │ ├── SearchBar/
│ │ └── ...
│ ├── util/
│ │ └── Yelp.js
│ ├── index.js
│ └── App.js
├── .gitignore
├── package.json
└── README.md
```

- **public/**: Contains the base HTML file.
- **src/**: Contains the main code for the application.
  - **components/**: Contains React components.
  - **util/**: Contains utility modules, such as the Yelp API wrapper.
- **.gitignore**: Specifies which files to ignore in the Git repository.
- **package.json**: Contains project metadata and dependencies.
- **README.md**: This file.
