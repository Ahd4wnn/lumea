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
  images: string[];
  brochure: string;
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
    image: '/ice.jpeg',
    images: ['/ice.jpeg', '/icegen.png'],
    brochure: '/brochures/ice-bath.pdf',
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
    image: '/steam.jpeg',
    images: ['/steam.jpeg', '/steamgen.png', '/digitalctrl.png'],
    brochure: '/brochures/steam.pdf',
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
    name: 'Lumea Red Light Therapy',
    description: 'Clinical-grade photobiomodulation system optimized for cellular energy enhancement and mitochondrial support.',
    specs: [
      '660nm & 850nm Dual-chip LEDs',
      'Focused 30-degree Lens Angle',
      'RED & NIR Modes',
      'Built-in Heat Management'
    ],
    color: 'accent-red',
    image: '/redlight.jpg',
    images: ['/redlight.jpg'],
    brochure: '/brochures/red-light.pdf',
    variants: [
      { type: 'Red Light Therapy Panel Pro', code: 'LRP-WP-00-200', description: 'Home & clinic professional panel' },
      { type: 'Red Light Therapy Panel Ultra', code: 'LRP-WP-00-300', description: 'Advanced full-body commercial panel' }
    ]
  },
  {
    id: 'sauna-bath',
    category: 'Thermal Therapy',
    name: 'Lumea Sauna Bath',
    description: 'Premium Finnish pine sauna systems with custom sizing — dry, steam and infrared configurations for homes, gyms, hotels, spas and wellness centres.',
    specs: [
      '60–100°C Heat Range',
      'Finnish Pine Construction',
      'Electric Heater & Sauna Stones',
      'Digital Control Panel'
    ],
    color: 'accent-gold',
    image: '/sauna.jpg',
    images: ['/sauna.jpg'],
    brochure: '/brochures/sauna-bath.pdf',
    variants: [
      { type: 'Finnish Dry Sauna', code: 'LSB-WP-00-DRY', description: 'Classic dry heat at 70–100°C with low humidity — deep relaxation, detox and authentic Nordic wellness' },
      { type: 'Wet Sauna / Steam Sauna', code: 'LSB-WP-00-WET', description: 'Steam-generated moist heat at 45–65°C — gentle on the respiratory system, ideal for skin hydration and sinus relief' },
      { type: 'Infrared Sauna', code: 'LSB-WP-00-IR', description: 'Infrared panels at 40–60°C penetrate deeper into tissue for muscle recovery, pain relief and cellular healing' }
    ]
  },
  {
    id: 'jacuzzi-bathtub',
    category: 'Hydrotherapy',
    name: 'Lumea Jacuzzi & Bath Tubs',
    description: 'Luxury hydrotherapy and bath tub systems crafted for premium homes, five-star hotels, spas and high-end fitness centres — fully customisable from 1 to 10+ person configurations.',
    specs: [
      'Hydrotherapy Massage Jets',
      '7-Colour Chromotherapy LED',
      'Pop Drain & Overflow Protection',
      'Front & Side Panels with Head Rests'
    ],
    color: 'accent-gold',
    image: '/jacuzzi.jpg',
    images: ['/jacuzzi.jpg', '/jacuzzi-4s.jpg', '/jacuzzi-2s.jpg', '/jacuzzi-1s.jpg', '/jacuzzi-fst.jpg'],
    brochure: '/brochures/jacuzzi-bathtubs.pdf',
    variants: [
      { type: 'Jacuzzi Premium 4 Seater', code: 'LJZ-WP-00-4S' },
      { type: 'Jacuzzi Premium 2 Seater', code: 'LJZ-WP-00-2S' },
      { type: 'Jacuzzi Premium 1 Seater', code: 'LJZ-WP-00-1S' },
      { type: 'Free Standing Tub', code: 'LBT-WP-00-FST' }
    ]
  }
];
