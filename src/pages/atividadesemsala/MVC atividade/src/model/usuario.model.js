class Usuario{
constructot(){

this.nome = "";
this.idade = 0;
this.login = "";
this.senha = "";
}

constructor(nome, idade, login, senha){
    this.nome = nome;
    this.idade = idade;
    this.login = login;
    this.senha = senha;
   }

setNome(nome){
    this.nome = nome
}
getNome(nome){
    return this.nome = nome
}
setIdade(idade){
    this.idade = idade
}
getdade(idade){
    return this.idade = idade
}
setLogin(login){
    this.login = login
}
getLogin(login){
    return this.login = login
}
setSenha(senha){
    this.senha = senha
}
getSenha(senha){
    return this.senha = senha
}

}
export {Usuario}