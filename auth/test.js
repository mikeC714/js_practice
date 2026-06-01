class AuthMiddleware{

    async verifyToken(err, req, res, next){
        const refreshToken = req.cookies.refresh_token;
        const token = req.cookies.access_token;

        if(!token && !refreshToken){
            return res.status(401).json({ message: "Unathorized User." })
        }
        try{
            const valid = Auth.verify(token);
            if(!valid){
                return res.status(401).json({ msg: "Unauthorized user" });
            }

            req.user = valid.id;
            next();
        }catch(err){
            
        }
    }


}