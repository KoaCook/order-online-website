'use client';

import ChooseMethodModal from './ChooseMethodModal';
import useLayoutStore from '@/stores/useLayoutStore';

const ChooseMethod = () => {
    const isOpenMethodModal = useLayoutStore(state => state.isOpenMethodModal);

    return <>{isOpenMethodModal && <ChooseMethodModal />}</>;
};

export default ChooseMethod;
