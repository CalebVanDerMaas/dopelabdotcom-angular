export interface CustomOptions {
    name: string;
    options: string[];
}

export interface Item {
    id: string,
    price: string,
    description: string,
    image: string,
    name: string, 
    custom_options: CustomOptions[],
    url: string
}