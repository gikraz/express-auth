authRouter.post('/sign-up', async (req, res) => {
    const {email, password, name} = req.body
    if(!email || !password || !name) return res.status(400).json({message: "email, password and name is required"})

    const existUser = await userModel.findOne({email})
    if(existUser) return res.status(400).json({message: "user already exists"})
    
    const hashedPass = await bcrypt.hash(password, 10)
    await userModel.create({email, name, password: hashedPass})
    
