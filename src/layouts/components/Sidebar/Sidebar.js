import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    CameraIcon,
    CameraActiveIcon,
} from '~/components/icons';
import SuggestedAccounts from '../SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.root} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<CameraIcon />}
                    activeIcon={<CameraActiveIcon />}
                />
            </Menu>
            <SuggestedAccounts lable="Suggested Accounts" />
            <SuggestedAccounts lable="Following Accounts" />
        </aside>
    );
}

export default Sidebar;
