import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export function EquationSection() {
    return (
      <section className={clsx('section--primary', styles.sectionBanner, styles.equations)} >
        <div className={styles.backdrop}></div>
        <div className={clsx('container', styles.withbackdrop)}>
          <Heading as="h1" className="hero__title">Technical Stuff
          </Heading>
          <p className="hero__subtitle">Equations, derivations, adaptations, logic, corrections, and more.</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/tutorials/get-technical">
              Get technical
            </Link>
        </div>
        </div>
      </section>
    );
  }
  