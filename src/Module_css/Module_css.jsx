
/*
.module.css

Another way of adding styles to your application is to use CSS Modules.
CSS Modules are convenient for components that are placed in separate files.

The CSS inside a module is available only for the component that imported it, 
and you do not have to worry about name conflicts.

create css file by ext.  :  .module.css
import module.css        :  import 'abc' from './mycss.module.css'


use : <h1 class={abc.bar}>hello</h1>

*/

import React from 'react';

// import './mycss.ccs'  // simple css load
 
import abc from './mycss1.module.css';  // module css load
import xyz from './mycss2.module.css';

function Module_css() {
  return (
    <div>
        <h1 className={abc.bar}>Module css 1</h1>

        <h1 className={xyz.bar}>Module css 2</h1>
    </div>
  )
}

export default Module_css