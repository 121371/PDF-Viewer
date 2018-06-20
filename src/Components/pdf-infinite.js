import React from 'react';
import PDF from 'react-pdf-js-infinite';
import sample from './Resume.pdf';
import sample1 from './olsys.pdf';
import "../App.css";


export default class MyPdfViewer extends React.Component {
 
   scrollHandler(Id){
    var pdf1 = document.getElementById("1");
    var pdf2 = document.getElementById("2");
    if (Id==="1") {
      pdf2.scrollTop = pdf1.scrollTop;
      pdf2.scrollLeft = pdf1.scrollLeft;
      
    }
    else if(Id==="2") {
      pdf1.scrollTop = pdf2.scrollTop;
    }
   }

  render() {
    return (
    <div className="body">

     {/*I am writing inline style instead of making classes becoz its about few elements here */}
    
       <div id="1" style={{width: '60%',height: '300px', marginTop: '15px', marginLeft: '20%', overflow: 'scroll'}} onScroll={()=>this.scrollHandler('1')}>
         <PDF file={sample} scale={1.5} />
       </div>

       <hr style={{border: '3px solid #0f0809', width: '60%', alignContent: 'center', marginTop: '3%', marginBottom: '3%'}} />
        
       <div id="2" style={{width: '60%',height: '300px', marginBottom: '15px', marginLeft: '20%', overflow: 'scroll'}} onScroll={()=>this.scrollHandler('2')}>
           <PDF file={sample1} scale={1.5} />
       </div>

    </div>

    )
  }
}

