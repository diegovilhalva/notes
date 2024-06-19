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

export const features = async (req,res) => {
    const locals  = {
        title:'Notes - Recursos ',
        description:'Crie suas notas grátis'
    }
    res.render('features',locals)
}

export const faq = async (req,res) => {
    const locals  = {
        title:'Notes - Faq ',
        description:'Crie suas notas grátis'
    }
    res.render('faq',locals)
}