import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'

function Home(props) {
  console.warn("data", props.sitecoreExperiences[0].sitecore.route.name)

  var experience = GetExperience(props);
  return <div>
    <h1>Welcome to Proton Store</h1>
    
      <h6>Product ID: {experience.sitecore.route.deviceId}</h6>
      <h2>{experience.sitecore.route.fields.Title.value}</h2>
      <h4>{experience.sitecore.route.fields.Text.value}</h4>

      <h3>Technical specs</h3>
      <h4>Engine: {experience.sitecore.route.fields.Engine?.value}</h4>
      <h4>Price: {experience.sitecore.route.fields.Price.value}</h4>
      <h4>Weigth: {experience.sitecore.route.fields.Weigth.value}</h4>
      <h4>Length: {experience.sitecore.route.fields.Length.value}</h4>
      <h4>Fuel tank capacity: {experience.sitecore.route.fields.FuelTank.value}</h4>
      
      <h3>Price: {experience.sitecore.route.fields.Price.value}</h3>
      {/* <img src={experience.sitecore.route.fields.Image.value} alt={experience.sitecore.route.fields.Title.value} /> */}
    
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
