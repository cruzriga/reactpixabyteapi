import React from 'react';
import Buscador from "./components/Buscador";
import ImgLists from "./components/ImgLists"
function App() {
  const [query,setQuery] = React.useState('');
  const [imgs,saveImgs] = React.useState([]);
  const [page,savePage] = React.useState(1);
  const [pageCount,savePageCount] = React.useState(0);
  const apikey = '14740182-dff3740608283f0100eb638c1';
  React.useEffect(()=>{
    async function consultar(){
      const imgperpage = '30';
      const url = `https://pixabay.com/api/?key=${apikey}&q=${query}&per_page=${imgperpage}&page=${page}`;
      const resp = await fetch(url);
      const r = await resp.json();
      saveImgs(r.hits);
      paginator.calculate(r.totalHits, imgperpage);
      document.querySelector('.jumbotron').scrollIntoView({block: "end", behavior: "smooth"});
    }
    if(query !== '') consultar();
  },[query, page]);

  const paginator = new function(){
    const ob = this;
    ob.calculate  =  (total, perpage)=>{
      const totPages = Math.ceil(total / perpage);
      savePageCount(totPages);
    }

    ob.next = ()=>{
      let newPage = page + 1 ;
      savePage(newPage);

    }

    ob.prev = ()=>{
      let newPage = page -1 ;
      savePage(newPage);

    }

  }
 
 
  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imágenes</p>
        <Buscador setParentQuery={setQuery}/>
      </div>
      <div className="row justify-content-center">
        <ImgLists imgs = {imgs} />
        {(page === 1)? null : (
         <button onClick={paginator.prev} className="btn btn-info mr-1" type="button"> {"<<"} ANTERIOR </button>
        )}

        {(page === pageCount || pageCount < 2 )? null : (
          <button onClick={paginator.next} className="btn btn-info mr-1" type="button">SIGUIENTE {">>"}</button>    
          )}
 </div>
    </div>
  );
}

export default App;
