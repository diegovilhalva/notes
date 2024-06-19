import mongoose from "mongoose"
import Note from "../models/Notes.js"


export const dashboard = async (req, res) => {

    let perPage = 12
    let page = req.query.page || 1
    const locals = {
        title: 'Painel de controle',
        description: 'Crie suas notas grátis'
    }

    try {
        const notes = await Note.aggregate([
            { $sort: { updatedAt: -1 } },
            { $match: { user: new mongoose.Types.ObjectId(req.user.id) } },
            {
                $project: {
                    title: { $substr: ["$title", 0, 30] },
                    body: { $substr: ["$body", 0, 100] },
                },
            }
        ])
            .skip(perPage * page - perPage)
            .limit(perPage)
            .exec();

        const count = await Note.countDocuments({ user: new mongoose.Types.ObjectId(req.user.id) });

        res.render('dashboard/index', {
            userName: req.user.firstName,
            locals,
            notes,
            layout: "../views/layouts/dashboard",
            current: page,
            pages: Math.ceil(count / perPage)
        });


    } catch (error) {
        console.log(error)
    }



}

export const viewNote = async (req, res) => {
    const { id } = req.params


    try {
        const note = await Note.findById(id).where({ user: req.user.id })

        if (note) {
            const locals = {
                title: `${note.title} -  Notes`,
                description: 'Crie suas notas grátis'
            }
            res.render('dashboard/view-notes', {
                locals,
                layout: "../views/layouts/dashboard",
                note,
                noteID: req.params.id
            });

        } else {
            res.render('404')
        }
    } catch (error) {
        res.render('404')
    }
}

export const addNote = async (req, res) => {
    const locals = {
        title: 'Crie sua nota - Notes',
        description: 'Crie suas notas grátis'
    }
    res.render('dashboard/add', {
        locals,
        layout: "../views/layouts/dashboard",
    });
}

export const saveNote = async (req, res) => {
    try {
        req.body.user = req.user.id
        const note = await Note.create(req.body)
        if (note) {
            res.redirect('/dashboard')
        }
    } catch (error) {
        console.log(error)
    }
}


export const updateNote = async (req, res) => {
    try {
        await Note.findOneAndUpdate(
            { _id: req.params.id },
            { title: req.body.title, body: req.body.body, updatedAt: Date.now() }
        ).where({ user: req.user.id });
        res.redirect("/dashboard");
    } catch (error) {
        console.log(error)
    }
}

export const deleteNote = async (req, res) => {
    try {
        await Note.deleteOne({ _id: req.params.id }).where({ user: req.user.id })
        res.redirect('/dashboard')
    } catch (error) {
        console.log(error)
    }
}

export const search = async (req, res) => {
    try {
        res.render('/dashboard/search', {
            searchResults: '',
            layout: '../views/layout/dashboard'
        })
    } catch (error) {

    }
}

export const searchSubmit = async (req, res) => {
    try {
        let searchTerm = req.body.searchTerm
        const searchNoSpecialChars = searchTerm.replace(/[^a-zA-Z0-9]/g, "")
        const searchResults = await Note.find({
            $or: [
                { title: { $regex: new RegExp(searchNoSpecialChars, 'i') } },
                { body: { $regex: new RegExp(searchNoSpecialChars, 'i') } }
            ]
        }).where({user:req.user.id})

        res.render('dashboard/search',{
            searchResults,
            layout:'../views/layouts/dashboard'
        })

    } catch (error) {
        console.log(error)
    }
}