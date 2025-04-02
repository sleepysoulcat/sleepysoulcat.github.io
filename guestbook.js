      // Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
      import { getFirestore, collection, addDoc, serverTimestamp, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

      // Your web app's Firebase configuration
      const firebaseConfig = {
          apiKey: "AIzaSyCQKw0FouA8ZpXsMjnVHObVcciod55j0EE",
          authDomain: "guestbook-aadfb.firebaseapp.com",
          projectId: "guestbook-aadfb",
          storageBucket: "guestbook-aadfb.appspot.com",
          messagingSenderId: "216181741239",
          appId: "1:216181741239:web:46ac5de47e8fd2407d9f32"
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);

      // Initialize Firestore
      const db = getFirestore(app);

      // Função para salvar mensagens
      async function saveEntry(name, message, color) {
          try {
              await addDoc(collection(db, "messages"), {
                  name: name,
                  message: message,
                  color: color,
                  timestamp: serverTimestamp()
              });
              console.log("Mensagem salva com sucesso!");
          } catch (error) {
              console.error("Erro ao salvar a mensagem: ", error);
          }
      }

      // Função para carregar as mensagens em tempo real
      function loadEntries() {
          const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
          onSnapshot(q, (snapshot) => {
              const entriesDiv = document.getElementById('gbcont');
              entriesDiv.innerHTML = ''; // Limpa as mensagens existentes

              snapshot.forEach((doc) => {
                  const entry = doc.data();
                  addEntry(entry.name, entry.message, entry.color);
              });
          });
      }

      // Função para adicionar uma mensagem na tela
      function addEntry(name, message, color,) {
          const entryDiv = document.createElement('div');
          entryDiv.className = 'entry';
          
          const nameElement = document.createElement('b');
            nameElement.style.color = '#139CB7ff';
            nameElement.style.color = color;
            nameElement.textContent = name + ": ";




          
          
          const messageElement = document.createElement('span');
          messageElement.textContent = message;
          
          entryDiv.appendChild(nameElement);
          entryDiv.appendChild(messageElement);
          
          document.getElementById('gbcont').appendChild(entryDiv);

          gbcont.scrollTop = gbcont.scrollHeight;
      }

      document.addEventListener('DOMContentLoaded', loadEntries);

      document.getElementById('guestbook-form').addEventListener('submit', function(event) {
          event.preventDefault();
          
          const name = document.getElementById('gb-name').value;
          const message = document.getElementById('gb-message').value;
          const color = document.getElementById('nameColor').value;
          
          if (name && message) {
              saveEntry(name, message, color);
              document.getElementById('guestbook-form').reset();
          }
      });
