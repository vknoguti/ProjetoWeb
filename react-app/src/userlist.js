export const CLIENTLIST = [
    {
        id: 1,
        name: 'user1',
        cpf: '138568914',
        email: 'user1@user.com',
        password: 'user',
        phones: [
            '987654321', '995743384'
        ],
        address: [
            {
                cep: 102450,
                city: 'São Carlos',
                state: 'SP',
                neighbourhood: 'Centro',
                street: 'Av. São Carlos',
                number: 1,
                additional: '',
            }
        ],
        cart: [],
        admin: false
    },
    {
        id: 2,
        name: 'user2',        
        cpf: '568235914',
        email: 'user2@user.com',
        password: 'user',
        phones: [
            '935871357', '995175447'
        ],
        address: [
            {
                cep: 10245124,
                city: 'São Carlos',
                state: 'SP',
                neighbourhood: 'Centro',
                street: 'Av. Brasil',
                number: 2,
                additional: ''
            }
        ],
        cart: [],
        admin: false
    },
    {
        id: 3,
        name: 'admin',
        cpf: '981785375',
        email: 'user3@user.com',
        password: 'user',
        phones: [
            '935871357'
        ],
        address: [
            {
                cep: 10245124,
                city: 'São Carlos',
                state: 'SP',
                neighbourhood: 'Centro',
                street: 'Av. Brasil',
                number: 2,
                additional: ''
            }
        ],
        cart: [],
        admin: true
    }
]