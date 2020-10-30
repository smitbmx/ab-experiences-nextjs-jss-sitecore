import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'

function Home(props) {
  console.warn("data", props.data.sitecore.route.fields.Text.value)

  return <div>
    <h1>Welcome to Proton Store</h1>
    <h3>{props.data.sitecore.route.deviceId}</h3>
    
    
      <h3>{props.data.sitecore.route.fields.Title.value}</h3>
      <h3>{props.data.sitecore.route.fields.Text.value}</h3>
    
  </div>
}

Home.getInitialProps = async function(){
  //const item = 'AutoExperiences/ProtonPerdana'
   var items = ['AutoExperiences/ProtonPerdana', 'AutoExperiences/ProtonSaga'];
   var item = items[Math.floor(Math.random() * items.length)];

  const res = await fetch('https://alpa-xpsingle-single.azurewebsites.net/sitecore/api/layout/render/jss?item='+item+'&sc_apikey={AB32580E-F477-47EE-B4AB-FAAEB86225C0}')
  const data = await res.json();

  return{
    data
  }
}

export default Home
