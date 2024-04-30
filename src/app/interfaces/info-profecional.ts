import { Agencia } from "./agencia"
import { Curso } from "./curso"

export interface InfoProfecional {
    idprofecional: number
    fecha: string
    status: string
    password: string
    nombrecliente: string
    email_cliente: string
    agencia: Agencia
    cursos: Curso[]
}
