import { ApolloClient, gql, InMemoryCache, useQuery } from "@apollo/client";


const dummy = [
    {
        uuid: "5e9d1112-6a14-436c-80a0-86d90f832b16",
        firstName: "Charlie",
        lastName: "Brown",
        email: "charliebrown@mailinator.com",
        state: "VIC",
        petExp: "Y"
    },
    {
        uuid: "5ed74fc6-d9e3-4484-8901-daedc59136cd",
        firstName: "Cruella ",
        lastName: "de Vil",
        email: "cruella@mailinator.com",
        state: "NSW",
        petExp: "N"
    },
    {
        uuid: "5eebf7c8-76af-4b4e-a73c-46e72ac118a3",
        firstName: "Elle",
        lastName: "Woods",
        email: "ellewoods@mailinator.com",
        state: "VIC",
        petExp: "Y"
    },
    {
        uuid: "5f74177c-dbbf-48fc-ada2-370b1f1925ef",
        firstName: "Shaggy",
        lastName: "Rogers",
        email: "shaggy@mailinator.com",
        state: "NSW",
        petExp: "Y"
    },
    {
        uuid: "5e9d2ec4-ff8f-4ac8-9bdd-d16f019765f0",
        firstName: "Wallace",
        lastName: "Park",
        email: "wallacepark@mailinator.com",
        state: "ACT",
        petExp: "N"
    },
    {
        uuid: "5f41d4a1-a1b8-4b3c-9b0d-dd8d2fb99e32",
        firstName: "George",
        lastName: "Newton",
        email: "georgenewton@mailinator.com",
        state: "NSW",
        petExp: "Y"
    },
    {
        uuid: "5f41d38a-57c5-4d3c-81e6-ac83159060e1",
        firstName: "John",
        lastName: "Grogan",
        email: "johngrogan@mailinator.com",
        state: "QLD",
        petExp: "N"
    },
    {
        uuid: "5e9d0feb-cd65-4ac0-8bad-7edc905383f7",
        firstName: "Ethan",
        lastName: "Montgomery",
        email: "ethanmontgomery@mailinator.comy",
        state: "QLD",
        petExp: "Y"
    },
    {
        uuid: "5f41d561-7ff3-4374-ad6c-f6f7566e2e41",
        firstName: "Lucas",
        lastName: "Ray",
        email: "lucasray@mailinator.com",
        state: "lucasray@mailinator.com",
        petExp: "Y"
    }
]

const fetchUsers = async (state: string, exp: string, name: string, email: string, limit: number, offset: number) => {
    let res = dummy
    if (state) {
        res = res.filter((index) => {
            return (
                index.state === state
            )
        })
    }
    if (exp) {
        res = res.filter((index) => {
            return (
                index.petExp === exp
            )
        })
    }
    if (name) {
        res = res.filter((index) => {
            const fullName=index.firstName+' '+index.lastName
            return (
                fullName.toUpperCase().indexOf(name.toUpperCase()) > -1
            )
        })
    }
    if (email) {
        res = res.filter((index) => {
            return (
                index.email === email
            )
        })
    }
    const totalPages=Math.ceil(res.length/limit)
    res=res.slice(offset*limit,offset*limit+limit)
    const data = {
        users: {
            items: res,
            pagination: {
                totalPage: totalPages
            }
        }
    }
    return data.users
}

export default fetchUsers