import { Injectable } from '@angular/core';

export interface Item1 {
  id: number;
  name: string;
  imageUrl: any;
  price: any;
  extraImages?: string[];
  capacity?: number;
  size?: any;
  power?: number;
  description?: string;
}
export interface Item2 {
  id: number;
  name: string;
  imageUrl: any;
  price: any;
  extraImages?: string[];
  capacity?: number;
  size?: any;
  power?: number;
  description?: string;
  discCount?: number;
}

export interface Item3 {
  id: number;
  name: string;
  imageUrl: any;
  price: any;
  extraImages?: string[];
  capacity?: number;
  size?: any;
  power?: number;
  description?: string;
  discCount?: number;
}
export interface Item4 {
  id: number;
  name: string;
  imageUrl: any;
  price: any;
  extraImages?: string[];
  capacity?: number;
  size?: any;
  power?: number;
  description?: string;
  discCount?: number;
}
export interface Item5 {
  id: number;
  name: string;
  imageUrl: any;
  price: any;
  extraImages?: string[];
  capacity?: number;
  size?: any;
  power?: number;
  description?: string;
  discCount?: number;
}

@Injectable({
  providedIn: 'root'
})
export class HmsHorizontalService {
  horizontals: Item1[] = [
    { name: 'Разбрасыватель удобрений S 900',
      imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s900/1.png', price: '990,000.00', id: 300,
      capacity: 900, size: '2.05м х 1.1м х 1.32м',
      description: 'Разбрасыватели удобрений могут управляться гидравлически, и вы можете утилизировать удобрения отдельно с правой и левой стороны благодаря гидравлическому клапану. Благодаря рабочей ширине до 36 метров и легко регулируемым крыльям он обеспечивает непревзойденный совершенный процесс расширения в своем классе',
      extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s900/2.png',
                'assets/images/product/Product HMS/HORIZONTAL MIXER/s900/3.png',
                'assets/images/product/Product HMS/HORIZONTAL MIXER/s900/4.png'],
    },
    { name: 'Разбрасыватель удобрений S 1200',
      imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s1200/3.png', price: '990,000.00', id: 301,
      capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
      extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s1200/2.png',
                    'assets/images/product/Product HMS/HORIZONTAL MIXER/s1200/1.png',
                    'assets/images/product/Product HMS/HORIZONTAL MIXER/s1200/4.png',
                    'assets/images/product/Product HMS/HORIZONTAL MIXER/s1200/5.png'],
    },
    { name: 'Разбрасыватель удобрений S 1500',
    imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s1500/1.png', price: '990,000.00', id: 302,
    capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
    extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s1500/2.png',
                  'assets/images/product/Product HMS/HORIZONTAL MIXER/s1500/3.png',
                  'assets/images/product/Product HMS/HORIZONTAL MIXER/s1500/4.png',
                  'assets/images/product/Product HMS/HORIZONTAL MIXER/s1500/5.png'],
    },
    { name: 'Разбрасыватель удобрений S 1800',
    imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s1800/1.png', price: '990,000.00', id: 303,
    capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
    extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s1800/2.png',
                'assets/images/product/Product HMS/HORIZONTAL MIXER/s1800/3.png',
                'assets/images/product/Product HMS/HORIZONTAL MIXER/s1800/4.png',
                'assets/images/product/Product HMS/HORIZONTAL MIXER/s1800/5.png'],
    },
      { name: 'Разбрасыватель удобрений S 2000',
      imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s2000/1.png', price: '990,000.00', id: 304,
      capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
      extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s2000/2.png',
                    'assets/images/product/Product HMS/HORIZONTAL MIXER/s2000/3.png',
                    'assets/images/product/Product HMS/HORIZONTAL MIXER/s2000/4.png'],
      },
      { name: 'Разбрасыватель удобрений S 2500',
      imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s2500/1.png', price: '990,000.00', id: 305,
      capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
      extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s2500/2.png',
                    'assets/images/product/Product HMS/HORIZONTAL MIXER/s2500/3.png',
                    'assets/images/product/Product HMS/HORIZONTAL MIXER/s2500/4.png'],
      },
      { name: 'Разбрасыватель удобрений S 3000',
      imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s3000/1.png', price: '990,000.00', id: 306,
      capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
      extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s3000/2.png',
                    'assets/images/product/Product HMS/HORIZONTAL MIXER/s3000/3.png',
                    'assets/images/product/Product HMS/HORIZONTAL MIXER/s3000/4.png'],
      },
      { name: 'Разбрасыватель удобрений S 3500',
      imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s3500/1.png', price: '990,000.00', id: 307,
      capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
      extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s3500/2.png',
                    'assets/images/product/Product HMS/HORIZONTAL MIXER/s3500/3.png',
                    'assets/images/product/Product HMS/HORIZONTAL MIXER/s3500/4.png',
                    'assets/images/product/Product HMS/HORIZONTAL MIXER/s3500/5.png'],
      },
      { name: 'Разбрасыватель удобрений S 2000 maxi',
      imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s2000maxi/1.png', price: '990,000.00', id: 308,
      capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
      extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s2000maxi/2.png',
                    'assets/images/product/Product HMS/HORIZONTAL MIXER/s2000maxi/3.png',
                    'assets/images/product/Product HMS/HORIZONTAL MIXER/s2000maxi/4.png',
                    'assets/images/product/Product HMS/HORIZONTAL MIXER/s2000maxi/5.png'],
      },
      { name: 'Разбрасыватель удобрений S 2500 maxi',
      imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s2500maxi/1.png', price: '990,000.00', id: 309,
      capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
      extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s2500maxi/2.png',
                    'assets/images/product/Product HMS/HORIZONTAL MIXER/s2500maxi/3.png',
                    'assets/images/product/Product HMS/HORIZONTAL MIXER/s2500maxi/4.png',
                    'assets/images/product/Product HMS/HORIZONTAL MIXER/s2500maxi/5.png'],
      },
      { name: 'Разбрасыватель удобрений S 3000 Maxi',
      imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s3000maxi/1.png', price: '990,000.00', id: 310,
      capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
      extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s3000maxi/2.png',
                    'assets/images/product/Product HMS/HORIZONTAL MIXER/s3000maxi/3.png',
                    'assets/images/product/Product HMS/HORIZONTAL MIXER/s3000maxi/4.png',
                    'assets/images/product/Product HMS/HORIZONTAL MIXER/s3000maxi/5.png'],
      },
      { name: 'Разбрасыватель удобрений S 2500 Twin',
      imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s2500twin/1.png', price: '990,000.00', id: 311,
      capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
      extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s2500twin/2.png',
                    'assets/images/product/Product HMS/HORIZONTAL MIXER/s2500twin/3.png'],
      },
      { name: 'Разбрасыватель удобрений S 3000 Twin',
      imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s3000twin/1.png', price: '990,000.00', id: 312,
      capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
      extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s3000twin/2.png',
                    'assets/images/product/Product HMS/HORIZONTAL MIXER/s3000twin/3.png'],
      },
      { name: 'Разбрасыватель удобрений S 3500 Twin',
      imageUrl: 'assets/images/product/Product HMS/HORIZONTAL MIXER/s3500twin/1.png', price: '990,000.00', id: 313,
      capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
      extraImages: ['assets/images/product/Product HMS/HORIZONTAL MIXER/s3500twin/2.png',
                    'assets/images/product/Product HMS/HORIZONTAL MIXER/s3500twin/3.png'],
      }
    ];
  verticals: Item2[] = [
      { name: 'Разбрасыватель удобрений A 650',
        imageUrl: 'assets/images/product/Product HMS/VERTICAL MIXER/A650/1.png', price: '100,000.00', id: 314,
        capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
        description: 'thanks',
        extraImages: ['assets/images/product/Product HMS/VERTICAL MIXER/A650/2.png',
                    'assets/images/product/Product HMS/VERTICAL MIXER/A650/3.png',
                    'assets/images/product/Product HMS/VERTICAL MIXER/A650/4.png']},
      { name: 'Разбрасыватель удобрений A 850',
      imageUrl: 'assets/images/product/Product HMS/VERTICAL MIXER/A850/1.png', price: '100,000.00', id: 315,
      capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
      extraImages: ['assets/images/product/Product HMS/VERTICAL MIXER/A850/2.png',
                  'assets/images/product/Product HMS/VERTICAL MIXER/A850/3.png',
                  'assets/images/product/Product HMS/VERTICAL MIXER/A850/4.png']},
      { name: 'Разбрасыватель удобрений A 1000',
      imageUrl: 'assets/images/product/Product HMS/VERTICAL MIXER/A1000/1.png', price: '100,000.00', id: 316,
      capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
      extraImages: ['assets/images/product/Product HMS/VERTICAL MIXER/A1000/2.png',
                  'assets/images/product/Product HMS/VERTICAL MIXER/A1000/3.png',
                  'assets/images/product/Product HMS/VERTICAL MIXER/A1000/4.png',
                  'assets/images/product/Product HMS/VERTICAL MIXER/A1000/5.png']},
      { name: 'Разбрасыватель удобрений A 1200',
      imageUrl: 'assets/images/product/Product HMS/VERTICAL MIXER/A1200/1.png', price: '100,000.00', id: 317,
      capacity: 4, size: '1.42м х 1.37м х 2.57м', power: 40,
      extraImages: ['assets/images/product/Product HMS/VERTICAL MIXER/A1200/2.png',
                  'assets/images/product/Product HMS/VERTICAL MIXER/A1200/3.png']},
    ];
  augers: Item3[] = [
      { name: 'MiyaAxe End spring axe legged',
        imageUrl: 'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/MiyaAxe/5.png', price: '990,000.00', id: 318,
        extraImages: ['assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/MiyaAxe/2.png',
                    'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/MiyaAxe/1.png',
                    'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/MiyaAxe/4.png',
                    'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/MiyaAxe/3.png']},
      { name: 'Miya Spring chisel legged',
      imageUrl: 'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/Miya/3.png', price: '990,000.00', id: 319,
      extraImages: ['assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/Miya/2.png',
                    'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/Miya/1.png',
                    'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/Miya/4.png',
                    'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/Miya/5.png']},
      { name: 'Miya Transmission type single disk',
      imageUrl: 'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/MilyaDisk/1.png', price: '990,000.00', id: 320,
      extraImages: ['assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/MilyaDisk/2.png',
                    'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/MilyaDisk/3.png',
                    'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/MilyaDisk/4.png',
                    'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/MilyaDisk/5.png']},
      { name: 'Miya End spring axe legged',
      imageUrl: 'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/milyaDisk2/1.png', price: '990,000.00', id: 321,
      extraImages: ['assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/milyaDisk2/2.png',
                    'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/milyaDisk2/3.png',
                    'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/milyaDisk2/4.png']},
      { name: 'MiyaWDisk transmission type double disk',
      imageUrl: 'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/milyaWDisk/1.png', price: '990,000.00', id: 322,
      extraImages: ['assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/milyaWDisk/2.png',
                    'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/milyaWDisk/3.png',
                    'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/milyaWDisk/4.png',
                    'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/milyaWDisk/5.png']},
      { name: 'MiyaWDisk pulled transmission type double disk',
      imageUrl: 'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/MilyaWDiskpulled/3.png', price: '990,000.00', id: 323,
      extraImages: ['assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/MilyaWDiskpulled/2.png',
                    'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/MilyaWDiskpulled/1.png',
                    'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/MilyaWDiskpulled/4.png',
                    'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/MilyaWDiskpulled/5.png']},
      { name: 'MiyaWDisk Light',
      imageUrl: 'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/milyaWDiskLight/2.png', price: '990,000.00', id: 324,
      extraImages: ['assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/milyaWDiskLight/1.png',
                    'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/milyaWDiskLight/3.png',
                    'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/milyaWDiskLight/4.png',
                    'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/milyaWDiskLight/5.png']},
      { name: 'MiyaWDisk Light transmission type',
      imageUrl: 'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/milyaDiskLight/2.png', price: '990,000.00', id: 325,
      extraImages: ['assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/milyaDiskLight/1.png',
                    'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/milyaDiskLight/3.png',
                    'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/milyaDiskLight/4.png',
                    'assets/images/product/Product HMS/UNIVERSAL TYPE SOWING MACHINES/milyaDiskLight/5.png']},
    ];
  silages: Item4[] = [
      {name: 'PinaDisk Disc type Pneumatic planter without fertilizer',
      imageUrl: 'assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk/1.png', price: '990,000.00', id: 326,
      extraImages: ['assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk/2.png',
                      'assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk/3.png',
                      'assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk/4.png',
                      'assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk/5.png']},
      {name: 'PinaDisk F Disc type  Pneumatic planter with fertilizer',
      imageUrl: 'assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk F/1.png', price: '990,000.00', id: 327,
      extraImages: ['assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk F/2.png',
                      'assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk F/3.png',
                      'assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk F/4.png',
                      'assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk F/5.png']},
      {name: 'PinaDisk S Disc type  Pneumatic planter with fertilizer',
      imageUrl: 'assets/images/product/Product HMS/Pneumatic sowing machines/PinaDisk Shiff/1.png', price: '990,000.00', id: 328,
      extraImages: ['assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk S/2.png',
                      'assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk S/1.png',
                      'assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk S/5.png']},
      {name: 'PinaDisk Shift disc type full telescopic ',
      imageUrl: 'assets/images/product/Product HMS/Pneumatic sowing machines/PinaDisk Shiff/1.png', price: '990,000.00', id: 329,
      extraImages: ['assets/images/product/Product HMS/Pneumatic sowing machines/PinaDisk Shiff/2.png',
                      'assets/images/product/Product HMS/Pneumatic sowing machines/PinaDisk Shiff/3.png',
                      'assets/images/product/Product HMS/Pneumatic sowing machines/PinaDisk Shiff/4.png',
                      'assets/images/product/Product HMS/Pneumatic sowing machines/PinaDisk Shiff/5.png']},
      {name: 'PinaDisk F Shift disc type with fertilizer',
      imageUrl: 'assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk F Shiff/3.png', price: '990,000.00', id: 330,
      extraImages: ['assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk F Shiff/2.png',
                    'assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk F Shiff/4.png',
                    'assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk F Shiff/1.png',
                    'assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk F Shiff/5.png']},
      {name: 'PinaDisk F Telescopic disc type',
      imageUrl: 'assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk F telescopic/1.png', price: '990,000.00', id: 331,
      extraImages: ['assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk F telescopic/2.png',
                    'assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk F telescopic/3.png',
                    'assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk F telescopic/4.png',
                    'assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk F telescopic/5.png']},
      {name: 'PinaDisk F Inox disc type',
      imageUrl: 'assets/images/product/Product HMS/Pneumatic sowing machines/PinaDisk F ixos/1.png', price: '990,000.00', id: 332,
      extraImages: ['assets/images/product/Product HMS/Pneumatic sowing machines/PinaDisk F ixos/2.png',
                    'assets/images/product/Product HMS/Pneumatic sowing machines/PinaDisk F ixos/3.png',
                    'assets/images/product/Product HMS/Pneumatic sowing machines/PinaDisk F ixos/4.png']},
      {name: 'PinaDisk F Microgranul disk type',
      imageUrl: 'assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk F microg/1.png', price: '990,000.00', id: 333,
      extraImages: ['assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk F microg/2.png',
                    'assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk F microg/3.png',
                    'assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk F microg/4.png',
                    'assets/images/product/Product HMS/Pneumatic sowing machines/Pinadisk F microg/5.png']},

    ];
  others: Item5[] = [
      {name: 'Gunny Lift Load Lifter',
      imageUrl: 'assets/images/product/Product HMS/gunny lift/1.png', price: '990,000.00', id: 334,
      extraImages: ['assets/images/product/Product HMS/gunny lift/2.png']}
    ];

    getById(id: number) {
      return this.horizontals.find (p => p.id === id) || this.verticals.find(p => p.id === id)
             || this.augers.find (p => p.id === id) || this.silages.find (p => p.id === id) || this.others.find (p => p.id === id);
    }
  constructor() { }
}
