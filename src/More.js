import {useState} from 'react';
import './More.css'
function More() {

    const [moreVisible, setVisible] =useState(false);

    return (
        <div>
            <p className="lm" onClick={() => setVisible(!moreVisible)}>Learn More</p>

            {moreVisible && 
              <div>
      This site is created by using <a
        href="https://www.rabbit-converter.org/Rabbit/rabbit.js"
        target="blank"
      >Rabbit JS</a> and credit goes to <a
        href="https://www.rabbit-converter.org/Rabbit/"
        target="blank"
      >Rabbit Converter</a>
      <br/>
      <a
        href="https://github.com/thukyaw11/rabbit-converter-vue"
        target="blank"
      >source code</a>
    </div>
            }
           
        </div>
    );
}

export default More;