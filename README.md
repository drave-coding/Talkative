# 🎙️ Talkative

**Talkative** is a real-time, AI-powered coding conversation platform that allows users to create and interact with personalized coding companions. Designed for developers and learners, it provides engaging **voice-based coding mentorship**, **interview simulations**, and **technical discussions** using cutting-edge AI and speech technologies.

Built with [Next.js](https://nextjs.org), Talkative delivers a fast, responsive, and interactive user experience, supporting multiple domains such as Frontend, Backend, DSA, and more.

---

## 📌 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Properties & Constants](#properties--constants)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## 🚀 Features

- 🔧 **Create Custom Coding Companions**  
  Personalize AI mentors by choosing name, subject, voice type, and communication style.

- 🎤 **Real-Time Voice Conversations**  
  Simulate live technical interviews or coding discussions with AI via voice.

- 📚 **Multi-Domain Coverage**  
  Practice and explore:
  - Frontend Development
  - Backend Development
  - DSA (Data Structures & Algorithms)
  - Interview Questions
  - Behavioral Rounds
  - Innovation/Problem-Solving

- 🕒 **Session History**  
  Access past interactions and continue from where you left off.

- 🔐 **Authentication & User Management**  
  Secure and scalable user system powered by [Clerk](https://clerk.com).

- 🎨 **Modern, Responsive UI**  
  Built with Tailwind CSS for mobile-first performance and clean UX.

- 🗣️ **Voice Customization**  
  Select between male/female voices with casual or formal tones using 11labs.


---

## 🛠️ Tech Stack

| Layer        | Tech                                                       |
|--------------|------------------------------------------------------------|
| **Frontend** | Next.js (App Router), React, TypeScript                    |
| **Styling**  | Tailwind CSS, Custom CSS                                   |
| **Auth**     | Clerk                                                      |
| **AI/Audio** | OpenAI GPT-4, 11labs (voice), Deepgram (speech-to-text)   |
| **Database** | Supabase (PostgreSQL, Auth, Storage)                       |
| **UI/UX**    | Lottie Animations, Radix UI                                |

---

## 📁 Project Structure

```
/app                → App Router pages and layouts
/components         → Reusable UI components
/constants          → Predefined subject types, colors, voice options
/hooks              → Custom React hooks
/lib                → Utility functions and API helpers
/public             → Static assets (logo, icons, images)
/styles             → Global styles and Tailwind config
/types              → TypeScript interfaces and types
```

---

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/talkative.git
cd talkative
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

---

## 🧪 Environment Variables

Create a `.env.local` file and add the following:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="..."
CLERK_SECRET_KEY="..."
NEXT_PUBLIC_CLERK_SIGN_IN_URL="..."
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL="..."
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL="..."
NEXT_PUBLIC_SUPABASE_URL="..."
NEXT_PUBLIC_SUPABASE_ANON_KEY="..."
NEXT_PUBLIC_VAPI_WEB_TOKEN="..."
```

---

## ▶️ Usage

### 🛠️ Creating a Companion

1. Navigate to **"Build a New Companion"**.
2. Fill in:
   - Name
   - Domain/subject
   - Voice & style
   - Optional topic
3. Click **Save** to add to your dashboard.

### 🎙️ Starting a Session

1. Click **"Launch Lesson"** on a companion card.
2. Interact with AI in real-time via voice.
3. Practice DSA, frontend/backend, interviews, or behavioral questions.

### ⚙️ Managing Companions

- View/delete companions.
- Review your session history and past conversations.

---

## 🖼️ Screenshots

> *(Include actual images in your GitHub repo under /public/screenshots/ and reference them like below)*

| Home Page | Companion Builder | Live Session | Profile & History |
|-----------|-------------------|--------------|-------------------|
| ![Home](public/screenshots/home.png) | ![Builder](public/screenshots/builder.png) | ![Session](public/screenshots/session.png) | ![Profile](public/screenshots/profile.png) |

---

## ⚙️ Properties & Constants

### Subjects

Defined in `/constants/index.ts`:
```
frontend, backend, dsa, interview, behavioural, innovation
```

### Subject Colors

Each subject is mapped to a distinct color for UI purposes.

### Voice Options

- Male / Female
- Casual / Formal

### Types

See `/types/index.d.ts` for:
- Companion
- Session
- User
- And other shared interfaces

---

## 🎨 Customization

- **Favicon**: Replace `/public/favicon.ico`
- **Logo**: Update `/public/images/logo.png`
- **Icons**: Stored in `/public/icons/`

---

## 🤝 Contributing

We welcome contributions!  
Follow these steps:

1. Fork the repo
2. Create a new branch (`git checkout -b feat/feature-name`)
3. Commit changes (`git commit -m "Add feature"`)
4. Push to your fork (`git push origin feat/feature-name`)
5. Open a Pull Request

Please ensure code quality and tests (if any).

---

## 📄 License

This project is licensed under the **MIT License**.  
See [`LICENSE`](LICENSE) for more details.

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org)
- [Clerk](https://clerk.com)
- [Supabase](https://supabase.io)
- [OpenAI](https://openai.com)
- [11labs](https://elevenlabs.io)
- [Deepgram](https://deepgram.com)
- [Tailwind CSS](https://tailwindcss.com)
- [LottieFiles](https://lottiefiles.com)
- [Radix UI](https://www.radix-ui.com)