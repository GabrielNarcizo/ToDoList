module.exports = class UsuarioDAO {
    constructor(bd) {
        this.bd = bd;
    }

    listarUsuarios() {
        return new Promise((resolve, reject) => {
            this.bd.all("SELECT * FROM USUARIOS"
            , (err, usuarios) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(usuarios);
                }
            })
            
        })
    }

    listarEmail(email) {
        return new Promise((resolve, reject) => {
            this.bd.all("SELECT * FROM USUARIOS WHERE EMAIL = (?)"
            , [email]
            , (err, usuarios) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(usuarios)
                }
            })
            
        })
    }

    inserirUsuario(usuario) {
        return new Promise((resolve, reject) => {
            this.bd.run("INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?,?,?)"
                , [usuario.nome, usuario.email, usuario.senha]
                , (err) => {
                    if(err) {
                        reject('Falha ao inserir usuário.')
                    } else {
                        resolve('Usuário inserido com sucesso!')
                    }
                }
            )
        })
    }

    deletarUsuario(usuario) {
        return new Promise((resolve, reject) => {
            this.bd.run("DELETE FROM USUARIOS WHERE EMAIL = (?)"
            , [usuario]
            , (err) => {
                if(err) {
                    reject('Falha ao deletar usuário.')
                
                } else {
                    resolve('Usuário deletado com sucesso!')
                }
            }
         )
        })
    }

    alterarUsuario(usuario, body) {
        return new Promise((resolve, reject) => {
            this.bd.run("UPDATE USUARIOS SET NOME = (?), SENHA (?) WHERE EMAIL = (?)"
            , [body.NOME, body.SENHA, usuario]
            , (err) => {
                if(err) {
                    reject('Falha ao alterar usuário.')
                } else {
                    resolve('Usuário alterado com sucesso!')
                }
            }
          ) 
        })
    }

};