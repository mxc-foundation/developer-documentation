import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Deploy the Network',
    Svg: require('../../static/img/undraw_connected_world_wuay.svg').default,
    description: (
      <>
        Leverage the MXProtocol on LPWAN Miners to build the free Global IoT
        Network.
      </>
    ),
  },
  {
    title: 'Build the Devices',
    Svg: require('../../static/img/undraw_Internet_on_the_go_re_vben.svg')
      .default,
    description: (
      <>
        Configure your LPWAN devices and sensors to use the MXProtocol's unique
        provisioning method providing your users with a turnkey experience.
      </>
    ),
  },
  {
    title: 'Analyze the Data',
    Svg: require('../../static/img/undraw_instat_analysis_ajld.svg').default,
    description: <>Connect to your LPWAN devices with data analysis tools.</>,
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
