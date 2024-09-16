const bcrypt = require('bcryptjs');

// Replace these with the values you want to test
const hashedPassword = '$2b$10$QD2aOo38ee8hRP82dIH.d.jG4EWE5Tvl5ydcieCKaUicol81Qa9AO'; // Use the hash from the database
const plainPassword = 'babatiti'; // The password you are testing

bcrypt.compare(plainPassword, hashedPassword, (err, result) => {
  if (err) {
    console.error('Error comparing password:', err);
  } else {
    console.log('Password match result:', result); // Should be true if correct, false otherwise
  }
});
