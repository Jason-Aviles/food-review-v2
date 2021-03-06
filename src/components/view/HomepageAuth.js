import React from 'react';
import Fade from 'react-reveal/Fade';
import one from '../Img/foodFrame1.jpeg'
import two from '../Img/foodFrame2.jpeg'
import three from '../Img/foodFrame3.jpeg'
import four from '../Img/foodFrame4.jpeg'


const HomepageAuth = () => {
  return (
   <div style={{display:'flex' ,alignItems:"center",flexDirection:'column'}}>


<div style={{display:'flex' ,alignItems:"center",justifyContent:'center',flexDirection:'row'}}>

<div style ={{width:'40%',margin:'auto ='}}>
<Fade delay={500}>
<img src={four}  style ={{width:'100%',margin:'auto 5% auto 5%',borderRadius:'10px'}}/></Fade></div>


<div style ={{width:'40%',margin:'auto ='}}>
<Fade  delay={1000}>
<img src={one} style ={{width:'100%',margin:'auto 5% auto 6%',borderRadius:'10px'}}/></Fade></div>
</div>
<Fade  delay={2500}><div style={{background:'#c36f6fa8' ,width:"50%",height:"30%",display:'flex',position:'absolute',marginTop:"20%",justifyContent:"center",alignItems:'center',borderRadius:'10px',zIndex:1}}>

<h1 style={{fontFamily:" 'Righteous', cursive",color:'white',fontSize:'5rem',letterSpacing:'10px'}}>Food Review</h1>

</div></Fade>



<div style={{display:'flex' ,alignItems:"center",justifyContent:'center',flexDirection:'row',}}>
<div style ={{width:'40%',margin:'auto =',}}>
<Fade  delay={1500}>
<img  src={two}  style ={{width:'100%',margin:'auto 5% auto 5%',borderRadius:'10px'}}/></Fade></div>
<div style ={{width:'40%',margin:'auto ='}}>
<Fade  delay={2000}>
<img src={three}  style ={{width:'100%',margin:'auto 5% auto 6%',borderRadius:'10px'}}/></Fade></div>
</div>



   </div>
  );
};

export default HomepageAuth;