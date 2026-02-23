import { useEffect, useState } from "react";

export interface User {
    id?: string | number;
    name?: string;
    email?: string;
    role?: string;
}

const useUser = () : [User | null, boolean] => {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUser = ()=> {
            try {
                const userDate = localStorage.getItem("user");
                const currentUser: User | null = userDate ? JSON.parse(userDate) : null;

                if(currentUser && currentUser.role) {
                    setUser(currentUser);
                }
            } catch (error) {
                console.error("Error assessing localStorage:", error);
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                setUser(null);
            }finally{
                setLoading(false)
            }
        };
        fetchUser();
    }, [])

    return [user, loading];
};

export default useUser;