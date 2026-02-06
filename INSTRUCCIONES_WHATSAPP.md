# 📱 Cómo configurar el envío a WhatsApp

## Configuración rápida

### 1. Editar el número de WhatsApp

Abre el archivo `lastpage.html` y busca esta línea (cerca del final):

```javascript
<button class="whatsapp-button" onclick="sendToWhatsApp('TU_NUMERO_AQUI')">
```

Cambia `'TU_NUMERO_AQUI'` por tu número de WhatsApp en formato internacional **SIN** el símbolo + ni espacios.

**Ejemplos:**
- Suiza: `41791234567` (41 es el código de país, 79 es el prefijo móvil)
- España: `34612345678`
- México: `521234567890`
- USA: `15551234567`

**Ejemplo final:**
```javascript
<button class="whatsapp-button" onclick="sendToWhatsApp('41791234567')">
```

## ¿Cómo funciona?

1. **Navegación normal**: El usuario selecciona comida, postre y actividades
2. **Guardado automático**: Cada selección se guarda en el navegador (localStorage)
3. **Botón de WhatsApp**: Al final, en `lastpage.html`, hay un botón para enviar todo
4. **Envío directo**: Al hacer clic, se abre WhatsApp con un mensaje formateado con todas las selecciones

## Ejemplo del mensaje que se enviará:

```
💝 Mis selecciones para nuestra cita de San Valentín 💝

🍽️ *Comida:*
  • pizza
  • sushi

🍰 *Postre:*
  • mochi
  • churro

🎮 *Actividades:*
  • arcade
  • cinema
```

## Alternativas (si quieres usar otra opción)

### Opción 2: Enviar por Email usando FormSubmit

1. Visita https://formsubmit.co/
2. Registra tu email
3. Agrega este código en lugar del botón de WhatsApp:

```html
<form action="https://formsubmit.co/tu-email@ejemplo.com" method="POST">
  <input type="hidden" name="_subject" value="Selecciones de San Valentín">
  <input type="hidden" name="comida" id="foodInput">
  <input type="hidden" name="postre" id="dessertInput">
  <input type="hidden" name="actividades" id="activitiesInput">
  <button type="submit">Enviar por email</button>
</form>
```

### Opción 3: Google Forms

Crea un Google Form y usa la API para enviar las respuestas directamente.

## Notas importantes

- ✅ **No necesitas servidor** - Todo funciona en el cliente
- ✅ **Funciona en móvil y desktop** - WhatsApp se abre automáticamente
- ✅ **Las selecciones se guardan** - Si la persona vuelve atrás, sus elecciones están ahí
- ⚠️ **Solo funciona con HTTPS** - Si subes a GitHub Pages u otro hosting, funcionará perfectamente

## Problema común

Si el botón no aparece o no funciona:
1. Verifica que el archivo `js/selections.js` existe
2. Abre la consola del navegador (F12) y revisa si hay errores
3. Asegúrate de que el número está en formato correcto (sin + ni espacios)
