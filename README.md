### **🇺🇦 Українська версія**

# Nice Gadgets Store

Сучасний e-commerce застосунок для продажу гаджетів, побудований на **Next.js 15.5.3**, **React 19** та **Tailwind v4**. Проєкт демонструє гібридний підхід до рендерингу, що поєднує потужність серверних компонентів для максимальної продуктивності та SEO з гнучкістю клієнтського керування станом за допомогою Redux Toolkit.

**[➡️ LIVE DEMO](https://gadgets-e-store.vercel.app/)**

## 🚀 Ключові особливості архітектури

- **Гібридний рендеринг:** Критично важливий контент (сторінки товарів, категорій) попередньо рендериться на **сервері** для миттєвого завантаження та ідеальної індексації пошуковими системами. Інтерактивні елементи та другорядні дані завантажуються на **клієнті**.
- **Централізована логіка даних:** Весь доступ до даних інкапсульовано в **сервісному шарі**, що робить код чистим, DRY (Don't Repeat Yourself) та легким для масштабування (наприклад, для переходу з JSON на базу даних).
- **Просунуте керування станом:**
  - **RTK Query** використовується для роботи з серверним станом: кешування, автоматичне оновлення та обробка стану завантаження API-запитів.
  - **Redux Slices** керують клієнтським станом (кошик, обране).
  - **Redux Persist** надійно зберігає стан кошика та обраних товарів у `localStorage`.
- **Компонентна архітектура:** Проєкт слідує патерну "розумних" (контейнери) та "дурних" (презентаційні) компонентів, що забезпечує високу перевикористовуваність та легкість підтримки.
- **Динамічний роутинг:** Використовує `generateStaticParams` для статичної генерації сторінок товарів та категорій, забезпечуючи максимальну продуктивність та автоматичну обробку 404 помилок.

---

### Технології

- ReactJS
- NextJS
- Redux Toolkit
- RTK Query
- Redux Persist
- Tailwind v4
- Framer Motion

### Команда

- [**Tech Lead**] ([https://github.com/ArturShmidt](https://github.com/ArturShmidt)) - Arthur Shmidt
- [**Tech PM**] ([https://github.com/MykytaMusaiev](https://github.com/MykytaMusaiev)) - Mykyta Musaiev
- [**Developer**] (https://github.com/YevheniiKa) - Yevhenii Kaliaiev
- [**Developer**] (https://github.com/iastivka) - Andrii Poliukh

---

### **🇬🇧 English Version**

# Nice Gadgets Store

A modern e-commerce application for selling gadgets, built with **Next.js 15.5.3**, **React 19**, and **Tailwind v4**. This project demonstrates a hybrid rendering approach, combining the power of Server Components for maximum performance and SEO with the flexibility of client-side state management using Redux Toolkit.

**[➡️ LIVE DEMO](https://gadgets-e-store.vercel.app/)**

## 🚀 Key Architectural Features

- **Hybrid Rendering:** Critical content (product pages, category pages) is pre-rendered on the **server** for instant loads and perfect search engine indexing. Interactive elements and secondary data are loaded on the **client**.
- **Centralized Data Logic:** All data access is encapsulated in a **service layer**, making the code clean, DRY (Don't Repeat Yourself), and easy to scale (e.g., migrating from JSON to a database).
- **Advanced State Management:**
  - **RTK Query** is used for server state management, handling caching, automatic refetching, and API loading states.
  - **Redux Slices** manage client-side state (shopping cart, favorites).
  - **Redux Persist** reliably saves the cart and favorites state to `localStorage`.
- **Component Architecture:** The project follows the "smart" (container) and "dumb" (presentational) component pattern, ensuring high reusability and maintainability.
- **Dynamic Routing:** Utilizes `generateStaticParams` for static generation of dynamic product and category pages, ensuring maximum performance and automatic 404 handling.

---

### Technologies Used

- ReactJS
- NextJS
- Redux Toolkit
- RTK Query
- Redux Persist
- Tailwind v4
- Framer Motion

### Team

- [**Tech Lead**] ([https://github.com/ArturShmidt](https://github.com/ArturShmidt)) - Arthur Shmidt
- [**Tech PM**] ([https://github.com/MykytaMusaiev](https://github.com/MykytaMusaiev)) - Mykyta Musaiev
- [**Developer**] ([https://github.com/YevheniiKa](https://github.com/YevheniiKa)) - Yevhenii Kaliaiev
- [**Developer**] ([https://github.com/iastivka](https://github.com/iastivka)) - Andrii Poliukh
