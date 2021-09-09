import logo from './logo.svg';
import image from './back.png';
import search from './search.png';
import menu from './menu.png';
import planner from './planner.png';

 
 
 
 
import './App.css';
import React, { Component,} from 'react';
 
class App extends Component{
 
  constructor() {
    super();
    //State Variables
    this.state = {
 
          period:30,
          setArticles:[],
          articles:[],
          copied:""
              
         };
 
 
 
 
        
   }
 
  //Function that fecthes data from nytimes api
  fetchData = async() => {
 
    try {
  
        const res = await fetch(
          //API KEY Hidden
          `https://api.nytimes.com/svc/mostpopular/v2/viewed/${this.state.period}.json?api-key=${process.env.REACT_APP_API_KEY }`)
 
          const articles = await res.json()
        this.setState({
          articles: articles.results})
 
       }
          catch (error) {
  
             }
    
 
                  }
 
  //Function to recicve article main story 
  handleClick = (props) => {
    alert(props);
    this.setState({
      copied: props})
 
      
 
    
  }
  //Function that calls the function that fecthes data once instead of looping to save memory
  componentDidMount() {
    this.fetchData()
 
  }
    render(){
     
 
        return(    
          //Articles section
        <section style={{background:'#fafafa',
 paddingTop:0}} >
   
          
          <h1  style={{marginTop:0,padding:10,background:'#48e0c1',textAlign:'center',color:'white'}}>New York Times News
         
         
          <img src={menu} style={{paddingTop:10,width:20,height:20,float: 'left',
}}></img>
 
<img src={search} style={{marginRight:-3,paddingTop:10,width:20,height:20,float: 'right',
}}></img>
          </h1>
         
          {this.state.articles.map((article) => {
 
            const {abstract,published_date,byline,lead_paragraph
            ,web_url,title} = article
 
            return(
              <article style={{padding:20,gridColumn: 1,gridgap:10}}  key={abstract}>
                <h3         data-testid="abstract-text"
 style={{marginRight:20}}  onClick = {() =>  this.handleClick(abstract)
              
                
                } >
                
                  <div>
  
    </div>     
 
                  {title}</h3>
                <h4  style={{marginTop:-10,marginRight:20,fontSize:13,color:"#808080"}}>{byline}</h4>
                <h4 style={{marginTop:-10,fontSize:13,color:"#808080"}}>{published_date
                
                }<img src={planner} style={{width:20,height:20,float: 'left',
              }}></img></h4>
                <img src={image} style={{width:20,height:20,float: 'right',marginRight:-5,marginTop:-100
}}></img>
 
              </article>
            )
          })}
 
        </section>
        )
 
        
    }
};
 
 
export default App;
 
 