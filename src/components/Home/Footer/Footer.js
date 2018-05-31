import React, {Component} from 'react';
import styled from 'styled-components'

class Footer extends Component {

    render(){
        return(
            <FooterMain>
                <Top>
                  
                    <TopHeader>TOP</TopHeader>
                 
                </Top>
                <FooterBody>
                    <Columns>
                        <div>
                            <span><a></a></span>
                        </div>
                        <Toggl>
                            <div>
                                <TogglTitle>TOGGL</TogglTitle>
                                <List>
                                    <ListItems><a>Full Plan Comparison</a></ListItems>
                                    <ListItems><a>Team</a></ListItems>
                                    <ListItems><a>Jobs</a></ListItems>
                                    <ListItems><a>Media Kit</a></ListItems>
                                    <ListItems><a>API</a></ListItems>
                                    <ListItems><a>Legal Terms</a></ListItems>
                                </List>
                            </div>
                        </Toggl>
                        <div>
                            <Toggl>
                                <TogglTitle>PRODUCT ADD-ONS</TogglTitle>
                                <List>
                                    <ListItems><a>Intergrations</a></ListItems>
                                    <ListItems><a>Toggl Button for Chrome</a></ListItems>
                                    <ListItems><a>Toggl Button for Firefox</a></ListItems>
                                    <ListItems><a>Andriod App</a></ListItems>
                                    <ListItems><a>iPhone App</a></ListItems>
                                    <ListItems><a>Desktop App</a></ListItems>
                                    <ListItems><a>Superday-Time Logging App</a></ListItems>
                                </List>
                            </Toggl>
                        </div>
                        <div>
                            <Toggl>
                                <TogglTitle>RESOURCES & USEFUL LINKS</TogglTitle>
                                <List>
                                    <ListItems><a>Toggl Blog</a></ListItems>
                                    <ListItems><a>Support & Knowledge Base</a></ListItems>
                                    <ListItems><a>Hire a Toggl Consultant</a></ListItems>
                                    <ListItems><a>Business Resources</a></ListItems>
                                    <ListItems><a>Productivity Resources</a></ListItems>
                                    <ListItems><a>Out of Office - Remote Working Guide</a></ListItems>
                                    <ListItems><a>Unicorn Startup Simulator</a></ListItems>
                                </List>
                            </Toggl>
                        </div>
                    </Columns>
                    <IconsBody >
                        <IconsList>
                            <IconsListItems><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 40"><path d="M49 4.7a21.6 21.6 0 0 1-5.8 1.6A9.7 9.7 0 0 0 47.6.7a20.1 20.1 0 0 1-6.3 2.5A10 10 0 0 0 33.9 0a9.6 9.6 0 0 0-7.2 3 9.8 9.8 0 0 0-2.9 7.1 10.4 10.4 0 0 0 .3 2.4A28.8 28.8 0 0 1 3.4 2.1 10.2 10.2 0 0 0 2.1 7a9.6 9.6 0 0 0 4.5 8.4A9.1 9.1 0 0 1 2 14.1v.2a9.9 9.9 0 0 0 2.2 6.4 9.8 9.8 0 0 0 5.8 3.4 9.8 9.8 0 0 1-2.7.3l-1.9-.2a10 10 0 0 0 3.5 5 9.7 9.7 0 0 0 5.8 2A19.5 19.5 0 0 1 2.4 36L0 35.9a30.1 30.1 0 0 0 33.5-2.2 31 31 0 0 0 5.7-6.6A28.6 28.6 0 0 0 44 11.3V10a20.5 20.5 0 0 0 5-5.3z"></path></svg></a></IconsListItems>
                            <IconsListItems style={{width:'13px'}}><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 49"><path d="M15 49V26.6h8.4l.6-8.2h-9v-6.1c0-2.7.7-4.1 3.5-4.1h5.2L24 .4h-.8A41.4 41.4 0 0 0 18 0c-4 0-7 1.1-9 3.2a11.2 11.2 0 0 0-3 8v7.2H0v8.2h6V49h9z"></path></svg></a></IconsListItems>
                            <IconsListItems><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 49"><path d="M24.5 4.4l9.9.2a13.5 13.5 0 0 1 4.6.8 7.7 7.7 0 0 1 2.8 1.8 7.8 7.8 0 0 1 1.8 2.8 13.7 13.7 0 0 1 .8 4.6c.1 2.6.2 3.4.2 9.9s0 7.3-.2 9.9a13.7 13.7 0 0 1-.8 4.6 8.1 8.1 0 0 1-4.7 4.7 13.7 13.7 0 0 1-4.6.8l-9.9.2-9.9-.2a13.7 13.7 0 0 1-4.6-.8A8.1 8.1 0 0 1 5.4 39a13.7 13.7 0 0 1-.8-4.6c-.1-2.6-.2-3.4-.2-9.9s0-7.3.2-9.9a13.7 13.7 0 0 1 .8-4.6 7.8 7.8 0 0 1 1.8-2.8A7.7 7.7 0 0 1 10 5.4a13.5 13.5 0 0 1 4.6-.8l9.9-.2m0-4.4L14.4.2a17.9 17.9 0 0 0-6 1.1 12.5 12.5 0 0 0-7.1 7.2 17.9 17.9 0 0 0-1.2 5.9C0 17 0 17.8 0 24.5s0 7.5.1 10.1a17.9 17.9 0 0 0 1.1 5.9 12.5 12.5 0 0 0 7.2 7.2 17.9 17.9 0 0 0 5.9 1.1l10.1.2 10.1-.2a17.9 17.9 0 0 0 5.9-1.1 12.5 12.5 0 0 0 7.2-7.2 17.9 17.9 0 0 0 1.1-5.9c.1-2.6.2-3.4.2-10.1s0-7.5-.2-10.1a17.9 17.9 0 0 0-1.1-5.9 12.5 12.5 0 0 0-7.2-7.2A17.9 17.9 0 0 0 34.6.2L24.5 0zm0 11.9a12.6 12.6 0 1 0 12.6 12.6 12.6 12.6 0 0 0-12.6-12.6zm0 20.8a8.2 8.2 0 1 1 8.2-8.2 8.2 8.2 0 0 1-8.2 8.2zm16-21.2a2.9 2.9 0 1 1-2.9-2.9 2.9 2.9 0 0 1 2.9 2.9z"></path></svg></a></IconsListItems>
                            <IconsListItems style={{width:'30px'}}><a ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 42"><path d="M22.6 0C14 .1 8.4.5 5.7 1.5A7.8 7.8 0 0 0 .8 7.1C.3 9.2 0 13.8 0 21v4c.1 6 .6 10 1.6 11.9s3.5 3.7 7.1 4.4 9.9.8 20.8.8h6.9c8.6-.1 14.2-.5 16.9-1.6a7.8 7.8 0 0 0 4.9-5.6c.5-2.1.8-6.7.8-13.9v-4c-.1-6-.6-10-1.6-11.9S53.9 1.4 50.3.8 40.4 0 29.5 0zm-.5 9.9L40.5 21 22.1 32.1z"></path></svg></a></IconsListItems>
                            <IconsListItems><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 47"><path d="M43.5 0h-40A3.4 3.4 0 0 0 0 3.4v40.2A3.4 3.4 0 0 0 3.5 47h40a3.4 3.4 0 0 0 3.5-3.4V3.4A3.4 3.4 0 0 0 43.5 0zM13.9 40.1H7V17.6h7zm-3.4-25.5a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm29.6 25.5h-7v-11c0-2.6 0-5.9-3.6-5.9S25.3 26 25.3 29v11.1h-7V17.6H25v3.1h.1a7.3 7.3 0 0 1 6.6-3.6c7.1 0 8.4 4.7 8.4 10.7V40z"></path></svg></a></IconsListItems>
                            <IconsListItems style={{width:'35px'}}><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 28"><path d="M14 12v4.8h7.9c-.3 2.1-2.4 6-7.9 6A8.8 8.8 0 0 1 5.3 14 8.8 8.8 0 0 1 14 5.2a7.9 7.9 0 0 1 5.6 2.1l3.8-3.7A13.4 13.4 0 0 0 14 0a14 14 0 1 0 0 28c8.1 0 13.4-5.7 13.4-13.7a12.9 12.9 0 0 0-.2-2.3zm0 0l34 4h-6v6h-4v-6h-6v-4h6V6h4v6h6v4z"></path></svg></a></IconsListItems>
                            <IconsListItems><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 49"><path d="M25.5 0a25.1 25.1 0 0 0-8.1 48.9 1.3 1.3 0 0 0 1.7-1.2v-4.3C12 44.9 10.5 40 10.5 40c-1.2-2.9-2.8-3.7-2.8-3.7-2.3-1.6.2-1.5.2-1.5a5.4 5.4 0 0 1 3.9 2.6c2.3 3.8 6 2.7 7.4 2.1a5.3 5.3 0 0 1 1.6-3.3c-5.7-.6-11.6-2.8-11.6-12.4a9.6 9.6 0 0 1 2.6-6.7 8.9 8.9 0 0 1 .3-6.7s2.1-.7 7 2.6a24.6 24.6 0 0 1 12.8 0c4.9-3.2 7-2.6 7-2.6a8.9 8.9 0 0 1 .3 6.7 9.6 9.6 0 0 1 2.6 6.7c0 9.6-6 11.8-11.6 12.4a5.9 5.9 0 0 1 1.7 4.7v6.9A1.3 1.3 0 0 0 33 49h.5a25.1 25.1 0 0 0-8-49z"></path></svg></a></IconsListItems>
                        </IconsList>
                    </IconsBody>
                    <ParagraphBody>Check out our friends
                        <a style={{color:'black',fontWeight:'600'}}> Teamweek</a> for project management, and 
                        <a style={{color:'black',fontWeight:'600'}}> Hundred5</a> for recruiting.
                    </ParagraphBody>
                </FooterBody>
                <BottomSVG><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 151.5 57"><path d="M137.9 23.9l1.4-2.9-6.8 2 2.1-4.9 6.8-2 1.5-3.1-15.4 4.5-1.6 3.1 4.8-1.4-2.3 4.9-1.8.5-1.5 2.9 1.9-.4-4.1 8.8 2.6 2.8 5.6-12.8zm-6.7-9.9l1.5-3.1-15.4 4.5-1.6 3.1 6-1.7-5.6 11.8 2.7 2.9 6.8-15.9z" stroke="none"></path><path d="M149.5 8.3l-21-6.2-21 6.2V31l21 23.1 21-23.1z" fill="none" stroke-width="4"></path><path d="M16.3 33.1V17.7h-4L8.2 28.4 4.1 17.7H0v15.4h3.5v-9.6l3.4 9.6h2.6l3.3-9.6v9.6h3.5zm8.7-11l1.9 6.3h-3.7zm3.3 11h3.9l-5.5-15.4h-3.3l-5.5 15.4h3.8l.6-1.9h5.5zm11.2-15.4h-5.7v15.4h5.7a7.70584194 7.70584194 0 0 0 .6-15.4zm-2.1 3.1h1.9a4.6 4.6 0 0 1 0 9.2h-1.9zm15.8-.2H59v-2.9h-9.3v15.4h9.4v-2.9h-5.9v-3.4H59V24h-5.8zm13.9-2.9v15.4h6.4c4.2 0 5.1-2.7 5.1-4.3a3.4 3.4 0 0 0-2.8-3.5 3.5 3.5 0 0 0 2.7-3.4c0-1.6-.8-4.2-5-4.2h-6.4zm5.7 6.3h-2.1v-3.7h2.1c1.8 0 2.1 1.1 2.1 1.8s-.4 1.8-2.1 1.8zm-2.1 2.6H73a1.9 1.9 0 0 1 2 1.8c0 .9-.4 1.9-2.1 1.9h-2.2v-3.7zM85 33.1l7.6-15.4h-3.9l-2.8 6.1-3.3-6.1h-4.2l5.5 9.6-2.9 5.8h4z" stroke="none"></path></svg></BottomSVG>
            </FooterMain>
        )
    }
}

export default Footer;

// ::before/::after
 const FooterMain = styled.section `
//  ::before{
//      background-color:#fff;
//      bottom:0px;
//      box-sizing:inherit;
//      content:'';
//      left:0px;
//      position:absolute;
//      right:0px;
//      top:0px;
//      z-index:2;
//  }
 display:flex;
 justifyContent:space-between;
 paddingBottom:5.3rem;
 paddingTop:4.8rem;
 position:relative;
 backgroundColor:#fff;
 fontWeight:500;
 boxSizing:inherit;
 fontFamily:GTWalsheim,Arial,sans-serif;
 fontSize:14px;
 z-index:2

 `

 const Top = styled.section`
//  ::before{
//      background-image: url(https://www.toggl.com/common/images/button-arrow-1deed00dda5d8041c47eeca866d67f0e.svg);
//      background-position-x:center;
//      background-position-y:center;
//      background-repeat-x: no-repeat;
//      background-repeat-y: no-repeat;
//      background-size:contain;
//      box-sizing:border-box;
//      content:"";
//      display:block;
//      font-size:0px;
//      height:8px;
//      left:24px;
//      position:absolute;
//      top:11px;
//      transform:translateX(-50%) translateY(0) scaleX(1) rotate(-90
//  }

 background-color:#dee1e3;
 border-bottom-left:50%;
 border-bottom-right:50%;
 border-top-left:50%;
 border-top-right:50%;
 border-radius:50%;
 color:#000;
 cursor:pointer;
 height:2.8rem;
 position:absolute;
 right:16.6666666667%;
 text-align:center;
 width:2.8rem;
 z-index:5;
 transform:translateX(1.6rem) translateY(-.8rem);
 `
 const TopHeader = styled.h5`
 bottom:12px;
 box-sizing:inherit;
 color:#000;
 cursor:pointer;
 display:block;
 font-size:11px;
 font-weight:700;
//  left:24px;
//  letter-spacing:.55px;
//  line-height:15.95px;
//  position:absolute;
//  text-align:center;
//  text-transform:uppercase;
//  transform:translateX(-50%) translateY;
//  transition-delay:
 `
 const FooterBody = styled.section `
 box-sizing:inherit;
 color:#282a2d;
 dislpay:block;
 font-size:14px;
 font-weight:500;
 padding-left:22px;
 padding-right:22px;
 position:relative;
 width:375px;

 `
const Columns = styled.section `
margin-left:-5px;
margin-right:-5px;
// padding-left:calc(16.6666666667% * 1);
text-align:left;
display:inline-block;

`
const Toggl = styled.section `
text-align:left;
display:inline-block;
font-size:16px;
font-weight:500;
padding-left:.5rem;
padding-top:4px;
vertical-align:top;
width:100%;


`
const TogglTitle =styled.h5 `
display:block;
font-size: 11px;
font-weight:600;
letter-spacing:.55px;
line-height:15.95px;
margin-bottom:10px;

`
const List = styled.ul `
display:block;
font-size:14px;
font-weight:300;
list-style-type:none;
padding:0
`
const ListItems = styled.li `
text-align:left;
margin-bottom:10px;
line-height:23.94px;
font-size:13px;
font-weight:600;

`
const IconsBody = styled.section `

box-sizing: inherit;
display:block;
margin-bottom: px;
margin-top:30px;
text-align:center
`
const IconsList =styled.ul `

display:inline-block;
max-width:320px;
text-align:center;
list-style-type:none;
padding:0;

`
const IconsListItems = styled.li `
width:25px;
text-align:center;
height:20px;
margin-bottom:30px;
margin-left:22.5px;
margin-right:22.5px;
display:inline-block;

`
const ParagraphBody = styled.p `
text-align:center;
padding-right:30px;
padding-left:30px;
margin-bottom:100px;
line-height:23.94px;
letter-spacing:.28px;
font-weight:600;
font-size:12px;
display:block;
color:#848687;
font-family:GTWalsheim,Arial,sans-serifbody;


`
const BottomSVG = styled.a`
box-sizing:inherit
fill:#bcc2c6;
display:block;
width:75px;
color:black;
bottom:53px;
font-size:14px;
position:absolute;
z-index:10;
transform:translateX(-50%);
left:187.5px;
stroke:#bcc2c6;
padding-top:30px
`