'use client';

import ChooseMethodModal from './ChooseMethodModal';
import useLayoutStore from '@/stores/useLayoutStore';

const ChooseMethod = () => {
    const appWidth = window.innerWidth;
    const isOpenMethodModal = useLayoutStore(state => state.isOpenMethodModal);

    return <>{isOpenMethodModal && appWidth > 600 && <ChooseMethodModal />}</>;
};

export default ChooseMethod;
