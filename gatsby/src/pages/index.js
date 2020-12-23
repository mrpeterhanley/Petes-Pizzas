import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import LoadingGrid from '../components/LoadingGrid';
import { HomePageGrid } from '../styles/Grids';
import useLatestData from '../utils/useLatestData';
import ItemGrid from '../components/ItemGrid';

function CurrentlySlicing({ slicemasters }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">Slicemasters</span>
      </h2>
      <p>Currently on duty, ready to slice you up!</p>
      {!slicemasters && <LoadingGrid count={4} />}
      {slicemasters && !slicemasters?.length && (
        <p>No one is working right now!</p>
      )}
      {slicemasters?.length && <ItemGrid items={slicemasters} />}
    </div>
  );
}

function HotSlices({ hotSlices }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">Hot Slices</span>
      </h2>
      <p>Currently in the case, serving by the slice</p>
      {!hotSlices && <LoadingGrid count={4} />}
      {hotSlices && !hotSlices?.length && <p>Nothing in the case!</p>}
      {hotSlices?.length && <ItemGrid items={hotSlices} />}
    </div>
  );
}

const HomePageStyles = styled.div`
  .mobile-pizza-icons {
    margin-top: 1rem;
    display: none;
  }

  .wine-link a {
    color: red;
  }

  @media (max-width: 1000px) {
    .pizza-icons {
      display: none;
    }
    .mobile-pizza-icons {
      display: block;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

export default function HomePage() {
  const { slicemasters, hotSlices } = useLatestData();
  return (
    <Layout>
      <HomePageStyles className="center">
        <h1>
          <span className="pizza-icons">🍕 🍕</span> The Best Tasting Pizzas
          You'll Never Eat! <span className="pizza-icons">🍕 🍕</span>
        </h1>
        <h1 className="mobile-pizza-icons">🍕 🍕 🍕</h1>
        <p>Open 11am to 11pm Every Single Day</p>
        <p>
          Also{' '}
          <span className="wine-link">
            <Link to="/wines">check out</Link>
          </span>{' '}
          our huge selection of wines!
        </p>
        <HomePageGrid>
          <CurrentlySlicing slicemasters={slicemasters} />
          <HotSlices hotSlices={hotSlices} />
        </HomePageGrid>
      </HomePageStyles>
    </Layout>
  );
}
