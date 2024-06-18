import express from "express";
import passport from "passport";
import GooglePassport from "passport-google-oauth20";
import dotenv from 'dotenv';
import User from "../models/User.js";

dotenv.config();

const GoogleStrategy = GooglePassport.Strategy;
const router = express.Router();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
},

    async function (accessToken, refreshToken, profile, done) {
        const newUser = {
            googleId: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            profileImage: profile.photos[0].value,
        }

        try {

            let user = await User.findOne({ googleId: profile.id })

            if (user) {
                done(null, user)
            } else {
                user = await User.create(newUser)
                done(null, user)
            }

        } catch (error) {
            console.log(error)
        }

    }
));


// Google Login Route
router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
);

// Retrieve user data
router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/login-failure",
        successRedirect: "/dashboard",
    })
);

// Destroy user session

router.get('/logout',(req,res) => {
    req.session.destroy(error => {
        if (error) {
            console.log(error)
            res.send('Erro ao tentar sair ')
        }else{
            res.redirect('/')
        }
    })
})


router.get('/login-failure', (req, res) => {
    res.send('Ocorreu um erro...')
})

passport.serializeUser(function (user, done) {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});


export default router;
