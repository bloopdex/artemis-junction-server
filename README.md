# Fire System Detector - Server Side

This repository contains the server side code for a fire system detector. The server is responsible for capturing frames from a camera, processing the frames using an AI model to detect fires, and activating water sprayers when a fire is detected. The server also sends notifications to a dashboard when a fire is detected.

## Technologies Used

- Node.js
- Socket.io

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/fire-system-detector-server.git
```

2. Install the dependencies:

```bash
cd fire-system-detector-server
npm install
```

3. Start the server:

```bash
node index.js
```

## Usage

### Fire Detection

The server captures frames from a camera and processes them using an AI model to detect fires. The processFrame function in index.js is responsible for processing the frames and returning true if a fire is detected. Modify this function to implement your fire detection algorithm.

### Water Sprayer Activation

When a fire is detected, the server sends a signal to activate water sprayers. Modify the activateWaterSprayers function in index.js to implement the code for activating your water sprayers.

### Dashboard Notification

When a fire is detected, the server sends a notification to a dashboard using Socket.io. The detectFire function in index.js is responsible for detecting fires and sending a notification to the dashboard. Modify this function to fit your specific requirements, including the implementation of your fire detection algorithm and the code for sending notifications to the dashboard.
