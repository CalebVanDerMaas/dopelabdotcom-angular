
export interface Option {
    name: string;
    meta1: string;
    meta2: string;
}

export interface CustomOptions {
    type: string;
    options: Option[];
}

export interface Proportions {
    bottomMargin: number;
    leftMargin: number;
    topMargin: number;
    rightMargin: number;
}

export interface Item {
    id: string,
    price: string,
    description: string,
    image: string,
    name: string, 
    custom_options: CustomOptions[],
    url: string,
    proportion: Proportions[]
}