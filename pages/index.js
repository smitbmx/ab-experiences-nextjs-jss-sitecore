import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'

function Home(props) {
  console.warn("data", props.sitecoreExperiences[0].sitecore.route.name)

  var experience = GetExperience(props);
  return <div>
    <h1>Welcome to Proton Store</h1>
    <h3>{experience.sitecore.route.deviceId}</h3>
    
    
      <h3>{experience.sitecore.route.fields.Title.value}</h3>
      <h3>{experience.sitecore.route.fields.Text.value}</h3>
    
  </div>
}

Home.getInitialProps = async function(){
   var items = ['AutoExperiences/ProtonPerdana', 'AutoExperiences/ProtonSaga'];

   var sitecoreExperiences = new Array();
   for (let i = 0; i < 2; i++) {
    const res3 = await fetch('https://alpa-xpsingle-single.azurewebsites.net/sitecore/api/layout/render/jss?item='+items[i]+'&sc_apikey={AB32580E-F477-47EE-B4AB-FAAEB86225C0}')
    const data3 = await res3.json();
    sitecoreExperiences.push(data3);
  }


  return{
    sitecoreExperiences
  }
}

function GetExperience(props){
return props.sitecoreExperiences[Math.floor(Math.random() * props.sitecoreExperiences.length)];
}

export default Home
