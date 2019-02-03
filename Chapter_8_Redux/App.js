import AddColorForm from './elements/AddColorForm';
import ColorList from './elements/ColorList';

const App = ({ store }) => 
        <div className="app">
            <AddColorForm store={store} />
            <ColorList store={store} />
        </div>

export default App