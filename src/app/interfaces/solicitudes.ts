export type Solicitudes = Solicitud[]

export interface Solicitud {
  id: number
  idarticulo: number
  nocertificado?: string
  nombre:string
  curso:string
  fecha?: string
  costo: number
  idprofecional: number
  estatus: string
  fecha_registro?: string
  id_pay?: string
  status_pay?: string
  nombre_pay?: string
  email_pay?: string
  total_pay?: string
  method_pay?: string
}