# HCI Compass

A comprehensive Human-Computer Interaction (HCI) learning tool that helps users understand and compare fundamental HCI principles through interactive components, visual comparisons, and knowledge assessment.

## 🎯 Features

### 📚 Principles Explorer
- **Interactive Grid**: Browse through key HCI principles with detailed explanations
- **Modal Details**: Click on any principle to view comprehensive information
- **Visual Learning**: Each principle includes relevant images and examples

### 🔍 Compare Tool
- **Side-by-Side Comparison**: Compare different HCI principles side by side
- **Visual Comparison**: Interactive image comparison tool for visual learning
- **Detailed Analysis**: Understand the differences and applications of each principle

### 🧠 Knowledge Quiz
- **Interactive Assessment**: Test your understanding of HCI principles
- **Multiple Choice Questions**: Engaging quiz format with immediate feedback
- **Progress Tracking**: See your quiz performance and areas for improvement

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hci-compass
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Component Library**: Custom components with HCI-focused design

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full feature set with side-by-side comparisons
- **Tablet**: Adaptive layout with touch-friendly interactions
- **Mobile**: Hamburger menu navigation with overlay design

## 🎨 Design Principles

This application follows HCI best practices:

- **Accessibility**: ARIA labels, keyboard navigation, focus management
- **Consistency**: Uniform design language across all components
- **Feedback**: Clear visual feedback for all user interactions
- **Simplicity**: Clean, uncluttered interface design
- **Learnability**: Intuitive navigation and clear information hierarchy

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Home.tsx        # Main application component
│   ├── PrincipleModal.tsx  # Modal for principle details
│   ├── PrinciplesGrid.tsx  # Grid layout for principles
│   ├── CompareGrid.tsx     # Comparison interface
│   ├── Quiz.tsx           # Quiz component
│   └── ImageCompareModal.tsx # Image comparison modal
├── data/
│   └── hciData.ts      # HCI principles and quiz data
├── lib/
│   └── utils.ts        # Utility functions
└── pages/
    └── Home.tsx        # Home page component
```

## 🎯 Key HCI Principles Covered

- **Visibility**: Making system status and options clear to users
- **Feedback**: Providing immediate response to user actions
- **Constraints**: Limiting user actions to prevent errors
- **Mapping**: Creating logical relationships between controls and effects
- **Consistency**: Maintaining uniform design patterns
- **Affordance**: Making object functions obvious through design
- **Error Prevention**: Designing to minimize user mistakes
- **Recognition over Recall**: Using familiar patterns and clear labels

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with modern React and TypeScript
- Styled with Tailwind CSS for consistent design
- Icons provided by Lucide React
- HCI principles based on established research and best practices

---

**HCI Compass** - Your guide to understanding Human-Computer Interaction principles through interactive learning.
