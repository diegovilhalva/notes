export const homePage = async (req,res) => {
    const locals = {
        title:'Notes',
        description:'Crie suas notas grátis'
    }
    res.render('index',locals)
}


export const about = async (req,res) => {
    const locals  = {
        title:'Notes - Sobre ',
        description:'Crie suas notas grátis'
    }
    res.render('about',locals)
}