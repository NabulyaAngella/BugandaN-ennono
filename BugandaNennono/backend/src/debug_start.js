console.log('1: Starting debug script');
try {
    console.log('2: Requiring express');
    const express = require('express');
    console.log('3: Requiring cors');
    const cors = require('cors');
    console.log('4: Requiring dotenv');
    const dotenv = require('dotenv');
    console.log('5: Loading .env');
    dotenv.config();
    console.log('6: Requiring connectDB');
    const connectDB = require('./db');
    console.log('7: Script finished requiring');
} catch (err) {
    console.error('Error during require:', err);
}
