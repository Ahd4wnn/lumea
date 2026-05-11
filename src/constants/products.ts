export interface ProductVariant {
  type: string;
  code: string;
  description?: string;
  power?: string;
}

export interface Product {
  id: string;
  category: string;
  name: string;
  description: string;
  specs: string[];
  color: string;
  image: string;
  variants: ProductVariant[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'ice-bath',
    category: 'Cold Immersion',
    name: 'Lumea Ice Bath',
    description: 'Industrial-grade precision cooling system transforming ordinary water tubs into temperature-controlled cold immersion setups.',
    specs: [
      'Reciprocating Compressor',
      'Plate Heat Exchanger',
      'Air-Cooled Condenser',
      'Industrial Structural Frame'
    ],
    color: 'accent-ice',
    image: 'https://images.unsplash.com/photo-1620332372374-f108c53d2e03?auto=format&fit=crop&q=80&w=1200',
    variants: [
      { type: 'Water Chiller Capacity 1 Ton', code: 'LWC-WP-00-1000KW', description: 'Entry-level professional cooling system' },
      { type: 'Water Chiller Capacity 2 Ton', code: 'LWC-WP-00-2000KW', description: 'Mid-capacity commercial recovery system' },
      { type: 'Water Chiller Capacity 3 Ton', code: 'LWC-WP-00-3000KW', description: 'High-capacity commercial wellness solution' }
    ]
  },
  {
    id: 'steam-bath',
    category: 'Thermal Therapy',
    name: 'Lumea Steam Generator',
    description: 'Luxury therapeutic solution designed for commercial-grade steam experiences in homes, spas, and wellness centers.',
    specs: [
      '304 Grade Stainless Steel Tank',
      'Auto Timer & Temp Cut-off',
      'Pressure Release Safety Valves',
      'PUF High-Density Insulation'
    ],
    color: 'accent-gold',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200',
    variants: [
      { type: 'Steam Generator', code: 'LSG-WP-00-4.5KW', power: '4.5 KW' },
      { type: 'Steam Generator', code: 'LSG-WP-00-6KW', power: '6 KW' },
      { type: 'Steam Generator', code: 'LSG-WP-00-7.5KW', power: '7.5 KW' },
      { type: 'Steam Generator', code: 'LSG-WP-00-9KW', power: '9 KW' },
      { type: 'Steam Generator', code: 'LSG-WP-00-12KW', power: '12 KW' },
      { type: 'Steam Generator', code: 'LSG-WP-00-15KW', power: '15 KW' },
      { type: 'Steam Generator', code: 'LSG-WP-00-18KW', power: '18 KW' }
    ]
  },
  {
    id: 'rlt-panel',
    category: 'Photobiomodulation',
    name: 'Lumea RLT Panel',
    description: 'Clinical-grade photobiomodulation system optimized for cellular energy enhancement and mitochondrial support.',
    specs: [
      '660nm & 850nm Dual-chip LEDs',
      'Focused 30-degree Lens Angle',
      'RED & NIR Modes',
      'Built-in Heat Management'
    ],
    color: 'accent-red',
    image: 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&q=80&w=1200',
    variants: [
      { type: 'Red Light Therapy Panel Pro', code: 'LRP-WP-00-200', description: 'Home & clinic professional panel' },
      { type: 'Red Light Therapy Panel Ultra', code: 'LRP-WP-00-300', description: 'Advanced full-body commercial panel' }
    ]
  }
];
