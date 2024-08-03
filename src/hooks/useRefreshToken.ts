import { useUserStore } from '@/store/userStore';
import { requestInstance } from '@/config/requestInstance';

const useRefreshToken = (type: 'users' | 'merchants') => {
    const setAuth = useUserStore((state) => state.setAuth);

    const refresh = async () => {
        const response = await requestInstance.get(`/auth/${type}/refresh`, {
            withCredentials: true
        });
        setAuth((prev:any )=> {
            // console.log(JSON.stringify(prev));
            // console.log(response.data.accessToken);
            return { ...prev, accessToken: response.data.accessToken }
        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;

