import { Item } from './types';

export const Items: Item[] = [{
    id:'shirt',
    price:'13.00',
    description:'5.5 oz. 50% preshunk cotton, 50% polyester classic fit tee.',
    image:'/assets/items/GreyShirt.svg', 
    name:'Classic Tee Shirt',
    custom_options: [
        {
            name: 'Size',
            id: 'size',
            options: [{name:'Black', meta1: '#000000', meta2:"#FFFFFF"}, {name:'White', meta1:"#FFFFFF", meta2:"#000000"}]
        },
        {
            name: 'Shirt Color',
            id: 'garment_color',
            options: [{name:'Black', meta1: '#000000', meta2:"#FFFFFF"}, {name:'White', meta1:"#FFFFFF", meta2:"#000000"}]
        },
        {
            name:'Vinyl Design',
            id: 'vinyl_design',
            options:[{name:'4QS', meta1: '4QS', meta2:"#FFFFFF"}, {name:'Clock', meta1:'clock', meta2:"#000000"}],
        },
        {
            name:'Vinyl Color',
            id: 'vinyl_color',
            options:[{name:'Black', meta1: '#000000', meta2:"#FFFFFF"}, {name:'White', meta1:"#FFFFFF", meta2:"#000000"}]
        }
    ],
    url: 'https://dopelab.com',
    proportion: [{bottomMargin: 0.20707596, rightMargin: 0.07358739, leftMargin: 0.06701708, topMargin: 0.16129032}]
}, {
    id:'jogger',
    price:'13.00',
    description:'5.5 oz. 50% preshunk cotton, 50% polyester classic fit tee.',
    image:'/assets/items/GreyJogger.svg', 
    name:'Joggers',
    custom_options: [
        {
            name: 'Size',
            id: 'size',
            options: [{name:'Black', meta1: '#000000', meta2:"#FFFFFF"}, {name:'White', meta1:"#FFFFFF", meta2:"#000000"}]
        },
        {
            name: 'Jogger Color',
            id: 'garment_color',
            options: [{name:'Black', meta1: '#000000', meta2:"#FFFFFF"}, {name:'White', meta1:"#FFFFFF", meta2:"#000000"}]
        },
        {
            name:'Vinyl Design',
            id: 'vinyl_design',
            options:[{name:'Black', meta1: '#000000', meta2:"#FFFFFF"}, {name:'White', meta1:"#FFFFFF", meta2:"#000000"}],
        },
        {
            name:'Vinyl Color',
            id: 'vinyl_color',
            options:[{name:'Black', meta1: '#000000', meta2:"#FFFFFF"}, {name:'White', meta1:"#FFFFFF", meta2:"#000000"}]
        }
    ],
    url: 'https://dopelab.com',
    proportion: [{bottomMargin: 0, rightMargin: 0.28515112, leftMargin: 0.13666229, topMargin: 0.08627859}]
}, {
    id:'shirt',
    price:'13.00',
    description:'5.5 oz. 50% preshunk cotton, 50% polyester classic fit tee.',
    image:'/assets/items/GreyShirt.svg', 
    name:'Classic Tee Shirt',
    custom_options: [
        {
            name: 'Size',
            id: 'size',
            options: [{name:'Black', meta1: '#000000', meta2:"#FFFFFF"}, {name:'White', meta1:"#FFFFFF", meta2:"#000000"}]
        },
        {
            name: 'Shirt Color',
            id: 'garment_color',
            options: [{name:'Black', meta1: '#000000', meta2:"#FFFFFF"}, {name:'White', meta1:"#FFFFFF", meta2:"#000000"}]
        },
        {
            name:'Vinyl Design',
            id: 'vinyl_design',
            options:[{name:'Black', meta1: '#000000', meta2:"#FFFFFF"}, {name:'White', meta1:"#FFFFFF", meta2:"#000000"}],
        },
        {
            name:'Vinyl Color',
            id: 'vinyl_color',
            options:[{name:'Black', meta1: '#000000', meta2:"#FFFFFF"}, {name:'White', meta1:"#FFFFFF", meta2:"#000000"}]
        }
    ],
    url: 'https://dopelab.com',
    proportion: [{bottomMargin: 0.20707596, rightMargin: 0.07358739, leftMargin: 0.06701708, topMargin: 0.16129032}]
},]