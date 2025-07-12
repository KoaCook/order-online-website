'use client';

import useBreakpoint from '@/hooks/useBreakpoint';
import ChooseMethodModal from './ChooseMethodModal';
import useLayoutStore from '@/stores/useLayoutStore';

const ChooseMethod = () => {
    const { width } = useBreakpoint();
    const isOpenMethodModal = useLayoutStore(state => state.isOpenMethodModal);

    return <>{isOpenMethodModal && width > 600 && <ChooseMethodModal />}</>;
};

export default ChooseMethod;
