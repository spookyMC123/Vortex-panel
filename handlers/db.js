const Keyv = require('keyv');
const sqlite = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

// Configure SQLite with proper permissions
const dbPath = path.join(__dirname, '..', 'skyport.db');

// Ensure the database directory exists and has proper permissions
const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true, mode: 0o755 });
}

// Configure SQLite connection with enhanced settings
const sqliteDB = new sqlite(dbPath, {
    verbose: console.log,
    fileMustExist: false,
    readonly: false,
    timeout: 10000
});

// Enable WAL mode for better write concurrency
sqliteDB.pragma('journal_mode = WAL');
sqliteDB.pragma('synchronous = NORMAL');
sqliteDB.pragma('temp_store = MEMORY');

// Configure Keyv with enhanced settings
const db = new Keyv(`sqlite://${dbPath}`, {
    busyTimeout: 10000,
    readonly: false,
    timeout: 10000,
    useNullAsDefault: true,
    sqlite: sqliteDB
});

// Handle database errors
db.on('error', err => {
    console.error('Database Error:', err);
});

module.exports = { db, sqliteDB }