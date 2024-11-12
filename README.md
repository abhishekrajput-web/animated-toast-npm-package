# Animated Toast Notification React Package

## Overview

This package provides customizable and animated toast notifications for React applications. It allows you to display notifications with different types, durations, and positions. The package uses **CSS animations** for smooth and dynamic transitions and comes with multiple features like customizable toast types, positioning, and auto-dismiss functionality.

## Example Screenshots
<img src="https://github.com/user-attachments/assets/df1cf8ad-5a06-422f-9701-79428bcba5d7"/>
<img src="https://github.com/user-attachments/assets/7a97d517-a39d-420f-ba49-213cfb655a4c"/>

## Demo Video
https://github.com/user-attachments/assets/e34f7b0a-a254-42f0-b256-5feb116ebaea


## Features

- **Customizable Toast Types**: Display success, error, and info notifications.
- **Positioning Control**: Position toasts in different parts of the screen (top-left, top-right, bottom-left, bottom-right).
- **Auto Dismiss**: Automatically dismiss notifications after a set duration.
- **Customizable Styling**: Customize the appearance of the toast notifications using Tailwind CSS.
- **Animations**: Smooth fade-in and fade-out animations using **Animate.css**.

## Installation

You can install the package via npm:

```bash
npm install animated-toast
```


## Example

```bash
import React from 'react';
import { Toast } from 'animated-toast';

const App = () => {
  return (
    <div>
      <Toast message="Success!"
      type="success"
      duration={3000}
      onClose={() => alert("Toast closed!")} />
    </div>
  );
}

export default App;
```

## Toast Component Props

<img src="https://github.com/user-attachments/assets/fba81d5f-ca50-404f-afb7-8ed530dc1ede">


## MORE EXAMPLES

Here’s an example of how you can create different types of toast notifications with different positions and durations:

```bash
import React from 'react';
import { Toast } from 'animated-toast';

const App = () => {
  return (
    <div>
      {/* Success Toast */}
      <Toast message="Success!" type="success" duration={3000} position="topRight" onClose={() => console.log("Success Toast Closed")} />

      {/* Error Toast */}
      <Toast message="Error occurred!" type="error" duration={5000} position="bottomLeft" onClose={() => console.log("Error Toast Closed")} />

      {/* Info Toast */}
      <Toast message="Information message" type="info" duration={2000} position="bottomRight" onClose={() => console.log("Info Toast Closed")} />
    </div>
  );
}

export default App;
```













