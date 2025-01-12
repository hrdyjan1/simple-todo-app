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

## Discussion

### Utility Libraries

- **Ramda/Lodash/Underscore**: Functional utility libraries to simplify array and object operations.
  - Example: Lodash's `_.debounce` for preventing rapid state updates in input fields.

### Form Handling

- **Formik**: Formik simplifies form state management and validation.
- **React Hook Forms**: Lightweight and performant, suitable for handling input validation with ease.

### Testing

- **Detox**: End-to-end testing for React Native apps.
- **Maestro**: Alternative to Detox for creating simple UI-based tests.

### Code Quality

- **Husky**: Pre-commit hooks to enforce code quality checks.
- **Madge**: Visualizes and analyzes module dependency graphs.
- **TypeScript Compiler**: Use `tsc --noEmit` to catch type errors without generating files.
- **Storybook**: Component development and testing tool.
- **EditorConfig**: Standardizes code formatting across editors.
- **Github Setup**: Protect main branch.

### Error Handling

- **Firebase Crashlytics**: Captures and reports runtime crashes and errors.
- **Sentry**: Monitors and reports exceptions and performance issues.
- **Toasts**: Provides user feedback for recoverable errors.
- **Input Validation Errors**: Ensures users are notified of invalid or incomplete input fields.

### Performance Optimization

- **Memoization**: Use React's `memo` and `useCallback` to prevent unnecessary re-renders and optimize performance.

## TODOs

- Fix failing tests.

---
