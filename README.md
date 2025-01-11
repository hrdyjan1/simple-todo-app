# Simple Todo App

This project is a simple TODO application built using **React Native**.

## Features

- **Add Tasks**: Users can input and save tasks.
- **View Tasks**: Tasks are displayed in a scrollable list.
- **Persisted State**: Task data is saved locally and persists across app restarts.

## Technology Stack

- **Expo** A framework for building React Native apps with minimal configuration.
- **State Management**: Managed using Jotai.
- **Storage**: Local data persistence with expo-secure-store.
- **Navigation**: Expo router.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/hrdyjan1/simple-todo-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd simple-todo-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the app:
   - For iOS:
     ```bash
     npx expo start --ios
     ```
   - For Android:
     ```bash
     npx expo start --android
     ```
