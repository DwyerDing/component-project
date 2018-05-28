import 'normalize.css';
import 'animate.css';
import './override/antd.less';
import './basic.scss';
import './layout.scss';
import './preloader.scss';
import './app.scss';
import './icon.scss';

// import all svg icons
const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('../../assets/icons', true, /\.svg$/);
requireAll(req);
