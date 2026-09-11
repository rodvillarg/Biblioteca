import type { Request, Response, NextFunction } from 'express';
import { EjemplarPrestadoError } from '../errores/ejemplar-prestado.error.js';

export class ValidacionError extends Error{
    constructor(public readonly detalles: string[]){
        super('La peticion no es igual que en el contrato')
        this.name = 'ValidacionError';

    }
}

export function manejadorErrores(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof ValidacionError) {
        res.status(400).json({ error: 'VALIDACION', mensaje: err.message, detalles: err.detalles });
        return;
    }
    if (err instanceof EjemplarPrestadoError) {
        res.status(409).json({ error: 'EJEMPLAR_PRESTADO', mensaje: err.message });
        return;
    }
    res.status(500).json({ error: 'ERROR_INTERNO', mensaje: 'Ocurrio un error inesperado' });
}