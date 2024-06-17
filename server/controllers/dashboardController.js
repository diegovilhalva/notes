
export const dashboard = async (req,res) => {

    const locals = {
        title:'Painel de controle',
        description:'Crie suas notas grátis'
    }
    res.render('dashboard/index',{
        locals,
        layout:'../views/layouts/dashboard'
})
}