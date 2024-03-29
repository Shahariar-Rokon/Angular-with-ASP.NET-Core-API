# ASP.NET Core API with Angular 17 (No Standalone)


## Description

This project was created to demonstrate **Angular 17** using an **ASP.NET Core API**.  The strength of this project is that it smplifies the api and frontend relationship. 
This project utilizes **No Standalone** method for Angular.
To create no standalone component when creating angular application, you need to use command `ng new AppName --no-standalone`. In this way, the angular uses **app.module.ts** to track modules.
In this project, I've created a hypothetical scenario about a software where you can:

- Perform **CRUD** operation on products.
- Add multiple products into a single category.
- Submit data using angular form.
- Master details relationship.

This project is intended to showcase the features and capabilities of ASP.NET API and Angular 17. Feel free to explore the code and provide any feedback or contributions.
## Installation

### Prerequisite
- Visual Studio 2019 or later.
- Latest Visual Studio Code
- You must have Node.Js. You can download it from https://nodejs.org/en/download/.
- You must have angular cli. You can install the cli using `npm install -g @angular/cli` command in the command prompt.
- You have to set execution policy in the local machine. You can do this by entering `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned` in the **Windows PowerShell**. 

To install and run this project, follow these steps:

1. **Clone the repository**: Clone the repository to your local machine using the GitHub CLI command:

   ```shell
   gh repo clone Shahariar-Rokon/Angular-with-ASP.NET-Core-API
  Alternatively, you can download the ZIP file from the GitHub repository page: https://github.com/Shahariar-Rokon/Angular-with-ASP.NET-Core-API.git 
  
2. Open the project in Visual Studio 2022: Open Visual Studio 2022 and select “Open a project or solution”. Navigate to the folder where you cloned or downloaded the repository and select the .sln file.
3. Restore the NuGet packages: Right-click on the solution in the Solution Explorer and select “Restore NuGet Packages”. This will install the required dependencies for the project.
4. Update the database connection string: In the appsettings.json file, update the DefaultConnection value with your database connection string. Make sure the database server is running and accessible.
5. Apply the database migrations: In the Package Manager Console, run the following command to apply the code first migrations and create the database schema:
 `Update-Database`
6. Run the project: Press F5 or click the “Run” button to launch the api named **ProductAPI** in your browser.
7. Move to the directory of the **AngularApp** and open the folder. Now run `code .` in the terminal and enter. This will open all of the files of angular.
8. Open terminal in vs code and enter `ng serve` or `ng serve --o`. If you chose `ng serve` then you have to menually copy the url (generated in the terminal) to a browser.

## Usage

To use this project, follow these steps:

1. **Navigate to the app**: Open your browser and go to the URL where the app is hosted. For example, `https://localhost:4200/`.
2. **Interact with the app**: The app will load a HTML page and greet you with the list of the products. If its blank, that means there is no products in the database. From there you can press the **Add product** button to add the products or **View Products** to view details. Finally, the options for editing and deleting the product appear along with the list of products.
3. **Explore the code**: You can open the project in Visual Studio 2022 and explore the code. The project consists of razor view, modals and for backend asp.net mvc.

## Contributing

We welcome contributions from anyone who is interested in improving this project. Here are some ways you can contribute:

- Report bugs or suggest features by opening an issue.
- Fix bugs or implement features by submitting a pull request.
- Review pull requests and provide feedback.
- Write or update documentation, tests, or examples.
- Share your experience or feedback with the project.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
