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
            options: [{name:'Small', meta1: 'small', meta2:"#FFFFFF"}, {name:'Medium', meta1:"medium", meta2:"#000000"}, {name:'Large', meta1: 'large', meta2:"#FFFFFF"}, {name:'XL', meta1: 'x-large', meta2:"#FFFFFF"}, {name:'XXL', meta1: 'xx-l', meta2:"#FFFFFF"} ]
        },
        {
            name: 'Shirt Color',
            id: 'garment_color',
            options: [{name:'Black', meta1: '#000000', meta2:"#FFFFFF"}, {name:'White', meta1:"#FFFFFF", meta2:"#f4f7f9"}, {name:'Red', meta1:"#ff0000", meta2:"#000000"}, {name:'Blue', meta1:"#0033d6", meta2:"#000000"}, {name:'Yellow', meta1:"#ede20f", meta2:"#000000"}, {name:'Green', meta1:"#3bed0f", meta2:"#000000"}, {name:'Purple', meta1:"#850fed", meta2:"#000000"}]
        },
        {
            name:'Vinyl Design',
            id: 'vinyl_design',
            options:[{name:'4QS', meta1: '4QS', meta2:"#FFFFFF"}, {name:'Clock', meta1:'clock', meta2:"#000000"}, {name:'Bars', meta1:'bars', meta2:"#000000"}],
        },
        {
            name:'Vinyl Color',
            id: 'vinyl_color',
            options:[{name:'Black', meta1: '#1e1d1a', meta2:"#FFFFFF"}, {name:'White', meta1:"#FFFFFF", meta2:"#000000"}, {name:'Red', meta1:"#d60000", meta2:"#000000"}, {name:'Blue', meta1:"#0015d6", meta2:"#000000"}, {name:'Green', meta1:"#26ad00", meta2:"#000000"}]
        }
    ],
    url: 'https://dopelab.com',
    proportion: [{bottomMargin: 0.20707596, rightMargin: 0.07358739, leftMargin: 0.06701708, topMargin: 0.16129032}]
}, {
    id:'jogger',
    price:'25.00',
    description:'5.5 oz. 50% preshunk cotton, 50% polyester classic fit tee.',
    image:'/assets/items/GreyJogger.svg', 
    name:'Joggers',
    custom_options: [
        {
            name: 'Size',
            id: 'size',
            options: [{name:'Small', meta1: 'small', meta2:"#FFFFFF"}, {name:'Medium', meta1:"medium", meta2:"#000000"}, {name:'Large', meta1: 'large', meta2:"#FFFFFF"}, {name:'XL', meta1: 'x-large', meta2:"#FFFFFF"}, {name:'XXL', meta1: 'xx-l', meta2:"#FFFFFF"} ]
        },
        {
            name: 'Jogger Color',
            id: 'garment_color',
            options: [{name:'Black', meta1: '#000000', meta2:"#FFFFFF"}, {name:'White', meta1:"#FFFFFF", meta2:"#f4f7f9"}, {name:'Red', meta1:"#ff0000", meta2:"#000000"}, {name:'Blue', meta1:"#0033d6", meta2:"#000000"}, {name:'Yellow', meta1:"#ede20f", meta2:"#000000"}, {name:'Green', meta1:"#3bed0f", meta2:"#000000"}, {name:'Purple', meta1:"#850fed", meta2:"#000000"}]
        },
        {
            name:'Vinyl Design',
            id: 'vinyl_design',
            options:[{name:'4QS', meta1: '4QS', meta2:"#FFFFFF"}, {name:'Clock', meta1:'clock', meta2:"#000000"}, {name:'Bars', meta1:'bars', meta2:"#000000"}],
        },
        {
            name:'Vinyl Color',
            id: 'vinyl_color',
            options:[{name:'Black', meta1: '#1e1d1a', meta2:"#FFFFFF"}, {name:'White', meta1:"#FFFFFF", meta2:"#000000"}, {name:'Red', meta1:"#d60000", meta2:"#000000"}, {name:'Blue', meta1:"#0015d6", meta2:"#000000"}, {name:'Green', meta1:"#26ad00", meta2:"#000000"}]
        }
    ],
    url: 'https://dopelab.com',
    proportion: [{bottomMargin: 0, rightMargin: 0.28515112, leftMargin: 0.13666229, topMargin: 0.07627859}]
}, {
    id:'hoodie',
    price:'25.00',
    description:'5.5 oz. 50% preshunk cotton, 50% polyester classic fit tee.',
    image:'/assets/items/GreyHoodie.svg', 
    name:'Hoodie',
    custom_options: [
        {
            name: 'Size',
            id: 'size',
            options: [{name:'Small', meta1: 'small', meta2:"#FFFFFF"}, {name:'Medium', meta1:"medium", meta2:"#000000"}, {name:'Large', meta1: 'large', meta2:"#FFFFFF"}, {name:'XL', meta1: 'x-large', meta2:"#FFFFFF"}, {name:'XXL', meta1: 'xx-l', meta2:"#FFFFFF"} ]
        },
        {
            name: 'Hoodie Color',
            id: 'garment_color',
            options: [{name:'Black', meta1: '#000000', meta2:"#FFFFFF"}, {name:'White', meta1:"#FFFFFF", meta2:"#f4f7f9"}, {name:'Red', meta1:"#ff0000", meta2:"#000000"}, {name:'Blue', meta1:"#0033d6", meta2:"#000000"}, {name:'Yellow', meta1:"#ede20f", meta2:"#000000"}, {name:'Green', meta1:"#3bed0f", meta2:"#000000"}, {name:'Purple', meta1:"#850fed", meta2:"#000000"}]
        },
        {
            name:'Vinyl Design',
            id: 'vinyl_design',
            options:[{name:'4QS', meta1: '4QS', meta2:"#FFFFFF"}, {name:'Clock', meta1:'clock', meta2:"#000000"}, {name:'Bars', meta1:'bars', meta2:"#000000"}],
        },
        {
            name:'Vinyl Color',
            id: 'vinyl_color',
            options:[{name:'Black', meta1: '#1e1d1a', meta2:"#FFFFFF"}, {name:'White', meta1:"#FFFFFF", meta2:"#000000"}, {name:'Red', meta1:"#d60000", meta2:"#000000"}, {name:'Blue', meta1:"#0015d6", meta2:"#000000"}, {name:'Green', meta1:"#26ad00", meta2:"#000000"}]
        }
    ],
    url: 'https://dopelab.com',
    proportion: [{bottomMargin: 0.021956296, rightMargin: 0.09461235, leftMargin: 0.14980289, topMargin: 0}]
},
{
    id:'sweatshirt',
    price:'20.00',
    description:'5.5 oz. 50% preshunk cotton, 50% polyester classic fit tee.',
    image:'/assets/items/GreySweatshirt.svg', 
    name:'Sweatshirt',
    custom_options: [
        {
            name: 'Size',
            id: 'size',
            options: [{name:'Small', meta1: 'small', meta2:"#FFFFFF"}, {name:'Medium', meta1:"medium", meta2:"#000000"}, {name:'Large', meta1: 'large', meta2:"#FFFFFF"}, {name:'XL', meta1: 'x-large', meta2:"#FFFFFF"}, {name:'XXL', meta1: 'xx-l', meta2:"#FFFFFF"} ]
        },
        {
            name: 'Sweatshirt Color',
            id: 'garment_color',
            options: [{name:'Black', meta1: '#000000', meta2:"#FFFFFF"}, {name:'White', meta1:"#FFFFFF", meta2:"#f4f7f9"}, {name:'Red', meta1:"#ff0000", meta2:"#000000"}, {name:'Blue', meta1:"#0033d6", meta2:"#000000"}, {name:'Yellow', meta1:"#ede20f", meta2:"#000000"}, {name:'Green', meta1:"#3bed0f", meta2:"#000000"}, {name:'Purple', meta1:"#850fed", meta2:"#000000"}]
        },
        {
            name:'Vinyl Design',
            id: 'vinyl_design',
            options:[{name:'4QS', meta1: '4QS', meta2:"#FFFFFF"}, {name:'Clock', meta1:'clock', meta2:"#000000"}, {name:'Bars', meta1:'bars', meta2:"#000000"}],
        },
        {
            name:'Vinyl Color',
            id: 'vinyl_color',
            options:[{name:'Black', meta1: '#1e1d1a', meta2:"#FFFFFF"}, {name:'White', meta1:"#FFFFFF", meta2:"#000000"}, {name:'Red', meta1:"#d60000", meta2:"#000000"}, {name:'Blue', meta1:"#0015d6", meta2:"#000000"}, {name:'Green', meta1:"#26ad00", meta2:"#000000"}]
        }
    ],
    url: 'https://dopelab.com',
    proportion: [{bottomMargin: 0.24037461, rightMargin: 0, leftMargin: 0, topMargin: 0.15920916}]
}]