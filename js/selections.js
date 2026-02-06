// Almacenar las selecciones del usuario
const selections = {
  food: [],
  dessert: [],
  activities: []
};

// Cargar selecciones desde localStorage
function loadSelections() {
  const saved = localStorage.getItem('valentineSelections');
  if (saved) {
    Object.assign(selections, JSON.parse(saved));
  }
}

// Guardar selecciones en localStorage
function saveSelections() {
  localStorage.setItem('valentineSelections', JSON.stringify(selections));
}

// Guardar selecciones de comida
function saveFoodSelections() {
  selections.food = [];
  document.querySelectorAll('input[name="food"]:checked').forEach(checkbox => {
    selections.food.push(checkbox.value);
  });
  saveSelections();
}

// Guardar selecciones de postre
function saveDessertSelections() {
  selections.dessert = [];
  document.querySelectorAll('input[name="dessert"]:checked').forEach(checkbox => {
    selections.dessert.push(checkbox.value);
  });
  saveSelections();
}

// Guardar selecciones de actividades
function saveActivitySelections() {
  selections.activities = [];
  document.querySelectorAll('input[name="activities"]:checked').forEach(checkbox => {
    selections.activities.push(checkbox.value);
  });
  saveSelections();
}

// Restaurar checkboxes marcados al cargar la página
function restoreCheckboxes(type) {
  loadSelections();
  if (selections[type] && selections[type].length > 0) {
    selections[type].forEach(value => {
      const checkbox = document.querySelector(`input[name="${type}"][value="${value}"]`);
      if (checkbox) {
        checkbox.checked = true;
      }
    });
  }
}

// Enviar a WhatsApp
function sendToWhatsApp(phoneNumber) {
  loadSelections();
  
  let message = "Yo, Andrea Orellana, acepto tu invitacion <3\n\n";
  message += "Estas son mis selecciones para nuestra cita el sabado 14 de febrero en casita:\n\n";
  
  if (selections.food.length > 0) {
    message += "*** COMIDA ***\n";
    selections.food.forEach(item => {
      message += `  > ${item}\n`;
    });
    message += "\n";
  }
  
  if (selections.dessert.length > 0) {
    message += "*** POSTRE ***\n";
    selections.dessert.forEach(item => {
      message += `  > ${item}\n`;
    });
    message += "\n";
  }
  
  if (selections.activities.length > 0) {
    message += "*** ACTIVIDADES ***\n";
    selections.activities.forEach(item => {
      message += `  > ${item}\n`;
    });
  }
  
  // Codificar el mensaje para URL
  const encodedMessage = encodeURIComponent(message);
  
  // Abrir WhatsApp con el mensaje
  // Formato internacional del número sin + ni espacios, ej: 41791234567
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  // Abrir en segundo plano sin cambiar el foco
  const whatsappWindow = window.open(whatsappURL, '_blank');
  if (whatsappWindow) {
    whatsappWindow.blur();
    window.focus();
  }
}

// Limpiar todas las selecciones
function clearAllSelections() {
  localStorage.removeItem('valentineSelections');
  selections.food = [];
  selections.dessert = [];
  selections.activities = [];
}
