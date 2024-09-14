# WEB-PROJECTS

# QR Code Generator

This is a simple web application that allows you to generate QR codes from text input.

## Description

Encode any data into a QR code format with this user-friendly app. Perfect for creating QR codes for URLs, contact information, or any other text-based content.

## Usage

1. Open the `index.html` file in your web browser.
2. Enter the text you want to encode in the QR code in the "Enter your text or URL" field.
3. Click the "Generate QR Code" button.
4. The generated QR code will be displayed below the input field.

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

* Fork the repository.
* Create a new branch for your changes.
* Make your modifications.
* Ensure your code adheres to the existing style and includes clear documentation.
* Submit a pull request for review.

## License

This project is licensed under the MIT License (see LICENSE.md file for details).

## Authors

Alex Milenkov

## Additional Information

This application uses the free QR code generation service from `https://api.qrserver.com`. You can modify the code to use a different service if desired.

![Image description](https://github.com/AlexMilenkov1/WEB-PROJECTS/blob/main/Screenshot_2.png)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Online Task Manager
Welcome to the Online Task Manager! This application allows you to create, manage, and track your tasks easily. It features a simple and intuitive interface where you can add tasks, mark them as completed, and clear all tasks with a single click.

Features
Add Tasks: Enter your tasks into the input field and click "Add" to create a new task.
Toggle Task Completion: Click on a task to mark it as completed or uncompleted.
Remove Tasks: Click the 'x' icon next to a task to remove it.
Clear All Tasks: Click on the "Clear all tasks" link in the header to remove all tasks.
Persist Data: Your tasks are saved in local storage, so they remain even after you refresh the page.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/online-task-manager.git
Navigate into the project directory:

bash
Copy code
cd online-task-manager
Open index.html in your web browser.

File Structure
index.html: The main HTML file containing the structure of the app.
styles.css: The CSS file for styling the app.
script.js: The JavaScript file for handling the functionality of the app.
images/: Contains images used in the app (icons and buttons).
How It Works
HTML: Defines the structure of the task manager with a task input, add button, task list, and clear all tasks button.
CSS: Styles the task manager for a clean and user-friendly appearance. It includes styles for the task list, buttons, and overall layout.
JavaScript: Manages the logic for adding tasks, toggling completion status, removing tasks, and saving/loading tasks to/from local storage.
JavaScript Overview
Add Task:

Listens for a click event on the "Add" button.
Creates a new task item with a delete button.
Adds the task to the task list and saves the list to local storage.
Toggle Task Completion:

Allows users to mark a task as completed or incomplete by clicking on the task item.
Remove Task:

Deletes a task when the delete button ('x' icon) is clicked.
Clear All Tasks:

Clears all tasks from the list when the "Clear all tasks" link is clicked.
Persist Data:

Saves the current state of the task list in local storage.
Loads the saved tasks from local storage when the page is refreshed.
Contributing
Feel free to fork the repository and make contributions! If you find any bugs or have suggestions for new features, please open an issue or submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any questions or support, you can reach out to your-email@example.com.

Happy task managing! 🎉


