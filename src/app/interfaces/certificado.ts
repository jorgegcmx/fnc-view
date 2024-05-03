export interface Certificados {
  certificado: Certificado
  profecionales: Profecionales
  agencias: Agencias
  articulos: Articulos
  smg: string
}

export interface Certificado {
  id: number
  idarticulo: number
  nocertificado: string
  fecha: string
  costo: number
  idprofecional: number
  estatus: string
  fecha_registro: any
  id_pay: any
  status_pay: any
  nombre_pay: any
  email_pay: any
  total_pay: any
  method_pay: any
}

export interface Profecionales {
  idprofecional: number
  fecha: string
  idagencia: number
  status: string
  password: string
  nombrecliente: string
  emailcliente: string
  activado: any
}

export interface Agencias {
  idclientes: number
  email_cliente: string
  contrasena_cliente: string
  telefono: string
  direccion: string
  pais: string
  estado: string
  municipio: string
  rfc: string
  razon_social: string
  idusuarios_admin: number
}

export interface Articulos {
  idarticulos: number
  codigo: string
  nombre: string
  precio_mayoreo: number
  precio_menudeo: number
  idcategoria: number
  img: string
  descripcion: string
  idusuarios: number
}
