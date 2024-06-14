export const homePage = async (req,res) => {
    const locals = {
        title:'Notes',
        description:'Crie suas notas grátis'
    }
    res.render('index',locals)
}