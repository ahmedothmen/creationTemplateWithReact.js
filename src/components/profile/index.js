import React from 'react';
import {ProfileSkills, ProfileSection,SkillsProfileTitle,TitleSpan,ProfileList,ProfileItem,
Span,Skills,SkillsDesc,Bar,Title,Prec,Parent,ParentSpan} from './style.js'

const Profile=()=> {

  
  return (
    <ProfileSkills>
    <div className="container">
        < ProfileSection>
            <SkillsProfileTitle><TitleSpan>My </TitleSpan>Profile</SkillsProfileTitle>
            <ProfileList>
                <ProfileItem>
                    <Span>Name</Span>
                    Hamza Nabil
                </ProfileItem>
                <ProfileItem>
                    <Span>Birthday</Span>
                    21/1/1996
                </ProfileItem>
                <ProfileItem>
                    <Span>Address</Span>
                    Ain shams
                </ProfileItem>
                <ProfileItem>
                  
                    <Span>Phone</Span>
                    4444 5555 6666
                </ProfileItem>
                <ProfileItem>
                    <Span>Email</Span>
                    hamza@hamza.com
                </ProfileItem>
                <ProfileItem>
                    <Span>Website</Span>
                    <Span web >www.google.com</Span>
                </ProfileItem>
            </ProfileList>
        </ProfileSection>
        
        <Skills>
        <SkillsProfileTitle>Some <TitleSpan>skills</TitleSpan></SkillsProfileTitle>
            <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
            </SkillsDesc>
            <Bar>
                <Title>Bootstrap</Title>
                <Prec>100%</Prec>
                <Parent>
                    <ParentSpan sp1></ParentSpan>
                </Parent>
            </Bar>
            
            <Bar>
                <Title>Css3</Title>
                <Prec>90%</Prec>
                <Parent>
                    <ParentSpan sp2></ParentSpan>
                </Parent>
            </Bar>
            
            <Bar>
                <Title>Photoshop</Title>
                <Prec>80%</Prec>
                <Parent>
                    <ParentSpan sp3></ParentSpan>
                </Parent>
            </Bar>
        </Skills>
        
    </div>
</ProfileSkills>
  );
}
  
export default Profile;