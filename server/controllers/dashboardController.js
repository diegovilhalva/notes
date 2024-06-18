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

        const count = await Note.countDocuments({user:new mongoose.Types.ObjectId(req.user.id)});
       
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