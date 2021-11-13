import {openDb} from '../configDB.js';

export async function createTableFun(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Funcionario ( cod_funcionario INTEGER PRIMARY KEY, nome TEXT, data_nascimento TEXT, num_rg TEXT, num_cpf TEXT, nome_mae TEXT)')
    })
} 

export async function insertFun(req, res){
    let funcionario = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO Funcionario ( cod_funcionario, nome, data_nascimento, num_rg, num_cpf, nome_mae) VALUES (?, ?, ?, ?, ?, ?)', [funcionario.cod_funcionario, funcionario.nome, funcionario.data_nascimento, funcionario.num_rg, funcionario.num_cpf, funcionario.nome_mae]);
    })
    res.json({
        "statusCode": 200
    })
} 

export async function updateFun(req, res){
    let funcionario = req.body;
    openDb().then(db=>{
        db.run('UPDATE Funcionario SET nome=?, data_nascimento=?, num_rg=?, num_cpf=?, nome_mae=? WHERE cod_funcionario=?', [funcionario.nome, funcionario.data_nascimento, funcionario.num_rg, funcionario.num_cpf, funcionario.nome_mae, funcionario.cod_funcionario]);
    })
    res.json({
        "statusCode": 200
    })
} 

export async function selectFuns(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM Funcionario')
        .then(funcionarios=>res.json(funcionarios))
    })
} 

export async function selectFun(req, res){
    let cod_funcionario = req.body.cod_funcionario;
    openDb().then(db=>{
        db.get('SELECT * FROM Funcionario WHERE cod_funcionario=?', [cod_funcionario])
        .then(funcionario=>res.json(funcionario));
    });
} 

export async function deleteFun(req, res){
    let cod_funcionario = req.body.cod_funcionario;
    openDb().then(db=>{
        db.get('DELETE FROM Funcionario WHERE cod_funcionario=?', [cod_funcionario])
        .then(res=>res)
    })
    res.json({
        "statusCode": 200
    })
} 