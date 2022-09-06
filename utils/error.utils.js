// Pour toutes les erreurs liés à l'inscription , 
//aprés avoir consologué  l'erreur nous nous retrouvons 
//face à une grande libraire

//Chaque erreur possible sont trouvé grace au include et à l'utilisation 
// d'un return 

exports.signupErr = (err) => {
    let errors = { email: '', speudo: '', password: '' }

    if (err.message.include('speudo')) {
        return errors.speudo = "speudo incorrect ou déja pris"
    }
    if (err.message.include('email')) {
        return errors.email = " l'email est incorrecte"
    }
    if (err.message.include('password')) {
        return errors.password = "le mot de passe doit faire plus de huit caractére "
    }

    if (err.code === 1100 && Object.keys(err.keysValue)[0].includes('speudo')) {
        return errors.speudo = "le speudo  est déja pris"
    }

    if (err.code === 1100 && Object.keys(err.keysValue)[0].includes('email')) {
        return errors.email = "l'email  est déja pris"
    }

    return errors
}

exports.loginErrors = (err) =>{
    let errors = { email: '', password: '' }
    if (err.message.include('email')) {
        return errors.email = " l'email est inconnu"
    }
    if (err.message.include('password')) {
        return errors.password = "le mot de passe est incorrecte "
    }

    return errors
}
