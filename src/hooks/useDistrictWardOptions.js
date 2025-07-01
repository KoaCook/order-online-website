/**
 * useDistrictWardOptions
 *
 * Provides select options for districts and wards in Ho Chi Minh City.
 *
 * @returns {{
 *   districts: Array<{ value: string, label: string, wards: Array }>,
 *   getWards: (districtValue: string) => Array<{ value: string, label: string }>
 * }}
 */

import { useMemo } from 'react';
import hcmcAddress from '@/constants/hcmcAddress.json';

/**
 * Hook to get district and ward options for HCMC.
 */
function useDistrictWardOptions() {
    // District options
    const districts = useMemo(
        () =>
            hcmcAddress.district.map(d => ({
                value: d.name,
                label: `${d.pre} ${d.name}`,
                wards: d.ward,
            })),
        []
    );

    /**
     * Given a district value, return ward options.
     * @param {string} districtValue
     * @returns {Array<{ value: string, label: string }>}
     */
    const getWards = districtValue => {
        const district = districts.find(d => d.value === districtValue);
        if (!district) return [];
        return district.wards.map(w => ({
            value: w.name,
            label: `${w.pre} ${w.name}`,
        }));
    };

    return { districts, getWards };
}

export default useDistrictWardOptions;
