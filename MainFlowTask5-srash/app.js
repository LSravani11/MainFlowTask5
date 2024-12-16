import React from "react";
import "./App.css";

const medicines = [
  {
    name: "Paracetamol",
    description: "Effective for reducing fever and mild pain relief.",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/1/378330753/FE/AP/ER/161641776/paraklear-650-500x500.jpeg",
    url: "https://en.wikipedia.org/wiki/Paracetamol",
  },
  {
    name: "Ibuprofen",
    description: "Helps alleviate inflammation and moderate pain.",
    image: "https://4.imimg.com/data4/GR/JD/MY-95289/ibu-200-2x10-500x500.jpg",
    url: "https://medlineplus.gov/druginfo/meds/a682159.html",
  },
  {
    name: "Cough Syrup",
    description: "Relieves symptoms of cold and cough effectively.",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/8/335065442/NQ/YG/JJ/66315538/cough-medicine-syrup.jpg",
    url: "https://en.wikipedia.org/wiki/Benadryl",
  },
];

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Medical Store</h1>
      </header>
      <main className="main">
        {medicines.map((medicine, index) => (
          <div className="medicine-card" key={index}>
            <img src={medicine.image} alt={medicine.name} className="medicine-image" />
            <a href={medicine.url} target="_blank" rel="noopener noreferrer">
              <h2>{medicine.name}</h2>
            </a>
            <p>{medicine.description}</p>
          </div>
        ))}
      </main>
      <h2>About Us</h2>
      <p>We provide a wide range of medicines and healthcare products at affordable prices. Your health is our priority.</p>
      <h2>Services</h2>
      <p>We offer:
        <ul>
          <li>Prescription Medicines</li>
          <li>Over-the-Counter Drugs</li>
          <li>Healthcare and Wellness Products</li>
        </ul>
      </p>
      <h2>Why Choose Us?</h2>
      <p>
        <ul>
          <li>High-quality medicines</li>
          <li>Affordable prices</li>
          <li>Quick delivery and reliable service</li>
        </ul>
      </p>
    </div>
  );
}

export default App;