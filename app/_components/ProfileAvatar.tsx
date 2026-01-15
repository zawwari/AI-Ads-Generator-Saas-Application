"use client"
import { auth } from '@/configs/firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { useAuthContext } from '../provider';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

type ProfileAvatarProps = {
    size: 'small' | 'medium' | 'large';
};

function ProfileAvatar({ size }: ProfileAvatarProps) {

    const user = useAuthContext();
    const router = useRouter();
    const onButtonPress = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            router.replace('/')
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div>
            <Popover >
                <PopoverTrigger>
                    {user?.user?.photoURL && <img src={user?.user?.photoURL} alt='profile' className={`${size === 'small' ? 'w-[35px] h-[35px]' : size === 'medium' ? 'w-[40px] h-[40px]' : 'w-[50px] h-[50px]'} rounded-full leading-0  border-[2px] border-primary`} />}
                </PopoverTrigger>
                <PopoverContent className='w-full mx-w-lg cursor-pointer'>
                    <h2 onClick={onButtonPress}>Logout</h2>

                </PopoverContent>
            </Popover>
        </div>
    )
}

export default ProfileAvatar