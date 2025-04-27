'use client'
import { Button } from '@/components/ui/button'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'

export default function Logout() {

    const {data : session} = useSession()

  return <>
    
    <Button onClick={() => {
        signOut({
            callbackUrl : "/"
        })
    }}>Logout</Button> 
    {/* {session?.user.firstName} */}
  
  </>
}
