import jwt from "jsonwebtoken"
import { TOKEN_SECRET } from "../config/config.js"

const validaToken = (req, res, next) => {

    const { token } = req.cookies

    if (!token) {
        return res.status(401).json({ message: "No token, Authorizacion denegada" })
    }

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid token" })
        }

        req.user = user
    })

    next()
}

export {
    validaToken
}