import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Elip1 from '../../../static/img/ellipsoid1.png'
import Elip2 from '../../../static/img/ellipsoid2.png'
import Elip3 from '../../../static/img/ellipsoid3.png'
import Elip4 from '../../../static/img/ellipsoid4.png'
import Elip5 from '../../../static/img/ellipsoid5.png'
import Elip6 from '../../../static/img/equationsgeon.png'

const FeatureList = [
  {
    cardlink: '/intro',
    title: 'Geometries',
    img: Elip1,
    // Svg: require('@site/static/img/drawing1.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    cardlink: '/tutorials/grid-to-circle',
    title: 'Grid to Circle (Like Loop Tools)',
    img: Elip5,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    cardlink: '/tutorials/get-technical',
    title: 'Other Abstractions (More Complex Equations)',
    img: Elip3,
    description: (
      <>
        There may fascinating abstractions of the Lame curve. For now, I have worked on the version featuring <code>2/expoent</code>. 
      </>
    ),
  },
  {
    cardlink: '/tutorials/geons',
    title: 'Geons',
    img: Elip6,
    description: (
      <>
        An exciting new project I am looking at. It's an abstraction of the suuperellipsoids. 
      </>
    ),
  },
];



function Feature({Svg, title, description, cardlink, img}) {


  return (
    <div className={clsx('col col--4 plaincards', styles.plaincards)}>
      <div style={{cursor: "pointer"}} >
      <a href={cardlink} className={styles.cardlinks}>
      <div className="text--center">
        <div>
          <img src={img} alt="images" className={styles.featuredimg}/>
        </div>
        
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      </a>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container ellipsefeatures">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

