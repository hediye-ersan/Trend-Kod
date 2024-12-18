import { setRoles, setFetchState } from './actions/action';
import axios from 'axios';

export const fetchRoles = () => {
    return async (dispatch) => {
        dispatch(setFetchState('FETCHING'));
        try {
            const response = await axios.get('https://workintech-fe-ecommerce.onrender.com/roles');
            const roles = response.data || []; // API'den veri yoksa boş dizi
            const defaultRole = { role_id: 'customer' };

            // Eğer "customer" rolü yoksa ekle
            if (!roles.some((role) => role.role_id === 'customer')) {
                roles.push(defaultRole);
            }

            dispatch(setRoles(roles));
            dispatch(setFetchState('FETCHED'));
        } catch (error) {
            console.error('Failed to fetch roles:', error);
            dispatch(setFetchState('FAILED'));
        }
    };
};

export const fetchRolesIfNeeded = () => {
    return async (dispatch, getState) => {
        const { roles } = getState().user;
        if (roles && roles.length > 0) {
            // Rolleri yükleme gerekmez
            console.log('Roles already fetched. Skipping API call.');
            return;
        }

        // Rolleri yüklemek için fetchRoles fonksiyonunu çağır
        return dispatch(fetchRoles());
    };
};
