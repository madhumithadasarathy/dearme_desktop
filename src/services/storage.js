// File system storage for Electron
const isElectron = typeof window !== 'undefined' && window.require;

let fs = null;
let path = null;
let dataDir = null;

if (isElectron) {
  try {
    fs = window.require('fs');
    path = window.require('path');
    dataDir = path.join(window.process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
  } catch (error) {
    console.warn("Could not load node modules. Ensure nodeIntegration is enabled.");
  }
}

// Memory fallback for non-Electron or pure web environment
const memoryFallback = {};

/**
 * Reads JSON data from local disk.
 * @param {string} filename 
 * @param {any} defaultData 
 * @returns {any}
 */
export const readData = (filename, defaultData) => {
  if (isElectron && fs && path) {
    const filePath = path.join(dataDir, `${filename}.json`);
    try {
      if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(raw);
      }
    } catch (e) {
      console.error(`Error reading ${filename}.json:`, e);
    }
  } else {
    // Fallback if not inside electron
    const item = localStorage.getItem(`dearme_${filename}`);
    if (item) {
      try { return JSON.parse(item); } catch (e) {}
    }
  }
  return defaultData;
};

/**
 * Writes JSON data to local disk.
 * @param {string} filename 
 * @param {any} data 
 */
export const writeData = (filename, data) => {
  if (isElectron && fs && path) {
    const filePath = path.join(dataDir, `${filename}.json`);
    try {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } catch (e) {
      console.error(`Error writing ${filename}.json:`, e);
    }
  } else {
    // Fallback if not inside electron
    localStorage.setItem(`dearme_${filename}`, JSON.stringify(data));
  }
};
