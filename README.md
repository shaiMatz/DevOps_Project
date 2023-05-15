# DevOps Project - Submit Grades Form for Students

This is a README file for the DevOps project developed by Yossi Elgazari and Shai Matzliach. The project is focused on creating a web-based form for submitting grades for students. The form allows users to enter a student's name and three grades, which are then saved in the local storage. Users can also view, delete, and hide the grades.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)

## Project Overview

The project consists of two main components: a front-end HTML/CSS/JavaScript web page and a back-end server written in Node.js using the Express framework.

### Front-end

The front-end of the project is an HTML web page that provides a form for submitting grades. The following features are included in the web page:

- Input fields for entering a student's name and three grades (grade1, grade2, grade3).
- Validation to ensure all fields are filled and grades are within the valid range of 0 to 100.
- A "Save" button to store the entered grades in the local storage.
- A "View" button to display a table of all saved grades.
- A "Hide" button to hide the table of grades.
- A "Delete Data" button to clear all saved grades from the local storage.

### Back-end

The back-end of the project is implemented using Node.js and the Express framework. It is responsible for serving the front-end web page and handling API requests for saving, retrieving, and deleting grades.

The following dependencies are used in the back-end:

- Express: A web application framework for Node.js.
- text-encoding-utf-8: A library for encoding and decoding text in UTF-8 format.

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository from GitHub:

```shell
git clone https://github.com/YossiElgazari/devops_project.git
```

2. Change into the project directory:

```shell
cd devops_project
```

3. Install the project dependencies:

```shell
npm install
```

## Usage

To start the project, run the following command:

```shell
npm start
```

This will start the Node.js server, and you can access the web page in your browser by navigating to [http://localhost:3000](http://localhost:3000).

Once the web page is loaded, you can enter a student's name and three grades in the input fields and click the "Save" button to store the grades in the local storage. The "View" button will display a table with all the saved grades, and the "Hide" button will hide the table. The "Delete Data" button can be used to clear all saved grades from the local storage.

## Contributors

- Yossi Elgazari
- Shai Matzliach

If you have any questions or issues, please contact the project contributors.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
