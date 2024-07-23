import * as React from "react";
import Layout from '../components/layout/layout';

import Seo from "../components/seo/seo";

import "../styles/main.scss";
import "../styles/global.css";

import { HeroBanner } from "../components/page-components/hero-banner/heroBanner"; 
import { RatesBanners } from "../components/page-components/rates/ratesBanners";
import { ClientList } from "../components/page-components/clients/clientList";
import { ClientList1 } from "../components/page-components/clients/clientList-1";
import { ClientsNumber } from "../components/page-components/banner-numbers/clientNumbers";
// import { Gallery } from "../components/page-components/lightgallery/lightgallery";

 
const IndexPage = () => {
  return (
    <>
      <Layout pageTitle="Home Page">
        <HeroBanner />
        <ClientsNumber />
        <ClientList /> 
        <ClientList1 />
        <RatesBanners />
        {/* <Gallery /> */}
      </Layout>
    </>
  )
}
 
export const Head = () => <Seo title="Home Page" />

export default IndexPage;
