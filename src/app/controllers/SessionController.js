import jwt from 'jsonwebtoken';
import User from "../models/User";
import auth from "../../config/auth"

class SessionController {
    async store(req, res) {

        const {email, password_hash} = req.body;

        const user = await User.findOne({
            where: {email: email}
        })

        if(!user){
            return res.status(401).json({
                error: 'Usuário não existe'
            });
        }

        if(await user.checkPassword(password_hash) == false){
            return res.status(401).json({
                error: 'Senha incorreta'
            });
        }

        const { id , name} = user;

        return res.json({
            user: {
                id, name, email
            },
            token: jwt.sign(
                {id},
                auth.secret,
                {expiresIn: auth.expiresIn}
            )
        });
    }
}

export default new SessionController();