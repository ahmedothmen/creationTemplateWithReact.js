import React,{useState,useEffect}from 'react';
import axios from 'axios';
import {PortofolioSection,PotofolioTitle,Span,PortofolioList,PortofolioItem,ImgWapper,Image,Overlay, OverlaySpan} from './style.js'

const Portfolio=()=> {

const [images,setImages]=useState([]); //t3awedh state hedhi tetsema hox
 //hox testa3mel set w component life cycle fi componenent statless
useEffect(
    ()=>{
        axios.get('js/data.json').then(res=>{setImages(res.data.portfolio)});
    },[]) //hedhi t3awed componentDidMount()
        //[] bech t5arejna mel boucle infinie

      const portfolioImage=images.map((image)=>{
     
        return(
            <ImgWapper key={image.id}>
        <Image src={image.image} alt=""/>
      <Overlay>
          <OverlaySpan>
              Show Image
          </OverlaySpan>
      </Overlay>
      </ImgWapper>  
      )
         
      });
      
  return (
    <PortofolioSection>
    <PotofolioTitle><Span>My</Span> Portfolio</PotofolioTitle>
    <PortofolioList>
        <PortofolioItem active >All</PortofolioItem>
        <PortofolioItem>HTML</PortofolioItem>
        <PortofolioItem>Photoshop</PortofolioItem>
        <PortofolioItem>Wordpress</PortofolioItem>
        <PortofolioItem>Mobile</PortofolioItem>
    </PortofolioList>
    
    <div>
        
       
      {portfolioImage}     
         
        
    </div>
    
</PortofolioSection>
  );
}
  
export default Portfolio;