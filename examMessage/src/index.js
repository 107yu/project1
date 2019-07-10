import dva from 'dva';
//引入样式
import './index.css';

//引入antd样式
import 'antd/dist/antd.css';
import {createBrowserHistory as createHistory} from "history"

// 1. Initialize
const app = dva({
    history:createHistory(),

});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/login').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
