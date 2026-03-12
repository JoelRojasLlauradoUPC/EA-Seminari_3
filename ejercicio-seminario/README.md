# 🎓 Ejercicio Seminario: Relaciones en Mongoose

Este ejercicio práctico te ayudará a entender cómo conectar modelos en MongoDB usando **Mongoose** y cómo exponer esas relaciones de forma profesional en una API.

---

## ✅ Checklist: ¿Qué hay que hacer exactamente?
Para completar el seminario con éxito, debes cumplir estos **4 puntos**:

1.  **[ ✅] Definir la Relación**: Haz que el modelo `Organizacion` sepa quiénes son sus `Usuarios`.
--> Escullo l'estrategia B per definir la relació, de tal manera q s'eviten les dades duplicades i no es guarden IDs a la BBDD
2.  **[✅ ] Poblar Datos (Populate)**: Haz que al listar organizaciones (`GET /organizaciones`), aparezca la información de sus usuarios.
--> Implementat, cada organització retorna usuaris
3.  **[✅ ] Crear Nuevo Endpoint**: Implementa `GET /organizaciones/:id/usuarios` para filtrar usuarios por empresa.
--> Done, sense dificultats
4.  **[ ✅] Documentar**: Todo el código nuevo debe estar reflejado en **Swagger** (`/api`).
--> Documentat + EXTRA: Interfaç web SWAGGER

---

## 🏗️ El Escenario
Actualmente, el proyecto tiene dos modelos que "no se hablan":
- El **Usuario** guarda el ID de su organización.
- La **Organización** no tiene ni idea de qué usuarios tiene.

**Tu misión**: Conectar ambos lados para que la información fluya.

---

## 🛠️ Elige tu estrategia
No hay una única forma de hacerlo. En este seminario te proponemos comparar dos:

### Opción A: El "Vector Manual" (Array de IDs)
Consiste en guardar físicamente un array de IDs dentro del documento de la Organización.
- **Cuándo elegirla**: Si quieres control total y sabes que el array no será gigante.
- **Dificultad**: Media (requiere estar sincronizando `$push` y `$pull` en los controladores).
- **Ejemplo**: Mira la carpeta `./manual_vector`.

### Opción B: "Virtuals" (La vía Mongoose) - RECOMENDADO --> escullo aquesta opció
Mongoose busca los usuarios "al vuelo" basándose en el ID de la organización. No guarda nada extra en la base de datos.
- **Cuándo elegirla**: Siempre que busques escalabilidad y limpieza de código.
- **Dificultad**: Alta (configuración inicial del modelo) pero **Mantenimiento**: Muy Bajo.
- **Ejemplo**: Mira la carpeta `./virtuals`.

---

## 🔥 El Gran Reto: Nuevo Endpoint
Debes crear un endpoint específico:
### `GET /organizaciones/:organizacionId/usuarios`

**Requisitos obligatorios:**
1. **Lógica**: Implementar la función en el controlador y definir la ruta.
2. **Swagger**: Es **obligatorio** documentar este nuevo endpoint con sus parámetros y respuestas (200 OK y 404 Not Found).
3. **Verificación**: Comprobar que aparece correctamente en la URL `/api`.

---

## 📂 Archivos clave a modificar
- 📄 `src/models/Organizacion.ts`: Para definir la relación (ya sea virtual o por array).
- 📄 `src/services/Organizacion.ts`: Para añadir la lógica de negocio y filtros.
- 📄 `src/controllers/Organizacion.ts`: Para recibir la petición y llamar al servicio.
- 📄 `src/routes/Organizacion.ts`: Para registrar la nueva ruta y su documentación Swagger.

---

## 🚀 Cómo empezar
1. Lee los ejemplos en las carpetas `manual_vector` y `virtuals` para entender las diferencias.
2. Elige una estrategia.
3. ¡Manos a la obra! Modifica el código y prueba con  Swagger.
