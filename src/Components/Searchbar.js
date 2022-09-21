import React, { useState ,useContext } from 'react'
import Alert from './Alert';

//context importing 
import ShowsContext from '../Context/shows/showsContext';
import alertContext  from '../Context/alerts/alertContext';

const Searchbar = () => {
    const [searchTerm , setSeacrchterm]  =useState('');
    const showsContext  = useContext(ShowsContext);
    const {searchShows} =   showsContext;

    const {alert , setAlert} = useContext(alertContext)

    const onSearchHandler=(e)=>{
        e.preventDefault();
        if(searchTerm === ''){
          setAlert(' please enter something')
        }else{
          searchShows(searchTerm);

        }
 
    }
  return (
    <div className='searchbar'>
     {alert ? <Alert message={alert.message} type={alert.type} /> : null }
        
        <form className='searchbat__form'>
        <input type='text' placeholder='S e a r c h   m o v i e   h e r e ....'  value ={searchTerm}  onChange={(e)=>{setSeacrchterm(e.target.value)}}/>
        <button className='searchbar__btn' onClick={onSearchHandler}>SEARCH</button>
        </form>
    </div>
  )
}

export default Searchbar