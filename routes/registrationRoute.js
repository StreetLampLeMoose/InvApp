const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const generateToken = (userName) => {
    return jwt.sign({ userName }, 'secret', { expiresIn: '1h' });
}
app.post('/register', (req, res) => {
    try {
        const { username, password, company } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            userName,
            password: hashedPassword,
            company
        })

        await newUser.save();
    } catch (err) {
        console.error(err)
        res.status(500).json("unable to register user")
    }
})