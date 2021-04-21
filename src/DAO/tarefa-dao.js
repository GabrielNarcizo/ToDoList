module.exports = class tarefaDAO {
    constructor(bd) {
        this.bd = bd;
    }

    listarTarefa() {
        return new Promise((resolve, reject) => {
            this.bd.all("SELECT * FROM TAREFAS",
             (err, tarefa) => {
                    if(err) {
                        reject(err)
                    } else {
                        resolve(tarefa)
                    }
            })
            
        })
    }

    listarTitulo(titulo) {
        return new Promise((resolve, reject) => {
            this.bd.all("SELECT * FROM TAREFAS WHERE TITULO = (?)"
            , [titulo]
            , (err, titulo) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(titulo)
                }
            }
            )
            
        })
    }

    inserirTarefa(tarefa) {
        return new Promise((resolve, reject) => {
            this.bd.run("INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?, ?, ?, ?, ?)"
                , [tarefa.titulo, tarefa.descricao, tarefa.status, tarefa.datacriacao, tarefa.id_usuario]
                , (err) => {
                    if(err) {
                        reject('Falha ao inserir tarefa.')
                    } else {
                        resolve('Tarefa adicionada com sucesso!')
                    }
                }
                )
        })
    }

    deletarTarefa(titulo) {
        return new Promise((resolve, reject) => {
            this.bd.run("DELETE FROM TAREFAS WHERE TITULO = (?)"
            , [titulo]
            , (err) => {
                if(err) {
                reject('Falha ao deletar tarefa.')
                
                } else {
                    resolve('Tarefa deletada com sucesso!')
                }
            })
        })
    }

    alterarTarefa(titulo, body) {
        return new Promise((resolve, reject) => {
            this.bd.run("UPDATE TAREFAS SET DESCRICAO = (?), STATUS (?), WHERE TITULO = (?)"
            , [body.DESCRICAO, body.STATUS, titulo]
            , (err) => {
                if(err) {
                    reject('Falha ao alterar tarefa.')
                } else {
                    resolve('Tarefa alterada com sucesso!')
                }
            }) 
        })
    }

};