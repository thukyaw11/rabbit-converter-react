import './ControlBar.css'
import { Button, Box }from '@material-ui/core';
function ControlBar ({clearText, unicode, zawgyi}) {
    const copyToClipBoard = (ref) => {
        if(ref.current.innerHTML === '') return;
        ref.current.select();
        document.execCommand('copy');
    }
    return (
        <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper" justifyContent="center">
            <Box m={1}>
 <Button variant="contained" color="primary" onClick={() => copyToClipBoard(unicode)} disableElevation>
                Copy Unicode
            </Button>
            </Box>
            <Box m={1}>

 <Button variant="contained" color="primary" onClick={() => clearText()} disableElevation>
                Clear
            </Button>  
            </Box>

            <Box m={1}>
            
            <Button variant="contained" color="primary" onClick={() => copyToClipBoard(zawgyi)} disableElevation>
                Copy Zawgyi
            </Button>
            </Box>
      </Box>

    );
}

export default ControlBar;