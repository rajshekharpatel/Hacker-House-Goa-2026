# 🚀 HHG 2026 — Builder Card Generator

<div align="center">

### Hacker House Goa 2026 Builder Card Generator

Create your personalized **Hacker House Goa 2026 Builder Card**, preview it in real time, and download it as a high-quality PNG.

**Build · Ship · Repeat 🚀**

</div>

---

## 🌐 Live Demo

🔗 **Live Project:** `ADD_YOUR_DEPLOYED_LINK_HERE`

---

## 📸 Project Preview

> Add screenshots of your application here
---

# ✨ Features

### 🪪 Personalized Builder Card

Enter your builder information and generate a personalized Hacker House Goa 2026 card.

### 👀 Live Preview

The card updates instantly as the user enters or changes information.

### 📥 Download as PNG

Export the generated card as a high-resolution PNG image.

Example filename:

```text
HHG-2026-builder-name-card.png
```

### 📤 Share Card

Share the generated card using the browser's native sharing functionality when supported.

### 𝕏 Share on X / Twitter

Share your Builder Card directly to X/Twitter with a pre-generated message.

### 🎨 Modern UI

Designed with a modern Hacker House-inspired visual style.

### 📱 Responsive

Works across desktop, tablet, and mobile screen sizes.

### ⚡ Fast

Built with Vite for a fast development and production experience.

---

# 🛠️ Tech Stack

| Technology    | Purpose                  |
| ------------- | ------------------------ |
| React         | Frontend UI              |
| Vite          | Development & build tool |
| JavaScript    | Application logic        |
| CSS           | Styling                  |
| html-to-image | PNG card export          |
| Lucide React  | Icons                    |
| QRCode React  | QR code generation       |

---

# 📂 Complete Project Structure

```text
HHG-Card_generator/
│
├── public/
│   │
│   └── ...                         # Public assets
│
├── src/
│   │
│   ├── assets/
│   │   └── ...                     # Images and static assets
│   │
│   ├── components/
│   │   ├── Card.jsx                # Builder card
│   │   ├── ExportButton.jsx        # Download & sharing buttons
│   │   └── ...                     # Other UI components
│   │
│   ├── utils/
│   │   └── exportCard.js           # PNG export functionality
│   │
│   ├── App.jsx                     # Main application
│   ├── main.jsx                    # React entry point
│   └── styles.css                  # Global styles
│
├── screenshots/
│   ├── builder-card.png
│   └── card-generator.png
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

# 🔄 How It Works

```text
User enters details
        │
        ▼
   React State
        │
        ▼
   Live Card Preview
        │
        ├───────────────┐
        │               │
        ▼               ▼
   Download PNG      Share Card
        │               │
        ▼               ▼
 html-to-image     Web Share API
        │
        ▼
 High Resolution PNG
```

---

# 📥 Installation

## 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

## 2. Open the project

```bash
cd HHG-Card_generator
```

## 3. Install dependencies

```bash
npm install
```

If the required packages are not already installed:

```bash
npm install html-to-image qrcode.react lucide-react
```

## 4. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL, usually:

```text
http://localhost:5173
```

Open the URL in your browser.

---

# 🧑‍💻 Development

The application starts from:

```text
src/main.jsx
```

which renders:

```text
App.jsx
```

The main application contains the Builder Card generator and its supporting components.

---

# 📥 PNG Export System

The card export functionality is handled by:

```text
src/utils/exportCard.js
```

The project uses:

```javascript
import { toPng } from "html-to-image";
```

The card DOM element is converted into a PNG image.

The export process:

```text
Card DOM
   ↓
html-to-image
   ↓
Canvas
   ↓
PNG Data URL
   ↓
Browser Download
```

The export function also waits for:

* Fonts to load
* Images to load
* Browser rendering to complete

before generating the PNG.

---

# 📤 Sharing System

The project provides multiple sharing options.

## 1. Download

Downloads the Builder Card directly:

```text
DOWNLOAD ID CARD
```

## 2. X / Twitter

Generates a sharing URL containing the builder information.

Example:

```text
I just created my Hacker House Goa 2026 Builder Card 🚀

Builder Name · Builder Class

#HHGoa2026
#HackerHouseGoa
#BuildShipRepeat
```

## 3. Native Share

On supported browsers/devices, the application uses:

```javascript
navigator.share()
```

to share the generated card.

---

# 📦 Important Dependencies

### html-to-image

Used to convert the HTML card into a PNG.

```bash
npm install html-to-image
```

### Lucide React

Used for interface icons.

```bash
npm install lucide-react
```

### QRCode React

Used for generating QR codes.

```bash
npm install qrcode.react
```

---

# 🚀 Production Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

# ☁️ Deployment

This project can be deployed using platforms such as:

* Vercel
* Netlify
* GitHub Pages

For Vercel:

```bash
npm run build
```

Then connect the GitHub repository to Vercel.

### Recommended Vercel Settings

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
```

---

# 🐛 Troubleshooting

## Export button doesn't work

Check the browser console:

```text
F12 → Console
```

Make sure:

* The card reference exists
* Images have loaded
* Fonts have loaded
* `html-to-image` is installed

Install it again if necessary:

```bash
npm install html-to-image
```

---

## Vite cannot find a CSS file

For example:

```text
Failed to resolve import "./styles.css"
```

Make sure the file exists:

```text
src/styles.css
```

and that `main.jsx` contains:

```javascript
import "./styles.css";
```

---

## Dependencies not found

Run:

```bash
npm install
```

Then restart Vite:

```bash
npm run dev
```

---

# 🔐 Environment Variables

Currently, this project does not require any sensitive environment variables.

If environment variables are added in the future, create:

```text
.env
```

and never commit sensitive credentials to GitHub.

---

# 🧪 Testing Checklist

Before deployment, verify:

```text
☑ Builder Card loads
☑ User information updates correctly
☑ Card preview works
☑ Images load correctly
☑ QR code works
☑ Download button works
☑ PNG export works
☑ Share button works
☑ X/Twitter sharing works
☑ Mobile layout works
☑ Desktop layout works
☑ Production build succeeds
```

---

# 📊 Project Workflow

```text
┌─────────────────────┐
│     User Input      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│    React State      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   Builder Card UI   │
└──────────┬──────────┘
           │
     ┌─────┴─────┐
     │           │
     ▼           ▼
 Download      Share
     │           │
     ▼           ▼
html-to-image  Web API
     │
     ▼
  PNG Image
```

---

# 🎯 Future Improvements

Possible future improvements:

* [ ] Multiple card designs
* [ ] More customization options
* [ ] QR code customization
* [ ] Additional social sharing options
* [ ] Animated card preview
* [ ] Dark/light theme
* [ ] Better mobile optimization
* [ ] Card history
* [ ] Backend storage
* [ ] User authentication
* [ ] Automatic event verification

---

# 🤝 Contributing

Contributions are welcome.

### 1. Fork the repository

### 2. Create a new branch

```bash
git checkout -b feature/your-feature
```

### 3. Make your changes

### 4. Commit your changes

```bash
git add .
git commit -m "Add new feature"
```

### 5. Push your branch

```bash
git push origin feature/your-feature
```

### 6. Open a Pull Request

---

# 📄 License

This project is created for educational, hackathon, and community purposes.

---

# 👨‍💻 Author

**Raj Shekhar Patel**

Frontend Developer | React Developer

### Tech Interests

```text
React
JavaScript
Frontend Development
Full Stack Development
Web Development
```

---

<div align="center">

## 🚀 Build · Ship · Repeat

### Hacker House Goa 2026

**#HHGoa2026 #HackerHouseGoa #BuildShipRepeat**

</div>
```
