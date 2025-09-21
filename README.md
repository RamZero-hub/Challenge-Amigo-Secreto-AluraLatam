# 🎁 Amigo Secreto con JavaScript  

Este proyecto es una pequeña aplicación en **JavaScript**, que permite:  
✅ Ingresar nombres de amigos en una lista.  
✅ Evitar duplicados o entradas vacías.  
✅ Mostrar la lista actualizada en la pantalla.  
✅ Sortear un **amigo secreto** al azar.  
✅ Usar la tecla **Enter** para añadir más rápido.  

---

## 🚀 Funcionalidades principales  

1. **Agregar amigos a la lista**  
   - El usuario escribe un nombre en el campo de texto.  
   - Se valida que no esté vacío ni repetido.  
   - Si es válido, se añade al arreglo `amigos` y se actualiza la lista en pantalla.  

2. **Actualizar la lista visible**  
   - Cada vez que se agrega un nombre, se limpia la lista HTML (`ul`) y se reconstruye con los nuevos valores.  
   - Esto asegura que no se repitan visualmente los elementos.  

3. **Limpiar y enfocar el campo de texto**  
   - Después de añadir un amigo (o al detectar un error), el campo vuelve a estar vacío y con el cursor listo para escribir otro nombre.  

4. **Añadir con tecla Enter**  
   - No es necesario hacer clic en el botón.  
   - Si el usuario presiona **Enter**, automáticamente se llama a la función `agregarAmigo()`.  

5. **Sortear el Amigo Secreto**  
   - Cuando se activa el sorteo, se genera un índice aleatorio con `Math.random()` y `Math.floor()`.  
   - Se muestra el resultado en otra lista HTML (`resultado`).  
   - Se limpia la lista de amigos para dar paso al resultado final.  

---

## 📂 Estructura del proyecto  

- **index.html** → Contiene el formulario, el campo de texto, la lista de amigos y el botón de sorteo.  
- **script.js** → Lógica en JavaScript con las funciones principales.  
- **Style.css** → Lógica en CSS3 para estilos personalizados.

---

## 🛠️ Tecnologías utilizadas  

- **HTML5** → Estructura de la página.  
- **CSS3** → Estilos personalizados para mejorar la presentación.  
- **JavaScript** → Toda la lógica del proyecto (validaciones, actualización de lista, sorteo).  

---

## 💡 Ideas para mejorar  

- ➕ Agregar un botón para **eliminar amigos de la lista**.  
- ⚠️ Mostrar los mensajes de error **dentro de la página**, en lugar de usar `alert()`.  
- 🎨 Aplicar estilos con **CSS** para hacerlo más atractivo y responsivo.  
- 💾 Usar **localStorage** para guardar la lista de amigos y mantenerla incluso al recargar la página.  

---
