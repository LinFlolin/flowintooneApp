//superbase client 

import AsyncStorage from '@react-native-async-storage/async-storage';
import{createClient} from '@supabase/supabase-js'

const superbaseUrl = process.env.EXPO_PUBLIC_SUPERBASE_URL;
const superbaseAnonKey = process.env.EXPO_PUBLIC_SUPERBASE_ANON_KEY;

if(!superbaseUrl || !superbaseAnonKey){
    throw new Error('Missin superbase enviroment variables');
}

export const superbase = createClient(superbaseUrl,superbaseAnonKey , {
    auth:{
        storage: AsyncStorage,
        autoRefreshToken :true,
        persistSession:true,
        detectSessionInUrl:false,
    }
}) ;

