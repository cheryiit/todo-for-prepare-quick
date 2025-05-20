# Study & Interview Preparation Todo App

A simple, elegant application for organizing and tracking your study or interview preparation materials. This app lets you structure topics, subtopics, and detailed descriptions in a nested, organized format.

## 🌟 Features

- **Organized Structure**: Keep your study materials neatly arranged in a hierarchical format
- **Customizable Content**: Fully customize topics, sections, and descriptions
- **Progress Tracking**: Track your learning progress
- **Clean UI**: Distraction-free interface focused on your content

## 🚀 Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/todo-for-prepare-quick.git
   cd todo-for-prepare-quick
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Set up your data
   ```bash
   cp data.js.example data.js
   # Then edit data.js with your own content
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## 📝 Customizing Your Content

The app's content is driven by the `data.js` file. This file follows a specific structure to organize your topics:

```javascript
const todoData = {
  "main_topic": {
    "title": "Your Topic Title",
    "sections": {
      "section_id": {
        "title": "Section Title",
        "items": [
          {
            "id": "unique-id",
            "text": "Item Name",
            "description": "Detailed description",
            "subItems": [
              // Nested items
            ]
          }
        ]
      }
    }
  }
};
```

Check `data.js.example` for a more detailed template and examples.

## 💡 Why `data.js` is Not in .env

I've intentionally kept `data.js` separate from environment variables and included it in the repository because:

1. **Open Source Learning**: I believe in sharing knowledge and learning resources openly
2. **Collaboration**: This allows others to see how I structure my study materials
3. **Transparency**: I'm proud of what I'm learning and don't mind sharing it publicly

Feel free to modify this approach if you prefer to keep your study content private.

## 🔧 Customization Options

You can customize this app in several ways:

- **Content**: Edit the `data.js` file to include your own topics
- **Styling**: Modify the CSS to match your preferred aesthetic
- **Features**: Extend the app with additional features like search, filtering, or user accounts

## 📚 Use Cases

- **Interview Preparation**: Organize topics for technical interviews
- **Exam Study**: Structure your study materials for exams
- **Learning Roadmaps**: Create roadmaps for learning new technologies
- **Knowledge Base**: Build your personal knowledge base of concepts

## 🤝 Contributing

Contributions are welcome! If you have ideas for improvements or have found bugs, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📬 Contact

If you have any questions or want to reach out, feel free to create an issue or contact me directly.

---

Happy studying! 📚
