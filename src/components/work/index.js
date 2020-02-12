import React,{Component} from 'react';
import {WorkSection,WorkTitle,WorkTitleSpan,PartTile,Icon,Line,WorkPart,PartDesc} from'./style.js'
import axios from 'axios'
class Work extends Component {
  state={
    works:[]
  }
  componentDidMount(){
    axios.get('js/data.json').then(res=>{this.setState({works:res.data.works})});
  }
  render(){
     const {works}=this.state;
     const worksList=works.map((workItem)=>{
       return(
        <WorkPart first={workItem.id} key={workItem.id}>
        <Icon className={workItem.icon_name}></Icon>
        <PartTile>{workItem.title}</PartTile>
        <PartDesc>
          {workItem.body}
        </PartDesc>
        </WorkPart>
       )

     })
    return (
    <WorkSection>
        <div className="container">
            <WorkTitle><WorkTitleSpan>My</WorkTitleSpan> Work</WorkTitle>
            {worksList}
        </div>
    </WorkSection>
  );
}}
  
export default  Work;