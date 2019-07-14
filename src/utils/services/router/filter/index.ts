import { State } from 'router5';

// import { axios } from 'api/axios';
// import { authApiPrefix } from 'utils/config';

export const authenticate = (): any => async (
    _nextState: State,
    _prevState: State,
    done: any
): Promise<any> => {
    // const res = await axios.get(`${authApiPrefix}/access`);

    // if (res.status === 200) return true;

    return done({ redirect: { name: 'login' } });
};
