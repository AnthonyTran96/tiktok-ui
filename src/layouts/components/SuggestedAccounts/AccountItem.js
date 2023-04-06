// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (attrs) => (
        <div tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <div className={cx('preview')}>
                    <AccountPreview />
                </div>
            </PopperWrapper>
        </div>
    );

    return (
        <div>
            <HeadlessTippy offset={[-20, 0]} interactive delay={[800, 0]} render={renderPreview} placement="bottom">
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://th.bing.com/th/id/R.55df986d1c88ce484a723a2456ba021b?rik=%2b0cUKuNQxQCV8A&riu=http%3a%2f%2ffc09.deviantart.net%2ffs38%2fi%2f2008%2f336%2fd%2f8%2fMillennium_Puzzle_by_acer_v.jpg&ehk=Nx4s2SKlJETJpbX19zxAq3gNPBqlBCeLPhvtg3QFNzQ%3d&risl=&pid=ImgRaw&r=0"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>quocnguyenphu</strong>
                            <FontAwesomeIcon icon={faCircleCheck} className={cx('check')} />
                        </p>
                        <p className={cx('name')}>Quốc Nguyễn Phú</p>
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
