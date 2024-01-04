import swaggerJSDoc from "swagger-jsdoc";

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info:{
            title: 'Task Manager',
            version: '3.0.0',
            description: 'Documentacion de la API de la aplicacion TASK MANAGER'
        },  
        servers:[
            {
                url: 'http://localhost:4000'
            }
        ],
        paths:{
            '/api/register':{
                post:{
                    summary: 'Ingresa los datos del usuario que desea ingresar',
                    tags:['Register'],
                    requestBody:{
                        required: true,
                        content:{
                            'application/json':{
                                schema:{
                                    type: 'object',
                                    $ref: '#/components/schemas/Register'
                                },
                                example:{
                                    username: "Michel",
                                    email: "michel@gmail.com",
                                    password: "12345678"
                                }
                            }
                        }
                    },
                    responses:{
                        '200': {
                            description: 'Usuario creado correctamente',
                            content:{
                                'application/json':{
                                    schema: {
                                        $ref: '#/components/schemas/Register'
                                    },
                                    example:{
                                        username: "Michel",
                                        email: "michel@gmail.com",
                                        password: "12345678"
                                    }
                                }
                            }
                        },
                        '400':{
                            description: 'Solicitud Incorrecta / Error en la solicitud'
                        },
                        '500':{
                            description: 'Error Interno del servidor'
                        }
                    }
                    
                    
                }
               
            },
            '/api/login':{
                post:{
                    summary: 'Ingresa los datos registrados anteriormente',
                    tags:['Login'],
                    requestBody:{
                        required: true,
                        content: {
                            'application/json':{
                                schema:{
                                    type: 'object',
                                    $ref : '#/components/schemas/Login'
                                },
                                example:{
                                    email: 'natalia@gmail.com',
                                    password: '12345678'
                                }
                            }
                        }
                    },
                    responses:{
                        '200':{
                            description: 'Usuario logueado',
                            content:{
                                'application/json':{
                                    schema:{
                                        $ref: '#/components/schemas/Login'
                                    },
                                    example: {
                                        email: 'natalia@gmail.com',
                                        password: '12345678'
                                    }
                                }
                            }
                        },
                        '400':{
                            description: 'Solicitud Incorrecta / Error en la solicitud'
                        },
                        '500':{
                            description: 'Error Interno del servidor'
                        }
                    }
                }
            },
            '/api/logout':{
                post:{
                    summary: 'Cerrar Sesion del usuario',
                    tags:['Logout'],
                    responses:{
                        '200':{
                            description: 'Usuario desconectado correctamente',
                            content:{
                                'application/json':{
                                    schema: {
                                        $ref: '#/components/schemas/Logout'
                                    },
                                    example:{}
                                }
                            }
                        },
                        '400':{
                            description: 'Solicitud incorrecta / Error en la solicitud'
                        },
                        '500':{
                            description: 'Error interno del servidor'
                        }
                    }
                }
            },
            '/api/profile':{
                get: {
                    summary: 'Revisar perfil del usuario',
                    tags:['Profile'],
                    requestBody:{
                        required: true,
                        content:{
                            'application/json':{
                                schema:{
                                    $ref: '#/components/schemas/Profile'
                                },
                                example: {}
                            }
                        }
                    },
                    responses:{

                    }
                }
            }
        },
        components:{
            schemas:{
                Register:{
                    type: 'object',
                    properties: {
                        username: {
                            type: 'string',
                            description: 'Nombre del usuario'
                        },
                        email: {
                            type: 'string',
                            description: 'Email del usuario'
                        },
                        password: {
                            type: 'string',
                            description: 'Password de no menos de 8 digitos'
                        }
                    },
                    required: [
                        'username',
                        'email',
                        'password'
                    ],
                    example:{
                        username: "Michel",
                        email: "michel@gmail.com",
                        password: "12345678"
                    }
                },
                Login:{
                    type: 'object',
                    properties:{
                        email:{
                            type: 'string',
                            description: 'Ingresa el email registrado anteriormente'
                        },
                        password:{
                            type: 'string',
                            description: 'Ingresa tu contraseña'
                        }
                    },
                    required:[
                        'email',
                        'password'
                    ],
                    example:{
                        email: 'michel@gmail.com',
                        password: '12345678'
                    }
                },
                Logout:{
                    type: 'object'
                    
                },
                Profile:{
                    type: 'object',
                    properties:{
                        username:{
                            type: 'string',
                            description: 'Username del usuario'
                        },
                        email:{
                            type: 'string',
                            description: 'Email del usuario'
                        }
                    },
                    required: [
                        'username',
                        'email'
                    ],
                    example: {
                        username: 'Michel',
                        email: 'michel@gmail.com'

                    }
                }
            }
        }
    },
    apis: ['./routes/*.js']
}


const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec