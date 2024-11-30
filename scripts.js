
let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);

import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBaV_eUkE_ciVDeU9fpdLviTD8tJVJ6KMY",
    authDomain: "paginamariachi-2e9da.firebaseapp.com",
    projectId: "paginamariachi-2e9da",
    storageBucket: "paginamariachi-2e9da.firebasestorage.app",
    messagingSenderId: "920194758561",
    appId: "1:920194758561:web:4f7631889578f85c97bde0",
    measurementId: "G-WFCJXG8ZM9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase inicializado:", app);

const analytics = getAnalytics(app);
console.log("Analytics inicializado:", analytics);

const db = getFirestore(app);
console.log("Firestore inicializado:", db);

// Manejo del formulario
const form = document.getElementById("contact-form");
const result = document.getElementById("form-result");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Evitar el envío por defecto

  // Obtener valores del formulario
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  try {
    console.log("Intentando guardar en Firestore...");
    await addDoc(collection(db, "contactos"), {
      name,
      email,
      phone,
      message,
      timestamp: new Date(),
    });

    result.textContent = "Formulario enviado con éxito.";
    console.log("Datos guardados correctamente.");
    form.reset(); // Limpiar formulario
  } catch (error) {
    result.textContent = "Error al enviar el formulario. Inténtalo de nuevo.";
    console.error("Error al guardar en Firestore:", error);
  }
});

