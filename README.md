# Project Setup and Overview

## Getting Started

### 1. Clone the Repository

Start by cloning the repo to your local machine:

```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Install Dependencies

Install the required packages with either `npm` or `yarn`:

```bash
npm install
# OR
yarn install
```

### 3. Start the Development Server

Run the app locally:

```bash
npm run dev
# OR
yarn dev
```

Then, open your browser and go to `http://localhost:3000` to see the app in action.

---

## How AI Tools Helped

### 1. **Mocking the Doctor Data**

I used **ChatGPT** to generate a mock list of doctors with their details (name, specialty, ratings, etc.) to quickly build out the front-end.

### 2. **Improving Accessibility**

ChatGPT also helped make the app more accessible by:

- Adding **ARIA labels** and **roles** for screen readers.
- Ensuring users can navigate and interact with elements using the **keyboard** (i.e., for buttons, tabs, etc.).

---

## Limitations & Next Steps

### 1. **Button & Rating Components**

- The **Button** and **Rating** components are basic for now. In a real app, buttons would need different styles (e.g., primary, secondary, disabled), and the rating system should be interactive so users can give ratings, not just view them.

### 2. **Error and Loading States**

- Currently, we're using mock data, but in a real app, we'd be fetching data from a backend. We need to handle things like:
  - **Loading indicators** while the data loads.
  - **Error handling** if something goes wrong with fetching data.

### 3. **Pagination**

- Right now, we’re just showing 8 doctors, but in a real app, there could be hundreds! This could cause performance issues. We’ll need to add **pagination** or **infinite scrolling** to handle large amounts of data efficiently.

### 4. **Booking Appointments - Date Picker**

- At the moment, doctors have fixed days for appointments, but in reality, their availability may vary. We’ll need to switch to a **date picker** for booking appointments, so users can select a specific date and time for their visit.

---

## Future Improvements

- **Dynamic Data Fetching**: Replace mock data with real-time API calls.
- **Pagination/Infinite Scroll**: Add pagination or infinite scrolling for the doctors list.
- **Refine Components**: Enhance buttons and ratings to support different variants.
- **Interactive Rating**: Allow users to give ratings, not just view them.
- **Date Picker**: Use a date picker for more accurate booking based on doctor availability.
