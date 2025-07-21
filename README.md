
# 🏨 TravelLodge

A full-stack travel accommodation platform built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) with integrated **authentication**, **dynamic city listings**, and **Mapbox** for location services.

## 🚀 Features

- 🌍 Browse properties in multiple cities
- 🧭 Interactive maps using Mapbox
- 🔐 User authentication (Login/Register)
- 🏘 Add and manage listings
- 📱 Responsive UI for all devices
- 💬 Flash messaging for alerts
- 🗃 Backend powered by MongoDB Atlas

---

## 🔧 Tech Stack

### Frontend
- React.js
- Tailwind CSS / Bootstrap (if used)
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Passport.js (for authentication)
- Cloudinary (for image uploads)
- dotenv, express-session, connect-mongo, method-override

---

## 📂 Project Structure
TravelLodge/
├── client/ # React frontend
│ ├── components/
│ ├── pages/
│ └── App.js
├── models/ # Mongoose schemas
├── routes/ # Express route handlers
├── public/ # Static files
├── utils/ # Error handlers, middlewares
├── .env
├── server.js
└── README.md

yaml
Copy
Edit

---

## 🌐 Live Demo

[🔗 Visit Live Site](https://travellodge-5emi.onrender.com) 

## 🛠️ Installation & Setup

bash
# Clone the repo
git clone https://github.com/yourusername/travellodge.git
cd travellodge

# Backend setup
npm install
npm run dev

# Frontend setup
cd client
npm install
npm start
Make sure to set up your .env file in the root folder.

🧪 .env Configuration

PORT=3000
ATLASDB_URL=your_mongo_db_atlas_url
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret
MAP_TOKEN=your_mapbox_token

🙌 Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

📜 License
This project is licensed under the MIT License.

🙋‍♂️ Author
Roshan Sahu
🔗 https://www.linkedin.com/in/roshan-sahu-467104246/


