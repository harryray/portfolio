import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import PortfolioGrid from "../components/portfolio/grid"
import SEO from "../components/seo"
import BlogGrid from "../components/blog/grid"
import Title from "../components/home/title"

import skeleGif from '../images/home/about-me/skele.gif'
import svgOne from '../images/home/watermelon-pack-illustration-18.svg'

const IndexPage = () => (
  <Layout>
    
  <section id="section__home__splash">
    <Title />
  </section>

  <section id="section__home__projects" className="margin-bottom--3x">
    <PortfolioGrid />
  </section>

  <section className="section__contact margin-bottom--3x">
    <div className="container">
      <Link to="/contact" className="button button--filled-black">CONTACT ME</Link>
    </div>
  </section>

  <section id="section__home__fresh" className=" margin-bottom--3x">
    <span className="display-title ghost">FRESH IDEAS</span>
    <Image filename="from_the_bridge.jpeg" alt="" />
    <Image filename="lemur.jpg" alt="" />
    <span className="display-title">HUMAN TOUCH</span>
  </section>

  <section id="section__home__services" className="margin-bottom--3x">
    <div className="flex__container flex__middle flex__container-uneven-2-col container">
      <div>
        <img src={svgOne} alt="" />
      </div>
      <div className="flex__item--padding-2x max-width--300">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus feugiat euismod. Etiam ut sem eget massa convallis consequat. Pellentesque egestas bibendum sem vel suscipit. Pellentesque a varius mi, in dignissim ex. Praesent at urna urna. In vestibulum quam quis accumsan venenatis. Duis ipsum nisi, pharetra nec condimentum at, semper sit amet sapien. Ut rhoncus at sapien id commodo.</p>
        <p>Etiam et ex sed erat consectetur feugiat euismod ac mauris. Nam interdum ut eros eget vehicula. Nunc ullamcorper, ex at scelerisque gravida, est lacus feugiat sapien, in pretium nulla tortor eu quam. Pellentesque eget hendrerit ligula, eget fringilla leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas eget purus at arcu condimentum cursus id at nunc. Vestibulum scelerisque lorem vitae turpis hendrerit facilisis. Praesent id fringilla felis.</p>
      </div>
    </div>
  </section>

  <section id="section__home__blog" className="margin-bottom--3x">
    <BlogGrid />
  </section>

  <section className="section__contact margin-bottom--3x">
    <div className="container">
      <Link to="/contact" className="button button--filled-black">CONTACT ME</Link>
    </div>
  </section>

  <section id="section__home__about-me" className="margin-bottom--3x">
    <div className="container position--relative">
      <span className="display-title">ABOUT ME</span>
      <div className="container--small">
        <div className="max-width--340">
          <p className="intro-text margin-bottom margin-top">I believe in design <strong>for humans, by humans</strong>.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis est facilisis lorem laoreet, id condimentum dui tristique. Aliquam erat volutpat. Proin id purus libero. Phasellus a nunc rhoncus, gravida elit vel, consectetur lorem. Proin tortor arcu, dignissim in risus nec, suscipit venenatis orci. In vel auctor est. Integer diam augue, iaculis ut nulla ut, mollis elementum neque. Sed convallis, elit eu efficitur dignissim, libero justo pulvinar ipsum, quis lacinia neque nisi a eros. Sed eu odio ultricies, volutpat risus et, vehicula massa.</p>
          <p>Phasellus arcu nibh, tincidunt nec interdum sed, sodales eget tellus. Nulla lobortis, erat in placerat finibus, nisl ex semper orci, ac commodo sem libero non nisl. Nullam consectetur posuere ante. Praesent euismod orci non eros finibus congue eget lacinia erat. Morbi volutpat id enim ac laoreet. Curabitur quis facilisis tortor, et tincidunt tellus. Donec laoreet pharetra purus quis blandit. Sed vel tortor ut magna vehicula iaculis. Morbi eu mi elit. Maecenas a odio sed ipsum faucibus venenatis in eget urna. Nullam posuere tincidunt convallis.</p>
        </div>
      </div>
      <Image filename="about-me/face_c.jpg" alt="" />
      <Image filename="about-me/face2_c.jpg" alt="" />
      <Image filename="about-me/jamming_c.jpg" alt="" />
      <Image filename="about-me/lespaul.jpeg" alt="" />
      <Image filename="about-me/mcdonalds_c.jpg" alt="" />
      <Image filename="about-me/shoes_c.jpg" alt="" />
      <div className="gatsby-image-wrapper">
        <img src={skeleGif} alt="" />
      </div>
      <Image filename="about-me/vultures_c.jpg" alt="" />
      <Image filename="about-me/zebra_c.jpg" alt="" />
    </div>
  </section>
  
  </Layout>
)

export default IndexPage
