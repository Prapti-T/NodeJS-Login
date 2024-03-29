const localStrategy = require('passport-local').Strategy

function initialize(passport){
    const authenticateUser = (email, password, done)=>{
        const user = getUserByEmail(email)
        if (user == null){
            return done(null, false, {message : ``})
        }
    }

    passport.use(new localStrategy({ usernameField : 'email'}),
    authenticateUser)
    passport.serializeUser((user, done)=>{  })
    passport.deserializeUser((id, done)=>{  })
}