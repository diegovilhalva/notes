import mongoose from "mongoose"
import Note from "../models/Notes.js"


export const dashboard = async (req, res) => {

    const locals = {
        title: 'Painel de controle',
        description: 'Crie suas notas grátis'
    }

    try {
        const notes = await Note.find({})
        res.render('dashboard/index', {
            userName: req.user.firstName,
            locals,
            notes,
            layout: '../views/layouts/dashboard'
        })
    } catch (error) {
        console.log(error)
    }



}