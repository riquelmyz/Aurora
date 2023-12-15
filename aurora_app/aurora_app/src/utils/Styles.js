import { StyleSheet } from 'react-native';

export default StyleSheet.create ({
    statusBar: 'dark',

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#E9E9E9',
    },

    pages: {
        main: {
            page: {
                container: {
                    flex: 1,
                    backgroundColor: '#E9E9E9',
                },

                feed: {
                    flex: 1,
                },

                partner: {
                    flex: 1,
                    backgroundColor: '#E9E9E9',
                },

                maps: {
                    flex: 1,
                },
            },

            navbar: {
                borderWidth: 1,
                borderColor: '#FFFFFF',

                flexDirection: 'row',
                justifyContent: 'center',
            },
        },

        home: {
            logo: {
                flex: 2,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            },

            form: {
                flex: 1,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            },

            buttons: {
                login: {
                    text: {
                        color: '#E9E9E9',
                        fontSize: 15,
                    },

                    background: {
                        position: 'absolute',

                        borderRadius: 50,
                        paddingVertical: 8,

                        bottom: '50%',
                        width: '60%',
                        
                        alignItems: 'center',
                        justifyContent: 'center',

                        backgroundColor: '#9B6EF3',
                    },
                },

                register: {
                    top: '100%',
                    fontSize: 15,
                    color: '#9B6EF3',
                },
            },
        },

        login: {
            container: {
                flex: 1,
                padding: 20,
                alignItems: 'left',
                backgroundColor: '#F7F5F5',
            },

            progress: {
                border: 3,
                color: '#9B6EF3',
            },

            logo: {
                width: '85%',  
                
                maxWidth: 384,
                maxHeight: 183,

                top: '10%',
            },

            inputs: {
                username: {
                    text: {

                    },
    
                    background: {
                        width: '100%',
                        top: '10%',

                        borderColor: '#D4CFCF',
                        backgroundColor: '#FFFFFF',

                        padding: 5,

                        borderColor: '#000000',
                        borderWidth: 1,

                        borderRadius: 8,

                        marginVertical: 5,
                        paddingHorizontal: 10,
                    },
                },

                password: {
                    text: {

                    },
    
                    background: {
                        width: '100%',
                        top: '10%',

                        borderColor: '#D4CFCF',
                        backgroundColor: '#FFFFFF',
                        
                        padding: 5,

                        borderColor: '#000000',
                        borderWidth: 1,

                        borderRadius: 8,

                        marginVertical: 5,
                        paddingHorizontal: 10,
                    },
                },
            },

            buttons: {
                connect: {
                    text: {
                        fontSize: 15,
                        color: '#FFFFFF',
                    },
    
                    background: {
                        width: '35%',
                        top: '200%',

                        alignItems: 'center',
                        backgroundColor: '#9B6EF3',

                        padding: 5,
                        borderRadius: 8,

                        marginVertical: 5,
                        paddingHorizontal: 10,
                    },
                },

                lostPassword: {
                    text: {
                        fontSize: 12,
                        color: '#9B6EF3',
                    },
    
                    background: {
                        width: '100%',
                        top: '250%',
                        
                        textAlign: 'left',
                        alignContent: 'flex-start',

                        maxWidth: 132,

                        padding: 1,
                        borderRadius: 8,

                        marginVertical: 5,
                        paddingHorizontal: 5,
                    },
                },

                register: {
                    text: {
                        fontSize: 12,
                        color: '#9B6EF3',
                    },
    
                    background: {
                        width: '100%',
                        top: '270%',
                        
                        maxWidth: 195,
                        alignItems: 'center',

                        padding: 1,
                        borderRadius: 8,

                        marginVertical: 5,
                    },
                },
            },
        },

        register: {
            container: {
                flex: 1,
                padding: 20,
                alignItems: 'left',
                backgroundColor: '#F7F5F5',
            },

            progress: {
                border: 3,
                color: '#9B6EF3',
            },

            logo: {
                width: '85%',  
                
                maxWidth: 384,
                maxHeight: 183,

                top: '10%',
            },

            inputs: {
                username: {
                    text: {

                    },
    
                    background: {
                        width: '100%',
                        top: '10%',

                        borderColor: '#D4CFCF',
                        backgroundColor: '#FFFFFF',

                        padding: 5,

                        borderColor: '#000000',
                        borderWidth: 1,

                        borderRadius: 8,

                        marginVertical: 5,
                        paddingHorizontal: 10,
                    },
                },

                password: {
                    text: {

                    },
    
                    background: {
                        width: '100%',
                        top: '10%',

                        borderColor: '#D4CFCF',
                        backgroundColor: '#FFFFFF',
                        
                        padding: 5,

                        borderColor: '#000000',
                        borderWidth: 1,

                        borderRadius: 8,

                        marginVertical: 5,
                        paddingHorizontal: 10,
                    },
                },
            },

            buttons: {
                connect: {
                    text: {
                        fontSize: 15,
                        color: '#FFFFFF',
                    },
    
                    background: {
                        width: '35%',
                        top: '200%',

                        alignItems: 'center',
                        backgroundColor: '#9B6EF3',

                        padding: 5,
                        borderRadius: 8,

                        marginVertical: 5,
                        paddingHorizontal: 10,
                    },
                },

                register: {
                    text: {
                        fontSize: 12,
                        color: '#9B6EF3',
                    },
    
                    background: {
                        width: '100%',
                        top: '270%',
                        
                        maxWidth: 195,
                        alignItems: 'center',

                        padding: 1,
                        borderRadius: 8,

                        marginVertical: 5,
                    },
                },
            },
        },
    },
});