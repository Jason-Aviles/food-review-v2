import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const HomepageAuth = () => {
  return (
   <div style={{display:'flex' ,alignItems:"center",flexDirection:'column'}}>


<div style={{display:'flex' ,alignItems:"center",justifyContent:'center',flexDirection:'row'}}>
<div style ={{width:'40%',margin:'auto ='}}>
<img src="http://www.gsfdcy.com/data/img/33/1496224-food-wallpaper.jpg"  style ={{width:'100%',margin:'auto 5% auto 5%',borderRadius:'10px'}}/></div>
<div style ={{width:'40%',margin:'auto ='}}>
<img src="http://www.gsfdcy.com/data/img/33/1496253-food-wallpaper.jpg"  style ={{width:'100%',margin:'auto 5% auto 6%',borderRadius:'10px'}}/></div>
</div>
<div style={{background:'#c36f6fa8' ,width:"50%",height:"30%",display:'flex',position:'absolute',marginTop:"20%",justifyContent:"center",alignItems:'center',borderRadius:'10px'}}>

<h1 style={{fontFamily:" 'Righteous', cursive",color:'white',fontSize:'5rem',letterSpacing:'10px'}}>Food Review</h1>

</div>



<div style={{display:'flex' ,alignItems:"center",justifyContent:'center',flexDirection:'row',}}>
<div style ={{width:'40%',margin:'auto =',}}>
<img  src="http://www.gsfdcy.com/data/img/33/1496359-food-wallpaper.jpg"  style ={{width:'100%',margin:'auto 5% auto 5%',borderRadius:'10px'}}/></div>
<div style ={{width:'40%',margin:'auto ='}}>
<img src="http://www.gsfdcy.com/data/img/33/1496384-food-wallpaper.jpg"  style ={{width:'100%',margin:'auto 5% auto 6%',borderRadius:'10px'}}/></div>
</div>



   </div>
  );
};

export default HomepageAuth;