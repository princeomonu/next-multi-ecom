export interface User {
    id?: string
    name: string
    email: string
    phoneNumber?: string
    emailVerified: boolean
    type:  "customer" | "merchant" | "admin"
    dateCreated: number
    profilePicture?: string
    address: string
}

export interface Product {
    id?: string
    merchant: {
        id:string
        name: string
        profilePicture?: string
    }
    title: string
    description: string
    images: string[]
    price: number
    varieties: {
        [key:string]: any[]
    }
    dateCreated: number
}

export interface Order {
    id?: string
    user: {
        id:string
        name: string
        profilePicture?: string
    }
    product: {
        id:string
        title: string
        images: string[]
    }
    merchant: {
        id:string
        name: string
        profilePicture?: string
    }
    quantity: number
    status: "pending" | "processing" | "declined" | "completed"
    selectedVariety: {
        [key:string]: any
    }
    transactionRef: string
    dateCreated: number
}
