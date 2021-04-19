const { createElement} = React;
const html = htm.bind(createElement);

import Charla from '../Home/charla.js';
import Toolbar from '../toolbar.js';

class Juntada extends React.Component {
    render() { 
        return html`
            <${Ons.Page}>
                <${Toolbar} titulo="Juntada Virtual"><//>
                <${Charla} idCharla=23><//>
            <//>
        `;
    }
}

export default Juntada;
