import React , {useState, useRef} from 'react';
import './RabbitBox.css'
import {Grid} from '@material-ui/core';
import {zg2uni, uni2zg} from './rabbit'
import ControlBar from './ControlBar'

function RabbitBox() {

    const [zawgyi, setZawgyi] = useState('');
    const [unicode, setUnicode] = useState('');

    const zawgyiRef = useRef(null);
    const unicodeRef = useRef(null);

    const clearText = () => {
        setZawgyi('');
        setUnicode('');
    }

    const uniChange = (e) => {
        setUnicode(e.target.value);
        setZawgyi(uni2zg(e.target.value));
    }

    const zawgyiChange = (e) => {
           setZawgyi(e.target.value);
        setUnicode(zg2uni(e.target.value));   
    }
    return (
        <div>
        <Grid container>
         <Grid item xs={12} sm={6}>
  <div className="uni-c">
              <h3>Unicode</h3>
          <textarea type="text" ref={unicodeRef} className="unicode" value={unicode} onChange={uniChange}/>

          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
                <div className="zg-c">
            <h3>Zawgyi</h3>
         <textarea type="text" ref={zawgyiRef} className="zg" value={zawgyi} onChange={zawgyiChange}/>
        </div>
        </Grid>
        </Grid>
          <ControlBar clearText={clearText} unicode={unicodeRef} zawgyi={zawgyiRef} />

</div>
    );
}

export default RabbitBox;