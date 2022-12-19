function login() {
    firebase.auth().signInWithEmailAndPassword(
        form.emailLogin().value, form.passwordLogin().value
    ).then(() => {
        window.location.href = "cadaster.html";
    }).catch(error => {
        alert(getErrorMessage(error));
    });
}



const form = {
    emailLogin: () => document.querySelector('#emailLogin'),
    passwordLogin: () => document.querySelector('#passwordLogin'),
}

function getErrorMessage(error) {
    if (error.code == "auth/email-already-in-use") {
        return "Email já cadastrado";
    }
    if (error.code == "auth/invalid-email") {
        return "Email inválido";
    }
    if (error.code == "auth/weak-password") {
        return "Senha muito fraca";
    }
    if (error.code == "auth/wrong-password") {
        return "Senha inválida";
    }
    return error.message;
}