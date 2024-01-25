const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const generateToken = (userName) => {
    return jwt.sign({ userName }, 'secret', { expiresIn: '1h' });
}

app.post('/signIn', (req, res) => {
    try {
        const { userName, password } = req.body;

        const user = await User.findOne({ userName });

        if (user && await bcrypt.compare(password, user.password)) {
            const token = generateToken(user._id);
            res.header('Authorization', 'Bearer ${token}');
            res.status(200).json(message: "user signed in");
        } else {
            res.status(401).json(error: "User failed to sign in")
        }
    } catch (err) {
        console.error(error);
        res.status(500).json(error:"some other error has occurred")
    }
})