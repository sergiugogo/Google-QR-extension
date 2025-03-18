
# QR Code Converter

A lightweight QR Code Converter built as a Chrome extension (and web app) that transforms your links into scannable QR codes. This project uses a free API to generate QR codes on the fly.

## Features

- **Instant QR Code Generation:**  
  Convert any URL into a QR code in seconds.
- **User-Friendly Interface:**  
  Simple and clean design with responsive styling.
- **Chrome Extension:**  
  Use the converter as a popup extension directly in your browser.

## Prerequisites

- **Google Chrome:**  
  To use this as a Chrome extension, you'll need the Chrome browser installed.
- **Internet Connection:**  
  The QR code is generated using a free QR code API, so an active internet connection is required.

## Installation

### As a Chrome Extension

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/qr-code-converter.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd qr-code-converter
   ```

3. **Load the Extension in Chrome:**

   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" (toggle in the top-right corner).
   - Click on "Load unpacked" and select the project folder (the folder containing `manifest.json`).

### As a Web App

1. **Clone the Repository and Open Locally:**

   - Follow the steps above to clone the repository.
   - Open `index.html` in your preferred web browser.

## Usage

1. **Enter a Link:**  
   In the extension popup or web page, enter the URL you wish to convert in the input field.

2. **Convert:**  
   Click the **Convert Link** button to generate a QR code.

3. **View QR Code:**  
   The generated QR code will appear in the result area below the button.

## Project Structure

- **index.html:**  
  The main HTML file that contains the structure of the QR code converter interface.

- **styles.css:**  
  Contains all the styling for the project, including layout, colors, and responsive design.

- **main.js:**  
  The JavaScript file that handles fetching the QR code from the API and updating the DOM with the generated QR code.

- **manifest.json:**  
  The manifest file for the Chrome extension, which defines the extension's metadata and configuration.

- **icon.png:**  
  The icon used for the extension.

## API

This project uses the [QR Server API](https://goqr.me/api/) to generate QR codes. The API URL is constructed as follows:

```js
const url = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(link)}`;
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- Thanks to the developers of the free QR code API for making QR code generation easy and accessible.
- Inspiration from various open-source Chrome extension tutorials.
```

Feel free to modify the links, repository URL, and any other details to fit your project specifics.
