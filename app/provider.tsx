"use client"
import { auth, db } from '@/configs/firebaseConfig';
import { AuthContext } from '@/context/AuthContext';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
interface AuthContextType {
    user: User | null;
}

function Provider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUser(user);

                // Save to Firestore if not exists
                const userRef = doc(db, "users", user.uid);
                const userSnap = await getDoc(userRef);

                if (!userSnap.exists()) {
                    await setDoc(userRef, {
                        uid: user.uid,
                        email: user.email,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                        createdAt: new Date(),
                        credits: 20,
                    });
                }
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <NextThemesProvider {...props}>
            <AuthContext.Provider value={{ user }}>
                <div>
                    {children}
                </div>
            </AuthContext.Provider>
        </NextThemesProvider>
    )
}

// Custom hook to use auth
export const useAuthContext = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};

export default Provider

