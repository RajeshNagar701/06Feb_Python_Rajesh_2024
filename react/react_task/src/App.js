import Contact from "./Basic_layout/Contact";
import Home from "./Basic_layout/Home";
import Class_compo from "./Component/Class_compo";
import Func_compo from "./Component/Func_compo";
import Basic_css from "./CSS/Basic_css";
import Basic_css1 from "./CSS/Basic_css1";
import Jsx from "./JSX/Jsx";
import Module_css from "./Module_css/Module_css";
import Mycomp from "./Mycomp";
import Product from "./Props/Product";
import App_Routing from "./Routing/App_Routing";
import Class_state from "./State/Class_state/Class_state";

function App() {
  return (
    <div className="App">
        {
          
          //<Mycomp/>

          // Component & Type

          //<Func_compo/>
          //<Class_compo/>

          // basic layout 
          
          // Routing
          //<App_Routing/>

          // JSX
          //<Jsx/>

          //css
          //<Basic_css/>
          //<Basic_css1/>
          
          //<Module_css/>
        
          // Props
          //<Product/>


          //state
          <Class_state/>
        }
        
    </div>
  );
}

export default App;
