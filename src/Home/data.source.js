import React from 'react';
import myLogo from '../components/Frame/logo.png'
import teamMember1 from './imgs/teamMember1.jpeg'
import teamMember2 from './imgs/teamMember2.jpeg'
import teamMember3 from './imgs/teamMember3.jpeg'
import teamMember4 from './imgs/teamMember4.jpeg'
import search from './imgs/search.png'
import data from './imgs/data.png'
import travel from './imgs/travel.png'

export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page jznhvg194k-editor_css' },
  logo: {
    className: 'header3-logo',
    children:
      myLogo
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'Home',
        className: 'header3-item',
        children: {
          href: '#',
          children: [{ children: 'Home', name: 'text' }],
        }
      },
      {
        name: 'Vaccinations',
        className: 'header3-item',
        children: {
          href: '#',
          children: [{ children: 'Hospitals', name: 'text' }],
        },
      },
      {
        name: 'Recommondations',
        className: 'header3-item',
        children: {
          href: '#',
          children: [{ children: 'Flu Count(VIC)', name: 'text' }],
        },
      },
      {
        name: 'Travel',
        className: 'header3-item',
        children: {
          href: '#',
          children: [{ children: 'Travel', name: 'text' }],
        },
      },
      // {
      //   name: 'Quiz',
      //   className: 'header3-item',
      //   children: {
      //     href: '#',
      //     children: [{ children: 'Quiz', name: 'text' }],
      //   },
      // },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};
export const Banner10DataSource = {
  wrapper: { className: 'banner1' },
  BannerAnim: {
    children: [
      // {
      //   name: 'elem0',
      //   BannerElement: { className: 'banner-user-elem' },
      //   textWrapper: { className: 'banner1-text-wrapper' },
      //   bg: { className: 'bg bg0' },
      //   title: {
      //     className: 'banner1-title',
      //     children:
      //       '',
      //   },
      //   content: {
      //     className: 'banner1-content',
      //     children: '',
      //   },
      //   button: { className: 'banner1-button', children: 'Learn More' },
      // },
      {
        name: 'elem1',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner1-title',
          children:
            '',
        },
        content: {
          className: 'banner1-content',
          children: '',
        },
        button: { className: 'banner1-button', children: 'Learn More' },
      },
      {
        name: 'elem2',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg2' },
        title: {
          className: 'banner1-title',
          children:
            '',
        },
        content: {
          className: 'banner1-content',
          children: '',
        },
        button: { className: 'banner1-button', children: 'Learn More' },
      },
    ],
  },
};
export const Banner2DataSource = {
  wrapper: { className: 'banner1' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg3' },
        title: {
          className: 'banner1-title',
          children:
            '',
        },
        content: {
          className: 'banner1-content',
          children: '',
        },
        button: { className: 'banner1-button', children: '' },
      },
    ]
  }
} 
export const Banner3DataSource = {
  wrapper: { className: 'banner1' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg4' },
        title: {
          className: 'banner1-title',
          children:
            '',
        },
        content: {
          className: 'banner1-content',
          children: '',
        },
        button: { className: 'banner1-button', children: '' },
      },
    ]
  }
} 
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: 'We provide information and recommendations',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: 'based on reliable report and data',
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'info-circle',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Flu vaccinations information' },
          content: {
            className: 'content3-content',
            children:
              'Reilable article about the flu vaccinations for older people',
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'heat-map',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Flu vaccineations recommendation' },
          content: {
            className: 'content3-content',
            children:
              'The flu heat map will give you the basic sense of the severity of flu in different suburb of VIC',
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'more',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'More vaccinations info and suggestions' },
          content: {
            className: 'content3-content',
            children:
              'Coming soon ......',
          },
        },
      },
    ],
  },
};
export const Feature00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: 'Our Features' }],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          title: 'Hospitial search',
          target: 'Vaccinations',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                // 'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
                search
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '',
            },
            { name: 'content', children: 'Where can i get vaccinated based on my location?' },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          title: 'Travel shot suggestion',
          target: 'Travel',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                // 'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
                travel
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '',
            },
            {
              name: 'content',
              children: 'Get vaccine recommendation before your international journey!',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          title: 'Data analytics',
          target:'Recommondations',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                // 'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
                data
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '',
            },
            {
              name: 'content',
              children: 'Influenza count in victoria based on region,age and year.',
            },
          ],
        },
      },
    ],
  },
};
export const Teams10DataSource = {
  wrapper: { className: 'home-page-wrapper teams1-wrapper' },
  page: { className: 'home-page teams1' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: 'Team Members' }],
  },
  block: {
    className: 'block-wrapper ant-row',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                teamMember1,
            },
            { name: 'title', className: 'teams1-title', children: 'Himanshu Soni' },
            {
              name: 'content',
              className: 'teams1-job',
              children: 'Master of Data Science',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                'Skills: python, R, SQL, MongoDb, d3, psark and unix coding.',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                teamMember2,
            },
            { name: 'title', className: 'teams1-title', children: 'Morteza Sheibani' },
            {
              name: 'content',
              className: 'teams1-job',
              children: 'Master of Network Security',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                'Skills: BSc Network, PGc in Information Security.',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
              teamMember3,
            },
            { name: 'title', className: 'teams1-title', children: 'Hongda Xie' },
            {
              name: 'content',
              className: 'teams1-job',
              children: 'Master of Information Technology',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                'Skills: Android programming, Java, Python, JavaScript, PHP, IoT development.',
            },
          ],
        },
      },
      {
        name: 'block~jznggdf7bga',
        className: 'block',
        md: 6,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                teamMember4,
            },
            { name: 'title', className: 'teams1-title', children: 'Yu Lu' },
            {
              name: 'content',
              className: 'teams1-job',
              children: 'Master of Business Information Technology',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                'Skills: Java, SQL, System Analysis and Design, Python, R',
            },
          ],
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 4,
        className: 'block',
        title: {
          className: 'logo',
          children:
            myLogo,
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: 'Address: 900 Dandenong Rd, Caulfield East, Monash University, VIC 3145',
            },
            {
              name: '',
            }
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 4,
        className: 'block',
        title: { children: 'Home' },
        childWrapper: {
          children: [
            { href: '/home', name: 'home', children: 'Home' },
          ],
        
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 4,
        className: 'block',
        title: { children: 'Hospitals' },
        childWrapper: {
          children: [
            { name: 'Hospitals', href: '/Vaccinations', children: 'Hospitals' },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 4,
        className: 'block',
        title: { children: 'Data' },
        childWrapper: {
          children: [
            { href: '/Recommondations', name: 'Data', children: 'Flu Count(VIC)' },
          ],
        },
      },
      {
        name: 'block4',
        xs: 24,
        md: 4,
        className: 'block',
        title: { children: 'Travel' },
        childWrapper: {
          children: [
            { href: '/Travel', name: 'Travel', children: 'Travel' },
          ],
        },
      },
      // {
      //   name: 'block5',
      //   xs: 24,
      //   md: 4,
      //   className: 'block',
      //   title: { children: 'Quiz' },
      //   childWrapper: {
      //     children: [
      //       { href: '/Quiz', name: 'Quiz', children: 'Quiz' },
      //     ],
      //   },
      // },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <>
        <span>
        ©2019 Codename Anti-virus All Rights

          Reserved
        </span>
      </>
    ),
  },
};
