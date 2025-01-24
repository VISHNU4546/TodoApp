# To-Do App

A simple and interactive **To-Do App** built using React.js. The app allows users to increment counts for specific colors (Blue, Yellow, Green, Red) using buttons and tracks the counts dynamically.

---

## Features

- **Dynamic Count Tracking**: Increment the count for each color (Blue, Yellow, Green, and Red) with the click of a button.
- **React Hooks**: Built using the `useState` hook to manage the state of color counts.
- **Clean and Minimal UI**: Designed with simplicity in mind, showcasing color-coded buttons.
- **Hosted on Netlify**: Easily accessible through a live URL.

---

## Demo

**Live Application**: [To-Do App](https://todoappbyakki.netlify.app/)

---

## How to Use

1. **Access the App**: Visit the live demo link above.
2. **Increment Counts**:
   - Click on the color-coded buttons (Blue, Yellow, Green, Red) to increment the respective count.
   - Watch the count dynamically update for each color.
3. **Reset the Page**: Refresh the page to reset all counts to `0`.

---

## Code Overview

### `Test Component` (Key Functionalities)

- **State Management**:
  - The app uses React's `useState` hook to maintain the state of counts for each color:
    ```javascript
    const [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
    ```

- **Event Handling**:
  - The `clickHandler` function dynamically updates the state based on the button clicked:
    ```javascript
    function clickHnadler(e) {
      let id = e.target.id;
      setMoves({ ...moves, [id]: moves[id] + 1 });
    }
    ```

- **UI Elements**:
  - Each color has:
    - A counter displaying the current count.
    - A button styled with the respective color.

---

## Installation (For Local Development)

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
