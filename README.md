# school-management-system-api
This server functions as a school management system, catering to users such as teachers, administrators, and students. Prior to accessing the application, administrators must first register teachers and students within the server. Administrators possess the capability to create, modify, and remove student and teacher profiles, along with managing academic year details, academic terms, programs, subjects, and class levels. Teachers are empowered to generate exams and compose questions for these exams, while students are able to participate in exams. Additionally, administrators hold the authority to publish or unpublish exam results.

## Functionalities

- **Authentication** 
- **Create Admin, teacher and student credentials**
- **Delete teacher and student credentials**
- **Update teacher, admin and student credentials**
- **View teachers and students by ID**
- **Admin can publish/unpublish exam results**
- **Students can view exam results**
- **Teacher can create exams and create questions for the exam**

### Getting Started

To get started with this project, follow these steps:

1. Fork this repository

1. Clone this repository to your local machine:

```bash
git clone https://github.com/ehteshamtarq/school-management-system-api.git
```

2. Install the required dependencies for both the backend and frontend:

```bash
cd school-management-system-api
npm install
```

3. Configure the database connection in the backend. You can use MongoDB Atlas or a local MongoDB server.


4. Start the backend server:

```bash
npm start
```


6. Access the application in your web browser at [http://localhost:5000](http://localhost:5000).

7. You can access Swagger UI docs at [http://localhost:5000/api-docs](http://localhost:5000/api-docs)

## Deployment
[Live](https://school-management-system-api.onrender.com/api-docs/)
