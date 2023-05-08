# MERN Stack Starter

This is a fully loaded MERN Stack to help you get started on your projects faster.  This is set up with the ability to connect with MongoDB or MySQL. I used Mongoose ORM for MongoDB and Sequelize ORM for MySQL.

**Back-End**:  
[Axios](https://www.npmjs.com/package/axios)  
[Cors](https://www.npmjs.com/package/cors)  
[Dotenv](https://www.npmjs.com/package/dotenv)    
[Express](https://www.npmjs.com/package/express)    
[MongoDB](https://www.mongodb.com/)  
[Mongoose](https://www.npmjs.com/package/mongoose)  
[Morgan](https://www.npmjs.com/package/morgan)    
[Mysql2](https://www.npmjs.com/package/mysql2)    
[Pm2](https://www.npmjs.com/package/pm2)     
[Sequelize](https://sequelize.org/docs/v6/getting-started/)  

**Front-End**:  
[Vite](https://v3.vitejs.dev/) for React  
[Tailwind CSS](https://tailwindcss.com/docs/responsive-design)    
[Redux Toolkit](https://redux-toolkit.js.org/tutorials/quick-start)    
[Axios](https://www.npmjs.com/package/axios)    
[Heroicons](https://github.com/tailwindlabs/heroicons)  
  

## Installation

Use [npm](https://www.npmjs.com/) to install.  
After downloading the files in the root directory run:  

```node
npm run install-stack
```  
After all the dependencies have been installed, in the root directory run:
```npm
npm run watch
```  
This will launch the NodeJS dev serve and the ReactJS client.  

To build for deployment, in the root directory run:
```npm
npm run deploy
```  

## Usage
In the rename **env.copy** to **.env** and add the appropriate values to the variables provided. Feel free to add any variables you need for your project.  

```
# Example 
PORT= 5000

# If using MongoDB
MONGO_URL = <URL to your mongoDB>

# If using MySQL
MYSQL_USERNAME = "root"
MYSQL_PASSWORD = "password"
MYSQL_DATABASE = "test"
MYSQL_HOST = "localhost"
```


## License

[MIT](https://choosealicense.com/licenses/mit/)