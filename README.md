# QR-code-generator
# 🧾 QR Code Generator (CLI)

A simple command-line application built with **Node.js** that takes user input (like a URL or any text), generates a QR code as a PNG image, and stores the input in a `URL.txt` file for reference.

---

## 🚀 Features

- 📥 Takes user input via terminal
- 🔳 Generates QR Code as a `.png` image
- 📝 Appends each input to a `URL.txt` file
- 🕓 Adds timestamps to ensure unique QR filenames
- 📦 Lightweight and dependency minimal

---

## 🛠️ Technologies Used

- [inquirer](https://www.npmjs.com/package/inquirer) – for interactive command line prompts  
- [qr-image](https://www.npmjs.com/package/qr-image) – to generate QR codes  
- Built-in `fs` and `os` modules – for file and OS operations  

---

## 📦 Installation


# Clone the repo
git clone https://github.com/your-username/qr-code-cli.git
cd qr-code-cli

# Install dependencies
npm install
▶️ Usage
node index.js
You'll be prompted to enter a URL (or any text). After submission:
A PNG QR code will be saved as qr_<timestamp>.png
Your input will be saved to URL.txt, with a newline for each entry
🧹 Example
? Type in your URL › https://openai.com
The file has been saved!
You'll see:

qr_1728213581934.png in the project directory

URL.txt will contain:

arduino

https://openai.com

