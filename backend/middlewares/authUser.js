import jwt from 'jsonwebtoken'
import 'dotenv/config'

//user authentication middleware 

const authUser = (req, res, next) => {
    try {
        
        const {token} = req.headers
        if (!token) {
            return res.json({ success: false, message: "Not Authorized Login Again" });

        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)

        req.body = req.body || {}
        req.body.userId = token_decode.id

        next();

    } 
    catch (error) {
        console.error(error);
        res.json({ success : false , message : error.message });
    }
}

export default authUser 