
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

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB8eBcTHGHE6y977rBnypXYzEM-HUQZLyY",
  authDomain: "paginamariachi-2326c.firebaseapp.com",
  projectId: "paginamariachi-2326c",
  storageBucket: "paginamariachi-2326c.firebasestorage.app",
  messagingSenderId: "243443928369",
  appId: "1:243443928369:web:aeff2f9da6b8e6e2da3410",
  measurementId: "G-D4YVFCBK99"
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

