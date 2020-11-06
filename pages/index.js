import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'

function Home(props) {
  //console.warn("data", props.sitecoreExperiences[0].sitecore.route.name)

  var experience = GetExperience(props);
  return <div>
  <header>
    <h1 className="header__name">
      Proton Store
    </h1>
    <h2 className="header__name"></h2>
  </header>
  <div id="main">
    <article>
    <h2>{experience.sitecore.route.fields.Title.value}</h2>
    <h4>{experience.sitecore.route.fields.Text.value}</h4>
      <p>
        Proton Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and
        more recently with desktop publishing software like Aldus PageMaker
        including versions of Lorem Ipsum.
      </p>
      <img src="images/alps.jpg" className="main__img" />
      <p>
        Proton Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and
        more recently with desktop publishing software like Aldus PageMaker
        including versions of Lorem Ipsum.
      </p>
      <p>
        Proton Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and
        more recently with desktop publishing software like Aldus PageMaker
        including versions of Lorem Ipsum.
      </p>
    </article>
    <nav></nav>
    <aside></aside>
  </div>
  <footer></footer>

  <style jsx>{`
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
    }
    #main {
      display: flex;
      min-height: calc(100vh - 40vh);
    }
    #main > article {
      flex: 1;
      text-align: justify;
    }
    #main > nav,
    #main > aside {
      flex: 0 0 20vw;
      background: #45B39D;
    }
    #main > nav {
      order: -1;
    }
    header,
    footer,
    article,
    nav,
    aside {
      padding: 1em;
    }
    header,
    footer {
      background: #45B39D;
      height: 20vh;
    }
    .main__img {
      max-width: 100%;
    }
    .header__name {
      color: ghostwhite;
      text-align: center;
    }
  `}</style>
</div>
  
  
  
  // <div>
  //   <h1>Welcome to Proton Store</h1>
  //   <hr/><hr/>
  //     <h2>{experience.sitecore.route.fields.Title.value}</h2>
  //     <h4>{experience.sitecore.route.fields.Text.value}</h4>
  //     <hr/>
  //     <h3>Technical specs</h3>
  //     <hr/>
  //     <h4>Engine: {experience.sitecore.route.fields.Engine?.value}</h4>
  //     <h4>Price: {experience.sitecore.route.fields.Price.value}</h4>
  //     <h4>Weigth: {experience.sitecore.route.fields.Weigth.value}</h4>
  //     <h4>Length: {experience.sitecore.route.fields.Length.value}</h4>
  //     <h4>Fuel tank capacity: {experience.sitecore.route.fields.FuelTank.value}</h4>
  //     <hr/>
  //     <h3>Price: {experience.sitecore.route.fields.Price.value}</h3>
  //     <hr/><h6>Product ID: {experience.sitecore.route.deviceId}</h6>
  //     {/* <img src={experience.sitecore.route.fields.Image.value} alt={experience.sitecore.route.fields.Title.value} /> */}
    
  // </div>
}

Home.getInitialProps = async function(){
  const instanceName = "https://sc10xp0-15000b-single.azurewebsites.net";
  const apiKey = "{37F9E3B1-8440-42F6-820D-CDF0A3E6B708}";
   var items = ['AutoExperiences/ProtonPerdana', 'AutoExperiences/ProtonSaga', 'AutoExperiences/ProtonX50'];

   var sitecoreExperiences = new Array();
   for (let i = 0; i < items.length; i++) {
    var requestUrl = instanceName + '/sitecore/api/layout/render/jss?item='+items[i]+'&sc_apikey='+ apiKey;
    const res = await fetch(requestUrl)
    const data = await res.json();
    sitecoreExperiences.push(data);
  }


  return{
    sitecoreExperiences
  }
}

function GetExperience(props){
  var exp = Math.floor(Math.random() * props.sitecoreExperiences.length)
  return props.sitecoreExperiences[exp];
}

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('https://.../posts')
//   const posts = await res.json()

//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     sitecoreExperiences: {
//       posts,
//     },
//   }
// }

export default Home

