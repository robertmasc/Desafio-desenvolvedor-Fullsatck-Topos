import { Router } from "express";

import {insertFun, updateFun, selectFuns, selectFun, deleteFun} from './Controler/Funcionario.js';
import {insertDep, updateDep, selectDeps, selectDep, deleteDep} from './Controler/Dependente.js';

const router = Router();

router.get('/', (req, res)=>{
    res.json({
        "statusCode":200,
        "msg": "API-Node is running..."
    })
})

// Funcionario

router.get('/funcionarios', selectFuns);
router.get('/funcionario', selectFun);
router.post('/funcionario', insertFun);
router.put('/funcionario', updateFun);
router.delete('/funcionario', deleteFun);

// Dependentes

router.get('/dependentes', selectDeps);
router.get('/dependente', selectDep);
router.post('/dependente', insertDep);
router.put('/dependente', updateDep);
router.delete('/dependente', deleteDep);

export default router;