import React from 'react'
import Cookie from '@components/footer/compliance/CookiePolicy'
export const metadata = {
  robots: "noindex, nofollow",
};
const page = () => {
  return (
    <div>
        <Cookie/>
    </div>
  )
}

export default page