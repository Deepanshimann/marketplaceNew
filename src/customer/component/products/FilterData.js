export const color = [
    "white",
    "Black",
    "Red",
    "marun",
    "Being",
    "Pink",
    "Green",
    "Yellow",
  ];
  
  export const filters = [
    {
      id: "color",
      name: "Color",
      options: [
        { value: "white", label: "White" },
        { value: "beige", label: "Beige" },
        { value: "blue", label: "Blue" },
        { value: "brown", label: "Brown" },
        { value: "green", label: "Green" },
        { value: "purple", label: "Purple" },
        {value:"yellow",label:"Yellow"}
      ],
    },
  
    {
      id: "size",
      name: "Size",
      options: [
        { value: "S", label: "S" },
        { value: "M", label: "M" },
        { value: "L", label: "L" },
      ],
    },
    
  ];
  
  export const singleFilter=[
    {
      id: "price",
      name: "Price",
      options: [
        { value: "", label: "All" },
        { value: "10-30", label: "£10 To £30" },
        { value: "30-55", label: "£30 To £55" },
        { value: "55-75", label: "£55 To £75" },
        { value: "75-90", label: "£75 To £90" },
        { value: "100-500", label: "£100 To £500" },
      ],
    },
    {
      id: "stock",
      name: "Availability",
      options: [
        { value: "in_stock", label: "In Stock" },
        { value: "out_of_stock", label: "Out Of Stock" },
        
      ],
    },
  ]
  
  export const sortOptions = [
    
    { name: "Price: Low to High", query: "price_low", current: false },
    { name: "Price: High to Low", query: "price_high", current: false },
  ];
  