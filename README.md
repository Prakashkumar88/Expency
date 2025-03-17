# Expency - Expense Tracker App

Expency is a comprehensive expense tracking application that helps users manage their income and expenses efficiently. With an intuitive UI, interactive charts, and powerful financial management tools, Expency ensures you stay on top of your financial health.

## Features

### User Authentication
- Secure login and sign-up using JWT authentication.
- Profile image upload for a personalized experience.

### Dashboard Overview
- Displays Total Balance, Income, and Expenses in summary cards.
- Quick access to recent transactions.
- Visual financial overview with charts.

### Income Management
- Add, view, and delete income sources.
- Download income details in Excel format.

### Expense Management
- Add, view, and delete expenses with category-based tracking.
- Download expense details in Excel format.

### Interactive Charts
- Bar, Pie, and Line charts to visualize income and expenses.
- Last 30 days expenses and 60 days income insights.

### Reports & Export
- Download detailed reports of income and expenses.
- Data available in Excel format for easy tracking.

### Mobile Responsive UI
- Works seamlessly across desktops, tablets, and mobile devices.

### Intuitive Navigation
- Sidebar menu with easy access to Dashboard, Income, Expenses, and Logout.

### Delete Functionality
- Hover over income/expense cards to reveal a delete button for quick removal.

---

## Tech Stack

### Frontend
- React.js
- Tailwind CSS v4
- Axios for API requests
- React Router for navigation
- Recharts for data visualization

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Multer for image uploads

---

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (>= 16.0.0)
- MongoDB (Local or Cloud instance)

### Clone the Repository
```sh
git clone https://github.com/yourusername/expency.git
cd expency
```

### Backend Setup
```sh
cd backend
npm install
```

#### Environment Variables
Create a `.env` file in the main directory and add:
```
MONGO_URI = 
JWT_SECRET = 
VITE_BASE_URL=
CLIENT_URL = 
PORT = 8000
```

#### Start Backend Server
```sh
npm start
```

### Frontend Setup
```sh
cd frontend
npm install
```


### Running the App
Once both servers are running, open [http://localhost:8000](http://localhost:8000) in your browser.

---

## API Endpoints

### Authentication
- `POST /api/auth/signup` – User registration
- `POST /api/auth/login` – User login
- `GET /api/auth/user` – Fetch user details

### Income
- `POST /api/income/add` – Add income
- `GET /api/income` – Get all income sources
- `DELETE /api/income/:id` – Delete an income source
- `GET /api/income/download` – Download income report

### Expenses
- `POST /api/expense/add` – Add expense
- `GET /api/expense` – Get all expenses
- `DELETE /api/expense/:id` – Delete an expense
- `GET /api/expense/download` – Download expense report

### Dashboard
- `GET /api/dashboard` – Fetch dashboard data

---

## Future Improvements
- Implement recurring transactions.
- Add budget planning features.
- Multi-currency support.
- Enhanced analytics and insights.

---

## Contributing
Contributions are welcome! If you'd like to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## License
This project is licensed under the MIT License.

---

## Contact
For any queries or suggestions, feel free to reach out via [9101prakashkumar@gmail.com](mailto:9101prakashkumar@gmail.com).

