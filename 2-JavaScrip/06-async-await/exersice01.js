// Mock database
const mockDatabase = [
    { id: 1, name: 'sok' },
    { id: 2, name: 'sao' },
    { id: 3, name: 'pisey' }
];

// Function to get user info by ID
function getUserInfoById(id, callback) {
    setTimeout(() => {
        const user = mockDatabase.find(user => user.id === id);
        if (user) {
            callback(null, user);
        } else {
            callback(new Error('User not found'));
        }
    }, 2000);
}

// Function to process user data (capitalize name)
function processUserData(user, callback) {
    setTimeout(() => {
        const processedUser = { ...user, name: user.name.toUpperCase() };
        callback(null, processedUser);
    }, 1500);
}

// Execute and process functions (callback hell)
function executeAndProcess(userId) {
    getUserInfoById(userId, (err, user) => {
        if (err) {
            console.error('Error:', err.message);
        } else {
            console.log('User info retrieved:', user);
            processUserData(user, (err, processedUser) => {
                if (err) {
                    console.error('Error:', err.message);
                } else {
                    console.log('Processed user data:', processedUser);
                }
            });
        }
    });
}

// Example usage:
executeAndProcess(2); // Change the user ID to test with different users
