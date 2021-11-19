import {openDb} from '../configDB.js';

export async function createTableDep(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Dependente ( cod_funcionario INTEGER, nome TEXT, data_nascimento TEXT, num_rg TEXT, num_cpf TEXT, nome_mae TEXT, cod_dependente INTEGER PRIMARY KEY, FOREIGN KEY (cod_funcionario) REFERENCES Funcionario (cod_funcionario))')
    })
} 

export async function insertDep(req, res){
    let dependente = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO Dependente ( cod_funcionario, nome, data_nascimento, num_rg, num_cpf, nome_mae, cod_dependente) VALUES (?, ?, ?, ?, ?, ?, ?)', [dependente.cod_funcionario, dependente.nome, dependente.data_nascimento, dependente.num_rg, dependente.num_cpf, dependente.nome_mae, dependente.cod_dependente]);
    })
    res.json({
        "statusCode": 200
    })
} 

export async function updateDep(req, res){
    let dependente = req.body;
    openDb().then(db=>{
        db.run('UPDATE Dependente SET nome=?, data_nascimento=?, num_rg=?, num_cpf=?, nome_mae=? WHERE cod_funcionario=?', [dependente.nome, dependente.data_nascimento, dependente.num_rg, dependente.num_cpf, dependente.nome_mae, dependente.cod_funcionario]);
    })
    res.json({
        "statusCode": 200
    })
} 

export async function selectDeps(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM Dependente')
        .then(dependentes=>res.json(dependentes))
    })
} 

export async function selectDep(req, res){
    let cod_funcionario = req.body.cod_funcionario;
    openDb().then(db=>{
        db.get('SELECT * FROM Dependente WHERE cod_funcionario=?', [cod_funcionario])
        .then(dependente=>res.json(dependente));
    });
} 

export async function deleteDep(req, res){
    let cod_funcionario = req.body.cod_funcionario;
    openDb().then(db=>{
        db.get('DELETE FROM Dependente WHERE cod_funcionario=?', [cod_funcionario])
        .then(res=>res)
    })
    res.json({
        "statusCode": 200
    })
} 