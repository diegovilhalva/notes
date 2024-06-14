export const homePage = async (req,res) => {
    const locals = {
        title:'Notes',
        description:'Crie suas notas grátis'
    }
    res.render('index',{
        locals,
        layout:'../views/layouts/front-page'
    })
}


export const about = async (req,res) => {
    const locals  = {
        title:'Notes - Sobre ',
        description:'Crie suas notas grátis'
    }
    res.render('about',locals)
}